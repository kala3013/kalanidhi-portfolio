/**
 * Main Application Orchestrator for Kalanidhi M C's Portfolio
 * Initializes 3D Core, Custom Cursor, Magnetic CTAs, Terminal, Case Studies, Certifications, and Navigation
 */

import '../css/variables.css';
import '../css/base.css';
import '../css/components.css';
import '../css/sections.css';
import '../css/dev-mode.css';

import { personalInfo, recruiterHighlights, skillsData, internshipData, achievementsData, leadershipData, educationData, careerTimeline, personalStrengths } from './data/portfolioData.js';
import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initTechnicalChannels } from './modules/technicalChannels.js';
import { initVisualSectionDeck } from './modules/visualSectionDeck.js';
import { initAudioEffects } from './modules/audioEffects.js';
import { initCustomCursor } from './modules/customCursor.js';
import { initMagneticButtons } from './modules/magnetic.js';
import { initHero3D } from './modules/hero3d.js';
import { initTerminal } from './modules/terminal.js';
import { initCommandPalette } from './modules/commandPalette.js';
import { initProjects } from './modules/projects.js';
import { initArchitectureVisualizer } from './modules/architecture.js';
import { initAboutNarrative } from './modules/aboutNarrative.js';
import { initCertifications } from './modules/certifications.js';
import { initResumeViewer } from './modules/resumeViewer.js';
import { initTechStackShowcase } from './modules/techStackShowcase.js';
import { initMotion } from './modules/motion.js';
import { initAiAssistant } from './modules/aiAssistant.js';
import { initDevMode } from './modules/devMode.js';
import { initContact } from './modules/contact.js';
import { initEasterEgg } from './modules/easterEgg.js';
import { trackEvent } from './utils/analytics.js';

function safeRun(fn, label) {
  try {
    fn();
  } catch (err) {
    console.warn(`[Init] ${label || fn.name} non-critical warning:`, err);
  }
}

function initApp() {
  // 1. Ingest Content Immediately (Recruiter pills, skills, stats, experience)
  safeRun(renderRecruiterRibbon, 'renderRecruiterRibbon');
  safeRun(initVisualSectionDeck, 'initVisualSectionDeck');
  safeRun(initTechnicalChannels, 'initTechnicalChannels');
  safeRun(renderInternship, 'renderInternship');
  safeRun(renderCareerTimeline, 'renderCareerTimeline');
  safeRun(renderAchievements, 'renderAchievements');
  safeRun(renderLeadership, 'renderLeadership');
  safeRun(renderEducation, 'renderEducation');

  // 2. Interactive Navigation, Theme & Modals
  safeRun(initTheme, 'initTheme');
  safeRun(initAudioEffects, 'initAudioEffects');
  safeRun(initNavigation, 'initNavigation');
  safeRun(initSmoothScroll, 'initSmoothScroll');
  safeRun(initProjects, 'initProjects');
  safeRun(initArchitectureVisualizer, 'initArchitectureVisualizer');
  safeRun(initTechStackShowcase, 'initTechStackShowcase');
  safeRun(initAboutNarrative, 'initAboutNarrative');
  safeRun(initCertifications, 'initCertifications');
  safeRun(initResumeViewer, 'initResumeViewer');
  safeRun(initContact, 'initContact');
  safeRun(initCommandPalette, 'initCommandPalette');
  safeRun(initTerminal, 'initTerminal');
  safeRun(initAiAssistant, 'initAiAssistant');
  safeRun(initDevMode, 'initDevMode');
  safeRun(initEasterEgg, 'initEasterEgg');

  // 3. Motion & Micro-interactions
  safeRun(initCustomCursor, 'initCustomCursor');
  safeRun(initMagneticButtons, 'initMagneticButtons');
  safeRun(initMotion, 'initMotion');

  // 4. 3D Canvas Core (Runs asynchronously without blocking UI)
  safeRun(initHero3D, 'initHero3D');

  // 5. Initial Visit Analytics
  safeRun(() => trackEvent('portfolio_loaded', { userAgent: navigator.userAgent.substring(0, 50) }), 'analytics');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Render the 10-Second Recruiter Ribbon with 1-Click Jump Anchors
 */
function renderRecruiterRibbon() {
  const container = document.getElementById('recruiter-pills-container');
  if (!container) return;

  container.innerHTML = recruiterHighlights.map(h => `
    <a href="${h.targetSection}" class="recruiter-pill" title="${h.detail}">
      <span>${h.icon}</span>
      <span>${h.label}</span>
      <span class="pill-jump-arrow" aria-hidden="true">↓</span>
    </a>
  `).join('');
}

/**
 * Render the Skills Dashboard with Accessible Click Handlers
 */
function renderSkillsDashboard() {
  const skillsContainer = document.getElementById('skills-grid');
  const categoryButtons = document.querySelectorAll('.skill-category-btn');

  if (!skillsContainer) return;

  let activeCategory = 'All';

  function render(filteredSkills) {
    skillsContainer.innerHTML = filteredSkills.map(skill => `
      <div class="skill-card" data-skill="${skill.name}" role="button" tabindex="0" aria-label="Filter projects using ${skill.name}" title="Click to view projects using ${skill.name}">
        <div>
          <div class="skill-card-top">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-category-tag">${skill.category}</span>
          </div>
          <div style="margin-top:0.4rem;">
            <span class="badge ${skill.badgeClass} skill-badge">${skill.level}</span>
          </div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem; line-height:1.4;">${skill.desc}</p>
        </div>
        <div class="skill-click-hint">
          Click to filter projects ▹
        </div>
      </div>
    `).join('');

    // Attach click and keyboard listeners to skill cards
    skillsContainer.querySelectorAll('.skill-card').forEach(card => {
      const skillName = card.getAttribute('data-skill');
      const trigger = () => {
        if (typeof window.filterProjectsBySkill === 'function') {
          window.filterProjectsBySkill(skillName);
        }
      };
      card.addEventListener('click', trigger);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger();
        }
      });
    });
  }

  render(skillsData);

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'All';

      const filtered = activeCategory === 'All'
        ? skillsData
        : skillsData.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));
      render(filtered);
    });
  });
}

/**
 * Render Personal Strengths Cards
 */
function renderStrengths() {
  const container = document.getElementById('strengths-grid');
  if (!container) return;

  container.innerHTML = personalStrengths.map(s => `
    <div class="strength-card">
      <span class="strength-icon">${s.icon}</span>
      <div class="strength-title">${s.name}</div>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.35rem; line-height:1.4;">${s.desc}</div>
    </div>
  `).join('');
}

/**
 * Render Sangam Soft Solutions Internship
 */
function renderInternship() {
  const container = document.getElementById('internship-container');
  if (!container) return;

  container.innerHTML = `
    <div class="timeline-card">
      <div class="timeline-header-row">
        <div>
          <span class="badge badge-emerald" style="margin-bottom:0.5rem;">Verified Industry Internship</span>
          <h3 class="timeline-role-title">${internshipData.role}</h3>
          <div class="timeline-company">${internshipData.company} — ${internshipData.location}</div>
        </div>
        <span class="timeline-duration">${internshipData.duration}</span>
      </div>

      <p class="about-text">${internshipData.overview}</p>

      <div class="timeline-highlight-box">
        <div class="timeline-highlight-title">
          <span>🚀 Practical Project:</span> <span>${internshipData.project}</span>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.75rem;">
          ${internshipData.technologies.map(t => `<span class="badge badge-cyan">${t}</span>`).join('')}
        </div>
        <p style="font-size:0.875rem; color:var(--text-secondary); margin-bottom:0.5rem;">
          Developed and redesigned web interfaces across modular website sections:
        </p>
        <div class="timeline-modules-grid">
          ${internshipData.modules.map(m => `
            <div class="timeline-module-pill" title="${m.desc}">
              <strong>${m.name}</strong>: ${m.desc}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted); display:flex; align-items:center; gap:0.5rem;">
        <span style="color:var(--accent-emerald);">●</span> <span>Git Collaboration: ${internshipData.workflow}</span>
      </div>
    </div>
  `;
}

/**
 * Render Career Milestones Timeline
 */
function renderCareerTimeline() {
  const container = document.getElementById('career-timeline-grid');
  if (!container) return;

  container.innerHTML = careerTimeline.map(m => `
    <div class="card" style="padding:1.5rem; display:flex; flex-direction:column; gap:0.5rem; border-top:3px solid var(--accent-cyan);">
      <div style="font-family:var(--font-mono); font-size:0.9rem; font-weight:700; color:var(--accent-cyan);">${m.year}</div>
      <div style="font-weight:700; font-size:1.05rem; color:var(--text-primary);">${m.title}</div>
      <div style="font-size:0.875rem; color:var(--text-secondary); line-height:1.5;">${m.detail}</div>
    </div>
  `).join('');
}

/**
 * Render Achievements
 */
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = achievementsData.map(a => `
    <div class="achievement-card">
      <span class="achievement-year">${a.year}</span>
      <h3 class="achievement-title">${a.title}</h3>
      <p class="achievement-desc">${a.description}</p>
    </div>
  `).join('');
}

/**
 * Render Leadership Cards
 */
function renderLeadership() {
  const container = document.getElementById('leadership-grid');
  if (!container) return;

  container.innerHTML = leadershipData.map(l => `
    <div class="leadership-card">
      <div class="leadership-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <div>
        <div class="leadership-title">${l.title}</div>
        <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); margin-bottom:0.25rem;">${l.role}</div>
        <div class="leadership-desc">${l.desc}</div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Academic Credentials
 */
function renderEducation() {
  const container = document.getElementById('education-grid');
  if (!container) return;

  container.innerHTML = educationData.map(e => `
    <div class="education-card">
      <div>
        <span class="badge ${e.status.includes('Completed') ? 'badge-emerald' : 'badge-cyan'}" style="margin-bottom:0.75rem;">${e.status}</span>
        <h3 class="education-degree">${e.degree}</h3>
        <div class="education-institution">${e.institution}</div>
      </div>
      <div class="education-meta">
        <span>${e.duration}</span>
        <span class="education-score">${e.scoreLabel}: ${e.score}</span>
      </div>
    </div>
  `).join('');
}
