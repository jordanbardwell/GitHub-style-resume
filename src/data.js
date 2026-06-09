// Shared resume data for Jordan Bardwell
window.RESUME = {
  profile: {
    name: "Jordan Bardwell",
    login: "jordanbardwell",
    title: "Director, Workplace Platforms",
    bio: "Building AI & automation programs that ship to production — not proofs of concept.",
    location: "Greater Tampa Bay Area",
    email: "jordanbbardwell@gmail.com",
    linkedin: "https://www.linkedin.com/in/jordanbardwell/",
    photo: "jordan.jpeg",
    website: "jordanbardwell.com",
    pronoun: "He builds the operating model from zero.",
    followers: "10+ yrs",
    company: "Epiq",
  },

  // README intro
  readme: {
    headline: "Director-level leader — 10+ years in automation & enterprise platforms, now leading the AI work that ships to production, not proofs of concept.",
    body: [
      "I run AI and automation as a managed portfolio — intake, governance, and ROI tracking — so wins are measured and repeatable, not one-offs. That operating model is what produced the results below.",
      "I built Epiq's Power Platform Center of Excellence from scratch — governance, intake, ROI tracking, citizen-developer enablement — and turned it into the enterprise model for managing automation at scale.",
      "I serve as the bridge between executive stakeholders and the technical team, translating business priorities into a sequenced roadmap and helping leaders understand what AI can and can't do for them today.",
      "On the technical side I architect and ship across the full stack: agentic AI in Copilot Studio, Power Platform at enterprise scale, Azure Functions backing Jira and Power Automate integrations, and LLM integration via Azure AI Foundry.",
    ],
  },

  // Top-line impact metrics
  stats: [
    { value: "25,000+", label: "hours saved / year" },
    { value: "$2M+", label: "cost reductions" },
    { value: "40+", label: "production solutions" },
    { value: "10+", label: "years building" },
  ],

  // Pinned achievements (rendered as repos)
  pinned: [
    {
      name: "eva",
      desc: "Multi-agent AI orchestrator built in Copilot Studio with specialized child agents for Workday, Jira, ServiceNow & Exchange. Now used company-wide.",
      lang: "Copilot Studio", langColor: "#0969da",
      stars: "company-wide", metric: "orchestrator",
    },
    {
      name: "power-platform-coe",
      desc: "Founded and scaled Epiq's Power Platform Center of Excellence from zero — governance, acceptable-use, enablement & citizen-developer tracks across global teams.",
      lang: "Governance", langColor: "#1a7f37",
      stars: "global model", metric: "enterprise",
    },
    {
      name: "rapidtrack",
      desc: "Enterprise intake-to-ROI system for managing automation & AI opportunities. Tracks 40+ production solutions and 60+ pipeline opportunities.",
      lang: "Power Platform", langColor: "#742774",
      stars: "40+ solutions", metric: "intake→ROI",
    },
    {
      name: "itsm-migration",
      desc: "Migrated Epiq's entire ITSM operation from ServiceNow to Jira Service Management in three months — 600 agents, 8,000 internal users, zero critical disruption.",
      lang: "Jira / ITSM", langColor: "#2f81f7",
      stars: "3 months", metric: "8,000 users",
    },
    {
      name: "mass-refund-automation",
      desc: "Power Automate Desktop system across 150+ VMs that processed refunds for 400K customers during Winter Storm Elliott, keeping Southwest in DOT compliance.",
      lang: "Power Automate", langColor: "#742774",
      stars: "400K customers", metric: "crisis-scale",
    },
    {
      name: "onboarding-automation",
      desc: "Fully automated onboarding/offboarding integrating Workday, ServiceNow, AD, Azure Automation & M365 — cut service-desk requests 30%, $1M annual savings.",
      lang: "Power Automate", langColor: "#742774",
      stars: "$1M / year", metric: "-30% tickets",
    },
  ],

  // Experience as repositories
  experience: [
    {
      role: "Director, Workplace Platforms",
      org: "Epiq", start: "Feb 2026", end: "Present", current: true, tier: "senior",
      headline: "Migrated all of Epiq's ITSM to Jira in three months — 600 agents, 8,000 users, zero disruption.",
      summary: "Two platform functions run as a single org — Workplace Collaboration and Automation & AI — setting roadmap and delivery across both.",
      points: [
        "Led the migration of Epiq's entire ITSM operation from ServiceNow to Jira Service Management in three months — 600 agents, 8,000 internal users, and external customer-facing delivery, with zero critical disruption.",
        "Lead 14 across two platform functions after a 2026 re-org broadened my scope — Workplace Collaboration (Exchange, Entra, M365, Miro, Jira) and Automation & AI (Power Platform, Copilot Studio, Azure); 2 team leaders, an Architect and an Advisor report in.",
        "Extending agentic AI into HR and Finance: rebuilding LaunchPad onboarding/offboarding as an agentic Copilot Studio workflow, and an OCR pipeline automating vendor-invoice processing into SAP.",
      ],
      tags: ["Copilot Studio", "Jira", "SAP", "Azure"],
    },
    {
      role: "Director, Rapid Development & Innovation",
      org: "Epiq", start: "Oct 2025", end: "Feb 2026", tier: "senior",
      headline: "Delivered 6,000+ hours saved and $1M+ in cost reductions across 40+ production solutions.",
      summary: "Delivered 6,000+ hours in annual time savings and $1M+ in cost reductions across a portfolio of 40+ production solutions.",
      points: [
        "Matured the Power Platform CoE into a global model — governance frameworks, enablement programs, and citizen-developer tracks across international teams.",
        "Rebuilt Eva as a multi-agent orchestrator in Copilot Studio with specialized child agents for Workday, Jira, ServiceNow & Exchange; coached other business units on deploying their own agents.",
        "Unified data pipelines across Microsoft Fabric and Azure Data Factory, cutting time-to-insight for global reporting.",
        "Selected by Microsoft for a published Customer Success Story on Epiq's Copilot Studio, Power Platform & AI automation work.",
      ],
      tags: ["Copilot Studio", "Microsoft Fabric", "Azure Data Factory"],
    },
    {
      role: "Manager, Rapid Development & Innovation",
      org: "Epiq", start: "Mar 2024", end: "Oct 2025", tier: "senior",
      headline: "Founded Epiq's Power Platform Center of Excellence from zero and grew it into the enterprise model.",
      summary: "Founded and scaled Epiq's Power Platform Center of Excellence — governance, standards and citizen-developer enablement built from zero with a lean team.",
      points: [
        "Designed and deployed agentic copilots in Copilot Studio — Eva (company-wide Teams assistant integrating Workday & IT self-service) and Sophie (IT-focused agent for administrative tasks).",
        "Built ETL pipelines in Azure Data Factory and Microsoft Fabric pulling ServiceNow data into a Lakehouse for self-service reporting.",
        "Built RapidTrack, the enterprise intake-to-ROI system tracking 40+ production solutions and 60+ pipeline opportunities.",
        "Managed a team of 4 developers across Power Platform and Azure (Functions, Automation, APIM).",
      ],
      tags: ["Power Platform", "Azure", "Copilot Studio"],
    },
    {
      role: "System Engineer",
      org: "Southwest Airlines", start: "Sep 2021", end: "Mar 2024", tier: "senior",
      headline: "Processed refunds for 400K customers during Winter Storm Elliott, keeping Southwest DOT-compliant.",
      summary: "Led Southwest's Power Platform adoption, migrating 20+ automations from a legacy platform and standing up production-ready environments.",
      points: [
        "Architected a mass-refund automation across 150+ virtual machines, processing refunds for 400K customers during Winter Storm Elliott and keeping Southwest in DOT compliance.",
        "Built a model-driven app integrated with ServiceNow to auto-rate and flag closed tickets, improving resolution quality ~25%.",
      ],
      tags: ["Power Automate Desktop", "ServiceNow"],
    },
    {
      role: "System Engineer",
      org: "Epiq", start: "Jun 2020", end: "Sep 2021", tier: "senior",
      headline: "Built the onboarding automation that saved $1M annually and cut service-desk tickets 30%.",
      summary: "Designed the automated onboarding/offboarding workflow that became a flagship ROI win.",
      points: [
        "Deployed a fully automated onboarding/offboarding workflow integrating Workday, ServiceNow, Active Directory, Azure Automation & M365 — cut service-desk requests 30%, $1M annual savings.",
        "Built an asset-tracking app in Power Apps integrating Intune & Autopilot, replacing an error-prone Excel process.",
      ],
      tags: ["Power Automate", "Power Apps", "Intune"],
    },
    {
      role: "Desktop Engineer",
      org: "MSTS", start: "Jan 2019", end: "Jun 2020", tier: "earlier",
      headline: "Automated HR/IT onboarding and modernized device management to Intune + Autopilot.",
      summary: "Automated IT/HR processes and modernized device management.",
      points: [
        "Automated employee onboarding/offboarding in Cherwell using PowerShell.",
        "Migrated from Hybrid to Native Office 365, including on-prem Exchange to O365; moved device management from SCCM to Intune with Autopilot.",
      ],
      tags: ["PowerShell", "Intune", "O365"],
    },
    {
      role: "Systems Engineer I",
      org: "YRC Worldwide, Inc.", start: "Sep 2016", end: "Dec 2019", tier: "earlier",
      headline: "Led the Windows 7 → 10 migration across 15,000 devices and rebuilt SCCM from scratch.",
      summary: "Rebuilt enterprise device infrastructure and led a large-scale OS migration.",
      points: [
        "Rebuilt SCCM from scratch — server architecture, distribution points across field locations, and remote management for off-network devices.",
        "Led the Windows 7 → Windows 10 migration across 15,000 devices spanning HQ, call centers and terminals.",
      ],
      tags: ["SCCM", "Windows"],
    },
    {
      role: "Desktop Support Technician",
      org: "CompuCom", start: "Jul 2015", end: "Sep 2016", tier: "earlier",
      headline: "Dedicated desktop support across a 30,000-user enterprise, including executive support.",
      summary: "Dedicated desktop support across a 30,000-user enterprise.",
      points: [
        "Provided desktop support for YRC Worldwide across 30,000 users, including specialized support for executives and executive admins.",
      ],
      tags: ["Support"],
    },
  ],

  // Skill groups (languages-style)
  skills: [
    { group: "Power Platform", color: "#742774", items: ["Power Apps", "Power Automate", "Power Automate Desktop"] },
    { group: "Azure", color: "#0969da", items: ["Azure AI Foundry", "Azure Functions", "Azure Data Factory", "Microsoft Fabric", "Azure Automation", "APIM"] },
    { group: "M365 & Identity", color: "#1a7f37", items: ["Exchange", "Entra", "M365", "Intune", "Autopilot"] },
    { group: "ITSM & Integration", color: "#bf8700", items: ["Jira Service Management", "Jira", "ServiceNow", "Workday", "SAP"] },
    { group: "Languages", color: "#3178c6", items: ["TypeScript", "Python", "PowerShell", "JSON"] },
  ],

  education: { school: "Centriq Training", year: "2014" },

  // Leadership scope (Director-level signal)
  leadership: {
    reports: "14",
    teams: "Rapid Development & Innovation + Workplace Collaboration",
    directs: "2 team leaders, an Architect & an Advisor report directly",
    owns: ["Rapid Development & Prototyping", "Internal AI & Automation architecture", "Collaboration tools — M365, Miro, Jira"],
    trajectory: "Manager → Director to two platform orgs in under two years.",
    effect: "Enabled citizen development across 3+ business units, coaching other teams to build their own governed agents.",
  },

  // Operating thesis (forward-looking POV)
  pov: "I like solving hard problems. Hand me something ambiguous and I'll figure it out, get a prototype working fast, and take it all the way to production. I care about real systems people use, not proofs of concept.",

  // How I operate (leadership competencies)
  competencies: ["Org & team building", "Executive stakeholder management", "Roadmap & portfolio ownership", "Governance & acceptable-use", "Intake-to-ROI prioritization", "Citizen-developer enablement", "Coaching & capability-building", "AI strategy & enablement"],

  // Provenance line for the impact numbers
  provenance: "Impact tracked from intake to realized ROI through RapidTrack — the system I built for it.",

  // Repository categories (filter pills)
  repoCategories: ["All", "AI & Agents", "Automation", "Data", "Platform", "Apps"],

  // The long tail — every other shipped project (work + side)
  repositories: [
    { name: "quote-to-cash", kind: "work", category: "Automation", desc: "A reimagined end-to-end quote-to-cash process, prototyped at an internal hackathon and now in UAT.", lang: "Power Platform", langColor: "#742774", impact: "new QtC process", year: 2026, status: "UAT" },
    { name: "source-to-pay", kind: "work", category: "Automation", desc: "Invoice processing and SAP integration for finance & procurement, prototyped at a hackathon and now under development.", lang: "Azure · SAP", langColor: "#bf8700", impact: "finance automation", year: 2026, status: "In dev" },
    { name: "talkdesk-copilot", kind: "work", category: "AI & Agents", desc: "Custom Talkdesk × Copilot Studio integration on Azure Functions, letting visitors reach live call-center agents from chatbots on class-action sites.", lang: "Copilot Studio", langColor: "#0969da", impact: "live-agent handoff", year: 2025 },
    { name: "rapidtrack", kind: "work", category: "Platform", desc: "Enterprise intake-to-ROI system for automation & AI opportunities — tracks 40+ production solutions and 60+ pipeline opps.", lang: "Power Platform", langColor: "#742774", impact: "40+ tracked", year: 2024 },
    { name: "sophie", kind: "work", category: "AI & Agents", desc: "IT-focused Copilot Studio agent standardizing administrative and service-desk tasks.", lang: "Copilot Studio", langColor: "#0969da", impact: "IT self-service", year: 2024 },
    { name: "servicenow-lakehouse", kind: "work", category: "Data", desc: "ETL pipelines pulling ServiceNow data into a Fabric Lakehouse for self-service reporting across business units.", lang: "Azure Data Factory", langColor: "#3178c6", impact: "self-service BI", year: 2024 },
    { name: "ticket-quality", kind: "work", category: "Automation", desc: "Model-driven app integrated with ServiceNow that auto-rates and flags closed tickets to surface coaching opportunities.", lang: "Power Platform", langColor: "#742774", impact: "+25% resolution", year: 2023 },
    { name: "coe-governance", kind: "work", category: "Platform", desc: "Governance framework, acceptable-use standards and citizen-developer enablement tracks for the Power Platform CoE.", lang: "Governance", langColor: "#1a7f37", impact: "global model", year: 2024 },
    { name: "asset-tracker", kind: "work", category: "Automation", desc: "Power Apps IT hardware tracking integrated with Intune & Autopilot, replacing an error-prone Excel process.", lang: "Power Apps", langColor: "#8250df", impact: "−Excel", year: 2020 },
    { name: "fabric-pipelines", kind: "work", category: "Data", desc: "Unified data pipelines across Microsoft Fabric and Azure Data Factory, cutting time-to-insight for global reporting.", lang: "Microsoft Fabric", langColor: "#1a7f37", impact: "faster reporting", year: 2025 },
    { name: "sccm-rebuild", kind: "work", category: "Platform", desc: "Rebuilt SCCM from scratch — server architecture, distribution points and remote management for off-network devices.", lang: "SCCM", langColor: "#bf8700", impact: "field-wide", year: 2017 },
    { name: "fendu", kind: "side", category: "Apps", desc: "iOS paycheck allocator — automatically splits every paycheck across bills, savings and goals so the math is done before payday.", lang: "Swift", langColor: "#f05138", impact: "iOS app", year: 2025, link: "https://apps.apple.com/us/app/fendu/id6761671193" },
  ],

  badge: "Selected by Microsoft for a published Customer Success Story on Epiq's AI & automation work.",
  badgeUrl: "https://www.microsoft.com/en/customers/story/23132-epiq-global-microsoft-power-platform",

  // Real career milestones, keyed by year — powers the career graph
  milestones: {
    2026: ["Promoted to Director, Workplace Platforms", "Led ServiceNow → Jira migration (600 agents, 8K users)", "Shipped BurnBuild — AI dev-tooling cost & token observability", "Extended agentic AI into HR & Finance (QtC, Source-to-Pay)"],
    2025: ["Promoted to Director, Rapid Dev & Innovation", "Rebuilt Eva as a multi-agent orchestrator", "Talkdesk × Copilot Studio live-agent integration", "Microsoft Customer Success Story published", "$1M+ in cost reductions delivered"],
    2024: ["Founded Epiq's Power Platform CoE", "Shipped Eva & Sophie agentic copilots", "Built RapidTrack intake-to-ROI system"],
    2023: ["Scaled Southwest's Power Platform adoption", "ServiceNow ticket-quality app (+25% resolution)"],
    2022: ["Winter Storm Elliott: mass-refund automation for 400K customers", "Kept Southwest in DOT compliance"],
    2021: ["Joined Southwest as System Engineer", "Migrated 20+ automations off a legacy platform"],
    2020: ["Onboarding automation — $1M annual savings, −30% tickets", "Power Apps asset tracking with Intune"],
    2019: ["Native Office 365 migration", "SCCM → Intune with Autopilot"],
    2018: ["Cherwell onboarding automation in PowerShell"],
    2017: ["Rebuilt SCCM architecture across field locations"],
    2016: ["Windows 7 → 10 migration across 15,000 devices"],
  },

  // Flagship deep-dives
  caseStudies: [
    {
      name: "eva",
      tagline: "Multi-agent AI orchestrator · company-wide",
      lang: "Copilot Studio", langColor: "#0969da",
      problem: "Employees bounced between Teams, Workday, ServiceNow and IT self-service for routine tasks — slow, manual, and easy to get wrong.",
      build: "A Copilot Studio orchestrator with specialized child agents for Workday, Jira, ServiceNow and Exchange that route each request to the right system, governed by the CoE framework.",
      stack: ["Copilot Studio", "Azure AI Foundry", "Azure Functions", "M365"],
      result: "Now used company-wide as the Teams assistant. Other business units ship their own governed agents on the same model — capability, not dependency.",
    },
    {
      name: "burnbuild",
      tagline: "AI dev-tooling observability · single pane of glass",
      lang: "Azure AI Foundry", langColor: "#0969da",
      problem: "Engineers were coding with Claude Code, Codex and GitHub Copilot against models in Azure AI Foundry — but token burn, spend and output lived in separate tools, so cost and ROI on AI tooling were impossible to reason about.",
      build: "A gateway-level tracking layer that ties Foundry usage to GitHub and Copilot activity — correlating token burn and cost with real git commits — and surfaces it all in one dashboard.",
      stack: ["Azure AI Foundry", "AI Gateway", "GitHub", "GitHub Copilot", "Azure Functions"],
      result: "One single pane of glass for AI coding spend and output — cost, token burn and commit activity per developer and tool. It covers every developer using AI tools across the enterprise, turning AI-tooling ROI from a guess into a number.",
    },
    {
      name: "mass-refund-automation",
      tagline: "400K refunds during a national crisis",
      lang: "Power Automate Desktop", langColor: "#742774",
      problem: "Winter Storm Elliott triggered mass cancellations. Refunds had to be processed at crisis scale to keep Southwest within DOT regulatory deadlines.",
      build: "A Power Automate Desktop automation orchestrated across 150+ virtual machines to process refunds in parallel, round the clock.",
      stack: ["Power Automate Desktop", "150+ VMs", "Orchestration"],
      result: "Processed refunds for 400K customers and kept Southwest in DOT compliance, avoiding regulatory penalties.",
    },
  ],
};
