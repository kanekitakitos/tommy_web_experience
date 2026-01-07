"use client";
import { useRef } from "react";
import gsap from "gsap";

/**
 * SpotlightCard Component
 * 
 * A highly interactive card container that tracks mouse movement.
 * 
 * Features:
 * - Radial Gradient Spotlight: Follows the cursor position.
 * - 3D Tilt Effect: Card rotates slightly based on cursor relative to center.
 * - Specular Highlight: Faint gloss moving opposite to cursor.
 * - Elevation: Lifts up (box-shadow) on hover.
 * 
 * Uses GSAP for performant animations (no React state re-renders).
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content.
 * @param {string} [props.className] - Additional styles.
 * @param {string} [props.spotlightColor] - Color of the glowing spotlight effect.
 */
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null);
  const spotlightRef = useRef(null);
  const highlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current || !spotlightRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(spotlightRef.current, {
      background: `radial-gradient(circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`,
      duration: 0.3,
      ease: "power2.out",
    });

    // Subtle tilt/scale based on cursor position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10; // left/right
    const rotateX = (-(y - centerY) / centerY) * 8; // up/down

    gsap.to(divRef.current, {
      duration: 0.35,
      ease: "power3.out",
      transformPerspective: 1000,
      transformOrigin: "center",
      rotateX,
      rotateY,
      scale: 1.02,
    });

    if (highlightRef.current) {
      // Move a faint specular highlight
      gsap.to(highlightRef.current, {
        duration: 0.35,
        ease: "power3.out",
        x: ((x - centerX) / centerX) * 20,
        y: ((y - centerY) / centerY) * 20,
        opacity: 0.4,
      });
    }
  };

  const handleMouseEnter = () => {
    gsap.to(spotlightRef.current, {
      opacity: 0.6,
      duration: 0.5,
      ease: "power2.in",
    });

    // Elevate card with glow
    gsap.to(divRef.current, {
      duration: 0.35,
      ease: "power3.out",
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(119,38,193,0.22)",
    });
  };

  const handleMouseLeave = () => {
    // Smooth fade + move spotlight toward corner (not jump)
    gsap.to(spotlightRef.current, {
      duration: 0.4,
      ease: "power3.out",
    });

    // Animate the gradient position smoothly to one side
    gsap.to(spotlightRef.current, {
      background: `radial-gradient(circle at -200px -200px, ${spotlightColor}, transparent 80%)`,
      duration: 0.4,
      ease: "power3.inOut",
    });

    // Reset transforms and glow
    gsap.to(divRef.current, {
      duration: 0.5,
      ease: "power3.out",
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 6px 18px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)",
    });

    if (highlightRef.current) {
      gsap.to(highlightRef.current, {
        duration: 0.4,
        ease: "power3.out",
        x: 0,
        y: 0,
        opacity: 0.2,
      });
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden p-4 border-2 border-white bg-white/5 backdrop-blur-xl will-change-transform transition-[transform,box-shadow] duration-300 ${className}`}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at -140px -140px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div
        ref={highlightRef}
        className="pointer-events-none absolute -inset-8 opacity-20"
        style={{
          background:
            "conic-gradient(from 220deg at 50% 50%, rgba(255,255,255,0.25), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.25))",
          mixBlendMode: "soft-light",
          filter: "blur(18px)",
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
