/**
 * Bethany Presbyterian Church — main.js
 *
 * Responsibilities:
 *  - Mobile navigation toggle (hamburger menu)
 *  - Sticky header shadow on scroll
 *  - Active nav link highlighting based on current page
 *  - Keyboard accessibility for mobile nav (Escape to close, focus trap)
 *  - History page timeline: scroll reveal, rail progress, era-nav highlighting
 */

(function () {
  'use strict';

  /* ── Elements ─────────────────────────────────────────── */
  const header     = document.querySelector('.site-header');
  const navToggle  = document.querySelector('.nav-toggle');
  const mainNav    = document.querySelector('#main-nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks   = mainNav ? mainNav.querySelectorAll('a') : [];

  /* ── Sticky header shadow ─────────────────────────────── */
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── Mobile nav ───────────────────────────────────────── */
  function openNav() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.add('is-open');
    navOverlay && navOverlay.classList.add('is-visible');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation menu');
    // Move focus to first link
    const firstLink = mainNav.querySelector('a');
    if (firstLink) firstLink.focus();
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeNav() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove('is-open');
    navOverlay && navOverlay.classList.remove('is-visible');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    navToggle.focus(); // return focus to toggle
    document.body.style.overflow = '';
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });

    // Close on overlay click
    navOverlay && navOverlay.addEventListener('click', closeNav);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        closeNav();
      }
    });

    // Close when a nav link is clicked (useful for same-page anchors)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('is-open')) closeNav();
      });
    });

    // Basic focus trap: Tab from last link wraps to first, Shift+Tab from first wraps to last
    mainNav.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !mainNav.classList.contains('is-open')) return;
      const focusable = Array.from(mainNav.querySelectorAll('a, button'));
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

/* ── Contact obfuscation ──────────────────────────────── */
  // Assembles contact details at runtime — keeps plaintext out of HTML source.
  // Add data-obf="key" to any <a> element; add the boolean data-obf-text
  // attribute to also replace the link's visible text content.
  (function() {
    var u = atob('YmV0aGFueXByZXNvZmZpY2U=');
    var contacts = {
      'email-office': {
        href: 'mailto:' + u + '\u0040' + 'gmail' + '.com',
        text: u + '\u0040' + 'gmail' + '.com'
      },
      'phone-church': {
        href: 'tel:+1' + '541' + '889' + '5752',
        text: '+1 (541) 889-5752'
      }
    };
    document.querySelectorAll('a[data-obf]').forEach(function(el) {
      var key = el.getAttribute('data-obf');
      if (!contacts[key]) return;
      el.href = contacts[key].href;
      if (el.hasAttribute('data-obf-text')) el.textContent = contacts[key].text;
    });
  })();

  /* ── History timeline (history.html only) ─────────────── */
  // Three behaviors, all no-ops on pages without a .timeline:
  //   1. Fade/slide each card in as it scrolls into view
  //   2. Fill the vertical rail to match scroll progress through the timeline
  //   3. Highlight the era-nav chip for the era currently on screen
  (function () {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* 1. Scroll reveal */
    const revealables = timeline.querySelectorAll('.reveal');

    if (prefersReduced || !('IntersectionObserver' in window)) {
      // No animation: show everything immediately
      revealables.forEach(el => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

      revealables.forEach(el => revealObserver.observe(el));
    }

    /* 2 & 3. Rail fill + era-nav highlighting, both driven by scroll */
    const railFill = timeline.querySelector('.timeline__rail-fill');
    const eraLinks = Array.from(document.querySelectorAll('.era-nav__link'));
    const eras     = Array.from(document.querySelectorAll('.timeline-era'));

    let ticking = false;

    function update() {
      ticking = false;
      const rect = timeline.getBoundingClientRect();

      // Rail fill: progress measured against the midpoint of the viewport
      if (railFill) {
        const mark     = window.innerHeight * 0.5;
        const progress = (mark - rect.top) / rect.height;
        railFill.style.height = Math.min(100, Math.max(0, progress * 100)) + '%';
      }

      // Current era = the last era heading that has scrolled past the header
      if (eras.length && eraLinks.length) {
        const threshold = 140;
        let currentId = null;
        eras.forEach(era => {
          if (era.getBoundingClientRect().top <= threshold) currentId = era.id;
        });
        eraLinks.forEach(link => {
          link.classList.toggle('is-current', currentId !== null && link.hash === '#' + currentId);
        });
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  })();

  /* ── Active nav link ──────────────────────────────────── */
  // Compares the page filename to each nav link's href and sets aria-current="page"
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav__link, .footer__nav-link').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

})();
