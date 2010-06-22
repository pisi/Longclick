Changelog
=========

0.3.3
-----
* Fixed GH-1 issue with dud "mouseout" binding.

0.3.2
-----
* Support for iPhone/iPad/iPod touch events has been added and confirmed using the iPhone Simulator.

0.3.1
-----
* Long click is dropped on "contextmenu" event to prevent right button from long clicking.

0.3
---
* Added `click` proxy. Ordinary built-in `click` can now be used to establish long click event simply by supplying a duration.
* The "mouseout" event is newly bound as one of annul events.
* A demonstration example has been added in `example.html`.
* Improved "click" event prevention in case of long click.
* (Un)binding and triggering tests added to test suite.
* Documentation comments & README improvements.

0.2
---
* `longclick` method now accepts an optional duration argument which overrides the default duration.
* `jQuery.longclick.delay` has been renamed to `jQuery.longclick.duration`.
* Invalid flag store key fixed.
* Documentation comments & README updates.
* Added QUnit test suite in `test/`

0.1
---
* Initial release.
