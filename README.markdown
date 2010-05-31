jQuery Longclick Event
======================
*Press & hold mouse/touch "long click" special event for [jQuery 1.4.x][jquery]

Method:
-------
### `.longclick( [ duration ], handler )` to subscribe to event
### `.longclick()` to trigger the event
* This method is a shortcut for `.bind("longclick", handler)` in the first variation
and `.trigger("longclick")` in the second.
* If supplied, custom *duration* (in milliseconds) is used for target element(s).
* Returns *jQuery*.

Event:
------
### `"longclick"`
* Works with standard [`live`][jquery-live], [`bind`][jquery-bind], [`unbind`][jquery-unbind] and [`trigger`][jquery-trigger] event methods as one would expect.

Configuration:
--------------
* `jQuery.longclick.duration` - for how long mouse button must be pressed down (or touched) stationery for the event to fire. Defaults to 500 (milliseconds).

Fair warning:
-------------
**Under intensive development**. v0.x works just fine, but is very "fluid" API-wise.
Till v1.0.

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
