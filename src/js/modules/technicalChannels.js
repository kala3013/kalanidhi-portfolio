/**
 * Technical Channels & Core Competencies Matrix (Visual-First Edition)
 * Replaces dense vertical text blocks with left-to-right horizontal icon scroll reels.
 * Details are progressively revealed upon click via a sleek cybernetic holographic inspector modal.
 */

import { skillsData, technicalChannelsData, personalStrengths } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';
import { playTactileClick } from './audioEffects.js';
import { setupHorizontalReel } from './visualSectionDeck.js';
import gsap from 'gsap';

// Real-world project connections mapping
const PROJECT_PROVENANCE_MAP = {
  'React.js': 'Candidate Ranking System • Portfolio',
  'JavaScript': 'Candidate Ranking System • AI Code Analyzer • Portfolio',
  'Java': 'Pediatric Hospital MS • Automated Certificate Gen',
  'Node.js': 'Candidate Ranking System • Thamarai Fertility HMS',
  'Express.js': 'Candidate Ranking System • Thamarai Fertility HMS',
  'MySQL': 'Candidate Ranking System • Sangam Soft Solutions',
  'MongoDB': 'AI Code Analyzer • Candidate Ranking System',
  'CrewAI': 'AI Code Analyzer Multi-Agent Swarm',
  'Docker': 'Containerized Dev & Production Parity',
  'REST APIs': 'Candidate Ranking System • Research Answer Bot',
  'JWT': 'Candidate Ranking System • Route Guards',
  'Google Cloud': 'Google Cybersecurity Certified Labs',
  'AWS': 'Cloud Architecture Workshop Labs',
  'HTML5': 'Accessible Portfolio • Capstone Interfaces',
  'CSS3': 'Glassmorphism Tokens • Fluid Responsive UI',
  'Git': 'All 6 Verifiable GitHub Repositories',
  'GitHub': 'Push-to-Deploy CI/CD Actions',
  'VS Code': 'LSP & Debugging Workbench',
  'Figma': 'Responsive Frame Wireframing',
  'Data Structures': 'Candidate Multi-Criteria Ranking Algorithm',
  'Algorithms': 'Candidate Scoring & Normalization Logic',
  'OOP': 'Pediatric HMS • Certificate Generation Architecture',
  'CI/CD': 'GitHub Actions Live Automated Deployments'
};

export function initTechnicalChannels() {
  const channelsContainer = document.getElementById('technical-channels-wrapper');
  const competenciesContainer = document.getElementById('strengths-grid');

  // 1. Render Core Competencies Horizontal Reel
  renderCoreCompetencies(competenciesContainer);

  if (!channelsContainer) return;

  let activeChannelId = 'all';
  let searchQuery = '';

  // 2. Initial Render of Technical Channels Hub
  renderChannelsHub();

  function renderChannelsHub() {
    channelsContainer.innerHTML = `
      <!-- Channel Switcher Ribbon & Search Toolbar -->
      <div class="tech-channels-toolbar">
        <div class="tech-channels-pills-scroll" role="tablist" aria-label="Technical Channels Navigation">
          ${technicalChannelsData.map((channel) => {
            const count = getChannelSkillCount(channel);
            const isActive = channel.id === activeChannelId;
            return `
              <button type="button" class="channel-pill-btn ${isActive ? 'active' : ''}" data-channel-id="${channel.id}" role="tab" aria-selected="${isActive}">
                <span class="channel-pill-icon">${channel.icon}</span>
                <span class="channel-pill-name">${channel.name}</span>
                <span class="channel-pill-count">${count}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="tech-channels-search-bar">
          <div class="channel-search-box">
            <svg class="channel-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="tech-channel-search-input" class="channel-search-input" placeholder="Search 25+ technologies by name or keyword..." value="${escapeHtml(searchQuery)}" aria-label="Search technologies">
            <button type="button" id="tech-channel-search-clear" class="channel-search-clear" style="display: ${searchQuery ? 'block' : 'none'};" aria-label="Clear search">✕</button>
          </div>
          <div class="channel-match-badge" id="channel-match-badge"></div>
        </div>
      </div>

      <!-- Reel Controls & Visual Header -->
      <div class="tech-reel-header-bar">
        <div class="reel-header-title-col">
          <div class="reel-hint-pill">
            <span class="pulse-dot"></span>
            <span>VISUAL TECH REEL // SCROLL LEFT TO RIGHT &bull; CLICK ICON FOR DETAILS</span>
          </div>
        </div>

        <div class="tech-reel-arrows">
          <button type="button" class="deck-arrow-btn" id="tech-reel-prev" aria-label="Scroll left">❮</button>
          <button type="button" class="deck-arrow-btn" id="tech-reel-next" aria-label="Scroll right">❯</button>
        </div>
      </div>

      <!-- Horizontal Visual Icon Scroll Deck (Left to Right) -->
      <div class="tech-icons-horizontal-deck" id="tech-icons-horizontal-deck">
        <!-- Rendered via renderTechIconTokens -->
      </div>
    `;

    // Attach Channel Switcher Listeners
    channelsContainer.querySelectorAll('.channel-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        playTactileClick();
        const nextId = btn.getAttribute('data-channel-id');
        if (nextId === activeChannelId) return;

        channelsContainer.querySelectorAll('.channel-pill-btn').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        activeChannelId = nextId;
        renderTechIconTokens(true);
        trackEvent('switch_tech_channel', { channel: nextId });
      });
    });

    // Attach Search Input Listeners
    const searchInput = document.getElementById('tech-channel-search-input');
    const searchClear = document.getElementById('tech-channel-search-clear');

    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchClear) searchClear.style.display = searchQuery ? 'block' : 'none';
      renderTechIconTokens(false);
    });

    searchClear?.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      searchClear.style.display = 'none';
      renderTechIconTokens(false);
      searchInput?.focus();
    });

    // Attach Reel Navigation Arrows
    const deck = document.getElementById('tech-icons-horizontal-deck');
    const prevBtn = document.getElementById('tech-reel-prev');
    const nextBtn = document.getElementById('tech-reel-next');
    setupHorizontalReel(deck, prevBtn, nextBtn);

    renderTechIconTokens(false);
  }

  function renderTechIconTokens(animate = false) {
    const deck = document.getElementById('tech-icons-horizontal-deck');
    const badge = document.getElementById('channel-match-badge');
    if (!deck) return;

    const channel = technicalChannelsData.find((c) => c.id === activeChannelId) || technicalChannelsData[0];
    let skills = getFilteredSkills(channel);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      skills = skills.filter((s) =>
        s.name.toLowerCase().includes(q) ||
        (s.superpower && s.superpower.toLowerCase().includes(q)) ||
        (s.desc && s.desc.toLowerCase().includes(q)) ||
        (s.category && s.category.toLowerCase().includes(q))
      );
    }

    if (badge) {
      badge.textContent = `${skills.length} Technology Node${skills.length === 1 ? '' : 's'}`;
    }

    if (skills.length === 0) {
      deck.innerHTML = `
        <div class="tech-empty-token-state">
          <div style="font-size:2rem; margin-bottom:0.4rem;">🔍</div>
          <div style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">No matching technologies</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Try a different keyword or reset search query.</div>
        </div>
      `;
      return;
    }

    deck.innerHTML = skills.map((skill) => `
      <div class="tech-icon-token" data-skill-name="${escapeHtml(skill.name)}" role="button" tabindex="0" title="Click to view details for ${escapeHtml(skill.name)}" style="--token-accent: ${skill.color};">
        <div class="token-glow-top" style="background: ${skill.color};"></div>

        <div class="token-chassis" style="box-shadow: 0 0 20px ${skill.color}33; border-color: ${skill.color}66;">
          <div class="token-svg-icon" style="color: ${skill.color};">
            ${skill.iconSvg || '<span>✦</span>'}
          </div>
        </div>

        <h4 class="token-tech-name">${escapeHtml(skill.name)}</h4>
        <span class="token-tech-cat">${escapeHtml(skill.category)}</span>

        <span class="badge ${skill.badgeClass} token-tech-badge">${escapeHtml(skill.level)}</span>

        <div class="token-inspect-hint">
          <span>Inspect Details</span>
          <span class="hint-arrow">▾</span>
        </div>
      </div>
    `).join('');

    // Attach Click Handlers to open Holographic Tech Inspector Modal
    deck.querySelectorAll('.tech-icon-token').forEach((token) => {
      const clickHandler = () => {
        playTactileClick();
        const skillName = token.getAttribute('data-skill-name');
        const skill = skillsData.find((s) => s.name === skillName);
        if (skill) {
          openTechInspectorModal(skill);
          trackEvent('inspect_tech_token', { skill: skillName });
        }
      };

      token.addEventListener('click', clickHandler);
      token.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          clickHandler();
        }
      });
    });

    if (animate) {
      gsap.fromTo(deck.children,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.025, ease: 'power2.out' }
      );
    }
  }

  function getFilteredSkills(channel) {
    if (!channel || channel.id === 'all') return skillsData;
    return skillsData.filter((s) => s.category.toLowerCase().includes(channel.categoryKey.toLowerCase()));
  }

  function getChannelSkillCount(channel) {
    return getFilteredSkills(channel).length;
  }
}

/**
 * Open Holographic Tech Inspector Modal upon Clicking an Icon
 */
function openTechInspectorModal(skill) {
  let modal = document.getElementById('tech-inspector-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'tech-inspector-modal';
    modal.className = 'tech-inspector-modal-backdrop';
    document.body.appendChild(modal);
  }

  const projectProof = PROJECT_PROVENANCE_MAP[skill.name] || 'Applied across verified academic & capstone prototypes';

  modal.innerHTML = `
    <div class="tech-inspector-card" role="dialog" aria-modal="true" aria-label="Technology details for ${escapeHtml(skill.name)}" style="--modal-accent: ${skill.color};">
      <button type="button" class="inspector-close-btn" id="tech-inspector-close" aria-label="Close details">✕</button>

      <div class="inspector-ambient-glow" style="background: radial-gradient(circle, ${skill.color}28 0%, transparent 70%);"></div>

      <div class="inspector-header">
        <div class="inspector-chassis" style="box-shadow: 0 0 24px ${skill.color}44; border-color: ${skill.color}77;">
          <div class="inspector-svg" style="color: ${skill.color};">
            ${skill.iconSvg || '<span>✦</span>'}
          </div>
        </div>
        <div class="inspector-title-col">
          <div class="inspector-cat-tag">${escapeHtml(skill.adCategory || skill.category)}</div>
          <h3 class="inspector-tech-title">${escapeHtml(skill.name)}</h3>
          <span class="badge ${skill.badgeClass} inspector-level-badge">${escapeHtml(skill.level)}</span>
        </div>
      </div>

      <div class="inspector-superpower-pill" style="color: ${skill.color}; background: ${skill.color}14; border-color: ${skill.color}44;">
        ✦ ${escapeHtml(skill.superpower || 'Core Engineering Component')}
      </div>

      <p class="inspector-desc">${escapeHtml(skill.desc)}</p>

      ${skill.adPitch ? `<p class="inspector-pitch">"${escapeHtml(skill.adPitch)}"</p>` : ''}

      <div class="inspector-provenance-box">
        <div class="provenance-header">
          <span class="provenance-icon">🚀</span>
          <span class="provenance-title">VERIFIED PROJECT PROVENANCE</span>
        </div>
        <div class="provenance-val">${escapeHtml(projectProof)}</div>
      </div>

      <div class="inspector-actions">
        <button type="button" class="btn btn-primary btn-sm btn-inspector-filter" data-skill="${escapeHtml(skill.name)}">
          <span>Filter Matching Projects (${escapeHtml(skill.name)})</span>
          <span>↓</span>
        </button>
        <button type="button" class="btn btn-secondary btn-sm btn-inspector-cli" data-skill="${escapeHtml(skill.name)}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          <span>CLI</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (typeof window.lockScroll === 'function') window.lockScroll();

  const close = () => {
    modal.classList.remove('active');
    if (typeof window.unlockScroll === 'function') window.unlockScroll();
  };

  document.getElementById('tech-inspector-close')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  const escHandler = (e) => {
    if (e.key === 'Escape') {
      close();
      window.removeEventListener('keydown', escHandler);
    }
  };
  window.addEventListener('keydown', escHandler);

  // Filter projects action
  modal.querySelector('.btn-inspector-filter')?.addEventListener('click', () => {
    close();
    if (typeof window.filterProjectsBySkill === 'function') {
      window.filterProjectsBySkill(skill.name);
    }
  });

  // CLI terminal query action
  modal.querySelector('.btn-inspector-cli')?.addEventListener('click', () => {
    close();
    const termInput = document.getElementById('terminal-input');
    const termWindow = document.querySelector('.terminal-window');
    if (termInput) {
      termInput.value = `skills ${skill.name.toLowerCase()}`;
      termWindow?.scrollIntoView({ behavior: 'smooth' });
      termInput.focus();
      termInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    }
  });

  // GSAP Pop-in animation
  const card = modal.querySelector('.tech-inspector-card');
  if (card) {
    gsap.fromTo(card,
      { scale: 0.92, opacity: 0, y: 15 },
      { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.5)' }
    );
  }
}

/**
 * Render Core Competencies as Left-to-Right Horizontal Icon Reel with Click-to-Inspect
 */
export function renderCoreCompetencies(container) {
  if (!container) return;

  const parent = container.closest('.competencies-matrix-wrapper') || container.parentElement;

  // Insert Horizontal Reel Header with Arrows if not already there
  let reelControls = parent.querySelector('.competency-reel-controls');
  if (!reelControls) {
    reelControls = document.createElement('div');
    reelControls.className = 'competency-reel-controls';
    reelControls.innerHTML = `
      <div class="reel-hint-pill">
        <span class="pulse-dot"></span>
        <span>CORE COMPETENCIES // SCROLL LEFT TO RIGHT &bull; CLICK ICON FOR PROOF</span>
      </div>
      <div class="competency-reel-arrows">
        <button type="button" class="deck-arrow-btn" id="comp-reel-prev" aria-label="Scroll left">❮</button>
        <button type="button" class="deck-arrow-btn" id="comp-reel-next" aria-label="Scroll right">❯</button>
      </div>
    `;
    container.parentNode.insertBefore(reelControls, container);
  }

  container.className = 'competencies-horizontal-deck';

  container.innerHTML = personalStrengths.map((comp) => `
    <div class="competency-icon-token" data-comp-id="${comp.id}" role="button" tabindex="0" title="Click to view verified evidence for ${escapeHtml(comp.name)}" style="--token-accent: ${comp.color || '#38bdf8'};">
      <div class="token-glow-top" style="background: ${comp.color || '#38bdf8'};"></div>

      <div class="comp-token-header">
        <span class="comp-token-discipline">${escapeHtml(comp.discipline || 'Discipline')}</span>
        <span class="badge badge-outline comp-token-badge" style="border-color: ${comp.color}55; color: ${comp.color};">${escapeHtml(comp.badge || 'Verified')}</span>
      </div>

      <div class="comp-token-chassis" style="box-shadow: 0 0 20px ${comp.color}33; border-color: ${comp.color}55;">
        <span class="comp-token-emoji">${comp.icon || '✦'}</span>
      </div>

      <h4 class="comp-token-title">${escapeHtml(comp.name)}</h4>
      <p class="comp-token-short-desc">${escapeHtml(comp.desc)}</p>

      <div class="token-inspect-hint">
        <span>View Proof & Context</span>
        <span class="hint-arrow">▾</span>
      </div>
    </div>
  `).join('');

  // Attach Click Handlers to open Holographic Competency Inspector Modal
  container.querySelectorAll('.competency-icon-token').forEach((token) => {
    const clickHandler = () => {
      playTactileClick();
      const compId = token.getAttribute('data-comp-id');
      const comp = personalStrengths.find((c) => c.id === compId);
      if (comp) {
        openCompetencyInspectorModal(comp);
        trackEvent('inspect_competency_token', { competency: comp.name });
      }
    };

    token.addEventListener('click', clickHandler);
    token.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
  });

  // Attach Reel Navigation Arrows
  const prevBtn = document.getElementById('comp-reel-prev');
  const nextBtn = document.getElementById('comp-reel-next');
  setupHorizontalReel(container, prevBtn, nextBtn);
}

/**
 * Open Holographic Competency Inspector Modal upon Clicking an Icon
 */
function openCompetencyInspectorModal(comp) {
  let modal = document.getElementById('competency-inspector-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'competency-inspector-modal';
    modal.className = 'tech-inspector-modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="tech-inspector-card" role="dialog" aria-modal="true" aria-label="Competency details for ${escapeHtml(comp.name)}" style="--modal-accent: ${comp.color || '#38bdf8'};">
      <button type="button" class="inspector-close-btn" id="comp-inspector-close" aria-label="Close details">✕</button>

      <div class="inspector-ambient-glow" style="background: radial-gradient(circle, ${comp.color || '#38bdf8'}28 0%, transparent 70%);"></div>

      <div class="inspector-header">
        <div class="inspector-chassis" style="box-shadow: 0 0 24px ${comp.color || '#38bdf8'}44; border-color: ${comp.color || '#38bdf8'}77;">
          <span style="font-size: 1.85rem;">${comp.icon || '✦'}</span>
        </div>
        <div class="inspector-title-col">
          <div class="inspector-cat-tag">${escapeHtml(comp.discipline || 'Engineering Competency')}</div>
          <h3 class="inspector-tech-title">${escapeHtml(comp.name)}</h3>
          <span class="badge badge-outline" style="border-color: ${comp.color || '#38bdf8'}; color: ${comp.color || '#38bdf8'};">${escapeHtml(comp.badge || 'Verified')}</span>
        </div>
      </div>

      <p class="inspector-desc" style="font-size:0.95rem; margin-top:0.75rem;">${escapeHtml(comp.desc)}</p>

      <div class="inspector-provenance-box" style="margin-top:1.25rem;">
        <div class="provenance-header">
          <span class="provenance-icon">✓</span>
          <span class="provenance-title" style="color:var(--accent-emerald);">VERIFIED PROOF &amp; REAL-WORLD CONTEXT</span>
        </div>
        <div class="provenance-val" style="color:var(--text-primary);">${escapeHtml(comp.evidence || 'Demonstrated through academic milestones and project delivery.')}</div>
      </div>

      <div class="competency-modal-tags">
        <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted); display:block; margin-bottom:0.4rem;">SKILL APPLICATION VECTORS:</span>
        <div style="display:flex; flex-wrap:wrap; gap:0.45rem;">
          ${(comp.tags || []).map((t) => `<span class="badge badge-outline" style="font-size:0.72rem;">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (typeof window.lockScroll === 'function') window.lockScroll();

  const close = () => {
    modal.classList.remove('active');
    if (typeof window.unlockScroll === 'function') window.unlockScroll();
  };

  document.getElementById('comp-inspector-close')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  const escHandler = (e) => {
    if (e.key === 'Escape') {
      close();
      window.removeEventListener('keydown', escHandler);
    }
  };
  window.addEventListener('keydown', escHandler);

  const card = modal.querySelector('.tech-inspector-card');
  if (card) {
    gsap.fromTo(card,
      { scale: 0.92, opacity: 0, y: 15 },
      { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.5)' }
    );
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
