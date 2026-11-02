/**
 * Live Skills Billboard & Running Ads Engine
 * Plays skills dynamically like running digital billboard commercials one by one.
 * Includes interactive playback controls, dual-direction infinite marquee streams,
 * and seamless project filter synchronization.
 */

import { skillsData } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';
import { playAdTransition, playAdTune, playTactileClick } from './audioEffects.js';
import gsap from 'gsap';

export function initSkillsAdBillboard() {
  const billboardContainer = document.getElementById('skills-billboard-container');
  const marqueeContainer1 = document.getElementById('skills-marquee-track-1');
  const marqueeContainer2 = document.getElementById('skills-marquee-track-2');
  const skillsGridContainer = document.getElementById('skills-grid');
  const categoryButtons = document.querySelectorAll('.skill-category-btn');

  if (!billboardContainer) return;

  let currentIndex = 0;
  let isPlaying = true;
  let speedMultiplier = 1;
  const baseDuration = 4800; // 4.8 seconds per ad
  let startTime = performance.now();
  let elapsedBeforePause = 0;
  let isHovered = false;
  let animFrameId = null;

  // 1. Initial Render of Dual Running Marquees
  renderMarquees();

  // 2. Render Initial Billboard Ad
  renderBillboardAd(currentIndex, false);

  // 3. Render Channel Guide (Filterable Grid)
  renderSkillsGrid('All');

  // 4. Start Autoplay Animation Loop
  startTimerLoop();

  // -------------------------------------------------------------------------
  // Core Autoplay Loop with Smooth Progress
  // -------------------------------------------------------------------------
  function startTimerLoop() {
    startTime = performance.now() - elapsedBeforePause;

    function loop(now) {
      if (isPlaying && !isHovered) {
        const currentDuration = baseDuration / speedMultiplier;
        const elapsed = now - startTime;
        const progress = Math.min((elapsed / currentDuration) * 100, 100);

        const progressBar = document.getElementById('billboard-progress-fill');
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }

        if (elapsed >= currentDuration) {
          nextAd(false);
          startTime = performance.now();
          elapsedBeforePause = 0;
        }
      }
      animFrameId = requestAnimationFrame(loop);
    }

    if (animFrameId) cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(loop);
  }

  function pauseTimer() {
    elapsedBeforePause = performance.now() - startTime;
  }

  function resumeTimer() {
    startTime = performance.now() - elapsedBeforePause;
  }

  function goToAd(index, userInitiated = true) {
    if (index < 0) {
      currentIndex = skillsData.length - 1;
    } else if (index >= skillsData.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    startTime = performance.now();
    elapsedBeforePause = 0;

    const progressBar = document.getElementById('billboard-progress-fill');
    if (progressBar) {
      progressBar.style.width = '0%';
    }

    renderBillboardAd(currentIndex, true);

    if (userInitiated) {
      playAdTune();
      trackEvent('skill_ad_tuned', { skill: skillsData[currentIndex].name });
    } else {
      playAdTransition();
    }
  }

  function nextAd(userInitiated = true) {
    goToAd(currentIndex + 1, userInitiated);
  }

  function prevAd(userInitiated = true) {
    goToAd(currentIndex - 1, userInitiated);
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    const playBtn = document.getElementById('billboard-play-btn');
    if (playBtn) {
      playBtn.innerHTML = isPlaying
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg><span>PAUSE</span>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>PLAY</span>`;
      playBtn.setAttribute('aria-label', isPlaying ? 'Pause ad stream' : 'Play ad stream');
    }

    if (isPlaying) {
      resumeTimer();
    } else {
      pauseTimer();
    }
    playTactileClick();
  }

  function cycleSpeed() {
    if (speedMultiplier === 1) speedMultiplier = 1.5;
    else if (speedMultiplier === 1.5) speedMultiplier = 2;
    else speedMultiplier = 1;

    const speedBtn = document.getElementById('billboard-speed-btn');
    if (speedBtn) {
      speedBtn.textContent = `${speedMultiplier}x`;
    }
    startTime = performance.now();
    elapsedBeforePause = 0;
    playTactileClick();
  }

  // -------------------------------------------------------------------------
  // Render the Live Billboard Stage
  // -------------------------------------------------------------------------
  function renderBillboardAd(index, animate = true) {
    const skill = skillsData[index];
    if (!skill) return;

    billboardContainer.innerHTML = `
      <div class="billboard-stage" id="billboard-stage-card">
        <!-- Ambient Neon Glow behind the stage -->
        <div class="billboard-ambient-glow" style="background: radial-gradient(circle, ${skill.color}22 0%, transparent 70%);"></div>

        <!-- Top Broadcast Header & Controls HUD -->
        <div class="billboard-top-hud">
          <div class="billboard-live-badge">
            <span class="live-pulse-dot"></span>
            <span class="live-text">LIVE BROADCAST // TECH AD SPOTLIGHT</span>
          </div>

          <div class="billboard-spot-count">
            SPOT <span class="spot-index">${String(index + 1).padStart(2, '0')}</span> / ${String(skillsData.length).padStart(2, '0')}
          </div>

          <!-- Interactive Playback Controls -->
          <div class="billboard-controls-cluster">
            <button type="button" class="billboard-ctrl-btn" id="billboard-prev-btn" title="Previous Ad Spot (←)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button type="button" class="billboard-ctrl-btn btn-play-pause" id="billboard-play-btn" title="Toggle Auto Play/Pause">
              ${isPlaying 
                ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg><span>PAUSE</span>`
                : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>PLAY</span>`}
            </button>
            <button type="button" class="billboard-ctrl-btn" id="billboard-next-btn" title="Next Ad Spot (→)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <button type="button" class="billboard-ctrl-btn billboard-speed-btn" id="billboard-speed-btn" title="Cycle Autoplay Speed">
              ${speedMultiplier}x
            </button>
          </div>
        </div>

        <!-- Ad Duration Timer Progress Bar -->
        <div class="billboard-progress-track">
          <div class="billboard-progress-fill" id="billboard-progress-fill" style="background: linear-gradient(90deg, ${skill.color}, #38bdf8);"></div>
        </div>

        <!-- Main Screen Content Area -->
        <div class="billboard-screen-body">
          <div class="billboard-left-column">
            <div class="billboard-icon-chassis" style="box-shadow: 0 0 25px ${skill.color}33; border-color: ${skill.color}66;">
              <div class="billboard-icon-svg" style="color: ${skill.color};">
                ${skill.iconSvg || `<span style="font-size: 2rem;">⚡</span>`}
              </div>
            </div>
            <div class="billboard-category-tag">${escapeHtml(skill.adCategory || skill.category)}</div>
            <div class="badge ${skill.badgeClass} billboard-level-badge">${escapeHtml(skill.level)}</div>
          </div>

          <div class="billboard-center-column">
            <div class="billboard-title-row">
              <h3 class="billboard-tech-title" style="text-shadow: 0 0 20px ${skill.color}44;">
                ${escapeHtml(skill.name)}
              </h3>
              <span class="billboard-superpower-pill" style="border-color: ${skill.color}55; color: ${skill.color}; background: ${skill.color}11;">
                ✦ ${escapeHtml(skill.superpower || 'Core Engineering Pillar')}
              </span>
            </div>

            <p class="billboard-ad-tagline">
              "${escapeHtml(skill.adTagline || skill.desc)}"
            </p>

            <p class="billboard-ad-pitch">
              ${escapeHtml(skill.adPitch || skill.desc)}
            </p>

            <!-- 3 Architectural Specs / Highlights -->
            <div class="billboard-specs-grid">
              ${(skill.adSpecs || ['Production Ready', 'Modular Logic', 'High Reliability']).map((spec, sIdx) => `
                <div class="billboard-spec-card">
                  <div class="spec-label">SPEC 0${sIdx + 1}</div>
                  <div class="spec-val">${escapeHtml(spec)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Interactive Direct Action Bar -->
        <div class="billboard-action-bar">
          <div class="billboard-action-info">
            <span class="hint-pulse">💡</span>
            <span>Feature Ad for <strong>${escapeHtml(skill.name)}</strong> is active.</span>
          </div>

          <div class="billboard-action-buttons">
            <button type="button" class="btn btn-primary btn-sm btn-filter-this-skill" data-skill="${escapeHtml(skill.name)}">
              <span>Filter Verified Projects (${escapeHtml(skill.name)})</span>
              <span>↓</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm btn-terminal-skill" data-skill="${escapeHtml(skill.name)}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
              <span>Query in Terminal</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach listener events
    const stageCard = document.getElementById('billboard-stage-card');
    if (stageCard) {
      stageCard.addEventListener('mouseenter', () => {
        isHovered = true;
      });
      stageCard.addEventListener('mouseleave', () => {
        isHovered = false;
      });
    }

    document.getElementById('billboard-prev-btn')?.addEventListener('click', () => prevAd(true));
    document.getElementById('billboard-next-btn')?.addEventListener('click', () => nextAd(true));
    document.getElementById('billboard-play-btn')?.addEventListener('click', () => togglePlay());
    document.getElementById('billboard-speed-btn')?.addEventListener('click', () => cycleSpeed());

    // Filter project action
    billboardContainer.querySelector('.btn-filter-this-skill')?.addEventListener('click', (e) => {
      const sName = e.currentTarget.getAttribute('data-skill');
      if (typeof window.filterProjectsBySkill === 'function') {
        window.filterProjectsBySkill(sName);
      }
    });

    // Query terminal action
    billboardContainer.querySelector('.btn-terminal-skill')?.addEventListener('click', (e) => {
      const sName = e.currentTarget.getAttribute('data-skill');
      const termInput = document.getElementById('terminal-input');
      const termWindow = document.querySelector('.terminal-window');
      if (termInput) {
        termInput.value = `skills ${sName.toLowerCase()}`;
        termWindow?.scrollIntoView({ behavior: 'smooth' });
        termInput.focus();
        termInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      }
    });

    // GSAP cinematic card entrance
    if (animate && stageCard) {
      gsap.fromTo(stageCard,
        { scale: 0.985, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
  }

  // -------------------------------------------------------------------------
  // Render Dual Infinite Running Ads Marquees
  // -------------------------------------------------------------------------
  function renderMarquees() {
    if (!marqueeContainer1 || !marqueeContainer2) return;

    // Split skills into two lists
    const mid = Math.ceil(skillsData.length / 2);
    const setA = skillsData.slice(0, mid);
    const setB = skillsData.slice(mid);

    // Duplicate sets for infinite seamless CSS scroll
    const itemsA = [...setA, ...setA, ...setA];
    const itemsB = [...setB, ...setB, ...setB];

    marqueeContainer1.innerHTML = itemsA.map((skill, idx) => `
      <div class="ad-ticker-card" data-skill-name="${escapeHtml(skill.name)}" role="button" tabindex="0" title="Click to tune ad to ${escapeHtml(skill.name)}">
        <span class="ad-ticker-badge" style="background: ${skill.color}22; color: ${skill.color}; border: 1px solid ${skill.color}55;">
          ⚡ AD #${String((idx % setA.length) + 1).padStart(2, '0')}
        </span>
        <div class="ad-ticker-icon" style="color: ${skill.color};">
          ${skill.iconSvg || '<span>•</span>'}
        </div>
        <span class="ad-ticker-name">${escapeHtml(skill.name)}</span>
        <span class="ad-ticker-power">${escapeHtml(skill.superpower ? skill.superpower.split('&')[0].trim() : skill.category)}</span>
        <span class="ad-ticker-play-indicator">▶</span>
      </div>
    `).join('');

    marqueeContainer2.innerHTML = itemsB.map((skill, idx) => `
      <div class="ad-ticker-card" data-skill-name="${escapeHtml(skill.name)}" role="button" tabindex="0" title="Click to tune ad to ${escapeHtml(skill.name)}">
        <span class="ad-ticker-badge" style="background: ${skill.color}22; color: ${skill.color}; border: 1px solid ${skill.color}55;">
          🚀 AD #${String((idx % setB.length) + mid + 1).padStart(2, '0')}
        </span>
        <div class="ad-ticker-icon" style="color: ${skill.color};">
          ${skill.iconSvg || '<span>•</span>'}
        </div>
        <span class="ad-ticker-name">${escapeHtml(skill.name)}</span>
        <span class="ad-ticker-power">${escapeHtml(skill.superpower ? skill.superpower.split('&')[0].trim() : skill.category)}</span>
        <span class="ad-ticker-play-indicator">▶</span>
      </div>
    `).join('');

    // Attach click listeners to all ticker cards
    document.querySelectorAll('.ad-ticker-card').forEach((card) => {
      const clickHandler = () => {
        const skillName = card.getAttribute('data-skill-name');
        const targetIdx = skillsData.findIndex((s) => s.name === skillName);
        if (targetIdx !== -1) {
          goToAd(targetIdx, true);
          // Scroll smoothly to billboard stage if out of view
          const stage = document.getElementById('skills-billboard-container');
          if (stage) {
            const rect = stage.getBoundingClientRect();
            if (rect.top < -100 || rect.bottom > window.innerHeight + 100) {
              stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }
        }
      };

      card.addEventListener('click', clickHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          clickHandler();
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // Render Channel Guide (Categorized Skills Grid)
  // -------------------------------------------------------------------------
  function renderSkillsGrid(category = 'All') {
    if (!skillsGridContainer) return;

    const filtered = category === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category.toLowerCase().includes(category.toLowerCase()));

    skillsGridContainer.innerHTML = filtered.map((skill) => `
      <div class="skill-card-modern" data-skill="${escapeHtml(skill.name)}" style="--skill-color: ${skill.color};">
        <div class="skill-modern-header">
          <div class="skill-modern-icon" style="color: ${skill.color}; box-shadow: 0 0 14px ${skill.color}33;">
            ${skill.iconSvg || '<span>✦</span>'}
          </div>
          <div>
            <div class="skill-modern-title">${escapeHtml(skill.name)}</div>
            <div class="skill-modern-cat">${escapeHtml(skill.category)}</div>
          </div>
          <span class="badge ${skill.badgeClass} skill-modern-badge">${escapeHtml(skill.level)}</span>
        </div>

        <p class="skill-modern-desc">${escapeHtml(skill.desc)}</p>

        <div class="skill-modern-actions">
          <button type="button" class="btn-tune-ad" data-skill="${escapeHtml(skill.name)}" title="Watch this technology's running ad">
            <span>📺 Tune Ad</span>
          </button>
          <button type="button" class="btn-filter-proj" data-skill="${escapeHtml(skill.name)}" title="Filter projects using ${escapeHtml(skill.name)}">
            <span>Filter Projects ▹</span>
          </button>
        </div>
      </div>
    `).join('');

    // Attach listeners
    skillsGridContainer.querySelectorAll('.btn-tune-ad').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const skillName = btn.getAttribute('data-skill');
        const sIdx = skillsData.findIndex((s) => s.name === skillName);
        if (sIdx !== -1) {
          goToAd(sIdx, true);
          document.getElementById('skills-billboard-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    skillsGridContainer.querySelectorAll('.btn-filter-proj, .skill-card-modern').forEach((el) => {
      el.addEventListener('click', (e) => {
        // If clicked tune ad, ignore
        if (e.target.closest('.btn-tune-ad')) return;
        const skillName = el.getAttribute('data-skill');
        if (skillName && typeof window.filterProjectsBySkill === 'function') {
          window.filterProjectsBySkill(skillName);
        }
      });
    });
  }

  // Category buttons
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category') || 'All';
      renderSkillsGrid(cat);
      playTactileClick();
    });
  });

  // Expose global helper to tune ad directly from anywhere (terminal, search, etc.)
  window.tuneSkillAd = (skillName) => {
    const sIdx = skillsData.findIndex((s) => s.name.toLowerCase() === (skillName || '').toLowerCase());
    if (sIdx !== -1) {
      goToAd(sIdx, true);
      document.getElementById('skills-billboard-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
