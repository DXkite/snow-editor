/*! dxui by dxkite 2016-12-16 */
!function(a){a.moveable=function(a,b){var c=b||a,d=a;d.style.position="fixed";var e=function(a){a.preventDefault();var b="mousemove",e="mouseup";a.touches&&(a=a.touches[0],b="touchmove",e="touchend");var f=c.getBoundingClientRect(),g=a.clientX-f.left,h=a.clientY-f.top,i=document;d.setCapture?d.setCapture():window.captureEvents&&window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);var j=function(a){a.touches&&(a=a.touches[0]);var b=a.pageX||a.clientX+document.body.scrollLeft-document.body.clientLeft,c=a.pageY||a.clientY+document.body.scrollTop-document.body.clientTop,e=b-g,f=c-h;d.style.left=e+"px",d.style.top=f+"px"},k=function(a){d.releaseCapture?d.releaseCapture():window.releaseEvents&&window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP),i.removeEventListener(b,j),i.removeEventListener(e,k)};i.addEventListener(b,j),i.addEventListener(e,k)};return c.addEventListener("mousedown",e),c.addEventListener("touchstart",e),d}}(dxui);