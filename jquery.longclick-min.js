/*
 Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 Version: 0.1
 Updated: 2010-05-31
*/
(function(a){function h(c){function i(){a(f).data(e,true);c.type=d;jQuery.event.handle.apply(f,j)}var f=this,j=arguments;a(this).data(e,false).data(g,setTimeout(i,a.longclick.delay))}function k(){clearTimeout(a(this).data(g))}function l(){if(a(this).data(e))return false}a.fn.longclick=function(c){return c?a(this).bind(d,c):a(this).trigger(d)};a.longclick={delay:500};a.event.special.longclick={setup:function(){a(this).bind(m,h).bind(n+" "+o,k).bind(p,l)},teardown:function(){a(this).unbind(b)}};var d=
"longclick",b="."+d,m="mousedown"+b,p="click"+b,n="mousemove"+b,o="mouseup"+b,g="timer"+b,e="fired"+b})(jQuery);
