jQuery Longclick
================

*Press & hold mouse button special event for [jQuery 1.4.x][jquery]*

The event is triggered when the mouse button stays pressed for half a second (configurable) while the pointer is stationery.

`longclick` method:
-------------------
    .longclick( handler(eventObject) )
    .longclick()

This method is a shortcut for `.bind('longclick', handler)` in the first variation,
and `.trigger('longclick')` in the second.

Returns *jQuery*.

`longclick` event:
------------------

Works with standard `bind`, `unbind`, `trigger` and `live` event methods as usual.

Configuration:
--------------

* *`jQuery.longclick.delay`* (default 500) - duration of mouse button press (in milliseconds) after which the `longclick` event occurs and is triggered.

Requirements:
-------------

* [jQuery 1.4.x][jquery]

License:
--------

It's free for use in all personal or commercial projects under both 
[MIT][license-mit] and [GPL][license-gpl] licenses.

---
Copyright (c) 2010 [Petr Vostřel][pisi]
» Check out my other jQuery plugin [Reel][reel] for 360° image projection

[license-mit]: http://github.com/pisi/Reel/blob/animation/MIT-LICENSE.txt
[license-gpl]: http://github.com/pisi/Reel/blob/animation/GPL-LICENSE.txt
[jquery]: http://www.jquery.com/
[pisi]: http://petr.vostrel.cz/
[reel]: http://jquery.vostrel.cz/reel
