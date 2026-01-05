# Tommy

A highly interactive web experience built with Next.js, featuring advanced scroll animations and unique visual designs.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Overview

**Tommy** is a single-page application designed to provide an immersive user experience. It leverages advanced web technologies to create fluid transitions and interactive storytelling elements.

### Key Sections
- **Home**: The landing screen introducing the brand.
- **Text**: Narrative section with typography-focused design.
- **Cards**: Interactive card elements showcasing content.
- **Difference**: Highlight of unique value propositions.
- **Wonder**: A visual showcase section.
- **Footer**: Contact and additional links.

## Technologies Used

This project is built using a modern stack focused on performance and aesthetics:

- **[Next.js](https://nextjs.org/)**: The React Framework for the web.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[GSAP](https://greensock.com/gsap/)**: Powered by GreenSock for complex, high-performance animations (ScrollTrigger, ScrollToPlugin).
- **[Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)**: For smooth scrolling effects.
- **[OGL](https://github.com/oframe/ogl)**: Minimal WebGL library for 3D elements.
- **[Lucide React](https://lucide.dev/)**: Flexible icon family.

## Scripts

- `npm run dev`: Runs the app in development mode with Turbopack.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code issues.

## Developer Notes & Recent Changes (Dec 2025)


The following updates have been implemented to improve maintainability and functionality.

### 1. Calendly Integration
We have integrated Calendly for booking meetings.
-   **Trigger**: The `Button` component (`src/components/ui/Button.jsx`) now acts as a Calendly trigger.
-   **Configuration**: To enable this behavior, pass the `isBookMeeting={true}` prop to the `<Button />`.
-   **Functionality**: When clicked, it opens `https://calendly.com/tomeponte00/30min` in a new tab.
-   **Locations**: This is currently active in:
    -   `HomeScreen` (Navbar)
    -   `CTASection` (Book a Meeting)
    -   `FooterScreen` (Book Meeting)
    -   `WonderScreen`
    -   `FocusScreen` & `CFocusScreen`

### 2. Button Component Refactor
The `Button` component was refactored significantly:
-   **Location**: `src/components/ui/Button.jsx`
-   **`forwardRef`**: It now uses `React.forwardRef` to allow parent components (like `FooterScreen`) to animate the button element directly using GSAP.
-   **Props**:
    -   `text`: The button label.
    -   `isBookMeeting`: Boolean to enable Calendly functionality.

### 3. Reusable Logo Component
A dedicated Logo component was created to centralize logo logic.
-   **Location**: `src/components/ui/Logo.jsx`
-   **Features**: It wraps the logo image in a Next.js `Link` to `/`, enabling navigation to the home page from anywhere.
-   **Usage**: Used in `HomeScreen`, `FocusScreen`, and `CFocusScreen` headers.


### 4. Footer Updates
-   **Social Media**: Updated to show only **Instagram** and **YouTube**.
    -   Instagram: [newgenservices.ai](https://www.instagram.com/newgenservices.ai/)
    -   YouTube: [@newgenservices_ai](https://www.youtube.com/@newgenservices_ai)
-   **Contact**: Email updated to `contact@newgenservices.co`.
-   **Button**: The footer button was refactored to use the shared `Button` component instead of a hardcoded implementation, ensuring consistency in behavior and styling.


### 5. Animation & UI Refinement (Latest)
-   **Ultra-Smooth Scrolling**: Replaced animation logic in B2B and B2C pages with an `expo.inOut` easing and 2.0s duration. Increased the activation threshold to **100** to provide more scrolling freedom.
-   **Testimonial System Overhaul**:
    *   **Standalone Component**: Created `src/components/ui/TestimonialCard.jsx` to centralize testimonial logic and styling.
    *   **3D Coverflow Effect**: Implemented a cinematic 3D rotation system in `TestimonialsSwiper` that focuses on 3 main cards by using depth, scaling, and opacity transitions.
    *   **Interactive Design**: Cards now feature a fixed height (`210px`), internal scrolling for long text, and an expanding glow/scale effect on hover.
-   **Layout & Spacing Optimization**:
    *   **Contextual Grouping**: Merged "Comparison Cards" and "Impact Testimonials" into single scroll blocks in both B2B and B2C pages for better narrative flow.
    *   **Breathable Design**: Standardized vertical spacing (`py-24`) between major content blocks across the application.
    *   **Precision Centering**: Fixed vertical alignment in the `CTASection` by removing redundant margins and optimizing flexbox properties.
-   **Code Clean-up**: Resolved duplicate function definitions and removed unused Lucide-react components to improve build performance.

### 6. Professional UI/UX & Interactions (Latest Updates)
-   **Global Interactive Background**: Created a unified `InteractiveGrid` system that features a mouse-following spotlight, high-fidelity grid pattern, and grain texture.
-   **Difference Screen Overhaul**: 
    *   **Stability**: Removed complex ScrollTrigger pinning to resolve conflicts with snap-scrolling.
    *   **Immersion**: Implemented a multi-layer vertical parallax effect and a 3D X-axis tilt for the cards container.
    *   **Visibility**: Added backdrop-blur, semi-transparent backgrounds, and sharpened typography (7xl numbers with intense glows) for maximum readability.
-   **Hero "Orb" Optimization**: 
    *   **Visual Fix**: Eliminated square browser outlines on the neon video using a custom CSS `radial-gradient` mask.
    *   **Alignment**: Centralized the video and description using a unified flex container for perfect vertical symmetry.
-   **Component & Navigation Refinements**:
    *   **Logo**: Added interactive hover scaling and active click feedback.
    *   **Button Utility**: Extended the `Button` component to support custom `onClick` props, enabling its use for internal navigation.
    *   **Terms Page**: Fully functional "Back to Home" redirection using Next.js `useRouter`.
-   **Robust Error Handling**: Implemented comprehensive null-checks in GSAP animation callbacks across `HomeScreen` and `TextScreen` to prevent "Cannot set properties of null" errors during rapid navigation.

### 7. Performance, SEO & UI Optimization (Jan 2026)
-   **Loading Speed Optimization**:
    -   **Image Optimization**: Enabled Next.js native image optimization in `next.config.mjs` for automatic WEBP conversion and resizing.
    -   **Font Preloading**: Implemented preloading for critical fonts (Inter, Poppins) in `_document.js` to eliminate layout shifts (CLS) and improve First Contentful Paint (FCP).
    -   **Asset Strategy**: Added `priority` and `lazy loading` strategies to critical images and videos.
-   **SEO & Metadata Enhancement**:
    -   **Global Meta Tags**: Integrated comprehensive meta descriptions, keywords, and Open Graph tags for better search visibility and social sharing.
    -   **Clean Integration**: Configured `_document.js` and `_app.js` following Next.js best practices, moving the `viewport` tag to `_app.js` to resolve hydration warnings.
-   **UI & Navigation Refinements**:
    -   **Centered Page Heros**: Re-engineered the Hero sections of B2B and B2C pages to be perfectly vertically centered in the viewport for a more premium, balanced aesthetic.
    -   **Footer "Quick Links"**: Restored the Quick Links section in the footer, providing easy access to **Back to Top**, **Business**, and **Creators** pages.
    -   **Content Branding**: Reverted comparison card titles to "Before New Gen Services" and "After Partnering With Us" to maintain brand consistency.
    -   **Layout Polish**: Optimized footer layout by separating Quick Links and Socials, positioning Socials at the bottom-right for a cleaner visual hierarchy.

### 8. Service Cards Overhaul & Infrastructure (Jan 2026)
-   **"What We Offer" Redesign (B2B)**:
    -   **3+2 Layout**: Shifted to a spacious 3+2 grid layout (3 cards on top, 2 centered below) for maximum impact and readability.
    -   **Readability Focus**: Significantly increased font sizes for titles (`text-xl`), descriptions (`14px`), and feature points (`13px`).
    -   **Professional Copy**: Updated all service descriptions and bullet points with high-converting, professional content.
    -   **Aesthetic Enhancement**: Integrated `backdrop-blur-xl`, stronger borders, and a purple inner glow on hover to create a premium "glassmorphism" effect.
-   **"Unlock Your Potential" Enhancement (B2C)**:
    -   **Interactive Points**: Added feature list rendering to B2C cards for content consistency across the platform.
    -   **Size Up**: Increased all typography and container spacing to ensure a comfortable reading experience.
-   **Adaptive Heights**: Replaced fixed `h-screen` with `min-h-screen` and added standard padding (`py-20` to `py-40`) to service sections, ensuring content never overflows on smaller screens or high-zoom settings.
-   **Technical Environment**:
    -   **Port Migration**: Updated `package.json` to run the application on port **8080** by default for both `dev` and `start` scripts.
    -   **Video Fluidity**: Optimized Hero video playback to **1.6x** speed for a more energetic and modern feel.

### 9. Final UI Polish & User Experience (Latest)
-   **Intense Comparison Glows**: 
    -   Upgraded the "After Partnering With Us" cards in both B2B and B2C pages with an intense green glow (`80px` blur) and internal ambient lighting to visually reward the solution.
    -   Sharpened the "Before" cards with red-tinted borders and icons for immediate problem identification.
-   **Wonder Section Dual-CTA**: 
    -   Implemented a two-button system in the final `WonderScreen`: a primary "Book Meeting" button and a secondary "Get in Touch" button.
    -   **Email Integration**: The "Get in Touch" button is hardcoded to launch a `mailto:` link to `contact@newgenservices.co`.
-   **Global Spacing Standard**: 
    -   Standardized vertical spacing between all major blocks to a massive `py-40` padding, combined with `min-h-screen` logic to ensure a high-end, uncluttered feel.
    -   Reduced micro-gaps within cards and titles in the `DifferenceScreen` to maintain tight visual grouping while keeping macro-spacing large.
-   **Navigation Polish**: 
    -   Reordered footer "Quick Links" to start with **Back to Top**, prioritizing utility and navigation flow.

### 10. Responsiveness and UI Fixes (Current)
-   **Responsive Cards (`DifferenceScreen`)**: The cards in the "This is how we are making a difference" section are now fully responsive. On mobile devices, the cards stack vertically for improved readability and user experience, preventing overlap and layout issues.
-   **Button Height Adjustment**: Increased the height of buttons across the application to provide more vertical space for the text, especially during animations.
    -   The buttons on the main page's "Business/Creator" cards (`CardScreen.jsx`) were adjusted from 40px to 48px.
    -   The primary button component (`Button.jsx`) used on the B2C page and other sections was adjusted from 44px to 52px.



### 11. Comprehensive Mobile Optimization & Visual Polish (Jan 2026)
  **Global Layout Stability**: Replaced h-screen with min-h-[100dvh] across all major sections (HomeScreen, CardScreen, FocusScreen, etc.) to prevent layout clipping on mobile browsers with dynamic address bars.

  **Typography Overhaul**: Replaced volatile vw based font sizes with stable Tailwind classes (e.g., text-3xl md:text-5xl) to ensure readability on vertical screens.

  **Dynamic SVG Borders (WonderScreen)**: Implemented a JavaScript-based path calculation (updatePath) that dynamically redraws the SVG border and notch on window resize, ensuring the glow effect hugs the content perfectly on all devices.

  **Staggered Card Layout (DifferenceScreen)**:     -   Desktop: Engineered a specific "V-shape" staggered layout (Center card lowered to 80%, side cards at 55%) for a dynamic visual hierarchy.     -   Mobile: Switched to a clean vertical flex stack with adjusted negative margins for perfect optical centering.

  **Hero Section Polish**: Added a Neon Glow effect (box-shadow + text-shadow) to the rotating keywords in the HomeScreen and optimized the Orb size to prevent overflow.

  **Content Cards Optimization**:     -   Service Cards: Reduced padding (p-6) and gaps (gap-6) on mobile.     -   Icon Stability: Added shrink-0 to Lucide icons (Checkmarks, X-Circles) to prevent deformation when text wraps.     -   List Styling: Converted check-lists in FocusScreen to "chip" style elements (rounded backgrounds) on mobile for better touch targets and visual organization.

  **FAQ Refactor**: Completely refactored the FAQ accordion header from absolute positioning to a flexible Flexbox layout, ensuring long questions never overlap with icons or numbers on small screens.

## License
This project is for internal use. All rights reserved.
Author:
 **[Brandon Mejia](https://github.com/kanekitakitos)**