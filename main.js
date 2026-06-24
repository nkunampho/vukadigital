/* ── VUKA DIGITAL — main.js ── */

// Mobile nav toggle
(function () {
  const burger = document.getElementById('nav-burger');
  const mobile = document.getElementById('nav-mobile');
  const iconMenu = document.getElementById('icon-menu');
  const iconX    = document.getElementById('icon-x');
  if (!burger) return;
  burger.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    iconMenu.style.display = open ? 'none'  : 'block';
    iconX.style.display    = open ? 'block' : 'none';
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // close on link click
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      iconMenu.style.display = 'block';
      iconX.style.display    = 'none';
      document.body.style.overflow = '';
    });
  });
})();

// Mark active nav link
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('up'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
})();

// Hero reveals on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal, .page-hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('up'), 100 + i * 110);
  });
});

// Contact form handler
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    if (!msg) return;
    msg.textContent = '✓ Message received — we\'ll be in touch within 24 hours.';
    msg.style.display = 'block';
    form.reset();
    setTimeout(() => { msg.style.display = 'none'; }, 8000);
  });
})();
