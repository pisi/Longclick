jQuery Longclick Event
======================

*Press & hold mouse button "long click" special event for [jQuery 1.4.x][jquery]*

The event is triggered when the mouse button stays pressed for half a second (configurable) while the pointer is stationery.

**WARNING! UNDER INTENSIVE DEVELOPMENT THUS NOT QUITE STABLE YET**

`longclick` method:
-------------------
    .longclick( [ duration ], [ handler ] )
    .longclick()

This method is a shortcut for `.bind('longclick', handler)` in the first variation,
and `.trigger('longclick')` in the second.

If supplied, custom duration (in milliseconds) is used for target element(s).

Returns *jQuery*.

`longclick` event:
------------------

Works with standard [`live`][jquery-live], [`bind`][jquery-bind], [`unbind`][jquery-unbind] and [`trigger`][jquery-trigger] event methods as usual.

Configuration:
--------------

* `jQuery.longclick.`**`duration`** - for how long (in milliseconds) mouse button must be pressed for `longclick` event to be fired. Defaults to 500.

Requirements:
-------------

* [jQuery 1.4.x][jquery]

License:
--------

Free for use in all personal or commercial projects under both [MIT][license-mit] and [GPL][license-gpl] licenses.

---
Copyright (c) 2010 [Petr Vostřel][pisi]
» Check out my other jQuery plugin [Reel][reel] for 360° image projection

[license-mit]: /pisi/Longclick/raw/master/MIT-LICENSE.txt
[license-gpl]: /pisi/Longclick/raw/master/GPL-LICENSE.txt
[jquery]: http://www.jquery.com/
[jquery-live]: http://api.jquery.com/live/
[jquery-bind]: http://api.jquery.com/bind/
[jquery-unbind]: http://api.jquery.com/unbind/
[jquery-trigger]: http://api.jquery.com/trigger/
[pisi]: http://petr.vostrel.cz/
[reel]: http://jquery.vostrel.cz/reel
