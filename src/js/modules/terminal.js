/**
 * Interactive Developer Terminal Component
 * Handles command execution, command history, autocompletion, and pill triggers.
 */

import { personalInfo, skillsData, projectsData, internshipData, educationData } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';

export function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const quickPills = document.querySelectorAll('.terminal-pill-cmd');

  if (!terminalBody || !terminalInput) return;

  const history = [];
  let historyIndex = -1;

  // Print initial greeting
  printInitialGreeting(terminalBody);

  // Command Execution Handler
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = terminalInput.value.trim();
      terminalInput.value = '';

      if (rawCmd) {
        history.push(rawCmd);
        historyIndex = history.length;
        executeCommand(rawCmd, terminalBody);
        trackEvent('terminal_command', { command: rawCmd });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        terminalInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        terminalInput.value = '';
      }
    }
  });

  // Quick Command Pills
  quickPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd') || pill.textContent.trim();
      terminalInput.value = cmd;
      terminalInput.focus();
      executeCommand(cmd, terminalBody);
      trackEvent('terminal_pill_click', { command: cmd });
    });
  });
}

function printInitialGreeting(body) {
  const greeting = document.createElement('div');
  greeting.className = 'terminal-output';
  greeting.innerHTML = `
<span class="cmd-info">⚡ Kalanidhi M C Interactive Dev Terminal v1.0.0</span>
Type <span class="cmd-echo">'help'</span> to see available commands or click the shortcut buttons below.
------------------------------------------------------------
<span class="cmd-echo">$ whoami</span>: Kalanidhi M C
<span class="cmd-echo">$ role</span>: Full Stack Developer
<span class="cmd-echo">$ focus</span>: React.js • Node.js • Java • SQL • MongoDB
<span class="cmd-echo">$ exploring</span>: AI Agents • Cloud • DevOps
<span class="cmd-echo">$ status</span>: Building & Learning 🚀
`;
  body.appendChild(greeting);
  body.scrollTop = body.scrollHeight;
}

function executeCommand(cmd, body) {
  const normalized = cmd.toLowerCase().trim();
  const entry = document.createElement('div');
  entry.className = 'terminal-output';

  // Add user command echo line
  const echoLine = document.createElement('div');
  echoLine.innerHTML = `<span class="terminal-prompt-label">kalanidhi@dev-machine:~$</span> <span class="cmd-echo">${escapeHtml(cmd)}</span>`;
  entry.appendChild(echoLine);

  const responseLine = document.createElement('div');

  // Direct Ad / Skill Tuning Support
  if (normalized.startsWith('skills ') || normalized.startsWith('ad ') || normalized.startsWith('tune ')) {
    const query = normalized.replace(/^(skills|ad|tune)\s+/, '').trim();
    const matched = skillsData.find(s => s.name.toLowerCase().includes(query.toLowerCase()));
    if (matched) {
      if (typeof window.tuneSkillAd === 'function') {
        window.tuneSkillAd(matched.name);
      }
      responseLine.innerHTML = `
<span class="cmd-success">📺 Tuning Live Tech Ad Spotlight: [${matched.name}]</span>
<span class="cmd-info">Superpower:</span> ${matched.superpower || matched.category}
<span class="cmd-echo">Ad Tagline:</span> "${matched.adTagline || matched.desc}"
<span style="color:var(--text-muted);">Loaded onto Live Billboard Stage!</span>
`;
      entry.appendChild(responseLine);
      body.appendChild(entry);
      body.scrollTop = body.scrollHeight;
      return;
    }
  }

  switch (normalized) {
    case 'help':
      responseLine.innerHTML = `
<span class="cmd-info">Available Commands:</span>
  • <span class="cmd-echo">about</span>          - Brief overview and positioning
  • <span class="cmd-echo">skills</span>         - Technical stack & honest proficiency
  • <span class="cmd-echo">skills [tech]</span>  - Stream live tech ad (e.g. 'skills react', 'ad docker')
  • <span class="cmd-echo">projects</span>       - Key projects and repository links
  • <span class="cmd-echo">experience</span>     - Internship at Sangam Soft Solutions
  • <span class="cmd-echo">education</span>      - Anna University & Diploma credentials
  • <span class="cmd-echo">achievements</span>   - Hackathons and innovation awards
  • <span class="cmd-echo">contact</span>        - Email and networking profiles
  • <span class="cmd-echo">cat resume</span>     - Quick summary and resume link
  • <span class="cmd-echo">audio</span>          - Toggle futuristic sound effects
  • <span class="cmd-echo">devmode</span>        - Toggle Developer Mode overlay
  • <span class="cmd-echo">clear</span>          - Clear the terminal screen
`;
      break;

    case 'audio':
      const audioBtn = document.getElementById('audio-sfx-toggle');
      if (audioBtn) {
        audioBtn.click();
        responseLine.innerHTML = `<span class="cmd-success">Futuristic UI sound effects toggled!</span>`;
      } else {
        responseLine.innerHTML = `<span class="cmd-info">Audio module loaded.</span>`;
      }
      break;

    case 'whoami':
      responseLine.innerHTML = `<span class="cmd-success">${personalInfo.name}</span> — ${personalInfo.role}`;
      break;

    case 'about':
      responseLine.innerHTML = `
<span class="cmd-info">Kalanidhi M C</span>
${personalInfo.positioning}
Primary Focus: ${personalInfo.primaryDirection}
Interests: ${personalInfo.interests.join(', ')}
`;
      break;

    case 'skills':
      responseLine.innerHTML = `
<span class="cmd-info">Core Technical Stacks (Honest Proficiency):</span>
• <span class="cmd-echo">Programming:</span> Java, C, JavaScript
• <span class="cmd-echo">Frontend:</span> React.js, HTML5, CSS3 | Flutter (Exploring)
• <span class="cmd-echo">Backend:</span> Node.js, Express.js, REST APIs, JWT
• <span class="cmd-echo">Databases:</span> MySQL, MongoDB, Firebase
• <span class="cmd-echo">AI (Exploring):</span> Generative AI, LLM Concepts, AI Agents, CrewAI
• <span class="cmd-echo">Cloud & DevOps:</span> Google Cloud, AWS, OCI, Docker, Jenkins, CI/CD, Terraform
• <span class="cmd-echo">Core CS:</span> OOP, Data Structures, Algorithms, SQL
• <span class="cmd-echo">Tools:</span> Git, GitHub, VS Code, Android Studio, Figma
`;
      break;

    case 'projects':
      responseLine.innerHTML = `
<span class="cmd-info">Verified Practical Projects (${projectsData.length}):</span>
${projectsData.map((p, i) => `${i + 1}. <span class="cmd-echo">${escapeHtml(p.title)}</span>: ${escapeHtml(p.technologies.slice(0, 4).join(' • '))}\n   ${escapeHtml(p.tagline)}`).join('\n')}

(Scroll to Projects section or use Ctrl+K to inspect interactive Case Studies!)
`;
      break;

    case 'certifications':
      responseLine.innerHTML = `
<span class="cmd-info">Verified Certifications:</span>
• Google Cloud Cybersecurity Certificate
• Google Cloud Data Analytics Certificate
• IBM Generative AI in Action
• Celonis AI Foundations
• UiPath Agentic Automation Developer Associate Training
• Oracle Cloud Infrastructure
• AWS Cloud Workshop
• Applied GenAI Workshop
`;
      break;

    case 'experience':
      responseLine.innerHTML = `
<span class="cmd-info">Internship Experience:</span>
• <span class="cmd-success">${internshipData.company}</span> (${internshipData.location})
  Role: ${internshipData.role} | Duration: ${internshipData.duration}
  Project: ${internshipData.project}
  Technologies: ${internshipData.technologies.join(', ')}
  Experience: Redesigned Home, About, Training, Services, Forms, Gallery, Blog, and Dark/Light theme.
`;
      break;

    case 'education':
      responseLine.innerHTML = `
<span class="cmd-info">Academic Credentials:</span>
• <span class="cmd-echo">${educationData[0].degree}</span>
  ${educationData[0].institution} (${educationData[0].duration}) | CGPA: <span class="cmd-success">${educationData[0].score}</span>
• <span class="cmd-echo">${educationData[1].degree}</span>
  ${educationData[1].institution} | Score: <span class="cmd-success">${educationData[1].score}</span> (Distinction)
`;
      break;

    case 'achievements':
      responseLine.innerHTML = `
<span class="cmd-info">Verified Achievements:</span>
• <span class="cmd-warn">Daimler 2024 — Best for Innovation</span>
• <span class="cmd-warn">Smart India Hackathon 2025 — Round 2</span>
• <span class="cmd-warn">India.RUN Hackathon 2026 — Participant</span>
`;
      break;

    case 'contact':
      responseLine.innerHTML = `
<span class="cmd-info">Contact & Profiles:</span>
• Email: <a href="mailto:${personalInfo.email}" class="cmd-echo">${personalInfo.email}</a>
• Phone: <span class="cmd-echo">${personalInfo.phone}</span>
• Location: <span class="cmd-echo">${personalInfo.location}</span>
• GitHub: <a href="${personalInfo.github}" target="_blank" rel="noopener noreferrer" class="cmd-echo">${personalInfo.github}</a>
• LinkedIn: <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="cmd-echo">linkedin.com/in/kalanidhi-m-c</a>
`;
      break;

    case 'cat resume':
    case 'resume':
      responseLine.innerHTML = `
<span class="cmd-success">Resume Document:</span>
Kalanidhi M C — Full Stack Developer & B.E. Computer Science.
File path: <span class="cmd-echo">${personalInfo.resumePath}</span>
<a href="#resume" class="cmd-info">👉 Click here to jump to Resume section and download</a>
`;
      break;

    case 'sudo hire kalanidhi':
    case 'hire':
      responseLine.innerHTML = `<span class="cmd-success">Access granted. Let's build something great. 🚀</span>`;
      break;

    case 'github':
      responseLine.innerHTML = `<span class="cmd-info">GitHub: <a href="${personalInfo.github}" target="_blank" rel="noopener noreferrer" class="cmd-echo">${personalInfo.github}</a></span>`;
      break;

    case 'linkedin':
      responseLine.innerHTML = `<span class="cmd-info">LinkedIn: <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="cmd-echo">linkedin.com/in/kalanidhi-m-c</a></span>`;
      break;

    case 'devmode':
      const isDev = document.documentElement.getAttribute('data-dev-mode') === 'true';
      const nextDev = !isDev;
      document.documentElement.setAttribute('data-dev-mode', String(nextDev));
      responseLine.innerHTML = `<span class="cmd-${nextDev ? 'success' : 'warn'}">Developer Mode ${nextDev ? 'ENABLED' : 'DISABLED'}. Architectural overlays are now ${nextDev ? 'visible' : 'hidden'}.</span>`;
      break;

    case 'clear':
      body.innerHTML = '';
      return;

    case 'sudo':
      responseLine.innerHTML = `<span class="cmd-warn">root@dev-machine: Try typing 'sudo hire kalanidhi' 😉</span>`;
      break;

    case 'status':
      responseLine.innerHTML = `<span class="cmd-success">Status: Building practical software while exploring AI, Cloud & DevOps.</span>`;
      break;

    case 'date':
      responseLine.innerHTML = `<span class="cmd-info">${new Date().toLocaleString()}</span>`;
      break;

    default:
      responseLine.innerHTML = `<span class="cmd-error">Command not recognized: '${escapeHtml(cmd)}'. Type 'help' for command list.</span>`;
      break;
  }

  entry.appendChild(responseLine);
  body.appendChild(entry);
  body.scrollTop = body.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
