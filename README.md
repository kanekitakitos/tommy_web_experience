# New Gen Services - Web Experience

A high-performance, interactive web application built with **Next.js**, focused on delivering immersive visual storytelling through advanced scroll animations and responsive design. This project represents the digital presence of New Gen Services, showcasing AI-powered solutions for businesses and creators.

## 🚀 Features

- **Immersive Scroll Animations**: Powered by **GSAP (GreenSock)** and **ScrollTrigger** for seamless, snap-based navigation sections.
- **Mobile-First Experience**: Optimized touch handling, iOS-specific smooth scrolling (`-webkit-overflow-scrolling`), and jitter-free animations for a native app feel.
- **Dynamic UI**: Responsive components that adapt fluidly across Desktop, Tablet, and Mobile devices.
- **Modern Aesthetics**: Glassmorphism effects, custom glows (`OverlayGlow`), and spotlight interactions.
- **Performance Optimized**: Leveraging Next.js Turbopack, SWC Minification, and optimized image/asset delivery for lightning-fast speeds.
- **Interactive Branding**: Custom animated text and visual storytelling elements (`Orb`, `SpotlightCard`).
- **Analytics Integrated**: Google Analytics 4 (GA4) implementation for tracking user engagement and site performance.

## ⚡ Performance Optimizations (2025)

The project underwent a rigorous optimization phase to ensure sub-second LCP and minimized TBT (Total Blocking Time) on mobile devices:

- **Extreme Mobile Optimization**: Heavy WebGL components (`Orb.jsx`) use **Adaptive DPR** (capped at 1.0 on mobile) to balance visuals and performance. Background layers (`InteractiveGrid.jsx`) are conditionally disabled on mobile to save resources.
- **Asset Weight Reduction**: Replaced a 508KB `noise.png` texture with a **<1KB CSS/SVG data URI**, drastically reducing network payload.
- **Smart Logic**: `mousemove` listeners are disabled on touch devices to save CPU cycles.
- **Code Splitting**: "Below-the-fold" sections in `b2b` and `b2c` pages are lazy-loaded using `next/dynamic`.
- **Deferred Analytics**: Google Analytics scripts use `strategy="lazyOnload"` to prioritize critical content loading.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, ScrollToPlugin)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: JavaScript (ES6+)

---

## 📂 Project Structure

The project follows a modular architecture designed for scalability and component reusability. Below is a detailed breakdown of the `src` directory:

```bash
src/
├── components/          # Reusable UI building blocks
│   ├── effects/         # Visual effects components (e.g., OverlayGlow, Orb)
│   ├── layout/          # Layout wrapper components
│   ├── sections/        # Full-screen page sections (e.g., Hero, Footer, CardScreen)
│   └── ui/              # Base atomic components (e.g., Button, Logo, SpotlightCard)
├── lib/                 # Utility functions and shared logic
├── pages/               # Application routes
│   ├── index.js         # Landing page (Home)
│   ├── b2b.js           # "For Businesses" page
│   ├── b2c.js           # "For Creators" page
│   └── api/             # API routes (if applicable)
└── styles/              # Global styles and Tailwind configuration
    └── globals.css      # Main CSS file with custom variables and font imports
```

### Key Directories Explained

- **`src/components/sections`**: This is where the bulk of the UI lives. Files prefixed with `C` (e.g., `CCTASection`) are tailored variants for the **Creators** (B2C) path, while their counterparts are for **Businesses** (B2B).
- **`src/components/ui`**: Atomic components used across multiple sections to ensure design consistency (buttons, cards, logos).
- **`src/components/effects`**: Contains complex visual logic, often involving WebGL (`Orb.jsx`) or Canvas, isolated to prevent performance impact on main content.
- **`src/pages`**: Maps directly to URLs. `b2b` and `b2c` serve as alternative entry points with tailored content strategies.

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
Ensure you have **Node.js 18+** installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kanekitakitos/tommy_web_experience.git
   cd tommy_web_experience
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Scripts
- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production optimization.
- `npm start`: Runs the production build locally.
- `npm run lint`: Checks for code quality issues.

---

## 👤 Author

**Brandon Mejia**  
[GitHub Profile](https://github.com/kanekitakitos)

---
*© 2025 New Gen Services. All rights reserved.*