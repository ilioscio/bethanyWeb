/**
 * Bethany Presbyterian Church — main.js
 *
 * Responsibilities:
 *  - Mobile navigation toggle (hamburger menu)
 *  - Sticky header shadow on scroll
 *  - Active nav link highlighting based on current page
 *  - Keyboard accessibility for mobile nav (Escape to close, focus trap)
 *  - "Coming soon" tooltip on Give buttons (touch support)
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

  /* ── Give button tooltip (touch support) ─────────────── */
  // On touch devices, :hover doesn't persist — toggle on tap, close on outside tap.
  // Remove this block when the donation link is live.
  document.querySelectorAll('.tooltip-wrapper').forEach(wrapper => {
    wrapper.addEventListener('touchstart', (e) => {
      e.preventDefault(); // prevent the link firing on first tap
      const isOpen = wrapper.classList.contains('tooltip-open');
      // Close any other open tooltips
      document.querySelectorAll('.tooltip-wrapper.tooltip-open').forEach(w => {
        w.classList.remove('tooltip-open');
      });
      if (!isOpen) wrapper.classList.add('tooltip-open');
    }, { passive: false });
  });

  // Close tooltip when tapping anywhere else
  document.addEventListener('touchstart', (e) => {
    if (!e.target.closest('.tooltip-wrapper')) {
      document.querySelectorAll('.tooltip-wrapper.tooltip-open').forEach(w => {
        w.classList.remove('tooltip-open');
      });
    }
  }, { passive: true });

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
