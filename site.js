  (function () {
    var root = document.documentElement;
    var btn = document.querySelector('.theme-toggle');
    var meta = document.querySelector('meta[name="theme-color"]');
    function sync() {
      var night = root.getAttribute('data-theme') === 'night';
      btn.textContent = night ? 'Lime' : 'Night';
      btn.setAttribute('aria-pressed', String(night));
      btn.setAttribute('aria-label', night ? 'Switch to lime theme' : 'Switch to night theme');
      meta.setAttribute('content', night ? '#171910' : '#63ba23');
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'night' ? 'lime' : 'night';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('whynord-theme', next); } catch (e) {}
      sync();
    });
    sync();
  })();
(function () {
  var p = document.querySelector('[data-print]');
  if (p) p.addEventListener('click', function () { window.print(); });
})();
