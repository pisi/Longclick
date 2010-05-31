/*
 Longclick Event
 Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 Version: 0.2
 Updated: 2010-05-31
*/
(function(a){function j(b){function d(){a(g).data(f,true);b.type=e;jQuery.event.handle.apply(g,k)}var g=this,k=arguments;a(this).data(f,false).data(h,setTimeout(d,a(this).data(i)||a.longclick.duration))}function l(){clearTimeout(a(this).data(h))}function m(){if(a(this).data(f))return false}a.fn.longclick=function(){var b=[].splice.call(arguments,0),d=b.pop();b=b.pop();b=a(this).data(i,b||null);return d?b.bind(e,d):b.trigger(e)};a.longclick={duration:500};a.event.special.longclick={setup:function(){a(this).bind(n,
j).bind(o+" "+p,l).bind(q,m)},teardown:function(){a(this).unbind(c)}};var e="longclick",c="."+e,n="mousedown"+c,q="click"+c,o="mousemove"+c,p="mouseup"+c,i="duration"+c,h="timer"+c,f="fired"+c})(jQuery);
