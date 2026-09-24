# Rebekon Consulting LLC (`rebekon-sample-1`)

A modern, high-performance web platform built for **Rebekon Consulting LLC** — an NGLCC Certified LGBTBE, MBE, and DBE consultancy driving systemic change across Health Equity, Clinical Trial Diversity, DEIB, and Workplace Gender Inclusion.

---

## 🌟 Key Highlights & Features

- **Dynamic Hero Section**:
  - Immersive hero video with sound toggle control and fluid aspect ratio.
  - Rolling certification and partner badge marquee.
  - Call-to-action buttons for direct consultation booking and services exploration.
- **Smart Adaptive Capsule Navigation**:
  - Floating capsule navbar with backdrop blur and responsive layout.
  - **Desktop Auto-Hide**: Automatically slides up smoothly when scrolling down to maximize screen estate; immediately reappears when scrolling up.
  - **Mobile-Optimized Drawer**: Background scroll locking, clean backdrop blur overlay, and frictionless navigation.
- **Interactive Media & Resource Showcases**:
  - Keynote videos, podcasts, and interviews organized into swipeable horizontal carousels.
  - Mobile-centered cards with floating navigation arrows (`<` and `>`) and dynamic pagination dots.
- **Impact Stats & Frameworks**:
  - Responsive, equalized metric cards with animated stat counters.
  - *Educate, Engage, Empower* proprietary framework breakdown.
- **Vercel & Production Optimized**:
  - Clean client-side SPA routing (`vercel.json`) preventing 404s on page refresh.
  - Enterprise HTTP security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`).
  - Rolldown code-splitting and asset caching rules for fast loading times.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vite.dev/) (with Rolldown engine)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations & Icons**: [Framer Motion](https://www.framer.com/motion/) & [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Interactive Effects**: `canvas-confetti`

---

## 📁 Project Architecture

```
rebekon-sample-1/
├── public/                # Static assets, logos, and images
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Adaptive capsule navbar with desktop auto-hide
│   │   ├── Footer.tsx     # Site footer with social links & disclaimers
│   │   ├── Hero.tsx       # Dynamic video hero with audio toggle & badges
│   │   ├── StatCounter.tsx# Equal-height animated metric counters
│   │   └── ...            # Service cards, CTA sections, modals
│   ├── pages/             # Route pages
│   │   ├── HomePage.tsx   # Landing page with video carousels & metrics
│   │   ├── ServicesPage.tsx
│   │   ├── HealthcarePage.tsx
│   │   ├── DeibPage.tsx
│   │   ├── PoliciesPage.tsx
│   │   ├── MediaPage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/              # Structured site data & content models
│   ├── index.css          # Tailwind CSS styling and custom utilities
│   ├── App.tsx            # Application entry & route definitions
│   └── main.tsx           # React DOM root render
├── vercel.json            # Vercel deployment configuration & security headers
├── vite.config.ts         # Vite build configuration with chunk splitting
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later) installed on your system.

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/<your-username>/rebekon-sample-1.git

# Navigate into the project directory
cd rebekon-sample-1

# Install npm dependencies
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

Compile TypeScript and build the optimized production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🚢 Deployment

### Deploying to Vercel

This repository is pre-configured with [`vercel.json`](vercel.json) for seamless deployment:

1. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
2. Framework preset will automatically detect **Vite**.
3. Leave Build Command (`npm run build`) and Output Directory (`dist`) as default.
4. Click **Deploy**.

---

## 📄 License

Private & Proprietary — Rebekon Consulting LLC. All rights reserved.
