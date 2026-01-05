# New Gen Services - Web Experience

A high-performance, interactive web application built with **Next.js**, focused on delivering immersive visual storytelling through advanced scroll animations and responsive design. This project represents the digital presence of New Gen Services, showcasing AI-powered solutions for businesses and creators.

## 🚀 Features

- **Immersive Scroll Animations**: Powered by **GSAP (GreenSock)** and **ScrollTrigger** for seamless, snap-based navigation sections.
- **Dynamic UI**: Responsive components that adapt fluidly across Desktop, Tablet, and Mobile devices.
- **Modern Aesthetics**: Glassmorphism effects, custom glows (`OverlayGlow`), and spotlight interactions.
- **Performance Optimized**: Leveraging Next.js Turbopack and optimized asset delivery.
- **Interactive Branding**: Custom animated text and visual storytelling elements (`Orb`, `SpotlightCard`).

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, ScrollToPlugin)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: JavaScript (ES6+)

---

## 📂 Project Structure

The project follows a modular architecture designed for scalability and component reusability.

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

- **`src/components/sections`**: Contains the major blocks of the landing pages. Each file generally corresponds to a "screen" or "slide" in the scroll flow.
- **`src/components/ui`**: Holds the atomic design elements like Buttons and Cards that are used across multiple sections.
- **`src/components/effects`**: Specialized components purely for visual enhancements (background glows, animations).
- **`src/pages`**: Maps directly to the URL structure. `b2b.js` and `b2c.js` are distinct landing pages tailored for specific audiences.

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