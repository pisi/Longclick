jQuery *Long Click* Event
=======================
*Press & hold mouse/touch "long click" special event for [jQuery 1.4.x][jquery]*

Using *long click*:
----------------------

### `.click( duration, handler )`
* Simply supply `duration` to the well-known `.click` method and you have a *long click*.
* This method is a shortcut for `.bind("longclick", handler)`.
* Returns *jQuery*.

### or `.longclick( [ duration ], handler )`
* This method is a shortcut for `.click(duration, handler)`.
* If supplied, custom `duration` is used for target element(s).
* Returns *jQuery*.

The parameter:
----------

### `duration`
* For how long (in milliseconds) mouse button must be pressed down (or touched) stationery to qualify as a *long click*.
* Default value of **500** is stored in:

    `jQuery.longclick.duration`

The event:
----------
### `"longclick"`
* Works with standard [`live`][jquery-live], [`bind`][jquery-bind], [`unbind`][jquery-unbind] and [`trigger`][jquery-trigger] event methods as one would expect.
* To manually trigger *long click* you use:

    `.longclick()`
    * This method is a shortcut for `.trigger("longclick")`.
    * Returns *jQuery*.

Fair warning:
-------------
**Under loving development**. v0.x works just fine, but is very "fluid" API-wise.
Till v1.0.

Requirements:
-------------
* [jQuery 1.4.x][jquery].

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
