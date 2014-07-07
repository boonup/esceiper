function on( element, type, handler ) {
  if (element.addEventListener) element.addEventListener(type, handler, false);
  else if (element.attachEvent) element.attachEvent('on' + type, handler);
}
