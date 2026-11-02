/**
 * Interactive Resume Document Viewer & Actions Controller
 * Provides interactive paper view, ATS plain-text parsing, theme toggle, copy-to-clipboard, and print-to-PDF.
 */

import { personalInfo, educationData, internshipData, certificationsData, achievementsData, leadershipData } from '../data/portfolioData.js';
import { showToast } from '../utils/toast.js';
import { trackEvent } from '../utils/analytics.js';
import { playSuccessTone, playTactileClick } from './audioEffects.js';
import confetti from 'canvas-confetti';

export function initResumeViewer() {
  const tabDocBtn = document.getElementById('resume-tab-doc');
  const tabAtsBtn = document.getElementById('resume-tab-ats');
  const docView = document.getElementById('resume-paper-view');
  const atsView = document.getElementById('resume-ats-view');
  const themeToggleBtn = document.getElementById('resume-paper-theme-toggle');
  const paperSheet = document.getElementById('paper-resume-sheet');
  const printBtn = document.getElementById('resume-print-btn');
  const copyTextBtn = document.getElementById('resume-copy-text-btn');
  const downloadBtn = document.getElementById('download-resume-btn');

  // 1. Tab Switching: Paper Document vs. ATS Structured View
  tabDocBtn?.addEventListener('click', () => {
    playTactileClick();
    tabDocBtn.classList.add('active');
    tabDocBtn.setAttribute('aria-selected', 'true');
    tabAtsBtn?.classList.remove('active');
    tabAtsBtn?.setAttribute('aria-selected', 'false');

    if (docView) docView.style.display = 'block';
    if (atsView) atsView.style.display = 'none';
    trackEvent('resume_tab_switch', { tab: 'document' });
  });

  tabAtsBtn?.addEventListener('click', () => {
    playTactileClick();
    tabAtsBtn.classList.add('active');
    tabAtsBtn.setAttribute('aria-selected', 'true');
    tabDocBtn?.classList.remove('active');
    tabDocBtn?.setAttribute('aria-selected', 'false');

    if (docView) docView.style.display = 'none';
    if (atsView) atsView.style.display = 'block';
    trackEvent('resume_tab_switch', { tab: 'ats' });
  });

  // 2. Paper Sheet Theme Toggle (Paper Light vs. Dark Dev Mode)
  let isDarkPaper = false;
  themeToggleBtn?.addEventListener('click', () => {
    playTactileClick();
    isDarkPaper = !isDarkPaper;
    if (paperSheet) {
      if (isDarkPaper) {
        paperSheet.classList.add('paper-dark-mode');
        themeToggleBtn.innerHTML = `<span>☀️</span> <span>Paper White</span>`;
      } else {
        paperSheet.classList.remove('paper-dark-mode');
        themeToggleBtn.innerHTML = `<span>🌙</span> <span>Dark Mode</span>`;
      }
    }
    trackEvent('resume_paper_theme_toggle', { mode: isDarkPaper ? 'dark' : 'paper' });
  });

  // 3. Print / Save as PDF (triggers native browser print)
  printBtn?.addEventListener('click', () => {
    playSuccessTone();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#10b981', '#818cf8']
    });
    trackEvent('resume_print_click');
    window.print();
  });

  // 4. Download PDF Action
  downloadBtn?.addEventListener('click', () => {
    playSuccessTone();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#10b981', '#818cf8', '#f59e0b']
    });
    trackEvent('resume_download_click');
    showToast('Downloading Kalanidhi M C Resume (PDF)...', 'info');
  });

  // 5. Copy Formatted Plain-Text Resume to Clipboard
  copyTextBtn?.addEventListener('click', async () => {
    playSuccessTone();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.85 }
    });
    const plainText = generatePlainTextResume();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(plainText);
        showToast('Resume copied to clipboard in plain text!', 'success');
      } else {
        fallbackCopyText(plainText);
        showToast('Resume copied to clipboard!', 'success');
      }
      trackEvent('resume_copy_text');
    } catch (err) {
      console.error('Failed to copy resume:', err);
      showToast('Could not copy automatically. You can print or download the PDF.', 'error');
    }
  });
}

/**
 * Generate ATS-Friendly Plain Text Formatted Resume
 */
function generatePlainTextResume() {
  return `KALANIDHI M C
Tirupur, Tamil Nadu | +91 6383396164 | kalanidhimurugan@gmail.com
LinkedIn: https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/ | GitHub: https://github.com/kala3013

PROFESSIONAL SUMMARY
====================
Computer Science Engineering student at Anna University Regional Campus, Coimbatore, with hands-on experience in Full Stack Development and multiple software/AI projects. Skilled in Java, C, React.js, Node.js, MySQL, Firebase, Git and familiar with Docker, Jenkins, CI/CD, cloud computing and Generative AI. Seeking entry-level Software Developer / Full Stack Developer opportunities.

EDUCATION
=========
B.E. Computer Science and Engineering — Lateral Entry                2024–2027
Anna University Regional Campus, Coimbatore                         CGPA: 8.01/10

Diploma in Computer Engineering                                     2024
Konghu Velalar Polytechnic College                                  93%

TECHNICAL SKILLS
================
Programming: Java, C, JavaScript
Frontend: React.js, Flutter, HTML, CSS
Backend: Node.js, Express.js, REST APIs
Databases: MySQL, Firebase, MongoDB
DevOps & Cloud: Docker, Jenkins, CI/CD, Google Cloud, AWS, OCI, Terraform
AI: Generative AI, LLM concepts, AI Agents, CrewAI
Tools & Core: Git, GitHub, VS Code, Android Studio, Figma | OOP, Data Structures, Algorithms, SQL, JWT

INTERNSHIP EXPERIENCE
=====================
FULL STACK DEVELOPMENT INTERN                                       June 2026
Sangam Soft Solutions, Coimbatore
• Developed and redesigned web interfaces using React, Node.js, Git and VS Code, contributing to the Code Infinite website.
• Implemented pages and UI features including Home, About, Training & Courses, Services, forms, gallery, blog-related sections and dark/light theme.

PROJECTS
========
CANDIDATE RANKING SYSTEM (Tech: Node.js, Express.js, REST APIs, SQL)
Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline.

AI CODE ANALYZER (Tech: AI, LLM, CrewAI)
AI-assisted application designed to analyze source code and provide useful development.

THAMARAI FERTILITY HOSPITAL (Tech: Node.js, Express.js, MySQL, JWT)
Healthcare web application involving backend APIs, authentication, database management and multi-branch support.

AUTOMATED CERTIFICATE GENERATION SYSTEM (Tech: PHP, MySQL)
Application for managing certificate records and automating certificate generation.

Additional Projects:
Pediatric Hospital Management System • Research Answer Bot

CERTIFICATIONS & TRAINING
=========================
• Google Cloud Cybersecurity
• Google Cloud Data Analytics
• IBM Generative AI in Action
• Celonis AI Foundations
• UiPath Agentic Automation
• Oracle Cloud Infrastructure
• AWS Cloud Workshop

ACHIEVEMENTS & LEADERSHIP
=========================
Achievements:
• Daimler 2024 — Best for Innovation
• Smart India Hackathon 2025 — Round 2
• India.RUN Hackathon 2026 — Participant

Leadership & Activities:
• CSE Placement Coordinator
• Class Placement Representative
• CSE Committee Member
• Applied GenAI Workshop (Anna Univ × Kissflow)
• Placement training coordination
`;
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}
