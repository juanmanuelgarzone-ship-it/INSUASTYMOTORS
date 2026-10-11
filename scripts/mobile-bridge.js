/* Este archivo solo se usa dentro de la APK Capacitor. */
(function () {
  if (!window.Capacitor || !window.Capacitor.isNativePlatform || !window.Capacitor.isNativePlatform()) return;
  window.whatsapp = function (message) {
    var url = 'https://wa.me/573053547216?text=' + encodeURIComponent(message);
    var browser = window.Capacitor.Plugins && window.Capacitor.Plugins.Browser;
    if (browser && browser.open) {
      browser.open({url: url, toolbarColor:'#061326'}).catch(function () { window.open(url,'_system'); });
    } else {
      window.open(url,'_system');
    }
  };
})();
