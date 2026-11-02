/**
 * Single Source of Truth for Kalanidhi M C's Portfolio
 * Truthful, non-fabricated, verified against public GitHub & credentials.
 * Only verified projects and credentials included.
 */

export const personalInfo = {
  name: "Kalanidhi M C",
  role: "Software Developer",
  specialization: "Full Stack Development",
  heroLabel: "COMPUTER SCIENCE ENGINEERING",
  heroRoleSecondary: "FULL STACK • AI • CLOUD • DEVOPS",
  heroPositioning: "Building practical software while exploring AI, Cloud & DevOps.",
  positioning: "Computer Science Engineering student at Anna University Regional Campus, Coimbatore, with hands-on experience in Full Stack Development and multiple software/AI projects. Skilled in Java, C, React.js, Node.js, MySQL, Firebase, Git and familiar with Docker, Jenkins, CI/CD, cloud computing and Generative AI. Seeking entry-level Software Developer / Full Stack Developer opportunities.",
  location: "Tirupur, Tamil Nadu, India",
  phone: "+91 6383396164",
  email: "kalanidhimurugan@gmail.com",
  github: "https://github.com/kala3013",
  linkedin: "https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/",
  resumePath: "public/resume/Kalanidhi_M_C_Resume.pdf",
  availability: "Available for Software Developer Roles & Internships",
  interests: [
    "Artificial Intelligence",
    "Generative AI",
    "Cloud Computing",
    "DevOps",
    "Modern Software Engineering"
  ]
};

export const recruiterHighlights = [
  { icon: "🎓", label: "B.E. CSE (2024–2027)", detail: "Anna University Regional Campus (Lateral Entry, CGPA: 8.01)", targetSection: "#education" },
  { icon: "📜", label: "Diploma (93% Distinction)", detail: "Konghu Velalar Polytechnic College (2024)", targetSection: "#education" },
  { icon: "💻", label: "Full Stack Development", detail: "React • Node.js • Express • MySQL • MongoDB", targetSection: "#skills" },
  { icon: "🤖", label: "AI Exploration", detail: "CrewAI • Generative AI • LLM Concepts", targetSection: "#projects" },
  { icon: "☁️", label: "Cloud & DevOps", detail: "Google Cloud • AWS • OCI • Docker • CI/CD", targetSection: "#certifications" },
  { icon: "💼", label: "Full Stack Intern", detail: "Sangam Soft Solutions (June 2026)", targetSection: "#experience" },
  { icon: "🏆", label: "Hackathons & Innovation", detail: "Daimler Best for Innovation • SIH Round 2", targetSection: "#achievements" },
  { icon: "👨‍💼", label: "Placement Leadership", detail: "CSE Placement Coordinator & Committee", targetSection: "#leadership" }
];

export const skillsData = [
  // Programming
  {
    id: "java",
    name: "Java",
    category: "Programming",
    adCategory: "ENTERPRISE SYSTEMS",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Object-Oriented Rigor & Concurrency",
    adTagline: "Engineered for type-safe backend logic, structured schemas, and zero-compromise reliability.",
    adPitch: "Powering enterprise microservices and algorithmic pipelines with clean object models, thread management, and predictable high-throughput execution.",
    adSpecs: ["Clean Polymorphism & Design Patterns", "Memory Efficiency & JVM Architecture", "Enterprise Capstone Backbone"],
    color: "#f97316",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    desc: "Core object-oriented programming, data structures, and backend logic."
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    adCategory: "FULL STACK RUNTIME",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Asynchronous Event Mastery",
    adTagline: "Modern ES6+ velocity orchestrating fluid interactive clients and dynamic server runtimes.",
    adPitch: "Leveraging async/await pipelines, modular closures, and dynamic DOM manipulation to build reactive real-time applications that delight users.",
    adSpecs: ["ES6+ Modules & Async/Await", "Event Loop & Non-Blocking I/O", "Universal Full-Stack Glue"],
    color: "#f59e0b",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 17c1.5 1 3 0 3-2v-4"></path><path d="M14 17c2 1 4 0 4-2s-2-2-3-2.5 3-1 3-2.5-1.5-2-3-2"></path></svg>`,
    desc: "Modern ES6+, asynchronous async/await, DOM APIs, and full-stack integration."
  },
  {
    id: "c",
    name: "C",
    category: "Programming",
    adCategory: "SYSTEMS FOUNDATION",
    level: "Familiar",
    badgeClass: "badge-outline",
    superpower: "Direct Memory & Algorithmic Core",
    adTagline: "Academic procedural bedrock delivering low-level hardware intuition and pointer discipline.",
    adPitch: "Grounding computer science principles with explicit memory allocation, procedural architecture, and foundational data structure mechanics.",
    adSpecs: ["Pointers & Dynamic Memory", "Cache-Aware Algorithmic Logic", "Low-Level CS Foundations"],
    color: "#94a3b8",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M15 9.5a4 4 0 1 0 0 5"></path></svg>`,
    desc: "Procedural programming, memory addressing concepts, and academic algorithmic foundations."
  },

  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    adCategory: "REACTIVE UI ENGINE",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Declarative Component Velocity",
    adTagline: "Architecting modular component ecosystems with blazing fast virtual DOM rendering.",
    adPitch: "Delivering reactive state synchronizations, decoupled hooks pipelines, and responsive interfaces that load instantly and respond smoothly at 60fps.",
    adSpecs: ["Modular State Hooks (useState, useEffect)", "Virtual DOM Diffing & Reconciliation", "Responsive Production Interfaces"],
    color: "#38bdf8",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"></ellipse></svg>`,
    desc: "Component architecture, reactive state hooks, props flow, and responsive interfaces."
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    adCategory: "SEMANTIC WEB PRIMITIVE",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Accessible Semantic Architecture",
    adTagline: "Standard-compliant semantic markup ensuring universal accessibility and SEO prominence.",
    adPitch: "Crafting structured DOM hierarchies with native accessibility landmarks, meta-data protocols, and keyboard navigability across every viewport.",
    adSpecs: ["ARIA Roles & Accessible Landmarks", "SEO Microdata & Schema Protocols", "Zero-Dependency Semantic Baseline"],
    color: "#f97316",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`,
    desc: "Semantic structural markup, accessibility (ARIA), and SEO tags."
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    adCategory: "DESIGN SYSTEMS & MOTION",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Fluid Glassmorphism & Token Systems",
    adTagline: "Fluid responsive layouts powered by CSS Grid, Flexbox, custom property tokens, and GPU transforms.",
    adPitch: "Transforming raw wireframes into cybernetic glassmorphic aesthetics with neon glow borders, responsive viewports, and buttery transition physics.",
    adSpecs: ["Custom Property Design Tokens", "Modern CSS Grid & Flex Systems", "GPU-Accelerated Keyframes"],
    color: "#3b82f6",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
    desc: "Flexbox, CSS Grid, custom properties design tokens, and fluid media queries."
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Frontend",
    adCategory: "CROSS-PLATFORM MOBILE",
    level: "Familiar / Exploring",
    badgeClass: "badge-purple",
    superpower: "Single-Codebase Native UI",
    adTagline: "Rapid multi-platform widget compilation for iOS, Android, and responsive web targets.",
    adPitch: "Exploring declarative widget trees and stateful view lifecycles for unified cross-platform mobile experiences.",
    adSpecs: ["Declarative Widget Architecture", "Native ARM Binary Compilation", "Cross-Platform View Parity"],
    color: "#06b6d4",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 12 12 22 22 12 12 2"></polygon></svg>`,
    desc: "Cross-platform mobile UI prototyping with widgets and stateful views."
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    adCategory: "ASYNC SERVER ENGINE",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Non-Blocking High Concurrency",
    adTagline: "Event-driven asynchronous server runtime built for high throughput and decoupled microservices.",
    adPitch: "Handling concurrent HTTP streams without thread locks, powering scalable RESTful APIs, data validation pipes, and real-time backend communication.",
    adSpecs: ["V8 High-Performance JIT Engine", "Single-Threaded Event Loop Architecture", "NPM Ecosystem Integration"],
    color: "#22c55e",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"></path><line x1="12" y1="22" x2="12" y2="12"></line><line x1="12" y1="12" x2="21" y2="7"></line><line x1="12" y1="12" x2="3" y2="7"></line></svg>`,
    desc: "Event-driven asynchronous server-side runtime for RESTful APIs."
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    adCategory: "RESTFUL ROUTING PIPELINE",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Middleware Composition & Controllers",
    adTagline: "Minimalist, unopinionated routing framework for robust REST endpoints and controller logic.",
    adPitch: "Structuring decoupled backend routing layers, request validation middleware, error handling pipelines, and clean JSON payload serialization.",
    adSpecs: ["Modular Router Architecture", "Intercepting Middleware Chains", "Standardized HTTP Response Cycles"],
    color: "#e2e8f0",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="16" y2="12"></line><line x1="12" y1="16" x2="16" y2="12"></line></svg>`,
    desc: "Middleware pipelines, routing, route controllers, and request validation."
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend",
    adCategory: "CLIENT-SERVER CONTRACT",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Decoupled Architectural Boundaries",
    adTagline: "Predictable HTTP verb semantics, status code precision, and structured JSON contracts.",
    adPitch: "Connecting disparate client devices to resilient backend databases via stateless, versioned, and documented REST API communication channels.",
    adSpecs: ["Standardized HTTP Verbs & Statuses", "Stateless JSON Request/Response", "Client-Independent Service Layer"],
    color: "#38bdf8",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>`,
    desc: "HTTP methods, JSON serialization, status codes, and decoupled client consumption."
  },
  {
    id: "jwt",
    name: "JWT",
    category: "Backend",
    adCategory: "STATELESS SECURITY",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Cryptographic Bearer Verification",
    adTagline: "Stateless cryptographically signed tokens enforcing role-based route guard security.",
    adPitch: "Securing sensitive endpoints with HMAC SHA-256 signed bearer payloads, automated token expiration, and decoupled identity authorization.",
    adSpecs: ["Cryptographic Signature Verification", "Role-Based Route Guards", "Stateless Horizontal Scalability"],
    color: "#ec4899",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    desc: "Stateless Bearer token issuance, signing, and role-based route guard verification."
  },

  // Databases
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases",
    adCategory: "RELATIONAL ACID ENGINE",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Normalized Schema & Relational Integrity",
    adTagline: "Rock-solid relational schemas with foreign key constraints, indexing, and transactional ACID guarantees.",
    adPitch: "Structuring relational databases that prevent data anomalies, executing multi-table JOIN aggregations, and optimizing query execution plans.",
    adSpecs: ["3rd Normal Form (3NF) Schemas", "Foreign Key Referential Integrity", "Parameterized Query Protection"],
    color: "#0284c7",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    desc: "Relational database schema normalization, foreign keys, and parameterized queries."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Databases",
    adCategory: "AGILE NOSQL DOCUMENT STORE",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Flexible JSON Document Schemas",
    adTagline: "Dynamic NoSQL collections designed for rapidly evolving schemas and nested document structures.",
    adPitch: "Empowering fast iterations with BSON document storage, indexed lookups, and flexible document embedding for modern full-stack web applications.",
    adSpecs: ["Nested BSON Document Modeling", "Flexible Schema Evolution", "High-Throughput Write Velocity"],
    color: "#10b981",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M12 6v6l4 2"></path></svg>`,
    desc: "NoSQL document collections, schema validation, and flexible indexing."
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Databases",
    adCategory: "REAL-TIME BAAS CLOUD",
    level: "Familiar",
    badgeClass: "badge-outline",
    superpower: "Live Real-Time Data Sync",
    adTagline: "Cloud-hosted database listeners synchronizing state updates to clients in real-time.",
    adPitch: "Enabling instant real-time data sync, built-in cloud authentication, and serverless datastores for rapid interactive prototypes.",
    adSpecs: ["Real-Time WebSocket Sync", "Managed Cloud Authentication", "Serverless Infrastructure"],
    color: "#f59e0b",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
    desc: "BaaS database collections, real-time syncing, and cloud service integration."
  },

  // AI Exploration
  {
    id: "crewai",
    name: "CrewAI",
    category: "AI",
    adCategory: "AUTONOMOUS AGENT ORCHESTRATION",
    level: "Exploring",
    badgeClass: "badge-indigo",
    superpower: "Multi-Agent Swarm Collaboration",
    adTagline: "Orchestrating autonomous role-playing AI agents that collaborate to solve complex technical workflows.",
    adPitch: "Pioneering agentic workflows where specialized AI personas (Inspectors, Fixers, Architects) delegate tasks, review code vulnerabilities, and synthesize solutions.",
    adSpecs: ["Role-Based Persona Prompting", "Sequential & Hierarchical Tasks", "Automated Code Analysis Pipeline"],
    color: "#a855f7",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    desc: "Multi-agent Python orchestration for collaborative static code inspection."
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    category: "AI",
    adCategory: "NEURAL LANGUAGE CAPABILITIES",
    level: "Exploring",
    badgeClass: "badge-indigo",
    superpower: "Contextual Prompt & Synthesis",
    adTagline: "Harnessing foundation models to parse context, automate analysis, and generate intelligence.",
    adPitch: "Exploring state-of-the-art LLM architectures, zero-shot/few-shot prompting techniques, and semantic analysis to supercharge developer workflows.",
    adSpecs: ["System Persona & Guardrail Prompts", "Zero-Shot Context Injection", "Automated Knowledge Extraction"],
    color: "#818cf8",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`,
    desc: "Foundations of generative models, prompt engineering, and contextual reasoning."
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    category: "AI",
    adCategory: "AUTONOMOUS DECISION LOOPS",
    level: "Exploring",
    badgeClass: "badge-indigo",
    superpower: "Goal-Oriented Tool Invocation",
    adTagline: "Designing autonomous cognitive loops that perceive inputs, select tools, and iterate to completion.",
    adPitch: "Constructing self-directed agent loops with structured memory, goal decomposition, and error-recovery routines.",
    adSpecs: ["Perception-Action Loops", "Tool Calling & Action APIs", "Structured Plan Execution"],
    color: "#c084fc",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    desc: "Autonomous agentic personas with defined goals, tools, and sequential workflows."
  },

  // Cloud & DevOps
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    adCategory: "CONTAINER STANDARDIZATION",
    level: "Currently Learning",
    badgeClass: "badge-amber",
    superpower: "Zero-Drift Production Parity",
    adTagline: "Immutable application containers eliminating 'works on my machine' friction across every environment.",
    adPitch: "Packaging microservices, dependencies, and environment configurations into lightweight OCI container images that deploy predictably anywhere.",
    adSpecs: ["Multi-Stage Dockerfiles", "Isolated Container Runtimes", "Environment Parity Across Staging & Prod"],
    color: "#0ea5e9",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13h20"></path><path d="M5 10h3v3H5z"></path><path d="M9 10h3v3H9z"></path><path d="M13 10h3v3h-3z"></path><path d="M9 6h3v3H9z"></path><path d="M2 13a6.5 6.5 0 0 0 12 4.5A7 7 0 0 0 22 13"></path></svg>`,
    desc: "Container images, Dockerfile configuration, container lifecycles, and isolation."
  },
  {
    id: "gcp",
    name: "Google Cloud",
    category: "Cloud & DevOps",
    adCategory: "HYPERSCALE CLOUD PLATFORM",
    level: "Currently Learning",
    badgeClass: "badge-amber",
    superpower: "Cloud Compute & IAM Governance",
    adTagline: "Robust cloud architecture foundations with certified security and scalable infrastructure services.",
    adPitch: "Gaining proficiency in Google Cloud Compute Engine, Cloud Run serverless deployments, IAM least-privilege policies, and certified cybersecurity standards.",
    adSpecs: ["Google Cybersecurity Certified", "IAM Access Governance", "Scalable Serverless Compute"],
    color: "#4285f4",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    desc: "GCP fundamental compute, cybersecurity credentials, and IAM concepts."
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud & DevOps",
    adCategory: "GLOBAL CLOUD ECOSYSTEM",
    level: "Currently Learning",
    badgeClass: "badge-amber",
    superpower: "Resilient Cloud Infrastructure",
    adTagline: "Scalable cloud building blocks: virtual servers, distributed storage, and serverless compute.",
    adPitch: "Studying Amazon Web Services core building blocks — EC2 instances, S3 object storage buckets, and serverless compute models for high-availability systems.",
    adSpecs: ["EC2 & S3 Cloud Architectures", "High-Availability Multi-AZ Design", "Cloud Workshop Practical Labs"],
    color: "#f59e0b",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
    desc: "Core cloud architecture concepts, EC2, S3, and cloud workshop practices."
  },
  {
    id: "cicd",
    name: "CI/CD",
    category: "Cloud & DevOps",
    adCategory: "CONTINUOUS AUTOMATION",
    level: "Currently Learning",
    badgeClass: "badge-amber",
    superpower: "Automated Build & Deploy Pipelines",
    adTagline: "Frictionless continuous delivery running automated test suites, bundling, and zero-downtime deployment.",
    adPitch: "Automating developer pipelines with GitHub Actions workflows that build Vite assets, verify code integrity, and deploy live to production on every push.",
    adSpecs: ["GitHub Actions Workflow Automation", "Automated Linting & Test Verification", "Push-to-Deploy Production Targets"],
    color: "#10b981",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>`,
    desc: "Automating testing and build workflows via GitHub Actions and pipeline stages."
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "Tools",
    adCategory: "VERSION CONTROL & COLLABORATION",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Immutable Commit History & Branching",
    adTagline: "Decentralized version control ensuring reproducible builds, clean feature branches, and safe rollbacks.",
    adPitch: "Managing source trees with atomic commits, clean rebase/merge strategies, interactive staging, and transparent team collaboration.",
    adSpecs: ["Branching & Pull Request Workflows", "Atomic Git Commits & Staging", "Conflict Resolution & History Audits"],
    color: "#f43f5e",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><line x1="6" y1="9" x2="6" y2="21"></line><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    desc: "Version control, feature branch workflows, staging, and merge commits."
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    adCategory: "DEVELOPER COLLABORATION HUB",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "CI/CD Actions & Code Reviews",
    adTagline: "Collaborative code host powering code reviews, issue tracking, and automated GitHub Pages deployments.",
    adPitch: "Hosting production-ready open source projects, maintaining transparent documentation, and driving automated CI/CD action triggers.",
    adSpecs: ["Automated GitHub Pages Deployments", "Branch Protection & Code Reviews", "Issue Tracking & Project Boards"],
    color: "#e2e8f0",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    desc: "Remote repositories, code reviews, collaboration, and GitHub Actions."
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    adCategory: "DEVELOPER WORKBENCH",
    level: "Project Experience",
    badgeClass: "badge-cyan",
    superpower: "Integrated Dev Environment & Debugging",
    adTagline: "High-productivity editor configured with language servers, integrated terminal, and live debugging.",
    adPitch: "Optimized developer workflow with ESLint/Prettier formatting, Git lens source tracing, remote SSH editing, and seamless debugging sessions.",
    adSpecs: ["Language Server Protocol (LSP)", "Integrated Multi-Terminal Environment", "Interactive Breakpoint Debugging"],
    color: "#0284c7",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    desc: "Primary code editor, extensions, integrated terminal, and debugging workflows."
  },
  {
    id: "figma",
    name: "Figma",
    category: "Tools",
    adCategory: "UI/UX & DESIGN TOKENS",
    level: "Familiar",
    badgeClass: "badge-outline",
    superpower: "Wireframing & Token Prototyping",
    adTagline: "Translating UX user flows into pixel-perfect responsive layouts and design tokens.",
    adPitch: "Prototyping responsive developer portfolios, inspecting typography and color tokens, and ensuring ergonomic layout hierarchies prior to CSS code implementation.",
    adSpecs: ["Responsive Frame Prototyping", "Design Token Extraction", "Interactive Micro-Animation Specs"],
    color: "#a855f7",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`,
    desc: "Interface wireframing, UI prototyping, and responsive layout inspection."
  }
];

export const projectsData = [
  {
    id: "candidate-ranking-system",
    title: "Candidate Ranking System",
    tagline: "Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline.",
    projectType: "Full-Stack System • Decision & Scoring Logic",
    maturity: "Prototype / Academic Capstone",
    maturityClass: "badge-cyan",
    category: ["Full Stack", "Backend", "Database", "Web"],
    technologies: ["JavaScript", "Node.js", "Express.js", "REST APIs", "Data Processing", "Evaluation Algorithm", "SQL / Database"],
    github: "https://github.com/kala3013",
    architecturePreview: "Candidate Intake ──► Normalization ──► Scoring Engine ──► Weighted Ranking ──► Leaderboard",
    keyFeatures: [
      "Standardized candidate profile intake parsing academic, assessment, and skill vectors",
      "Configurable multi-factor evaluation engine applying objective weighting formulas",
      "Deterministic candidate ranking calculation generating ordered shortlists",
      "Transparent metric breakdown explaining composite ranking placement"
    ],
    caseStudy: {
      overview: "An automated candidate management and ranking system engineered to alleviate recruitment bottlenecks. The application normalizes candidate assessment scores, applies customizable multi-criteria weightings, and outputs an auditable ranked candidate leaderboard.",
      problem: "Campus placement cells and technical recruitment coordinators process hundreds of candidate applications manually. Traditional spreadsheet-based screening causes evaluation fatigue, inconsistent scoring criteria, and delayed shortlist communication.",
      solution: "Engineered a candidate evaluation pipeline comprising a profile intake controller, data normalization routines, and a multi-factor ranking algorithm that calculates transparent composite scores against established competency benchmarks.",
      workflow: "Candidate Intake ──► Data Processing & Normalization ──► Criteria Scoring ──► Multi-Factor Ranking ──► Ranked Candidate Dashboard",
      architecture: `┌──────────────────────────────────────────────┐
│ CANDIDATE INTAKE & DASHBOARD (Client Tier)   │
│ - Candidate Profile Form & Batch Data Parser │
│ - Interactive Ranked Leaderboard UI          │
└──────────────────────┬───────────────────────┘
                       │ JSON REST API
                       ▼
┌──────────────────────────────────────────────┐
│ API GATEWAY & CONTROLLER (Node.js / Express) │
│ - Request Validation & Input Sanitization    │
│ - Candidate Profile Extraction Router        │
└──────────────────────┬───────────────────────┘
                       │ Normalized Candidate Vector
                       ▼
┌──────────────────────────────────────────────┐
│ RANKING & EVALUATION ENGINE                  │
│ - Technical Assessment Weight (40%)          │
│ - Skills Compatibility Weight (35%)          │
│ - Academic / Problem Solving Weight (25%)    │
│ - Composite Score & Positional Sorting       │
└──────────────────────┬───────────────────────┘
                       │ Ranked Candidate Array
                       ▼
┌──────────────────────────────────────────────┐
│ PERSISTENCE LAYER (Relational Database)      │
│ - Candidates Table & Evaluation Log Records  │
└──────────────────────────────────────────────┘`,
      technologies: ["JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs", "Data Processing", "Relational Database / SQL"],
      candidateRankingVisualization: [
        { rank: 1, id: "Ref #A-101", compositeScore: 92, skillsMatch: 95, expFit: 90, assessmentScore: 91, status: "Top Shortlist" },
        { rank: 2, id: "Ref #B-204", compositeScore: 87, skillsMatch: 88, expFit: 85, assessmentScore: 88, status: "Recommended" },
        { rank: 3, id: "Ref #C-309", compositeScore: 81, skillsMatch: 82, expFit: 80, assessmentScore: 81, status: "Qualified" },
        { rank: 4, id: "Ref #D-412", compositeScore: 76, skillsMatch: 75, expFit: 78, assessmentScore: 75, status: "Under Review" }
      ],
      codeSnippet: `// Candidate multi-factor weighted scoring and ranking algorithm
export function evaluateAndRankCandidates(candidates, weights = { technical: 0.40, skills: 0.35, academic: 0.25 }) {
  return candidates
    .map(candidate => {
      // 1. Normalize individual factor scores to a standardized 0-100 baseline
      const normTech = Math.min(Math.max(candidate.assessmentScore, 0), 100);
      const normSkills = Math.min(Math.max(candidate.skillsMatchScore, 0), 100);
      const normAcad = Math.min(Math.max(candidate.academicScore, 0), 100);

      // 2. Compute composite weighted score
      const compositeScore = Number(
        ((normTech * weights.technical) + 
         (normSkills * weights.skills) + 
         (normAcad * weights.academic)).toFixed(2)
      );

      return {
        ...candidate,
        compositeScore,
        breakdown: { normTech, normSkills, normAcad }
      };
    })
    // 3. Sort descending by composite score (with technical assessment tie-breaker)
    .sort((a, b) => b.compositeScore - a.compositeScore || b.breakdown.normTech - a.breakdown.normTech)
    // 4. Assign deterministic positional ranking
    .map((candidate, index) => ({
      rank: index + 1,
      ...candidate
    }));
}`,
      features: [
        "Candidate Intake: Standardized form processing for student profiles and assessment marks.",
        "Data Normalization: Maps disparate assessment scores into a uniform 0-100% baseline.",
        "Multi-Factor Scoring: Evaluates candidate profiles across technical, skills, and academic dimensions.",
        "Transparent Shortlist: Generates an auditable ranked table with score breakdown per candidate."
      ],
      development: "Engineered candidate evaluation algorithms, authored schema validation checks for profile records, and built sorting routines with deterministic tie-breaking logic.",
      challenges: "Designing an objective normalization model that accounts for disparate input scales without skewing composite rankings.",
      learning: "Gained practical mastery in algorithmic data processing, score normalization mathematics, REST API design, and building transparent, auditable decision pipelines.",
      futureImprovements: [
        "Resume document automatic text extraction using NLP parsing.",
        "Automated email notification triggers to inform candidates of shortlist status."
      ]
    }
  },
  {
    id: "code-analyzer",
    title: "AI Code Analyzer",
    tagline: "AI-assisted source-code analysis and productivity assistance using CrewAI.",
    projectType: "AI Agent Orchestration • Developer Productivity",
    maturity: "Prototype / Exploring",
    maturityClass: "badge-indigo",
    category: ["AI", "Backend"],
    technologies: ["Python", "CrewAI", "LLM Concepts", "AI Agents", "Code Analysis"],
    github: "https://github.com/kala3013/crewai-code-anayzer",
    architecturePreview: "Source Code ──► CrewAI Agents ──► Defect Analysis ──► AI Suggestions",
    keyFeatures: [
      "Multi-agent collaborative source code static inspection pipeline",
      "Specialized agent roles for syntax examination and defect identification",
      "AI-assisted code recommendations to enhance developer productivity",
      "Grounded prompt strategies avoiding hallucinated libraries"
    ],
    caseStudy: {
      overview: "An experimental AI-assisted developer tool designed to analyze source code snippets and provide contextual explanations and suggestions using autonomous multi-agent pipelines.",
      problem: "Software developers frequently spend significant time identifying subtle syntax oversights and code anti-patterns that standard linters flag without explanatory context.",
      solution: "Leveraged multi-agent orchestration with CrewAI in Python, partitioning static inspection into specialized agent roles: an Auditor agent inspecting structure and a Specialist formulating contextual guidance.",
      workflow: "Source Code File ──► Code Auditor Agent ──► Defect Diagnosis Agent ──► Suggestion Agent ──► Structured Analysis Report",
      architecture: `┌──────────────────────────────────────────────┐
│ INPUT: Python / Target Source Files          │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ CREWAI MULTI-AGENT WORKFLOW                  │
│ 1. Code Auditor Agent (Syntax & Flow)        │
│ 2. Defect Diagnosis Agent (Contextual Logic) │
│ 3. Suggestion Agent (Actionable Advice)      │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ OUTPUT: Structured Defect Report & Hints     │
└──────────────────────────────────────────────┘`,
      technologies: ["Python", "CrewAI", "LLM API Interfaces", "AST Parsing Concepts"],
      codeSnippet: `# CrewAI multi-agent source code analysis workflow
from crewai import Agent, Task, Crew, Process

# 1. Specialized Code Auditor Agent
auditor = Agent(
    role="Senior Code Auditor",
    goal="Identify AST syntax errors, logic anti-patterns, and code smells",
    backstory="Static analysis engineer focused on code readability and bug prevention.",
    verbose=True
)

# 2. Defect Diagnostics Task
audit_task = Task(
    description="Inspect target source snippet for syntax hazards and logical anti-patterns.",
    expected_output="Structured JSON report of identified issues with line numbers.",
    agent=auditor
)

# 3. Multi-Agent Crew
crew = Crew(
    agents=[auditor],
    tasks=[audit_task],
    process=Process.sequential
)`,
      features: [
        "Source-Code Analysis: Scans codebase snippets for potential runtime hazards.",
        "Error Detection: Flags syntax violations and algorithmic anti-patterns.",
        "AI-Assisted Insights: Formulates clear explanations and actionable developer hints.",
        "Developer Productivity: Designed to speed up debugging during early development."
      ],
      development: "Configured CrewAI agent tasks and agent roles in Python, implemented file input handlers, and structured strict prompt constraints to prevent unsupported assumptions.",
      challenges: "Ensuring agents strictly adhere to verified syntax rules rather than speculating about external modules.",
      learning: "Gained practical knowledge of agentic orchestration, sequential task pipelines, role prompt engineering, and LLM developer integration.",
      futureImprovements: [
        "Automated unit-test execution against code snippets to verify suggestions programmatically.",
        "VS Code in-editor extension interface for seamless local IDE integration."
      ]
    }
  },
  {
    id: "thamarai-hospital",
    title: "Thamarai Fertility Hospital Management System",
    tagline: "Multi-branch healthcare web application with JWT role-based access.",
    projectType: "Healthcare Backend & DB • Multi-Branch Architecture",
    maturity: "Prototype / Academic Project",
    maturityClass: "badge-amber",
    category: ["Full Stack", "Backend", "Database", "Web"],
    technologies: ["Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
    github: "https://github.com/kala3013",
    architecturePreview: "Client ──► JWT Auth Guard ──► Multi-Branch Router ──► MySQL",
    keyFeatures: [
      "Role-based authentication & authorization using JSON Web Tokens (JWT)",
      "Multi-branch conceptual architecture (Coimbatore, Chennai, Salem, Tiruppur, Pollachi)",
      "Normalized relational schema for patients, appointment schedules, and staff accounts",
      "Strict data isolation and centralized administrative query management"
    ],
    caseStudy: {
      overview: "A full-stack healthcare web application prototype featuring backend REST APIs, secure JWT authentication, and relational database management across multiple regional clinic branches.",
      problem: "Coordinating patient records and appointment schedules across multiple regional clinics requires reliable authentication, role enforcement, and centralized database partitioning.",
      solution: "Engineered a secure Node/Express backend backed by a normalized MySQL relational database, enforcing branch-level query filtering and signed JWT token verification.",
      workflow: "Client Request ──► JWT Authentication Middleware ──► Branch Role Validation ──► Express Route Controller ──► MySQL Query Execution",
      architecture: `┌──────────────────────────────────────────────┐
│ CLIENT APPLICATIONS / FRONTEND CONSUMERS     │
└──────────────────────┬───────────────────────┘
                       │ Bearer JWT Authorization
                       ▼
┌──────────────────────────────────────────────┐
│ AUTH & ROUTING MIDDLEWARE                    │
│ - JWT Token Verification                     │
│ - Role Guard (Admin, Branch Staff)           │
└──────────────────────┬───────────────────────┘
                       │ Authorized Dispatch
                       ▼
┌──────────────────────────────────────────────┐
│ MULTI-BRANCH CONTROLLERS                     │
│ [Coimbatore] [Chennai] [Salem] [Tiruppur] [Pollachi]
└──────────────────────┬───────────────────────┘
                       │ Parameterized SQL Queries
                       ▼
┌──────────────────────────────────────────────┐
│ RELATIONAL DATABASE (MySQL)                  │
│ - Patients Table                             │
│ - Appointments Table (Foreign Keys)          │
│ - Branches & User Credentials (Salted Hashes)│
└──────────────────────────────────────────────┘`,
      technologies: ["Node.js", "Express.js", "MySQL", "JWT (JSON Web Tokens)", "Bcrypt Password Hashing"],
      codeSnippet: `// JWT Role Guard middleware with regional branch-level data isolation
export const verifyBranchAccess = (requiredRole) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'Authentication token required' });
    }

    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Role enforcement: Admin has global visibility; Branch staff restricted to local clinic
      if (requiredRole && decoded.role !== requiredRole && decoded.role !== 'SUPERADMIN') {
        return res.status(403).json({ success: false, error: 'Access denied: Insufficient privileges' });
      }

      req.user = decoded; // Contains user ID, role, and branchCode ('CBE', 'CHN', 'SLM', etc.)
      next();
    } catch (err) {
      return res.status(403).json({ success: false, error: 'Invalid or expired session token' });
    }
  };
};`,
      features: [
        "Authentication: Secure user login issuing tamper-proof signed JWTs.",
        "Authorization: Role-based endpoints ensuring branch staff only access their regional clinic records.",
        "Multi-Branch Partitioning: Configured routing for Coimbatore, Chennai, Salem, Tiruppur, and Pollachi branches.",
        "User Management: Administrative provisioning of staff accounts and access revocation."
      ],
      development: "Architected relational MySQL table schema with foreign key constraints, authored Express middleware for JWT validation, and implemented parameterized CRUD queries.",
      challenges: "Managing branch-specific data isolation within a single unified database schema while maintaining administrative cross-branch views.",
      learning: "Mastered JWT lifecycle management, HTTP Authorization header patterns, relational foreign keys, and SQL injection prevention using parameterized statements.",
      futureImprovements: [
        "Automated multi-factor authentication (MFA) for administrative accounts.",
        "Read-replica database routing for high-volume appointment queries."
      ]
    }
  },
  {
    id: "certificate-generator",
    title: "Automated Certificate Generation System",
    tagline: "Relational database application for academic certificate tracking and dynamic issuance.",
    projectType: "Full-Stack Web App • Database & Form Processing",
    maturity: "Completed Academic Project",
    maturityClass: "badge-emerald",
    category: ["Full Stack", "Backend", "Database", "Web"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kala3013/Exam-Cell-Certificate-Issue-Register",
    architecturePreview: "Intake Form ──► Server Validation ──► MySQL Ledger ──► Dynamic Generation",
    keyFeatures: [
      "Dynamic certificate record creation with unique tracking IDs",
      "Normalized relational schema in MySQL with student verification mappings",
      "Server-side form sanitization and input validation preventing duplications",
      "Administrative interface for certificate status verification and searching"
    ],
    caseStudy: {
      overview: "An institutional web application built with PHP and MySQL designed to streamline certificate issuance for examination cells, ensuring tamper-proof record maintenance and automated tracking.",
      problem: "Academic examination cells often rely on physical ledgers or fragmented spreadsheets to track certificate issuances, causing administrative delays and risks of duplicate issue numbers.",
      solution: "Engineered a normalized relational database in MySQL coupled with PHP form controllers that validate student registration numbers, prevent duplicate requests, and automate certificate record generation.",
      workflow: "Student Data Input ──► Server Validation & Sanitization ──► Relational MySQL Insertion ──► Certificate Document Generation",
      architecture: `┌──────────────────────────────────────────────┐
│ CLIENT INTAKE & ADMIN DASHBOARD              │
│ - HTML5 / CSS3 Responsive Form Interface     │
│ - Certificate Record Search & Audit Views    │
└──────────────────────┬───────────────────────┘
                       │ HTTP POST / Form Submissions
                       ▼
┌──────────────────────────────────────────────┐
│ SERVER CONTROLLER (PHP)                      │
│ - Input Sanitization & Validation (filter_var)
│ - Unique Certificate ID Generation           │
└──────────────────────┬───────────────────────┘
                       │ Parameterized SQL Execution
                       ▼
┌──────────────────────────────────────────────┐
│ PERSISTENCE TIER (MySQL)                     │
│ - Students Table (Registration Numbers)      │
│ - Certificates Table (Issue Dates, Signatures│
└──────────────────────────────────────────────┘`,
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      codeSnippet: `<?php
// Parameterized SQL query ensuring atomic certificate record lookup
$certNumber = filter_input(INPUT_POST, 'certificate_number', FILTER_SANITIZE_SPECIAL_CHARS);
$studentId  = filter_input(INPUT_POST, 'student_id', FILTER_VALIDATE_INT);

if (!$certNumber || !$studentId) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Valid Certificate Number and Student ID required']);
    exit;
}

$stmt = $conn->prepare("
    SELECT c.certificate_number, c.issue_date, s.student_name, s.department
    FROM certificates c
    INNER JOIN students s ON c.student_id = s.id
    WHERE c.certificate_number = ? AND c.student_id = ?
");
$stmt->bind_param("si", $certNumber, $studentId);
$stmt->execute();
$result = $stmt->get_result();
$record = $result->fetch_assoc();
?>`,
      features: [
        "Certificate Registration: Form-based intake of student registration and examination data.",
        "Dynamic Generation: Automated generation of verified certificate records with tracking IDs.",
        "Database Administration: Administrative panel to search, update, approve, and delete records.",
        "Form Handling: Robust server-side validation preventing incomplete or duplicate submissions."
      ],
      development: "Developed the end-to-end web system including relational database design, PHP CRUD script authoring, responsive form styling, and input validation routines.",
      challenges: "Designing reliable input sanitization and ensuring unique certificate numbering constraints across concurrent submissions.",
      learning: "Gained solid foundations in server-side request-response cycles, relational database integrity, session handling, and clean form processing.",
      futureImprovements: [
        "QR code generation on issued certificates for instant mobile verification.",
        "Automated student notification emails upon certificate approval."
      ]
    }
  },
  {
    id: "pediatric-hospital",
    title: "Pediatric Hospital Management System",
    tagline: "Modern healthcare web platform featuring 14 medical departments, doctor profiles, and appointment scheduling.",
    projectType: "Healthcare Frontend Architecture • UI/UX Design",
    maturity: "Frontend Prototype / In Refinement",
    maturityClass: "badge-cyan",
    category: ["Web"],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "HTML5", "CSS3"],
    github: "https://github.com/kala3013/Pediatric-Hospital-Website",
    architecturePreview: "React 18 SPA ──► Router 6 ──► 14 Departments ──► Doctor Profile ──► Appointment Intake",
    keyFeatures: [
      "14 dedicated pediatric medical department modules with symptom guides and service breakdowns",
      "Comprehensive doctor directory with specialty certifications, OPD timings, and profiles",
      "Multi-step appointment booking workflow with client-side validation and feedback",
      "Accessible healthcare user interface with 24/7 emergency sticky quick-dial and responsive layouts"
    ],
    caseStudy: {
      overview: "A modern healthcare single-page application built with React 18, Vite, and Tailwind CSS. The platform simplifies hospital discovery by structuring 14 medical departments, doctor credentials, and an appointment booking intake workflow.",
      problem: "Patients and parents seeking pediatric care struggle to navigate complex hospital services, view doctor availability, or book consultations on outdated, non-responsive hospital web pages.",
      solution: "Engineered a modular single-page healthcare web platform utilizing React Router 6 and Tailwind CSS, providing sub-second page transitions between 14 specialized departments and an accessible consultation booking interface.",
      workflow: "User Discovery ──► Department & Doctor Profile Inspection ──► Appointment Form Intake ──► Client Validation ──► Booking Confirmation View",
      architecture: `┌──────────────────────────────────────────────┐
│ BROWSER CLIENT (React 18 SPA + Vite)         │
│ - BrowserRouter (React Router 6)             │
│ - Global Navigation & Emergency Sticky Bar   │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ MODULAR ROUTE VIEWS                          │
│ ├── Home & Facilities Overview               │
│ ├── 14 Department Discovery (/departments)   │
│ ├── Doctors & Specialist Directory (/doctors)│
│ └── Appointment Booking Intake (/book)       │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ UI & INTERACTION LAYER                       │
│ - Tailwind CSS Utility Design System         │
│ - Framer Motion Transition Animations        │
│ - Form Validation & Accessibility Hooks      │
└──────────────────────────────────────────────┘`,
      technologies: ["React.js (React 18)", "Vite", "Tailwind CSS", "Framer Motion", "React Router 6", "JavaScript"],
      codeSnippet: `// Sample React Appointment Booking Controller with Department Validation
import React, { useState } from 'react';

export function AppointmentBookingForm({ availableDepartments = [] }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    department: '',
    preferredDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.department) {
      alert('Please select a department and provide contact details.');
      return;
    }
    // Dispatches booking request to notification / backend handler
    console.log('[Appointment Request Dispatched]:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-900 rounded-xl space-y-4">
      <input
        type="text"
        placeholder="Parent / Guardian Name"
        value={formData.parentName}
        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
        required
        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
      />
      <select
        value={formData.department}
        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        required
        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
      >
        <option value="">Select Medical Department</option>
        {availableDepartments.map((dept) => (
          <option key={dept.slug} value={dept.name}>{dept.name}</option>
        ))}
      </select>
      <button type="submit" className="w-full py-2 bg-sky-500 hover:bg-sky-600 font-bold rounded-lg text-white">
        Request Appointment ▹
      </button>
    </form>
  );
}`,
      features: [
        "Department Discovery: 14 specialty department profiles with structured overview data.",
        "Doctor Profiles: Comprehensive credentials, availability schedules, and booking hooks.",
        "Appointment Flow: Form intake validating patient contacts and consultation preferences.",
        "Responsive Design: Fluid navigation across desktop, tablet, and mobile breakpoints."
      ],
      development: "Structured React components using Vite, implemented React Router 6 dynamic route parameters, and built Tailwind CSS responsive cards and accessible forms.",
      challenges: "Designing accessible healthcare typography with high contrast while maintaining an engaging, friendly UI suitable for pediatric care.",
      learning: "Advanced component composition in React 18, declarative routing with React Router, and utility-first styling with Tailwind CSS.",
      futureImprovements: [
        "Backend REST API integration with Supabase or Node.js for persistent appointment storage.",
        "Patient SMS/WhatsApp confirmation notification service."
      ]
    }
  },
  {
    id: "research-answer-bot",
    title: "Research Answer Bot",
    tagline: "Retrieval-Augmented Generation (RAG) system for querying research papers using LangChain and vector stores.",
    projectType: "Generative AI • RAG Architecture • Vector Search",
    maturity: "Functional RAG Prototype",
    maturityClass: "badge-indigo",
    category: ["AI", "Backend", "Database", "Web"],
    technologies: ["Python", "FastAPI", "Streamlit", "LangChain", "ChromaDB", "FAISS", "Sentence-Transformers"],
    github: "https://github.com/kala3013/Research-Answer-Bot",
    architecturePreview: "PDF Upload ──► LangChain Chunking ──► ChromaDB ──► Semantic Retrieval ──► Grounded Answer",
    keyFeatures: [
      "Academic PDF research paper ingestion with recursive chunking and sliding window overlap",
      "Dense semantic vector embeddings generated locally using Sentence-Transformers",
      "Sub-second similarity search across ChromaDB and FAISS vector indexing",
      "Decoupled FastAPI backend service providing REST endpoints for Streamlit frontend",
      "Strictly bounded response generation citing specific sections with zero hallucination"
    ],
    caseStudy: {
      overview: "A Retrieval-Augmented Generation (RAG) AI application that allows researchers and engineers to upload complex academic papers and pose technical queries, generating accurate responses anchored strictly in the source text.",
      problem: "Academic research papers are dense and often exceed 30+ pages, making manual information extraction slow. Standard LLMs frequently hallucinate facts or conflate experimental figures when asked about specific papers.",
      solution: "Engineered a RAG pipeline utilizing LangChain document loaders, chunking strategies, local embedding generation via Sentence-Transformers, and top-K similarity search in ChromaDB to ground the LLM with exact paper excerpts.",
      workflow: "Research PDF Upload ──► Text Extraction & Chunking ──► Vector Embedding Generation ──► Top-K Similarity Search ──► Grounded LLM Response with Citations",
      architecture: `┌──────────────────────────────────────────────┐
│ USER INTERFACE (Streamlit Frontend)          │
│ - Research Paper PDF Upload                  │
│ - Query Input & Source Citation Display      │
└──────────────────────┬───────────────────────┘
                       │ HTTP Multipart / REST
                       ▼
┌──────────────────────────────────────────────┐
│ FASTAPI BACKEND SERVER                       │
│ - /upload-paper: Document Ingestion Router   │
│ - /query: Semantic Query Dispatcher          │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ INGESTION & VECTOR RETRIEVAL PIPELINE        │
│ 1. RecursiveCharacterTextSplitter (Chunks)   │
│ 2. Sentence-Transformers (Embeddings)        │
│ 3. ChromaDB / FAISS (Vector Index)           │
│ 4. Cosine Similarity Top-K Retrieval         │
└──────────────────────┬───────────────────────┘
                       │ Retrieved Context Chunks
                       ▼
┌──────────────────────────────────────────────┐
│ LANGCHAIN RAG GENERATION                     │
│ - Grounded Prompt Template (Zero Hallucinate)│
│ - LLM Contextual Synthesis & Citation Output │
└──────────────────────────────────────────────┘`,
      technologies: ["Python", "FastAPI", "Streamlit", "LangChain", "ChromaDB", "FAISS", "Sentence-Transformers"],
      codeSnippet: `# FastAPI Retrieval-Augmented Generation query endpoint
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

app = FastAPI(title="Research Answer Bot API")
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vector_db = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)

class QueryRequest(BaseModel):
    query: str
    top_k: int = 4

@app.post("/api/query")
async def query_research_paper(req: QueryRequest):
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")
    
    # 1. Retrieve top-K relevant text chunks via cosine similarity
    docs = vector_db.similarity_search(req.query, k=req.top_k)
    context_chunks = [doc.page_content for doc in docs]
    
    return {
        "status": "success",
        "retrieved_count": len(context_chunks),
        "context": context_chunks
    }`,
      features: [
        "Document Ingestion: Automated parsing and chunking of complex academic PDFs.",
        "Vector Storage: High-performance semantic indexing with ChromaDB and FAISS.",
        "Decoupled Architecture: Independent FastAPI service and interactive Streamlit UI.",
        "Grounded Q&A: Strictly bounds answers to verified paper content with zero hallucination."
      ],
      development: "Configured FastAPI async endpoints, implemented LangChain text splitters with optimal chunk sizes, and built the Streamlit interactive dashboard.",
      challenges: "Optimizing chunk size and overlap to preserve academic context across mathematical equations and citation footnotes.",
      learning: "Gained deep, hands-on understanding of vector databases, embedding spaces, cosine similarity search, and RAG architectural patterns.",
      futureImprovements: [
        "Multi-document comparative analysis across multiple research papers simultaneously.",
        "Interactive PDF viewer highlighting retrieved citation bounding boxes."
      ]
    }
  }
];

export const certificationsData = [
  {
    name: "Google Cloud Cybersecurity Certificate",
    issuer: "Google Cloud",
    badgeClass: "badge-cyan",
    icon: "🛡️",
    desc: "Foundations of cloud security, threat detection, network protection, and security posture management."
  },
  {
    name: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    badgeClass: "badge-cyan",
    icon: "📊",
    desc: "Cloud data processing, analytical query modeling, data pipelines, and reporting architectures."
  },
  {
    name: "IBM Generative AI in Action",
    issuer: "IBM",
    badgeClass: "badge-indigo",
    icon: "🤖",
    desc: "Practical generative AI model integration, prompt architectures, and enterprise AI workflows."
  },
  {
    name: "Celonis AI Foundations",
    issuer: "Celonis",
    badgeClass: "badge-indigo",
    icon: "⚡",
    desc: "Process intelligence, algorithmic optimization, and data-driven workflow discovery."
  },
  {
    name: "UiPath Agentic Automation Developer Associate Training",
    issuer: "UiPath",
    badgeClass: "badge-purple",
    icon: "⚙️",
    desc: "Autonomous agentic automation, robotic process triggers, and enterprise integration patterns."
  },
  {
    name: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    badgeClass: "badge-amber",
    icon: "☁️",
    desc: "OCI cloud architecture, computing instances, virtual cloud networks (VCN), and storage tiers."
  },
  {
    name: "AWS Cloud Workshop",
    issuer: "AWS",
    badgeClass: "badge-amber",
    icon: "🏗️",
    desc: "Practical hands-on exploration of AWS core services, EC2 compute, S3 storage, and IAM roles."
  },
  {
    name: "Applied GenAI Workshop",
    issuer: "Applied GenAI",
    badgeClass: "badge-indigo",
    icon: "🧠",
    desc: "Hands-on application of Large Language Models, contextual reasoning, and AI-assisted tooling."
  }
];

export const internshipData = {
  company: "Sangam Soft Solutions",
  location: "Coimbatore, Tamil Nadu",
  role: "Full Stack Development Intern",
  duration: "June 2026",
  project: "Code Infinite Website Redesign",
  technologies: ["React", "Node.js", "Git", "VS Code"],
  overview: "Worked on practical web development and interface redesign activities for the Code Infinite website.",
  modules: [
    { name: "Home Section", desc: "Redesigned landing hero presentation and responsive layout." },
    { name: "About Section", desc: "Structured modular company profile and informational overview." },
    { name: "Training & Courses", desc: "Developed structured catalog layouts for educational programs." },
    { name: "Services", desc: "Created responsive service cards with clear visual hierarchy." },
    { name: "Forms", desc: "Implemented accessible form validation for inquiry submissions." },
    { name: "Gallery", desc: "Engineered responsive media display layouts." },
    { name: "Blog-Related Sections", desc: "Structured readable article feeds and content views." },
    { name: "Dark / Light Theme", desc: "Implemented user-friendly theme switching functionality." }
  ],
  workflow: "Collaborated using standard Git feature branches, pull requests, and peer code reviews inside VS Code."
};

export const careerTimeline = [
  {
    year: "2024",
    title: "Diploma with Distinction (93%) & Daimler Award",
    detail: "Completed Diploma in Computer Engineering at Konghu Velalar Polytechnic College with 93% distinction. Won Daimler Best for Innovation award for creative technical problem-solving."
  },
  {
    year: "2024–2025",
    title: "B.E. CSE Lateral Entry & Smart India Hackathon",
    detail: "Admitted via lateral entry to Anna University Regional Campus, Coimbatore. Maintained 8.01 CGPA. Competed and advanced to Round 2 of Smart India Hackathon 2025."
  },
  {
    year: "2026",
    title: "Full Stack Internship & AI / Cloud Projects",
    detail: "Full Stack Development Intern at Sangam Soft Solutions (Code Infinite Redesign). Built AI Code Analyzer (CrewAI) and Thamarai Hospital Management system. Competed in India.RUN Hackathon."
  },
  {
    year: "2027",
    title: "B.E. Graduation & Software Engineering",
    detail: "Graduating with B.E. in Computer Science and Engineering from Anna University Regional Campus, prepared for professional Full Stack / Software Developer roles."
  }
];

export const achievementsData = [
  {
    title: "Daimler — Best for Innovation",
    year: "2024",
    description: "Awarded Best for Innovation by Daimler for creative technical problem-solving and software application prototype development."
  },
  {
    title: "Smart India Hackathon (SIH) — Round 2",
    year: "2025",
    description: "Successfully advanced to Round 2 of India's prestigious national hackathon, tackling complex technological problem statements under intensive timelines."
  },
  {
    title: "India.RUN Hackathon",
    year: "2026",
    description: "Participated and competed in nationwide technology hackathon, developing collaborative software solutions within demanding team constraints."
  }
];

export const leadershipData = [
  {
    title: "CSE Placement Coordinator",
    role: "Departmental Placement Leadership",
    desc: "Liaising with corporate recruiters, coordinating recruitment drives, and preparing student peers for technical recruitment pipelines."
  },
  {
    title: "Class Placement Representative",
    role: "Student Representation & Communication",
    desc: "Acting as the primary bridge between the department placement cell and classmates, managing vital scheduling and career announcements."
  },
  {
    title: "CSE Committee Member",
    role: "Event Management & Department Support",
    desc: "Actively organizing technical symposiums, coding workshops, and department initiatives at Anna University Regional Campus."
  },
  {
    title: "Placement Training Coordination",
    role: "Peer Mentorship & Skill Development",
    desc: "Assisting classmates with aptitude practice, technical interview preparation, and coding problem-solving sessions."
  },
  {
    title: "Applied GenAI Workshop (Anna Univ × Kissflow)",
    role: "Technical Workshop Collaboration",
    desc: "Practical hands-on exploration of Large Language Models, prompt architectures, and enterprise AI workflows."
  }
];

export const educationData = [
  {
    degree: "B.E. Computer Science and Engineering — Lateral Entry",
    institution: "Anna University Regional Campus, Coimbatore",
    duration: "2024 – 2027",
    score: "CGPA: 8.01 / 10",
    scoreLabel: "Current CGPA",
    status: "In Progress"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Konghu Velalar Polytechnic College",
    duration: "Completed in 2024",
    score: "93%",
    scoreLabel: "Final Percentage",
    status: "Completed with Distinction"
  }
];

export const aboutNarrative = [
  {
    step: "01",
    action: "I BUILD",
    title: "Practical Full-Stack Applications",
    desc: "I focus on engineering software that addresses real workflows: responsive React user interfaces, robust Node.js and Express REST services, and normalized relational and document databases."
  },
  {
    step: "02",
    action: "I LEARN",
    title: "Continuous Technology Absorption",
    desc: "From completing my Diploma with 93% distinction to maintaining an 8.01 CGPA at Anna University, I cultivate consistent academic and technical discipline."
  },
  {
    step: "03",
    action: "I EXPERIMENT",
    title: "AI Agents & Cloud Architecture",
    desc: "I explore autonomous AI agentic workflows with CrewAI in Python, experiment with Docker containerization, and study cloud infrastructure across Google Cloud, AWS, and OCI."
  },
  {
    step: "04",
    action: "I COLLABORATE",
    title: "Industry Internship & Team Leadership",
    desc: "During my Full Stack Internship at Sangam Soft Solutions, I contributed to the Code Infinite website redesign using Git branch workflows. As Placement Coordinator, I coordinate campus drives and mentor peers."
  },
  {
    step: "05",
    action: "I IMPROVE",
    title: "Code Quality & Engineering Mindset",
    desc: "Building, benchmarking, testing, and refining. Every project is an opportunity to write cleaner, more resilient, and more maintainable software."
  }
];

export const personalStrengths = [
  {
    id: "algorithmic-problem-solving",
    name: "Algorithmic Problem Solving",
    discipline: "Analytical Engineering",
    icon: "🧠",
    badge: "Deterministic Logic",
    color: "#38bdf8",
    desc: "Decomposing ambiguous problem spaces into clean, modular components with optimal time and space complexity.",
    evidence: "Engineered multi-criteria Candidate Ranking Algorithm with customizable weighting formulas; Anna University CSE distinction.",
    tags: ["Data Structures", "Algorithmic Complexity", "Deterministic Logic", "Structured Decomposition"]
  },
  {
    id: "full-stack-delivery",
    name: "Full-Stack System Delivery",
    discipline: "End-to-End Engineering",
    icon: "⚡",
    badge: "Production Proven",
    color: "#10b981",
    desc: "Bridging declarative client-side interfaces with robust asynchronous REST API microservices and secure persistence.",
    evidence: "Verified industry internship at Sangam Soft Solutions contributing to full-stack applications; 6 verifiable project repositories.",
    tags: ["React & Node.js", "REST APIs", "JWT Security", "Decoupled Architecture"]
  },
  {
    id: "agentic-ai-exploration",
    name: "Agentic AI & Swarm Orchestration",
    discipline: "Emerging Intelligence",
    icon: "🤖",
    badge: "Autonomous Systems",
    color: "#818cf8",
    desc: "Designing autonomous multi-agent pipelines where specialized AI personas collaborate, inspect code, and execute sequential workflows.",
    evidence: "Built AI Code Analyzer using CrewAI multi-agent swarms with custom role prompting and verifiable code vulnerability reporting.",
    tags: ["CrewAI Multi-Agents", "Prompt Guardrails", "LLM Integration", "Automated Inspection"]
  },
  {
    id: "devops-cloud-parity",
    name: "DevOps & Cloud Environment Parity",
    discipline: "Infrastructure & Reliability",
    icon: "☁️",
    badge: "Automated Workflows",
    color: "#f59e0b",
    desc: "Containerizing services for 100% environment parity and building automated continuous deployment pipelines.",
    evidence: "Docker multi-stage builds, automated GitHub Actions CI/CD pipeline deploying live to production on push, Google Cloud Cybersecurity certified.",
    tags: ["Docker OCI", "GitHub Actions CI/CD", "Google Cloud", "Zero-Drift Parity"]
  },
  {
    id: "leadership-communication",
    name: "Technical Leadership & Coordination",
    discipline: "Collaborative Impact",
    icon: "🤝",
    badge: "Campus Placement Coordinator",
    color: "#ec4899",
    desc: "Aligning team efforts, communicating architectural trade-offs, and coordinating technical placement initiatives.",
    evidence: "Appointed Student Placement Coordinator at Anna University Regional Campus, liaising with 40+ corporate recruiters and student cohorts.",
    tags: ["Placement Coordination", "Technical Documentation", "Cross-Team Alignment", "NSS Volunteering"]
  },
  {
    id: "rapid-adaptability",
    name: "Rapid Adaptability & Fast Assimilation",
    discipline: "Growth Mindset",
    icon: "🚀",
    badge: "93% Diploma Distinction",
    color: "#06b6d4",
    desc: "Rapidly mastering unfamiliar frameworks, tools, and paradigms under stringent hackathon constraints.",
    evidence: "District Level Hackathon award; 93% distinction from Konghu Velalar; 8 verified certifications across Oracle, Google & freeCodeCamp.",
    tags: ["Rapid Learning", "Hackathon Prototyping", "8 Verified Credentials", "Continuous Improvement"]
  }
];

export const technicalChannelsData = [
  {
    id: "all",
    name: "All Channels",
    categoryKey: "All",
    icon: "🌐",
    tagline: "Comprehensive Full-Stack & Systems Inventory",
    overview: "30+ verified technologies spanning modern reactive client frameworks, high-throughput backend services, relational ACID databases, autonomous multi-agent AI, and cloud containerization.",
    metric: "30+ Technologies • 6 Production Projects",
    color: "#38bdf8"
  },
  {
    id: "frontend",
    name: "Client & Frontend",
    categoryKey: "Frontend",
    icon: "⚛️",
    tagline: "Reactive State Velocity & Semantic Component Architecture",
    overview: "Crafting responsive, accessible user interfaces with declarative state hooks, sub-16ms virtual DOM diffing, and zero-layout-shift design tokens.",
    metric: "60fps Performance • Accessible ARIA",
    color: "#38bdf8"
  },
  {
    id: "backend",
    name: "Backend & APIs",
    categoryKey: "Backend",
    icon: "⚙️",
    tagline: "High-Throughput Asynchronous Microservices & REST Endpoints",
    overview: "Event-driven asynchronous server runtimes, structured middleware pipelines, cryptographic JWT token verification, and decoupled client-server contracts.",
    metric: "Non-Blocking I/O • Stateless Auth",
    color: "#22c55e"
  },
  {
    id: "databases",
    name: "Persistence & Data",
    categoryKey: "Databases",
    icon: "🗄️",
    tagline: "Normalized Relational Schemas & Dynamic Document Stores",
    overview: "3rd Normal Form schema normalization ensuring ACID transactional guarantees, coupled with dynamic indexed NoSQL document stores for rapid prototyping.",
    metric: "3NF Normalization • ACID Guarantees",
    color: "#0284c7"
  },
  {
    id: "ai",
    name: "Autonomous AI",
    categoryKey: "AI",
    icon: "🤖",
    tagline: "Multi-Agent Swarm Orchestration & Prompt Engineering",
    overview: "Collaborative agentic swarms powered by CrewAI and LLM APIs to inspect source code, delegate analysis tasks, and synthesize actionable engineering reports.",
    metric: "Multi-Agent Swarms • Zero Hallucination",
    color: "#a855f7"
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    categoryKey: "Cloud & DevOps",
    icon: "☁️",
    tagline: "Zero-Drift Containers & Continuous Integration Pipelines",
    overview: "OCI container image packaging, automated GitHub Actions CI/CD workflows, Google Cloud security credentials, and resilient AWS foundations.",
    metric: "100% Env Parity • Automated CI/CD",
    color: "#f59e0b"
  },
  {
    id: "core-cs",
    name: "Core CS Bedrock",
    categoryKey: "Core CS",
    icon: "🧱",
    tagline: "Algorithmic Complexity & Object-Oriented Rigor",
    overview: "Academic and competitive fundamentals: data structures, algorithmic searching/sorting, clean polymorphism, and computational complexity discipline.",
    metric: "Time/Space Optimal • Clean OOP",
    color: "#ec4899"
  },
  {
    id: "tools",
    name: "Workbench & Tooling",
    categoryKey: "Tools",
    icon: "🛠️",
    tagline: "Developer Productivity, Version Control & Collaboration",
    overview: "Branching workflows, atomic commit strategies, terminal-first productivity, language server protocols, and interface wireframing.",
    metric: "Atomic Git Workflows • High Velocity",
    color: "#64748b"
  }
];

export const portfolioTechStackData = {
  positioning: "Premium personal portfolio development — combining strong visual design, immersive 3D presentation, smooth motion, responsive UX, and modern frontend engineering to create a memorable digital first impression.",
  pillars: [
    {
      id: "frontend",
      category: "Frontend Development",
      icon: "⚛️",
      tech: "React • JavaScript / TypeScript • Tailwind CSS • HTML5 & CSS3",
      badgeClass: "badge-cyan",
      items: [
        "Component-based UI architecture and interactive portfolio sections.",
        "Fast, consistent, responsive UI development and design-system styling.",
        "Application logic, interactions, and maintainable frontend structure.",
        "Semantic structure, responsive layouts, and polished visual styling."
      ]
    },
    {
      id: "motion",
      category: "Motion & Interaction",
      icon: "🎬",
      tech: "GSAP • Scroll-Driven Animation • Micro-Interactions",
      badgeClass: "badge-emerald",
      items: [
        "Smooth, cinematic scroll animations, transitions, and interactive motion.",
        "Subtle motion details that make the interface feel refined and responsive.",
        "Interactive storytelling that responds naturally to user scrolling."
      ]
    },
    {
      id: "immersive-3d",
      category: "3D & Immersive Design",
      icon: "🌐",
      tech: "3D Visual Design • 360° Interactive Presentation • Depth & Perspective",
      badgeClass: "badge-indigo",
      items: [
        "Large-scale immersive hero visuals designed to create an immediate premium impression.",
        "Layered composition and perspective-based motion for a more dimensional interface.",
        "A complete rotational visual experience integrated into the hero section."
      ]
    },
    {
      id: "ui-ux",
      category: "UI / UX Design",
      icon: "🎨",
      tech: "Figma • Design Systems • Responsive UX",
      badgeClass: "badge-purple",
      items: [
        "Interface planning, visual systems, layouts, prototypes, and responsive design.",
        "Layouts and interactions optimized across desktop, tablet, and mobile.",
        "Consistent typography, spacing, components, and visual hierarchy."
      ]
    },
    {
      id: "performance",
      category: "Performance & Delivery",
      icon: "⚡",
      tech: "Modern Responsive Architecture • Asset Optimization • Production-Ready Workflow",
      badgeClass: "badge-amber",
      items: [
        "Built for fast rendering and smooth interaction across screen sizes.",
        "Structured development approach for maintainable portfolio projects.",
        "Visual assets prepared with performance and loading experience in mind."
      ]
    }
  ]
};

