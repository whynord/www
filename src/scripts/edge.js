// NORD — B + Edge interactions
// Subtle: hover-glitch (CSS) + click-flip (works rows) + scroll-crack (1-2 seams only)

// ---- chaos canvas (revealed during scroll cracks) ----
const cv = document.getElementById('cz');
if (cv) {
  const cx = cv.getContext('2d');
  const size = () => { cv.width = innerWidth; cv.height = innerHeight; };
  size();
  addEventListener('resize', size);
  const N = 70;
  const ps = Array.from({ length: N }, () => ({
    x: Math.random() * cv.width,
    y: Math.random() * cv.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    r: Math.random() * 2 + 1,
  }));
  function draw() {
    cx.clearRect(0, 0, cv.width, cv.height);
    ps.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = cv.width; if (p.x > cv.width) p.x = 0;
      if (p.y < 0) p.y = cv.height; if (p.y > cv.height) p.y = 0;
    });
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          cx.strokeStyle = 'rgba(22,21,15,' + (1 - d / 120) * 0.25 + ')';
          cx.lineWidth = 0.6;
          cx.beginPath();
          cx.moveTo(ps[i].x, ps[i].y);
          cx.lineTo(ps[j].x, ps[j].y);
          cx.stroke();
        }
      }
    }
    ps.forEach((p) => {
      cx.beginPath();
      cx.arc(p.x, p.y, p.r, 0, 7);
      cx.fillStyle = 'rgba(22,21,15,0.35)';
      cx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ---- scroll "crack": open the strip + chaos layer at 1-2 seams only ----
const chaos = document.getElementById('chaos');
const crack = document.getElementById('crack');
let crackFired = 0;
const MAX_CRACKS = 2;
addEventListener('scroll', () => {
  if (crackFired >= MAX_CRACKS || !crack || !chaos) return;
  const h = document.documentElement;
  const prog = h.scrollTop / (h.scrollHeight - h.clientHeight);
  // fire at ~33% and ~66% of scroll
  const shouldFire = (prog > 0.30 && crackFired === 0) || (prog > 0.62 && crackFired === 1);
  if (shouldFire) {
    crackFired++;
    crack.classList.add('open');
    chaos.classList.add('on');
    setTimeout(() => crack.classList.remove('open'), 520);
    setTimeout(() => chaos.classList.remove('on'), 1100);
  }
}, { passive: true });

// ---- click a work row to flip to its chaotic "opposite" ----
document.querySelectorAll('.work').forEach((w) => {
  w.addEventListener('click', (e) => {
    // let the link navigate if modifier (new tab) — otherwise flip in place
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    const wasOpen = w.classList.contains('open');
    document.querySelectorAll('.work.open').forEach((o) => o.classList.remove('open'));
    if (!wasOpen) w.classList.add('open');
  });
});
