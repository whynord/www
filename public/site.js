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

/* Mobile menu */
(function () {
  var btn = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  function set(open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    document.documentElement.classList.toggle('menu-open', open);
  }
  btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { set(false); btn.focus(); }
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', function (m) { if (m.matches) set(false); });
})();

/* Typing hero: types the headline, pauses 8 seconds, then loops */
(function () {
  var h = document.querySelector('[data-type]');
  if (!h) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var text = h.querySelector('.type-ghost').textContent;
  var live = h.querySelector('.type-live');
  var out = document.createElement('span');
  var caret = document.createElement('span');
  caret.className = 'type-caret';
  live.appendChild(out); live.appendChild(caret);
  h.classList.add('is-typing');
  var i = 0;
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  async function loop() {
    for (;;) {
      h.classList.remove('is-paused');
      for (i = 0; i <= text.length; i++) {
        out.textContent = text.slice(0, i);
        var ch = text.charAt(i - 1);
        await wait(ch === ' ' ? 120 : (ch === '.' || ch === "'" ? 220 : 55 + Math.random() * 60));
      }
      h.classList.add('is-paused');
      await wait(8000);
      h.classList.remove('is-paused');
      for (i = text.length; i >= 0; i--) { out.textContent = text.slice(0, i); await wait(18); }
      await wait(500);
    }
  }
  loop();
})();

/* Scroll cue: fades once the visitor starts scrolling */
(function () {
  var cue = document.querySelector('.scroll-cue');
  if (!cue) return;
  function check() { cue.classList.toggle('is-hidden', window.scrollY > 40); }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();
