/**
 * Command Palette (Ctrl+K) & Global Keyboard Shortcuts
 */

import { trackEvent } from '../utils/analytics.js';
import { projectsData } from '../data/portfolioData.js';

const PALETTE_ITEMS = [
  { id: 'home', title: 'Go to Home / Hero', category: 'Navigation', icon: '🏠', shortcut: 'G H', action: () => scrollToSection('home') },
  { id: 'about', title: 'Go to About Me', category: 'Navigation', icon: '👤', shortcut: 'G A', action: () => scrollToSection('about') },
  { id: 'skills', title: 'Go to Technical Skills', category: 'Navigation', icon: '🛠️', shortcut: 'G S', action: () => scrollToSection('skills') },
  { id: 'projects', title: 'Go to Projects Showcase', category: 'Navigation', icon: '🚀', shortcut: 'G P', action: () => scrollToSection('projects') },
  { id: 'architecture', title: 'Go to System Architecture', category: 'Navigation', icon: '🏗️', shortcut: 'G R', action: () => scrollToSection('architecture') },
  { id: 'tech-stack', title: 'Go to Tech & Design Stack Showcase', category: 'Navigation', icon: '⚡', shortcut: 'G T', action: () => scrollToSection('portfolio-tech-stack') },
  { id: 'experience', title: 'Go to Internship Experience', category: 'Navigation', icon: '💼', shortcut: 'G E', action: () => scrollToSection('experience') },
  { id: 'certifications', title: 'Go to Certifications & Credentials', category: 'Navigation', icon: '📜', shortcut: 'G K', action: () => scrollToSection('certifications') },
  { id: 'achievements', title: 'Go to Achievements & Awards', category: 'Navigation', icon: '🏆', shortcut: '', action: () => scrollToSection('achievements') },
  { id: 'education', title: 'Go to Education', category: 'Navigation', icon: '🎓', shortcut: '', action: () => scrollToSection('education') },
  { id: 'resume', title: 'Go to Resume & Download', category: 'Navigation', icon: '📄', shortcut: 'G D', action: () => scrollToSection('resume') },
  { id: 'contact', title: 'Go to Contact', category: 'Navigation', icon: '📬', shortcut: 'G C', action: () => scrollToSection('contact') },
  { id: 'theme', title: 'Toggle Dark / Light Theme', category: 'Action', icon: '🌓', shortcut: 'T', action: () => document.getElementById('theme-toggle-btn')?.click() },
  { id: 'audio', title: 'Toggle Futuristic UI Sound Effects', category: 'Action', icon: '🔊', shortcut: 'M', action: () => document.getElementById('audio-sfx-toggle')?.click() },
  { id: 'devmode', title: 'Toggle Developer Mode', category: 'Action', icon: '⚡', shortcut: 'D', action: () => document.getElementById('dev-mode-toggle')?.click() },
  { id: 'github', title: 'Open GitHub Profile', category: 'External', icon: '🐙', shortcut: '', action: () => window.open('https://github.com/kala3013', '_blank', 'noopener noreferrer') },
  { id: 'linkedin', title: 'Open LinkedIn Profile', category: 'External', icon: '💼', shortcut: '', action: () => window.open('https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/', '_blank', 'noopener noreferrer') },
  { id: 'copy-email', title: 'Copy Email Address', category: 'Action', icon: '📋', shortcut: '', action: () => document.getElementById('copy-email-btn')?.click() }
];

// Dynamically add verified projects to Command Palette
projectsData.forEach((proj) => {
  PALETTE_ITEMS.push({
    id: `project-${proj.id}`,
    title: `Project: ${proj.title}`,
    category: 'Project',
    icon: '🚀',
    shortcut: '',
    searchKeywords: `${proj.title} ${proj.tagline} ${proj.technologies.join(' ')} ${proj.category.join(' ')} ${proj.keyFeatures.join(' ')}`,
    action: () => {
      scrollToSection('projects');
      window.openProjectModal?.(proj.id);
    }
  });
});

export function initCommandPalette() {
  const backdrop = document.getElementById('palette-backdrop');
  const input = document.getElementById('palette-input');
  const resultsContainer = document.getElementById('palette-results');
  const closeBtn = document.getElementById('palette-close-btn');
  const triggerBtn = document.getElementById('palette-trigger-btn');

  let activeIndex = 0;
  let currentFiltered = [...PALETTE_ITEMS];
  let pendingGKey = false;
  let gKeyTimeout = null;

  // Render initial list
  renderItems(PALETTE_ITEMS, resultsContainer, activeIndex);

  // Open Palette
  function openPalette() {
    backdrop?.classList.add('open');
    input.value = '';
    currentFiltered = [...PALETTE_ITEMS];
    activeIndex = 0;
    renderItems(currentFiltered, resultsContainer, activeIndex);
    setTimeout(() => input?.focus(), 50);
    trackEvent('command_palette_open');
  }

  // Close Palette
  function closePalette() {
    backdrop?.classList.remove('open');
  }

  triggerBtn?.addEventListener('click', openPalette);
  closeBtn?.addEventListener('click', closePalette);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });

  // Search Filtering
  input?.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    currentFiltered = PALETTE_ITEMS.filter((item) => 
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.shortcut.toLowerCase().includes(query) ||
      (item.searchKeywords && item.searchKeywords.toLowerCase().includes(query))
    );
    activeIndex = 0;
    renderItems(currentFiltered, resultsContainer, activeIndex);
  });

  // Keyboard navigation within Palette
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        activeIndex = (activeIndex + 1) % currentFiltered.length;
        renderItems(currentFiltered, resultsContainer, activeIndex);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        activeIndex = (activeIndex - 1 + currentFiltered.length) % currentFiltered.length;
        renderItems(currentFiltered, resultsContainer, activeIndex);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered[activeIndex]) {
        currentFiltered[activeIndex].action();
        closePalette();
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');

    // Ctrl + K or Cmd + K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop?.classList.contains('open')) {
        closePalette();
      } else {
        openPalette();
      }
      return;
    }

    // Escape closes modals
    if (e.key === 'Escape') {
      closePalette();
      document.getElementById('study-modal-backdrop')?.classList.remove('open');
      return;
    }

    if (isTyping) return;

    // Two-key chord: G followed by Key (G P, G A, G C, G S, G E, G H, G D)
    if (e.key.toLowerCase() === 'g' && !pendingGKey) {
      pendingGKey = true;
      clearTimeout(gKeyTimeout);
      gKeyTimeout = setTimeout(() => { pendingGKey = false; }, 1200);
      return;
    }

    if (pendingGKey) {
      pendingGKey = false;
      clearTimeout(gKeyTimeout);
      const k = e.key.toLowerCase();
      if (k === 'h') scrollToSection('home');
      else if (k === 'a') scrollToSection('about');
      else if (k === 's') scrollToSection('skills');
      else if (k === 'p') scrollToSection('projects');
      else if (k === 'e') scrollToSection('experience');
      else if (k === 'c') scrollToSection('contact');
      else if (k === 'd') scrollToSection('resume');
      else if (k === 'r') scrollToSection('architecture');
      else if (k === 't') scrollToSection('portfolio-tech-stack');
      return;
    }

    // Single key shortcuts when not typing:
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      document.getElementById('theme-toggle-btn')?.click();
    } else if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      document.getElementById('dev-mode-toggle')?.click();
    } else if (e.key === '?' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      openPalette();
    }
  });
}

function renderItems(items, container, activeIdx) {
  if (!container) return;
  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No matching commands found.</div>`;
    return;
  }

  items.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = `palette-item ${index === activeIdx ? 'active' : ''}`;
    el.innerHTML = `
      <div class="palette-item-left">
        <span class="palette-item-icon">${item.icon}</span>
        <span>${item.title}</span>
      </div>
      <div>
        ${item.shortcut ? `<span class="palette-kbd-badge">${item.shortcut}</span>` : `<span style="font-size:0.75rem; color:var(--text-muted);">${item.category}</span>`}
      </div>
    `;

    el.addEventListener('click', () => {
      item.action();
      document.getElementById('palette-backdrop')?.classList.remove('open');
    });

    container.appendChild(el);
  });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    trackEvent('navigate_section', { section: id });
  }
}
