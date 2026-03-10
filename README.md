# Hung Vo | DevSecOps & AI Engineer Portfolio

A premium, interactive, and high-fidelity portfolio website built to showcase expertise in Cloud Security, Automation, and Agentic AI.

## 🚀 Live Demo
[https://tuthan.github.io/portfolio/](https://tuthan.github.io/portfolio/)

## ✨ Key Features
- **Interactive Terminal:** An embedded React terminal component for a unique, developer-centric "About Me" experience.
- **Agentic AI & DevOps Focus:** Dedicated architecture highlights for **Agent-Kryptos**, Multi-Region CI/CD, and Zero-Trust SIEM.
- **Premium Design:** Glassmorphism aesthetic with high-fidelity components prototyped using **Stitch MCP**.
- **Dark/Light Mode:** Seamless theme toggling with custom CSS variables and Tailwind CSS.
- **Fully Responsive:** Optimized for desktop and mobile devices.
- **SEO Optimized:** Meta tags for search engines and high-impact social sharing (Open Graph/Twitter Cards).
- **Verified Commits:** All contributions are cryptographically signed using SSH keys.

## 🛠️ Tech Stack
- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Material Symbols
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions

## 📥 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tuthan/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## 🏗️ Deployment
This project uses GitHub Actions for automated deployment. Pushing to the `main` branch triggers a build (`npm run build`) and deploys the `dist` folder to the `gh-pages` branch.

## 🔒 Security & Verification
All commits in this repository are signed using the `agent_kryptos_ed25519` SSH key.
To verify signatures locally:
1. Import the public key into your `allowed_signers` file.
2. Run `git log --show-signature`.

---
Made with ❤️ by [Hung Vo](https://github.com/tuthan)
