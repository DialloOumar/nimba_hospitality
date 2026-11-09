// Site-wide motion: scroll reveals, image wipes, animated counters and parallax.
// Everything degrades gracefully: without JS or with "reduced motion", content is simply shown.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Counters ---------- */
function formatNumber(n: number, group: boolean): string {
  return group ? n.toLocaleString('fr-FR').replace(/ /g, ' ') : String(n);
}

function animateCount(el: HTMLElement) {
  const to = Number(el.dataset.count);
  const from = Number(el.dataset.from ?? 0);
  const group = el.dataset.group !== 'false';
  if (reduce || Number.isNaN(to)) {
    el.textContent = formatNumber(to, group);
    return;
  }
  const duration = 2000;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = formatNumber(Math.round(from + (to - from) * eased), group);
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = formatNumber(from, group);
  requestAnimationFrame(tick);
}

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-img], [data-count]');

const show = (el: HTMLElement) => {
  el.classList.add('is-in');
  if (el.dataset.count !== undefined) animateCount(el);
};

if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach(show);
} else {
  // A wiping image starts fully clipped (zero visible area), which IntersectionObserver
  // never reports as visible — so we watch its parent instead.
  const watched = new Map<Element, HTMLElement[]>();
  revealEls.forEach((el) => {
    const watch = el.hasAttribute('data-reveal-img') && el.parentElement ? el.parentElement : el;
    watched.set(watch, [...(watched.get(watch) ?? []), el]);
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          watched.get(e.target)?.forEach(show);
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  watched.forEach((_, el) => io.observe(el));
}

/* ---------- Parallax ---------- */
const parallaxEls = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];

if (!reduce && parallaxEls.length) {
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    for (const el of parallaxEls) {
      const frame = el.parentElement!.getBoundingClientRect();
      if (frame.bottom < -50 || frame.top > vh + 50) continue;
      const amount = Number(el.dataset.parallax || 0.1);
      // -1 when the frame enters from the bottom, +1 when it leaves at the top
      const progress = (vh / 2 - (frame.top + frame.height / 2)) / (vh / 2 + frame.height / 2);
      const shift = progress * amount * frame.height;
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${(1 + amount * 2.2).toFixed(3)})`;
    }
    ticking = false;
  };
  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
}
