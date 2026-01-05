"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const OverlayGlow = ({
  size = 600,
  color1 = "rgba(155,0,255,0.6)",
  color2 = "rgba(75,0,130,0.4)",
  blur = 180,
  className = "",
  scale = 1.6,
}) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    // Check if not mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    // Floating and pulsating animation
    gsap.to(overlayRef.current, {
      x: "+=60",
      y: "+=30",
      scale: scale,
      rotation: 5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Glow / pulse effect
    gsap.to(overlayRef.current, {
      boxShadow: `0 0 120px ${color1}, 0 0 200px ${color2}`,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [color1, color2]);

  return (
    <div
      ref={overlayRef}
      className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${color1}, ${color2})`,
        filter: `blur(${blur}px)`,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default OverlayGlow;
