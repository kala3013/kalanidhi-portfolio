/**
 * Technical Channels & Core Competencies Matrix
 * Fluid, tactile architectural explorer with zero auto-scrolling tickers or rigid ad boxes.
 * Features:
 *  - Interactive Channel Switcher with Live Counts
 *  - Architectural Channel Dossier with Engineering Metrics
 *  - Search & Keyword Filtering across 30+ Stacks
 *  - Tactile Tech Cards with Real-World Project Provenance
 *  - Core Competencies Matrix with Verifiable Evidence
 */

import { skillsData, technicalChannelsData, personalStrengths } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';
import { playTactileClick } from './audioEffects.js';
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

  // 1. Render Core Competencies in About Section
  renderCoreCompetencies(competenciesContainer);

  if (!channelsContainer) return;

  let activeChannelId = 'all';
  let searchQuery = '';

  // 2. Initial Render of Technical Channels Hub
  renderChannelsHub();

  function renderChannelsHub() {
    channelsContainer.innerHTML = `
      <!-- Channel Switcher Ribbon & Live Search Toolbar -->
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

        <!-- Real-Time Search Bar -->
        <div class="tech-channels-search-bar">
          <div class="channel-search-box">
            <svg class="channel-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="tech-channel-search-input" class="channel-search-input" placeholder="Search 25+ technologies by name, superpower, or category..." value="${escapeHtml(searchQuery)}" aria-label="Search technologies">
            <button type="button" id="tech-channel-search-clear" class="channel-search-clear" style="display: ${searchQuery ? 'block' : 'none'};" aria-label="Clear search">✕</button>
          </div>
          <div class="channel-match-badge" id="channel-match-badge">
            <!-- Dynamically populated count -->
          </div>
        </div>
      </div>

      <!-- Active Channel Architectural Dossier (Banner) -->
      <div class="channel-dossier-card" id="channel-dossier-card">
        <!-- Rendered via renderChannelDossier -->
      </div>

      <!-- Interactive Tech Cards Bento Matrix -->
      <div class="tech-cards-bento-grid" id="tech-cards-bento-grid">
        <!-- Rendered via renderTechCards -->
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
        renderActiveChannel(true);
        trackEvent('switch_tech_channel', { channel: nextId });
      });
    });

    // Attach Search Input Listeners
    const searchInput = document.getElementById('tech-channel-search-input');
    const searchClear = document.getElementById('tech-channel-search-clear');

    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchClear) searchClear.style.display = searchQuery ? 'block' : 'none';
      renderTechCards(false);
    });

    searchClear?.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      searchClear.style.display = 'none';
      renderTechCards(false);
      searchInput?.focus();
    });

    renderActiveChannel(false);
  }

  function renderActiveChannel(animate = false) {
    renderChannelDossier(animate);
    renderTechCards(animate);
  }

  function renderChannelDossier(animate = false) {
    const dossierCard = document.getElementById('channel-dossier-card');
    if (!dossierCard) return;

    const channel = technicalChannelsData.find((c) => c.id === activeChannelId) || technicalChannelsData[0];
    const skillsInChannel = getFilteredSkills(channel);

    dossierCard.innerHTML = `
      <div class="dossier-ambient-glow" style="background: radial-gradient(circle, ${channel.color}22 0%, transparent 70%);"></div>

      <div class="dossier-header-row">
        <div class="dossier-lead">
          <span class="dossier-channel-icon">${channel.icon}</span>
          <div>
            <div class="dossier-channel-num">ARCHITECTURAL CHANNEL // ${channel.id.toUpperCase()}</div>
            <h3 class="dossier-channel-title">${escapeHtml(channel.name)}</h3>
          </div>
        </div>

        <div class="dossier-metric-badge" style="border-color: ${channel.color}55; color: ${channel.color}; background: ${channel.color}11;">
          <span class="metric-pulse-dot" style="background: ${channel.color};"></span>
          <span>${escapeHtml(channel.metric)}</span>
        </div>
      </div>

      <p class="dossier-tagline">
        "${escapeHtml(channel.tagline)}"
      </p>

      <p class="dossier-overview">
        ${escapeHtml(channel.overview)}
      </p>
    `;

    if (animate) {
      gsap.fromTo(dossierCard,
        { opacity: 0.7, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }

  function renderTechCards(animate = false) {
    const grid = document.getElementById('tech-cards-bento-grid');
    const badge = document.getElementById('channel-match-badge');
    if (!grid) return;

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
      grid.innerHTML = `
        <div class="tech-empty-state">
          <div style="font-size:2rem; margin-bottom:0.5rem;">🔍</div>
          <div style="font-weight:700; color:var(--text-primary); margin-bottom:0.35rem;">No matching technologies found</div>
          <div style="font-size:0.85rem; color:var(--text-muted);">Try a different keyword or reset the search query.</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = skills.map((skill) => {
      const projectProof = PROJECT_PROVENANCE_MAP[skill.name] || 'Applied across verified academic & capstone prototypes';
      return `
        <article class="tech-bento-card" data-skill-name="${escapeHtml(skill.name)}" style="--card-accent: ${skill.color};">
          <div class="tech-bento-header">
            <div class="tech-bento-chassis" style="box-shadow: 0 0 16px ${skill.color}25; border-color: ${skill.color}55;">
              <div class="tech-bento-icon" style="color: ${skill.color};">
                ${skill.iconSvg || '<span>✦</span>'}
              </div>
            </div>
            <div class="tech-bento-title-col">
              <h4 class="tech-bento-name">${escapeHtml(skill.name)}</h4>
              <span class="tech-bento-cat">${escapeHtml(skill.category)}</span>
            </div>
            <span class="badge ${skill.badgeClass} tech-bento-level">${escapeHtml(skill.level)}</span>
          </div>

          <div class="tech-bento-body">
            <div class="tech-bento-superpower" style="color: ${skill.color}; background: ${skill.color}11; border-color: ${skill.color}33;">
              ✦ ${escapeHtml(skill.superpower || 'Core Engineering Component')}
            </div>

            <p class="tech-bento-desc">${escapeHtml(skill.desc)}</p>

            <div class="tech-bento-provenance">
              <span class="provenance-label">PROJECT PROVENANCE:</span>
              <span class="provenance-text">${escapeHtml(projectProof)}</span>
            </div>
          </div>

          <div class="tech-bento-footer">
            <button type="button" class="btn-bento-filter" data-skill="${escapeHtml(skill.name)}" title="Filter verified projects using ${escapeHtml(skill.name)}">
              <span>View Projects</span>
              <span class="bento-arrow">▹</span>
            </button>
            <button type="button" class="btn-bento-term" data-skill="${escapeHtml(skill.name)}" title="Query in Developer Terminal">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
              <span>CLI</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach Click Handlers
    grid.querySelectorAll('.btn-bento-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        playTactileClick();
        const skillName = btn.getAttribute('data-skill');
        if (typeof window.filterProjectsBySkill === 'function') {
          window.filterProjectsBySkill(skillName);
        }
      });
    });

    grid.querySelectorAll('.btn-bento-term').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        playTactileClick();
        const skillName = btn.getAttribute('data-skill');
        const termInput = document.getElementById('terminal-input');
        const termWindow = document.querySelector('.terminal-window');
        if (termInput) {
          termInput.value = `skills ${skillName.toLowerCase()}`;
          termWindow?.scrollIntoView({ behavior: 'smooth' });
          termInput.focus();
          termInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        }
      });
    });

    // Clicking card directly filters projects
    grid.querySelectorAll('.tech-bento-card').forEach((card) => {
      card.addEventListener('click', () => {
        playTactileClick();
        const skillName = card.getAttribute('data-skill-name');
        if (typeof window.filterProjectsBySkill === 'function') {
          window.filterProjectsBySkill(skillName);
        }
      });
    });

    // Attach Spotlight Mouse Move
    grid.querySelectorAll('.tech-bento-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);
      });
    });

    if (animate) {
      gsap.fromTo(grid.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.03, ease: 'power2.out' }
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
 * Render Core Competencies & Strengths Matrix with Verifiable Evidence
 */
export function renderCoreCompetencies(container) {
  if (!container) return;

  container.innerHTML = personalStrengths.map((comp) => `
    <article class="competency-bento-card" style="--comp-color: ${comp.color || '#38bdf8'};">
      <div class="competency-top-line" style="background: ${comp.color || '#38bdf8'};"></div>

      <div class="competency-card-header">
        <div class="competency-icon-chassis" style="box-shadow: 0 0 16px ${comp.color}25; border-color: ${comp.color}44;">
          <span class="competency-icon">${comp.icon || '✦'}</span>
        </div>
        <div class="competency-title-col">
          <span class="competency-discipline">${escapeHtml(comp.discipline || 'Engineering Discipline')}</span>
          <h4 class="competency-name">${escapeHtml(comp.name)}</h4>
        </div>
        <span class="badge badge-outline competency-badge" style="border-color: ${comp.color}55; color: ${comp.color};">
          ${escapeHtml(comp.badge || 'Verified')}
        </span>
      </div>

      <p class="competency-desc">${escapeHtml(comp.desc)}</p>

      <div class="competency-evidence-box">
        <div class="evidence-header">
          <span class="evidence-check">✓</span>
          <span class="evidence-label">VERIFIED PROOF & CONTEXT:</span>
        </div>
        <p class="evidence-text">${escapeHtml(comp.evidence || 'Demonstrated across curriculum milestones and engineering deliverables.')}</p>
      </div>

      <div class="competency-tags-row">
        ${(comp.tags || []).map((t) => `<span class="competency-tag-pill">${escapeHtml(t)}</span>`).join('')}
      </div>
    </article>
  `).join('');

  // Attach mouse spotlight
  container.querySelectorAll('.competency-bento-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    });
  });
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
