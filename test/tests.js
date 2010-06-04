/**
 * jQuery Longclick Tests
 */
(function($){

  var
    $element

  module('', {
    setup: function setup(){
      $element= $('#element');
      event_fired= false;
    },
    teardown: function teardown(){
      $element.unbind('longclick');
      $('#live_sample').remove();
    }
  })

  test( 'Longclick event, method and configuration exists in the jQuery', function(){
    expect(5);

    /* Assert longclick event existence */
    equal( typeof $.event.special.longclick, 'object', 'Event');
    equal( typeof $.event.special.longclick.setup, 'function', 'Event setup');
    equal( typeof $.event.special.longclick.teardown, 'function', 'Event teardown');

    /* Asser longclick method and namespace */
    equal( typeof $.fn.longclick, 'function', '`longclick` method');
    equal( typeof $.longclick, 'object', 'Configuration');

  });
  test( 'Fire event by `longclick` method', function(){
    expect(1);

    /* Bind */
    $element.longclick(function record(){
      ok( this, '`longclick` event had fired')
    });

    /* Fire */
    $element.longclick();

  });
  test( 'Bind and fire event by `bind` and `trigger` methods', function(){
    expect(2);

    /* Bind */
    $element.bind('longclick', function record(){
      ok( this, '`longclick` event had fired')
    });
    ok( this, '`longclick` event has been bound')

    /* Fire */
    $element.trigger('longclick');

  })
  test( 'Unbind event by `unbind` method', function(){
    expect(1);

    /* Bind & unbind */
    $element.bind('longclick', function record(){
      ok( false, '`longclick` should not have had fired')
    }).unbind('longclick');

    /* Attempt to fire */
    $element.trigger('longclick');
    ok( this, '`Event unbound`');

  })
  test( 'Bind event by `live` method', function(){
    expect(1);

    /* Bind */
    $('#live_sample').live('longclick', function finish(){
      ok( this, 'Event successfully triggered');
    });

    /* Create element on the fly */
    $('<div id="live_sample"/>').appendTo($('body'));

    /* Trigger longclick event */
    $('#live_sample').longclick();

  });
  asyncTest( 'Fire after half a second by default', function(){
    expect(3);

    /* Mark start time */
    var
      started= Date.now()

    /* Assert configuration option */
    equal( typeof $.longclick.duration, 'number', 'Duration configuration');
    equal( $.longclick.duration, 500, 'Default duration value');

    /* Bind */
    $element.longclick(function finish(){
      ok( Math.abs(Date.now() - started - 500) < 50, 'In time (± 10 %)');
      /* The 10% tolerance is given because of an uncertainity based on client's CPU usage at the time */
      start();
    });

    /* Simulate long (endless) click */
    $element.trigger('mousedown');

  });
  asyncTest( 'Longclick `longclick` method accepts optional custom duration', function(){
    expect(1);

    /* Mark start time */
    var
      started= Date.now()

    /* Bind */
    $element.longclick(1000, function finish(){
      ok( Math.abs(Date.now() - started - 1000) < 50, 'In time (± 10 %)');
      /* The 10% tolerance is given because of an uncertainity based on client's CPU usage at the time */
      start();
    });

    /*
    Click the mouse button and hold until event is fired
    */
    $element.trigger('mousedown');
  });
  asyncTest( 'Longclick is dropped when mouse moves', function(){
    expect(1);

    /* Bind */
    $element.longclick(function finish(){ event_fired= true });

    /* Simulate long click interaction */
    $element.trigger('mousedown');
    setTimeout(function(){ $element.trigger('mousemove') }, 100);

    /* Check if has bee fired after a while */
    setTimeout(function(){
      equal( event_fired, false, 'Event had been dropped')
      start();
    }, 1000);

  });
  asyncTest( 'Longclick is dropped when mouse button is depressed', function(){
    expect(1);

    /* Bind */
    $element.longclick(function finish(){ event_fired= true });

    /* Simulate long click interaction */
    $element.trigger('mousedown');
    setTimeout(function(){ $element.trigger('mouseup') }, 100);

    /* Check if hasn't been fired after a while */
    setTimeout(function(){
      equal( event_fired, false, 'Event had been dropped')
      start();
    }, 1000);
  });
  asyncTest( 'Longclick is dropped on contextmenu event (right click)', function(){
    expect(1);

    /* Bind */
    $element.longclick(function finish(){ event_fired= true });

    /* Simulate long click interaction */
    $element.trigger('mousedown');
    setTimeout(function(){ $element.trigger('contextmenu') }, 100);

    /* Check if hasn't been fired after a while */
    setTimeout(function(){
      equal( event_fired, false, 'Event had been dropped')
      start();
    }, 1000);
  });
  asyncTest( 'Bind event by `click` method and supplying the duration', function(){
    expect(2);

    /* Bind
       - long click */
    $element.click(600, function record(){
      ok( this, '`longclick` event had fired')
      start();
    });

    /* - normal click */
    $element.click(function finish(){
      ok( this, 'Normal `click` still works')
    });

    /* Try normal click */
    $element.click();

    /* Simulate long click interaction */
    $element.trigger('mousedown');

  });
  asyncTest( 'Bind event by `longclick` method', function(){
    expect(2);

    /* Bind
       - using default duration */
    $element.longclick(function record(){
      ok( this, '`longclick` event had fired')
    });

    /* - using custom duration */
    $element.longclick(700, function record(){
      ok( this, 'Custom duration `longclick` event had fired')
      start();
    });

    /* Simulate long click interaction */
    $element.trigger('mousedown');

  });

})(jQuery);