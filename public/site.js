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

/* Typing effect: types text, holds, erases, loops. Hero starts on load; others start when scrolled into view. */
(function () {
  var nodes = document.querySelectorAll('[data-type]');
  if (!nodes.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function setup(h) {
    if (h.dataset.typing) return;
    h.dataset.typing = '1';
    var ghost = h.querySelector('.type-ghost');
    var live = h.querySelector('.type-live');
    if (!ghost || !live) return;
    var text = ghost.textContent;
    var out = document.createElement('span');
    var caret = document.createElement('span');
    caret.className = 'type-caret';
    live.appendChild(out); live.appendChild(caret);
    h.classList.add('is-typing');
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    async function loop() {
      for (;;) {
        h.classList.remove('is-paused');
        for (var i = 0; i <= text.length; i++) {
          out.textContent = text.slice(0, i);
          var ch = text.charAt(i - 1);
          await wait(ch === ' ' ? 120 : (ch === '.' || ch === "'" || ch === '\u2019' ? 220 : 55 + Math.random() * 60));
        }
        h.classList.add('is-paused');
        await wait(8000);
        h.classList.remove('is-paused');
        for (var j = text.length; j >= 0; j--) { out.textContent = text.slice(0, j); await wait(18); }
        await wait(500);
      }
    }
    loop();
  }

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); setup(e.target); } });
  }, { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }) : null;

  nodes.forEach(function (n) {
    if (n.closest('.hero') || !io) { setup(n); } else { io.observe(n); }
  });
})();

/* Hero background video: loops via the loop attribute; pause + show poster
   when the visitor prefers reduced motion or has Data Saver on. */
(function () {
  var v = document.querySelector('.hero-video-el');
  if (!v) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conn = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
  var saveData = !!(conn && conn.saveData);
  if (reduce || saveData) {
    v.removeAttribute('autoplay');
    v.autoplay = false;
    v.removeAttribute('loop');
    try { v.pause(); v.currentTime = 0; } catch (e) {}
    return;
  }
  var tryPlay = function () { var p = v.play(); if (p && p.catch) { p.catch(function () {}); } };
  if (v.readyState >= 2) { tryPlay(); } else { v.addEventListener('loadeddata', tryPlay, { once: true }); }

  /* Sound on/off toggle. Video autoplays muted (browser requirement); the
     button lets the visitor unmute. Shown only while the video is playing. */
  var btn = document.querySelector('.hero-sound');
  if (btn) {
    var label = btn.querySelector('.hero-sound-label');
    var sync = function () {
      var on = !v.muted;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));
      btn.setAttribute('aria-label', on ? 'Turn sound off' : 'Turn sound on');
      if (label) { label.textContent = on ? 'Sound on' : 'Sound off'; }
    };
    btn.hidden = false;
    btn.addEventListener('click', function () {
      v.muted = !v.muted;
      if (!v.muted) { v.volume = 1; tryPlay(); }
      sync();
    });
    sync();
  }
})();

/* Scroll cue: fades once the visitor starts scrolling */
(function () {
  var cue = document.querySelector('.scroll-cue');
  if (!cue) return;
  function check() { cue.classList.toggle('is-hidden', window.scrollY > 40); }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();
