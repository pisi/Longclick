/**
 * jQuery Longclick
 * ================
 * Press & hold mouse button special event for jQuery 1.4.x
 *
 * @license Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Version: 0.1
 * Updated: 2010-05-31
 */

(function($){

  /*
  .longclick( handler(eventObject) )
  .longclick()

  This method is a shortcut for .bind('longclick', handler) in the first variation,
  and .trigger('longclick') in the second.

  returns jQuery
  */
  $.fn.longclick= function longclick(handler){
    return handler ? $(this).bind(type, handler) : $(this).trigger(type)
  }

  /*
  Configuration
  */
  $.longclick= {
    /*
    Duration of mouse button press (in milliseconds) after which `longclick` event occours.
    Example: `jQuery.longclick.delay= 1000` sets the delay to one second
    */
    delay: 500
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
      that= this,
      args= arguments
    /* Flag as "not triggered" and schedule the trigger */
    $(this)
    .data(_triggered_, false)
    .data(_timer_, setTimeout(scheduled, $.longclick.delay))

    function scheduled(){
      /* Flag as "triggered" and rejoin the default event flow */
      $(that).data(_triggered_, true)
      event.type= type
      jQuery.event.handle.apply(that, args)
    }
  }
  function annul(event){
    /* Annul the scheduled triggering */
    clearTimeout($(this).data(_timer_))
  }
  function click(event){
    /* Prevent `click` event to be fired after button release once `longclick` was fired */
    if ($(this).data(_triggered_)) return false
  }

  /*
  Frequent primitives and shortcuts
  */
  var
    type= 'longclick',
    namespace= '.' + type,
    self= $.event.special[type],

    /* Event strings */
    _mousedown_= 'mousedown'+namespace, _click_= 'click'+namespace,
    _mousemove_= 'mousemove'+namespace, _mouseup_= 'mouseup'+namespace,
    
    /* Storage keys */
    _timer_= 'timer'+namespace,
    _triggered_= 'fired'+namespace

})(jQuery);