import type { LucideIcon } from 'lucide-react'
import { pluginStats } from './pluginStats'
import {
  Bot,
  Boxes,
  CalendarDays,
  CircleDollarSign,
  Cloud,
  Fingerprint,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Radar,
  ShieldCheck,
  SquareTerminal,
  Workflow,
} from 'lucide-react'

export const profile = {
  name: 'Hung Vo',
  role: 'AI Security Engineer',
  headline: 'Fourteen years in DevSecOps, now securing the agents that write and ship code.',
  summary:
    'I work on the runtime and supply chain around AI agents rather than model internals: bounding what an agent can see, what it can do, and what it can be talked into. Zero-knowledge secret provisioning, dependency guardrails for coding agents, and evidence-first review of unsandboxed third-party code.',
  availability: 'Available for projects',
  email: 'hung@atas.tech',
  github: 'https://github.com/tuthan',
  githubHandle: 'tuthan',
  linkedin: 'https://www.linkedin.com/in/hungvotrung/',
  linkedinHandle: 'hungvotrung',
  lab: { name: 'atas.tech', url: 'https://atas.tech/' },
  source: 'https://github.com/tuthan/portfolio',
}

const marketplaceTotals = Object.values(pluginStats).reduce(
  (acc, s) => ({ views: acc.views + s.views, copies: acc.copies + s.copies, hearts: acc.hearts + s.hearts }),
  { views: 0, copies: 0, hearts: 0 },
)

/** 2115 -> "2.1k", 940 -> "940". Rounded on purpose: the figure is a dated snapshot. */
function compact(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)
}

export const stats = [
  { value: '14+', label: 'years in infrastructure & security' },
  {
    value: compact(marketplaceTotals.views),
    label: `marketplace views across ${Object.keys(pluginStats).length} Omarchy plugins`,
  },
  { value: '3', label: 'agent skills shipped for Claude Code, Codex & OpenClaw' },
  { value: 'SOC 2 · ISO 27001', label: 'compliance programs delivered' },
]

export type Category = 'Agentic AI' | 'Security' | 'Omarchy' | 'DevOps'
export const categories: Array<'All' | Category> = ['All', 'Agentic AI', 'Security', 'Omarchy', 'DevOps']

export type LinkKind = 'live' | 'github' | 'marketplace' | 'registry'
export interface ProjectLink {
  label: string
  href: string
  kind: LinkKind
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  categories: Category[]
  tags: string[]
  version?: string
  stars?: number
  /** Omarchy marketplace plugin id, when the project is listed there. */
  marketplaceId?: string
  year: string
  links: ProjectLink[]
  icon: LucideIcon
  accent: string
  note?: string
}

export const projects: Project[] = [
  {
    id: 'blindpass',
    name: 'BlindPass',
    tagline: 'Zero-knowledge secrets for AI agents',
    description:
      'Secret provisioning system that lets humans and agents exchange credentials without the LLM or the coordinating server ever seeing plaintext. HPKE (RFC 9180) in the browser, in-memory-only storage with strict TTLs, gateway-level anti-phishing, and pull-based agent-to-agent exchange.',
    categories: ['Agentic AI', 'Security'],
    tags: ['HPKE', 'Zero-Trust', 'TypeScript', 'Fastify', 'Redis'],
    year: '2026',
    links: [
      { label: 'Live', href: 'https://blindpass.atas.tech/', kind: 'live' },
      { label: 'Dashboard', href: 'https://app.atas.tech/', kind: 'live' },
    ],
    icon: KeyRound,
    accent: '#25c0f4',
  },
  {
    id: 'dependency-guard',
    name: 'Dependency Guard',
    tagline: 'Supply-chain guardrail for agentic coding',
    description:
      'Portable skill that makes a coding agent review every dependency change with Socket before it touches a manifest or lockfile. Prefers the MCP depscore route, falls back to the Socket CLI, and applies a documented allow / warn / block policy. Ships for Claude Code, Codex, OpenClaw and ClawHub.',
    categories: ['Agentic AI', 'Security'],
    tags: ['Socket.dev', 'Agent Skill', 'npm · PyPI · Cargo', 'MCP'],
    version: 'v1.2.0',
    year: '2026',
    links: [{ label: 'ClawHub', href: 'https://clawhub.ai/tuthan/dependency-guard', kind: 'registry' }],
    icon: ShieldCheck,
    accent: '#a78bfa',
  },
  {
    id: 'omasafe-skill',
    name: 'OmaSafe Agent Skill',
    tagline: 'Review a plugin before it touches your shell',
    description:
      'Agent Skills package that drives the local OmaSafe CLI from Claude Code, Codex, Cursor and OpenCode. Treats plugin content and report text as untrusted evidence, never executes reviewed payloads, and refuses trust or install decisions in unattended sessions. Releases carry a SHA256SUMS integrity manifest.',
    categories: ['Agentic AI', 'Omarchy', 'Security'],
    tags: ['Agent Skill', 'Claude Code', 'Codex', 'Python'],
    version: 'v1.4.0',
    year: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/tuthan/omasafe-agent-skill', kind: 'github' }],
    icon: Bot,
    accent: '#34d399',
  },
  {
    id: 'dropdown-terminal',
    name: 'Dropdown Terminal',
    tagline: 'Quake-style terminal for Omarchy',
    description:
      'Summons the configured default terminal as a fast, focused floating overlay on the current Hyprland workspace. Bounded entrance effects, interactive desk pets with reduced-motion support, and opt-in command completion indicators that record lifecycle metadata only, never command text.',
    categories: ['Omarchy'],
    tags: ['QML', 'Quickshell', 'Hyprland', 'Bash'],
    version: 'v2.3.0',
    stars: 10,
    marketplaceId: 'io.github.tuthan.dropdown-terminal',
    year: '2026',
    links: [
      { label: 'GitHub', href: 'https://github.com/tuthan/omarchy-dropdown-terminal', kind: 'github' },
      { label: 'Marketplace', href: 'https://plugins.omarchy.org/plugin.html?id=io.github.tuthan.dropdown-terminal', kind: 'marketplace' },
    ],
    icon: SquareTerminal,
    accent: '#fbbf24',
  },
  {
    id: 'omarchy-unraid',
    name: 'Unraid Monitor',
    tagline: 'Your NAS in the Omarchy bar',
    description:
      'Monitors and manages an Unraid 7.2+ server over its native GraphQL API: array state, disk health, Docker containers and VMs. HTTPS with certificate verification by default, management actions off by default, and destructive actions confirm inline before they fire.',
    categories: ['Omarchy'],
    tags: ['QML', 'GraphQL', 'Unraid'],
    version: 'v1.0.1',
    marketplaceId: 'io.github.hvo.omarchy-unraid',
    year: '2026',
    links: [
      { label: 'GitHub', href: 'https://github.com/tuthan/omarchy-unraid', kind: 'github' },
      { label: 'Marketplace', href: 'https://plugins.omarchy.org/plugin.html?id=io.github.hvo.omarchy-unraid', kind: 'marketplace' },
    ],
    icon: HardDrive,
    accent: '#fb923c',
  },
  {
    id: 'lunar-calendar',
    name: 'Lunar Calendar',
    tagline: 'Lịch Âm / 农历 for the desktop',
    description:
      'East Asian lunar calendar for the Omarchy bar with a pure-JavaScript astronomical converter: moon phase and illumination, Can Chi stem-branch cycles, the 24 solar terms, and recurring lunar events such as Tết and Rằm. No network calls, no extra packages, no elevated privileges.',
    categories: ['Omarchy'],
    tags: ['QML', 'JavaScript', 'Astronomy'],
    version: 'v1.1.0',
    marketplaceId: 'io.github.tuthan.omarchy-lunar-calendar',
    year: '2026',
    links: [
      { label: 'GitHub', href: 'https://github.com/tuthan/omarchy-lunar-calendar', kind: 'github' },
      { label: 'Marketplace', href: 'https://plugins.omarchy.org/plugin.html?id=io.github.tuthan.omarchy-lunar-calendar', kind: 'marketplace' },
    ],
    icon: CalendarDays,
    accent: '#f472b6',
  },
  {
    id: 'blinddrop',
    name: 'BlindDrop',
    tagline: 'One-time, self-destructing secret sharing',
    description:
      'Share a secret through a link that works exactly once. Encrypted client-side with AES-GCM before it leaves the browser, then destroyed on first retrieval or expiry. The server only ever holds ciphertext.',
    categories: ['Security'],
    tags: ['E2EE', 'AES-GCM', 'Self-destruct'],
    year: '2026',
    links: [{ label: 'Live', href: 'https://blinddrop.atas.tech/', kind: 'live' }],
    icon: Lock,
    accent: '#38bdf8',
  },
  {
    id: 'multi-region-cicd',
    name: 'Multi-Region CI/CD Platform',
    tagline: 'GitOps across AWS and Azure',
    description:
      'Terraform and ArgoCD driven delivery platform orchestrating Kubernetes clusters across two clouds and several regions. SOC 2 and ISO 27001 evidence is produced by the pipeline itself rather than assembled at audit time. Roughly halved deployment lead time.',
    categories: ['DevOps'],
    tags: ['Kubernetes', 'Terraform', 'ArgoCD', 'AWS', 'Azure', 'GitOps'],
    year: '2022 – 2025',
    links: [],
    icon: Workflow,
    accent: '#60a5fa',
    note: 'In-house · Discovermarket',
  },
  {
    id: 'kubernetes-migration',
    name: 'Kubernetes Platform Migration',
    tagline: 'Hybrid cloud onto containers',
    description:
      'Moved a logistics platform off hybrid-cloud virtual machines and onto Kubernetes, building the CI/CD automation and operational tooling the migration depended on. Ran hybrid cloud operations either side of the transition.',
    categories: ['DevOps'],
    tags: ['Kubernetes', 'CI/CD', 'Hybrid Cloud', 'Linux'],
    year: '2015 – 2021',
    links: [],
    icon: Boxes,
    accent: '#818cf8',
    note: 'In-house · Zyllem',
  },
  {
    id: 'finops',
    name: 'Cloud FinOps Program',
    tagline: 'Spend guardrails on a multi-cloud estate',
    description:
      'Owned cloud cost across the AWS and Azure estate: making spend visible per team and workload, then putting budget guardrails into the same pipelines that shipped the services rather than reviewing invoices after the fact.',
    categories: ['DevOps'],
    tags: ['FinOps', 'AWS', 'Azure', 'Cost Optimization'],
    year: '2022 – 2025',
    links: [],
    icon: CircleDollarSign,
    accent: '#2dd4bf',
    note: 'In-house · Discovermarket',
  },
  {
    id: 'zero-trust-siem',
    name: 'Zero-Trust SIEM',
    tagline: 'Detection engineering for SOC 2',
    description:
      'Wazuh and Suricata deployment covering containerised workloads and cloud accounts, with automated threat hunting and vulnerability scanning feeding SOC 2 evidence. Established the SecOps function and on-call detection playbooks.',
    categories: ['Security'],
    tags: ['Wazuh', 'Suricata', 'SOC 2', 'Threat Detection'],
    year: '2021 – 2022',
    links: [],
    icon: Radar,
    accent: '#34d399',
    note: 'In-house · HexTrust, UnifiedPost',
  },
]

export const spotlight = {
  eyebrow: 'Featured work · 2026',
  name: 'OmaSafe',
  subtitle: 'Trust & security tooling for Omarchy Linux',
  tagline: 'Know what your system can do. Catch what quietly changed.',
  problem:
    'Omarchy plugins are QML and JavaScript loaded unsandboxed, with full user permissions, inside the shared shell process, and installed as mutable Git repositories. The marketplace validates one exact commit at listing time. Everything that lands upstream afterwards is outside that check.',
  solution:
    'OmaSafe closes the gap between what was validated once and what is running now. A Rust CLI is the engine: it pins trust baselines, detects source drift, analyses shipped payloads for capabilities, reports host posture, and scans GitHub candidates before anything touches your shell. A bar widget and an agent skill are thin clients over the same commands.',
  surfaces: ['Installed plugins', 'Host posture', 'Pre-install candidates'],
  outputs: ['Bar widget & review panel', 'Agent skill', 'CI exit-code gate'],
  principles: [
    'Never executes plugin code',
    'Runs unprivileged',
    'No single safety score',
    'Signed releases with SHA256SUMS',
  ],
  pillars: [
    {
      name: 'omasafe-cli',
      kind: 'Engine',
      stack: 'Rust workspace',
      version: 'v0.3.1',
      icon: Fingerprint,
      accent: '#25c0f4',
      points: [
        'Immutable Git commit and tree identity, plus a normalised digest for dirty or non-Git plugins',
        'Trust baselines in private XDG state, with status, diff and scan for drift review',
        'Bounded payload analysis: capabilities, rule hits, and explicit coverage states',
        'Host posture: encryption, firewall, listeners, updates and persistence as state, not a score',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/tuthan/omasafe', kind: 'github' as LinkKind }],
    },
    {
      name: 'OmaSafe bar plugin',
      kind: 'Thin client',
      stack: 'QML · Quickshell',
      version: 'v0.5.0',
      icon: Layers,
      accent: '#fbbf24',
      points: [
        'Five views: Plugins, Analysis, Rules, Posture and Source Scan',
        'Every chart prints its exact counts; no pie, gauge or percentage-healthy',
        'Pre-install review of a pasted GitHub URL or install command without installing it',
        'Critical alerts also reach a desktop notification path independent of the bar',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/tuthan/omasafe-plugin', kind: 'github' as LinkKind },
        { label: 'Marketplace', href: 'https://plugins.omarchy.org/plugin.html?id=io.github.tuthan.omasafe', kind: 'marketplace' as LinkKind },
      ],
    },
    {
      name: 'omasafe-plugin-review',
      kind: 'Agent skill',
      stack: 'Claude Code · Codex · Cursor · OpenCode',
      version: 'v1.4.0',
      icon: Bot,
      accent: '#34d399',
      points: [
        'One canonical skill directory with offline copy or symlink installers per host',
        'Plugin files, Git metadata and report text are evidence, never instructions',
        'Refuses trust, enable and install decisions in headless or full-auto sessions',
        'Deterministic SHA256SUMS release manifest and a 150-line entrypoint budget',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/tuthan/omasafe-agent-skill', kind: 'github' as LinkKind }],
    },
  ],
}

export interface Experience {
  role: string
  company: string
  period: string
  start: string
  current?: boolean
  summary: string
  highlights?: string[]
}

export const experience: Experience[] = [
  {
    role: 'Independent AI Security Engineer',
    company: 'atas.tech',
    period: 'May 2025 – Present',
    start: '2025',
    current: true,
    summary:
      'Research and product work on trust tooling for agentic systems, alongside DevOps migration engagements.',
    highlights: [
      'Shipped OmaSafe: Rust CLI, Omarchy bar plugin and multi-host agent skill',
      'Published BlindPass, BlindDrop and Dependency Guard',
      'Four Omarchy plugins on the community marketplace',
    ],
  },
  {
    role: 'Lead DevSecOps Engineer',
    company: 'Discovermarket',
    period: 'Nov 2022 – Apr 2025',
    start: '2022',
    summary:
      'Architected multi-region CI/CD on Kubernetes across AWS and Azure, ran FinOps, and led SOC 2 and ISO 27001 compliance.',
  },
  {
    role: 'Security Manager',
    company: 'HexTrust',
    period: 'Dec 2021 – Jun 2022',
    start: '2021',
    summary: 'Owned Wazuh SIEM, delivered SOC 2 compliance, and ran cloud security audits for a digital-asset custodian.',
  },
  {
    role: 'SecOps Engineer',
    company: 'UnifiedPost Group',
    period: 'Mar 2021 – Dec 2021',
    start: '2021',
    summary: 'Established the SecOps team and threat detection stack on Wazuh and Suricata.',
  },
  {
    role: 'System / DevOps Engineer',
    company: 'Zyllem',
    period: 'Nov 2015 – Feb 2021',
    start: '2015',
    summary: 'Hybrid cloud operations, CI/CD automation, and the migration to Kubernetes.',
  },
  {
    role: 'System Administrator',
    company: 'The Promotions Factory',
    period: 'Nov 2012 – Nov 2015',
    start: '2012',
    summary: 'Global IT operations and the migration of on-prem workloads to AWS.',
  },
  {
    role: 'IT Technician',
    company: 'Digital Work Network',
    period: 'Mar 2012 – Nov 2012',
    start: '2012',
    summary: 'Network deployment and technical support.',
  },
]

export interface SkillGroup {
  title: string
  icon: LucideIcon
  accent: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Agent Security',
    icon: Bot,
    accent: '#25c0f4',
    items: [
      'Agent Skills (Claude Code, Codex, OpenClaw)',
      'Model Context Protocol',
      'Tool-call gateways',
      'Prompt-injection hardening',
      'Zero-knowledge secret provisioning',
      'Supply-chain guardrails',
    ],
  },
  {
    title: 'Security & Compliance',
    icon: ShieldCheck,
    accent: '#34d399',
    items: [
      'SOC 2',
      'ISO 27001',
      'Zero-Trust architecture',
      'Wazuh SIEM',
      'Suricata',
      'Threat detection',
      'Cloud security audits',
      'HPKE · AES-GCM',
    ],
  },
  {
    title: 'Cloud & Platform',
    icon: Cloud,
    accent: '#60a5fa',
    items: ['Kubernetes', 'Terraform', 'ArgoCD · GitOps', 'AWS', 'Azure', 'GitHub Actions', 'FinOps', 'Hybrid cloud'],
  },
  {
    title: 'Languages & Runtimes',
    icon: SquareTerminal,
    accent: '#fbbf24',
    items: ['TypeScript', 'Rust', 'Python', 'QML · Quickshell', 'Bash', 'Node.js', 'React'],
  },
]

export const navLinks = [
  { id: 'featured', label: 'Featured' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
