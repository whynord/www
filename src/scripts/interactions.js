// ============================================================
// NORD — Creativity Lab // client interactions
// All effects are feature-detected: a block runs only if its
// target element exists on the current page.
//   - custom cursor + live coordinate readout
//   - Bangkok live clock          (#nordclock)
//   - terminal typewriter         (#typed-output)
//   - scroll progress bar         (#nordbar)
//   - scroll reveals              ([data-reveal])
//   - animated tech-stack bars    ([data-bar] inside #lab)
//   - generative noise overlay    (#nordnoise)
//   - live particle field         (#nordparticles)
//   - works index hover preview   ([data-row] + #wkprev)
// ============================================================

const ACID = 'rgba(198,255,0,';
const DIM  = 'rgba(244,242,232,';

function init() {
  const $ = (id) => document.getElementById(id);

  /* ---- cursor + coordinates ---- */
  const cur = $('nordcur');
  const coord = $('nordcoord');
  const heroCoords = $('hero-coords');
  document.addEventListener('mousemove', (e) => {
    if (cur) cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    if (coord) {
      coord.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      coord.textContent = String(e.clientX).padStart(4, '0') + ',' + String(e.clientY).padStart(4, '0');
    }
    if (heroCoords) {
      const xp = ((e.clientX / window.innerWidth) * 180 - 90).toFixed(3);
      const yp = ((e.clientY / window.innerHeight) * 180 - 90).toFixed(3);
      heroCoords.textContent = `X: ${xp}° / Y: ${yp}°`;
    }
  });
  document.addEventListener('mouseover', (e) => {
    if (cur) {
      const hit = e.target.closest && e.target.closest('a,button,[data-cta],[data-skill]');
      if (hit) { cur.style.width = '40px'; cur.style.height = '40px'; cur.style.margin = '-20px 0 0 -20px'; cur.style.opacity = '0.5'; }
      else { cur.style.width = '12px'; cur.style.height = '12px'; cur.style.margin = '-6px 0 0 -6px'; cur.style.opacity = '1'; }
    }
    const sk = e.target.closest && e.target.closest('[data-skill]');
    if (sk) sk.style.background = 'rgba(198,255,0,0.07)';
  });
  document.addEventListener('mouseout', (e) => {
    const sk = e.target.closest && e.target.closest('[data-skill]');
    if (sk && !(e.relatedTarget && sk.contains(e.relatedTarget))) sk.style.background = '#0E0E0E';
  });

  /* ---- Bangkok clock ---- */
  const clock = $('nordclock');
  if (clock) {
    const tick = () => {
      try {
        const bkk = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));
        clock.textContent = 'BKK ' + String(bkk.getHours()).padStart(2, '0') + ':' +
          String(bkk.getMinutes()).padStart(2, '0') + ':' + String(bkk.getSeconds()).padStart(2, '0');
      } catch (_) {}
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---- terminal typewriter ---- */
  const out = $('typed-output');
  if (out) {
    const phrases = ['Available for new projects.', 'Currently in Bangkok, TH.', 'Building brands that last.', 'Open to collaboration.'];
    let pi = 0, ci = 0, del = false;
    const type = () => {
      const p = phrases[pi];
      if (!del) { out.textContent = p.slice(0, ++ci); if (ci === p.length) { del = true; setTimeout(type, 2000); return; } }
      else { out.textContent = p.slice(0, --ci); if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
      setTimeout(type, del ? 35 : 75);
    };
    setTimeout(type, 1600);
  }

  /* ---- scroll progress ---- */
  const bar = $('nordbar');
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollHeight - h.clientHeight;
      bar.style.width = (p > 0 ? (h.scrollTop / p * 100) : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- scroll reveals ---- */
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    reveals.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = 'opacity .9s cubic-bezier(.2,.8,.2,1), transform .9s cubic-bezier(.2,.8,.2,1)';
    });
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting) { en.target.style.opacity = '1'; en.target.style.transform = 'none'; io.unobserve(en.target); }
        });
      }, { threshold: 0.08 });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }
  }

  /* ---- tech-stack bars ---- */
  const lab = $('lab');
  if (lab && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          en.target.querySelectorAll('[data-bar]').forEach((b) => { b.style.width = b.getAttribute('data-bar') + '%'; });
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.2 });
    io.observe(lab);
  }

  /* ---- noise overlay ---- */
  const noise = $('nordnoise');
  if (noise) {
    const ctx = noise.getContext('2d');
    const resize = () => { noise.width = Math.ceil(window.innerWidth / 2); noise.height = Math.ceil(window.innerHeight / 2); };
    resize();
    window.addEventListener('resize', resize);
    let nf = 0;
    const draw = () => {
      if (++nf % 3 === 0) {
        const img = ctx.createImageData(noise.width, noise.height);
        const d = img.data;
        for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
        ctx.putImageData(img, 0, 0);
      }
      requestAnimationFrame(draw);
    };
    draw();
  }

  /* ---- particle field ---- */
  const pc = $('nordparticles');
  if (pc) {
    const ctx = pc.getContext('2d');
    const resize = () => { pc.width = pc.offsetWidth; pc.height = pc.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const N = 56;
    const ps = Array.from({ length: N }, () => ({
      x: Math.random() * pc.width, y: Math.random() * pc.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5, acc: Math.random() < 0.22,
    }));
    let mx = -999, my = -999;
    pc.addEventListener('mousemove', (e) => { const r = pc.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    pc.addEventListener('mouseleave', () => { mx = -999; my = -999; });
    const draw = () => {
      ctx.clearRect(0, 0, pc.width, pc.height);
      ps.forEach((p) => { p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = pc.width; if (p.x > pc.width) p.x = 0; if (p.y < 0) p.y = pc.height; if (p.y > pc.height) p.y = 0; });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 118) {
            ctx.beginPath();
            ctx.strokeStyle = ((ps[i].acc || ps[j].acc) ? ACID : DIM) + ((1 - d / 118) * 0.32) + ')';
            ctx.lineWidth = 0.5; ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y); ctx.stroke();
          }
        }
      }
      ps.forEach((p) => {
        const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160) { ctx.beginPath(); ctx.strokeStyle = ACID + ((1 - d / 160) * 0.6) + ')'; ctx.lineWidth = 1; ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke(); }
      });
      ps.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = p.acc ? ACID + '0.9)' : DIM + '0.4)'; ctx.fill(); });
      requestAnimationFrame(draw);
    };
    draw();
  }

  /* ---- works index hover preview ---- */
  const prev = $('wkprev');
  const prevLbl = $('wkprevlbl');
  if (prev) {
    document.addEventListener('mousemove', (e) => { prev.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; });
    document.addEventListener('mouseover', (e) => {
      const row = e.target.closest && e.target.closest('[data-row]');
      if (row) {
        prev.style.opacity = '1';
        if (prevLbl) prevLbl.textContent = row.getAttribute('data-img') || 'PROJECT';
        row.style.background = '#C6FF00'; row.style.color = '#0E0E0E'; row.style.paddingLeft = '20px';
      }
    });
    document.addEventListener('mouseout', (e) => {
      const row = e.target.closest && e.target.closest('[data-row]');
      if (row && !(e.relatedTarget && row.contains(e.relatedTarget))) {
        prev.style.opacity = '0';
        row.style.background = 'transparent'; row.style.color = '#F4F4F2'; row.style.paddingLeft = '8px';
      }
    });
  }
}

init();
// re-init if View Transitions are enabled later
document.addEventListener('astro:page-load', init);
