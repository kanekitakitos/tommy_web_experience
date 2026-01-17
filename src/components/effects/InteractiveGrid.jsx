"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * InteractiveGrid Component
 * 
 * Renders a fixed background grid with a dynamic spotlight effect that follows the mouse.
 * 
 * Layers:
 * 1. SVG Grid Pattern (base).
 * 2. Noise Texture (overlay for realism).
 * 3. Spotlight (radial gradient tracking mouse coordinates via GSAP).
 * 
 * @component
 * @returns {JSX.Element} Fixed background layers.
 */
const InteractiveGrid = () => {
    const spotlightRef = useRef(null);

    useEffect(() => {
        // Set initial position to center
        gsap.set(spotlightRef.current, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(spotlightRef.current, {
                x: clientX,
                y: clientY,
                duration: 1.2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black">
            {/* Base Grid Background */}
            <div className="absolute inset-0 bg-[url('/assets/images/grids.svg')] bg-center bg-repeat opacity-60"></div>

            {/* Subtle Noise Texture - CSS Optimized */}
            <div className="absolute inset-0 bg-noise bg-center opacity-[0.2] mix-blend-overlay"></div>

            {/* Interactive Spotlight */}
            <div
                ref={spotlightRef}
                className="absolute top-0 left-0 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-60 bg-[radial-gradient(circle,rgba(168,85,247,0.4)_0%,transparent_75%)] blur-[80px]"
            />
        </div>
    );
};

export default InteractiveGrid;
