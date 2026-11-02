/**
 * Master Portfolio Sections Visual Navigator
 * Displays all portfolio sections as iconic cards in a left-to-right horizontal scroll reel.
 * Enables recruiters and developers to understand and navigate the entire portfolio visually.
 */

import { playTactileClick } from './audioEffects.js';
import { lenisInstance } from './smoothScroll.js';

export const PORTFOLIO_SECTIONS = [
  {
    id: 'about',
    target: '#about',
    num: '01',
    title: 'About Me',
    subtitle: 'Background & Journey',
    icon: '👤',
    badge: 'Anna University CSE',
    color: '#38bdf8'
  },
  {
    id: 'competencies',
    target: '#competencies-anchor',
    num: '02',
    title: 'Competencies',
    subtitle: 'Core Engineering Strengths',
    icon: '🧠',
    badge: '6 Core Disciplines',
    color: '#10b981'
  },
  {
    id: 'skills',
    target: '#skills',
    num: '03',
    title: 'Tech Channels',
    subtitle: 'Frontend, Backend, AI & Cloud',
    icon: '⚡',
    badge: '25+ Technologies',
    color: '#f59e0b'
  },
  {
    id: 'projects',
    target: '#projects',
    num: '04',
    title: 'Projects',
    subtitle: 'Verified Production Code',
    icon: '🚀',
    badge: '6 Full-Stack Repos',
    color: '#818cf8'
  },
  {
    id: 'architecture',
    target: '#architecture',
    num: '05',
    title: 'Architecture',
    subtitle: 'Interactive 4-Tier Visualizer',
    icon: '🏗️',
    badge: 'Client to Data Store',
    color: '#06b6d4'
  },
  {
    id: 'tech-stack',
    target: '#portfolio-tech-stack',
    num: '06',
    title: 'Design Stack',
    subtitle: 'Motion, 3D & Performance',
    icon: '💎',
    badge: '5 Engineering Pillars',
    color: '#ec4899'
  },
  {
    id: 'experience',
    target: '#experience',
    num: '07',
    title: 'Experience',
    subtitle: 'Industry Internship',
    icon: '💼',
    badge: 'Sangam Soft Solutions',
    color: '#10b981'
  },
  {
    id: 'certifications',
    target: '#certifications',
    num: '08',
    title: 'Credentials',
    subtitle: 'Verified Certificates',
    icon: '📜',
    badge: '8 Industry Badges',
    color: '#38bdf8'
  },
  {
    id: 'achievements',
    target: '#achievements',
    num: '09',
    title: 'Achievements',
    subtitle: 'Hackathons & Awards',
    icon: '🏆',
    badge: 'District Hackathon Winner',
    color: '#f59e0b'
  },
  {
    id: 'ai-assistant',
    target: '#ai-assistant',
    num: '10',
    title: 'Ask AI Bot',
    subtitle: 'Zero-Hallucination Chat',
    icon: '🤖',
    badge: 'Grounded Knowledge',
    color: '#a855f7'
  },
  {
    id: 'resume',
    target: '#resume',
    num: '11',
    title: 'Resume Doc',
    subtitle: 'ATS View & PDF Print',
    icon: '📄',
    badge: 'One-Click Download',
    color: '#e2e8f0'
  },
  {
    id: 'contact',
    target: '#contact',
    num: '12',
    title: 'Get In Touch',
    subtitle: 'Direct Message & Email',
    icon: '📬',
    badge: 'Open for Roles',
    color: '#38bdf8'
  }
];

export function initVisualSectionDeck() {
  const container = document.getElementById('sections-visual-deck-scroll');
  const prevBtn = document.getElementById('sections-deck-prev');
  const nextBtn = document.getElementById('sections-deck-next');

  if (!container) return;

  container.innerHTML = PORTFOLIO_SECTIONS.map((sec) => `
    <a href="${sec.target}" class="visual-section-token" data-target="${sec.target}" style="--token-color: ${sec.color};">
      <div class="token-header">
        <span class="token-num">${sec.num}</span>
        <span class="token-badge">${sec.badge}</span>
      </div>

      <div class="token-icon-frame" style="box-shadow: 0 0 16px ${sec.color}25; border-color: ${sec.color}55;">
        <span class="token-emoji">${sec.icon}</span>
      </div>

      <div class="token-text-col">
        <h4 class="token-title">${sec.title}</h4>
        <span class="token-sub">${sec.subtitle}</span>
      </div>

      <div class="token-click-cta">
        <span>Explore Section</span>
        <span class="cta-arrow">→</span>
      </div>
    </a>
  `).join('');

  // Smooth click glide handler
  container.querySelectorAll('.visual-section-token').forEach((token) => {
    token.addEventListener('click', (e) => {
      e.preventDefault();
      playTactileClick();
      const targetSelector = token.getAttribute('data-target');
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        if (lenisInstance) {
          lenisInstance.scrollTo(targetEl, { offset: -70, duration: 1.2 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Attach horizontal scroll navigation controls
  setupHorizontalReel(container, prevBtn, nextBtn);
}

/**
 * Universal Horizontal Reel Helper:
 * Adds smooth arrow navigation, mouse wheel support, and desktop mouse drag.
 */
export function setupHorizontalReel(container, prevBtn, nextBtn) {
  if (!container) return;

  const scrollAmount = 320;

  prevBtn?.addEventListener('click', () => {
    playTactileClick();
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    playTactileClick();
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Wheel horizontal translation when hovering over the reel
  container.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      // If predominantly vertical wheel, translate horizontally
      if (
        (e.deltaY > 0 && container.scrollLeft < container.scrollWidth - container.clientWidth - 5) ||
        (e.deltaY < 0 && container.scrollLeft > 5)
      ) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    }
  }, { passive: false });

  // Mouse Drag-to-Scroll Support on Desktop
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  container.addEventListener('mousedown', (e) => {
    // Only drag with primary mouse button and not on anchor or button
    if (e.button !== 0) return;
    isDown = true;
    container.classList.add('is-dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      container.classList.remove('is-dragging');
    }
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}
