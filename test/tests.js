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
    }
  })

  test( 'Longclick event, method and configuration exists in the jQuery', function(){
    equal( typeof $.event.special.longclick, 'object', 'Event');
    equal( typeof $.event.special.longclick.setup, 'function', 'Event setup');
    equal( typeof $.event.special.longclick.teardown, 'function', 'Event teardown');
    equal( typeof $.fn.longclick, 'function', '`longclick` method');
    equal( typeof $.longclick, 'object', 'Configuration');
  });
  asyncTest( 'Longclick is fired after half a second by default', function(){
    var
      started= Date.now()
    equal( typeof $.longclick.duration, 'number', 'Duration configuration');
    equal( $.longclick.duration, 500, 'Default duration value');

    $element.longclick(function finish(){
      ok( Math.abs(Date.now() - started - 500) < 10, 'Within ± 10 ms');
      start();
    });

    /*
    Click the mouse button and hold until event is fired
    */
    $element.trigger('mousedown');
  });
  asyncTest( 'Longclick `longclick` method accepts optional custom duration', function(){
    var
      started= Date.now()

    $element.longclick(1000, function finish(){
      ok( Math.abs(Date.now() - started - 1000) < 10, 'Within ± 10 ms');
      start();
    });

    /*
    Click the mouse button and hold until event is fired
    */
    $element.trigger('mousedown');
  });
  asyncTest( 'Longclick is dropped when mouse moves', function(){
    $element.longclick(function finish(){
      event_fired= true;
    });

    /*
    Click the mouse button and release after a little while
    */
    $element.trigger('mousedown');
    setTimeout(function(){ $element.trigger('mousemove') }, 100);
    /*
    Check if has bee fired after a while
    */
    setTimeout(function(){
      equal( event_fired, false, 'Event had been dropped')
      start();
    }, 1000);
  });
  asyncTest( 'Longclick is dropped when mouse button is depressed', function(){
    $element.longclick(function finish(){
      event_fired= true;
    });

    /*
    Click the mouse button and release after a little while
    */
    $element.trigger('mousedown');
    setTimeout(function(){ $element.trigger('mouseup') }, 100);
    /*
    Check if has bee fired after a while
    */
    setTimeout(function(){
      equal( event_fired, false, 'Event had been dropped')
      start();
    }, 1000);
  });

})(jQuery);