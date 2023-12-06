var yousite = 'm.tvn.cc';
var url = window.document.location.pathname;
var url = '' + url;
var site = 'https://' + yousite + url;
var system = {
  win: false,
  mac: false,
  xll: false
};
var p = navigator.platform;
system.win = p.indexOf('Win') == 0;
system.mac = p.indexOf('Mac') == 0;
system.x11 = p == 'x11' || p.indexOf('Linux') == 0;
if (system.win || system.mac || system.xll) {
} else {
  window.location.href = site;
}
