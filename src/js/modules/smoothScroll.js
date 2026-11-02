/**
 * Modern Smooth Inertia Scrolling & Cinematic Scroll Features Engine
 * Powered by Lenis + GSAP ScrollTrigger
 * Features:
 *  - 60/120fps Inertia Momentum Scroll
 *  - Smart Autohiding Frosted Header
 *  - Circular SVG Scroll HUD with interactive percentage meter
 *  - Floating Quick-Nav Scroll Minimap with Section Spy
 *  - Parallax Depth Translation on Ambient Layers
 *  - Dynamic Card Specular Spotlight Glow
 */

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { playTactileClick } from './audioEffects.js';

gsap.registerPlugin(ScrollTrigger);

export let lenisInstance = null;

export function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Initialize Lenis Smooth Scroll Engine
  if (!prefersReducedMotion) {
    try {
      lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      lenisInstance.on('scroll', () => {
        ScrollTrigger.update();
      });

      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } catch (err) {
      console.warn('[SmoothScroll] Lenis initialization fallback:', err);
    }
  }

  // 2. Intercept Anchor Link Navigation for Smooth Gliding
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#main-content') return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        playTactileClick();
        if (lenisInstance) {
          lenisInstance.scrollTo(targetEl, { offset: -70, duration: 1.2 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 3. Smart Header with Scroll Direction Sensing
  initSmartHeader();

  // 4. Circular SVG Scroll HUD Meter
  initCircularScrollHud();

  // 5. Floating Quick-Nav Minimap
  initScrollMinimap();

  // 6. Ambient Background Parallax
  if (!prefersReducedMotion) {
    initScrollParallax();
    initCardSpotlightGlow();
  }

  // 7. Expose helper for modal open/close scroll locking
  window.lockScroll = () => {
    if (lenisInstance) lenisInstance.stop();
    document.body.style.overflow = 'hidden';
  };
  window.unlockScroll = () => {
    if (lenisInstance) lenisInstance.start();
    document.body.style.overflow = '';
  };
}

/**
 * Smart Header: Autohides on fast scroll down, glides in on scroll up
 */
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    // Add frosted glass styling when scrolled past top
    if (currentScrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Autohide logic
    if (currentScrollY > 180 && scrollDelta > 10) {
      header.classList.add('header-hidden');
    } else if (scrollDelta < -5 || currentScrollY <= 180) {
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Circular SVG Scroll HUD Meter (Bottom-Left)
 */
function initCircularScrollHud() {
  const hudContainer = document.getElementById('scroll-progress-hud');
  if (!hudContainer) return;

  // Replace simple icon with circular SVG ring
  hudContainer.innerHTML = `
    <div class="circular-progress-wrap">
      <svg class="circular-progress-svg" width="38" height="38" viewBox="0 0 44 44">
        <circle class="circle-bg" cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3"></circle>
        <circle class="circle-bar" id="hud-circle-bar" cx="22" cy="22" r="18" fill="none" stroke="url(#hud-gradient)" stroke-width="3" stroke-linecap="round"></circle>
        <defs>
          <linearGradient id="hud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#818cf8" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>
        </defs>
      </svg>
      <div class="hud-center-content">
        <span class="hud-arrow">↑</span>
      </div>
    </div>
    <div class="hud-text-col">
      <span class="hud-percent-num" id="scroll-progress-percent">0%</span>
      <span class="hud-sub">TOP</span>
    </div>
  `;

  const circleBar = document.getElementById('hud-circle-bar');
  const percentText = document.getElementById('scroll-progress-percent');
  const circumference = 2 * Math.PI * 18; // ~113.1

  if (circleBar) {
    circleBar.style.strokeDasharray = `${circumference}`;
    circleBar.style.strokeDashoffset = `${circumference}`;
  }

  const updateHud = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal <= 0) return;

    const scrollCurrent = window.scrollY;
    const progress = Math.min(Math.max((scrollCurrent / scrollTotal), 0), 1);
    const percentInt = Math.round(progress * 100);

    if (circleBar) {
      const offset = circumference - (progress * circumference);
      circleBar.style.strokeDashoffset = `${offset}`;
    }

    if (percentText) {
      percentText.textContent = `${percentInt}%`;
    }

    // Top progress fill bar
    const topBar = document.getElementById('scroll-progress-fill');
    if (topBar) {
      topBar.style.width = `${percentInt}%`;
    }

    if (scrollCurrent > 100) {
      hudContainer.classList.add('visible');
    } else {
      hudContainer.classList.remove('visible');
    }
  };

  hudContainer.addEventListener('click', () => {
    playTactileClick();
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', updateHud, { passive: true });
  updateHud();
}

/**
 * Floating Quick-Nav Minimap (Right Side)
 */
function initScrollMinimap() {
  const sections = [
    { id: 'home', label: '01 Home' },
    { id: 'about', label: '02 About' },
    { id: 'skills', label: '03 Tech Channels' },
    { id: 'projects', label: '04 Projects' },
    { id: 'architecture', label: '05 Architecture' },
    { id: 'portfolio-tech-stack', label: '06 Tech Stack' },
    { id: 'experience', label: '07 Experience' },
    { id: 'contact', label: '08 Contact' }
  ];

  let minimapEl = document.getElementById('scroll-minimap');
  if (!minimapEl) {
    minimapEl = document.createElement('nav');
    minimapEl.id = 'scroll-minimap';
    minimapEl.className = 'scroll-minimap';
    minimapEl.setAttribute('aria-label', 'Section quick navigation');
    document.body.appendChild(minimapEl);
  }

  minimapEl.innerHTML = `
    <div class="minimap-track">
      ${sections.map((sec) => `
        <a href="#${sec.id}" class="minimap-dot" data-section="${sec.id}" aria-label="Scroll to ${sec.label}">
          <span class="dot-indicator"></span>
          <span class="minimap-tooltip">${sec.label}</span>
        </a>
      `).join('')}
    </div>
  `;

  // Attach smooth click handlers
  minimapEl.querySelectorAll('.minimap-dot').forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const secId = dot.getAttribute('data-section');
      const target = document.getElementById(secId);
      if (target) {
        playTactileClick();
        if (lenisInstance) {
          lenisInstance.scrollTo(target, { offset: -70, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Highlight active dot via IntersectionObserver
  const dots = minimapEl.querySelectorAll('.minimap-dot');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach((dot) => {
          if (dot.getAttribute('data-section') === id) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach((sec) => {
    const el = document.getElementById(sec.id);
    if (el) observer.observe(el);
  });
}

/**
 * Parallax depth translation on ambient background elements
 */
function initScrollParallax() {
  const glow1 = document.querySelector('.ambient-glow-1');
  const glow2 = document.querySelector('.ambient-glow-2');
  const codeBg = document.querySelector('.ambient-code-bg');

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (glow1) {
          glow1.style.transform = `translate3d(0, ${scrollY * 0.18}px, 0)`;
        }
        if (glow2) {
          glow2.style.transform = `translate3d(0, ${-scrollY * 0.14}px, 0)`;
        }
        if (codeBg) {
          codeBg.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Interactive Card Specular Spotlight Glow (Mouse Tracking)
 */
function initCardSpotlightGlow() {
  const spotlightCards = document.querySelectorAll(
    '.project-card, .tech-stack-card, .about-card, .billboard-stage, .skill-card-modern, .strength-card'
  );

  spotlightCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    });
  });
}

