/**
 * jQuery Longclick Event
 * ======================
 * Press & hold mouse button "long click" special event for jQuery 1.4.x
 *
 * @license Longclick Event
 * Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Version: 0.2
 * Updated: 2010-05-31
 */
(function($){

  /*
  `.click( duration, handler )` to subscribe to event

  * Simply supply `duration` to the well-known `.click` method and you have a *long click*.
  * This method is a shortcut for `.bind("longclick", handler)`.
  * Returns *jQuery*.
  */
  var
    ordinary_click= $.fn.click

  $.fn.click= function click(duration, handler){
    /* Shortcircuit ordinary click calls */
    if (!handler) return ordinary_click.apply(this, arguments)
    /* Bind long click */
    return $(this).data(_duration_, duration || null).bind(type, handler)
  }

  /*
  `.longclick( [ duration ], handler )` to subscribe to event
  `.longclick()` to trigger the event

  * This method is a shortcut for `.click(duration, handler)`. in the first variation and `.trigger("longclick")` in the second.
  * If supplied, custom `duration` is used for target element(s).
  * Returns *jQuery*.
  */
  $.fn.longclick= function longclick(){
    var
      args= [].splice.call(arguments, 0),
      handler= args.pop(),
      duration= args.pop(),
      $this= $(this).data(_duration_, duration || null)
    return handler ? $this.click(duration, handler) : $this.trigger(type)
  }

  /*
  Configuration
  */
  $.longclick= {
    /*
    For how long mouse button must be pressed down (or touched) stationery for the event to fire.
    Defaults to 500 (milliseconds).
    Example: `jQuery.longclick.duration= 1000` sets 1 second duration
    */
    duration: 500
  }

  /*
  Bindings
  */
  $.event.special.longclick= {
    setup: function(data, namespaces){
      $(this)
      .bind(_mousedown_, schedule)
      .bind(_mousemove_ + ' ' + _mouseup_, annul)
      .bind(_click_, click)
    },
    teardown: function(namespaces){
      $(this).unbind(namespace)
    }
  }

  /*
  Handlers
  */
  function schedule(event){
    /* Catch in closure the `this` reference and `arguments` for later */
    var
      element= this,
      args= arguments
    /* Flag as "not fired" and schedule the trigger */
    $(this)
    .data(_fired_, false)
    .data(_timer_, setTimeout(scheduled, $(this).data(_duration_) || $.longclick.duration))

    function scheduled(){
      /* Flag as "fired" and rejoin the default event flow */
      $(element).data(_fired_, true)
      event.type= type
      jQuery.event.handle.apply(element, args)
    }
  }
  function annul(event){
    /* Annul the scheduled trigger */
    clearTimeout($(this).data(_timer_))
  }
  function click(event){
    /* Prevent `click` event to be fired after button release once `longclick` was fired */
    if ($(this).data(_fired_)) return event.stopImmediatePropagation() || false
  }

  /*
  Frequent primitives and shortcuts
  */
  var
    type= 'longclick',
    namespace= '.' + type,

    /* Event strings */
    _mousedown_= 'mousedown'+namespace, _click_= 'click'+namespace,
    _mousemove_= 'mousemove'+namespace, _mouseup_= 'mouseup'+namespace,

    /* Storage keys */
    _duration_= 'duration'+namespace, _timer_= 'timer'+namespace, _fired_= 'fired'+namespace

})(jQuery);