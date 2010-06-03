jQuery *Long Click* Event
=========================
*Press & hold mouse/touch "long click" special event for [jQuery 1.4.x][jquery]*.
Inspired by similar events on touch-sensitive devices.


Using *Long Click*:
-------------------

### `.click( duration, handler )`
* Simply supply `duration` to the well-known [`.click`][jquery-click] method and you have a *long click*.
* This method is a shortcut for `.bind("longclick", handler)`.
* Returns *[jQuery][jquery-jquery]*.

### or `.longclick( [ duration ], [ handler ] )`
* If supplied, optional custom `duration` is used for target element(s).
* This method is a shortcut for `.click(duration, handler)` when at least `handler` is supplied and for `.trigger("longclick")` if called without arguments.
* Returns *[jQuery][jquery-jquery]*.


Parameter `duration`:
---------------------

* For how long (in milliseconds) mouse button must be pressed down (or touched) stationery to qualify as a *long click*.
* False value results in using the configured default.
* Default `duration` is **500** and is stored in `jQuery.longclick.duration` variable.


Event `"longclick"`:
--------------------

* Works with standard [`live`][jquery-live], [`bind`][jquery-bind], [`unbind`][jquery-unbind] and [`trigger`][jquery-trigger] event methods as one would expect.


Requirements:
-------------

1. Mighty [jQuery 1.4.x][jquery]:

    `<script src='http://code.jquery.com/jquery-latest.min.js' type='text/javascript'></script>`

2. and **[`jquery.longclick-min.js` (~1 kB)][download-min]**:

    `<script src='jquery.longclick-min.js' type='text/javascript'></script>`


License:
--------

Free for use in all personal or commercial projects under both [MIT][license-mit] and [GPL][license-gpl] licenses.


Fair Warning:
-------------

**Under intensive loving development**. v0.x works just fine, but is very "fluid" API-wise.
Till v1.0.

---
Copyright (c) 2010 [Petr Vostřel][pisi]
» Check out my other jQuery plugin [Reel][reel] for 360° image projection

[license-mit]: /pisi/Longclick/raw/master/MIT-LICENSE.txt
[license-gpl]: /pisi/Longclick/raw/master/GPL-LICENSE.txt
[jquery]: http://www.jquery.com/
[jquery-jquery]: http://docs.jquery.com/Types#jQuery
[jquery-live]: http://api.jquery.com/live/
[jquery-bind]: http://api.jquery.com/bind/
[jquery-unbind]: http://api.jquery.com/unbind/
[jquery-trigger]: http://api.jquery.com/trigger/
[jquery-click]: http://api.jquery.com/click/
[pisi]: http://petr.vostrel.cz/
[reel]: http://jquery.vostrel.cz/reel
[download-min]: http://github.com/pisi/Longclick/raw/master/jquery.longclick-min.js