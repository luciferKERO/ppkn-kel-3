// main.js - Core UI, Navigation & Interactions (Tema Poster Kebangsaan)

function initApp() {
  initNavigation();
  initScrollEffects();
  initCounters();
  initReadingProgress();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 1. Navigation & Mobile Drawer
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active state matching
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    const linkPath = href.replace(/\/$/, '').split('#')[0];
    if (
      linkPath === currentPath ||
      (currentPath.includes('/materi') && href.includes('/materi')) ||
      (currentPath === '' && (href === '/' || href === '/index.html' || href === 'index.html'))
    ) {
      link.classList.add('active');
    }
  });
}

// 2. Scroll Effects & Back to Top
function initScrollEffects() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 3. Counter Animation for KPI numbers
function initCounters() {
  const counters = document.querySelectorAll('.kpi-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = parseFloat(entry.target.getAttribute('data-target'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        if (isNaN(target)) return;

        const duration = 1400;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = target * easeProgress;

          if (Number.isInteger(target)) {
            entry.target.textContent = Math.round(currentVal) + suffix;
          } else {
            entry.target.textContent = currentVal.toFixed(1) + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  counters.forEach((c) => observer.observe(c));
}

// 4. Reading Progress for Module Pages
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
  });
}
