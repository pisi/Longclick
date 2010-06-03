/*
 Longclick Event
 Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 Version: 0.3
 Updated: 2010-06-03
*/
(function(a){function j(b){function d(){a(e).data(g,true);b.type=f;jQuery.event.handle.apply(e,k)}var e=this,k=arguments;a(this).data(g,false).data(i,setTimeout(d,a(this).data(h)||a.longclick.duration))}function l(){clearTimeout(a(this).data(i))}function m(b){if(a(this).data(g))return b.stopImmediatePropagation()||false}var n=a.fn.click;a.fn.click=function(b,d){if(!d)return n.apply(this,arguments);return a(this).data(h,b||null).bind(f,d)};a.fn.longclick=function(){var b=[].splice.call(arguments,0),
d=b.pop();b=b.pop();var e=a(this).data(h,b||null);return d?e.click(b,d):e.trigger(f)};a.longclick={duration:500};a.event.special.longclick={setup:function(){a(this).bind(o,j).bind([p,q,r].join(" "),l).bind(s,m)},teardown:function(){a(this).unbind(c)}};var f="longclick",c="."+f,o="mousedown"+c,s="click"+c,p="mousemove"+c,q="mouseup"+c,r="mouseout"+c,h="duration"+c,i="timer"+c,g="fired"+c})(jQuery);
