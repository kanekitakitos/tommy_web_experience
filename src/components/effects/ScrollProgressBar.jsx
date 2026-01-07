"use client";
import React, { useEffect, useState } from "react";

/**
 * ScrollProgressBar Component
 * 
 * A thin gradient line fixed at the top of the viewport indicating read progress.
 * Calculates `(window.scrollY / totalHeight) * 100` to set width.
 * 
 * @component
 * @returns {JSX.Element} Fixed top progress bar.
 */
const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight === 0) return;

            const progress = (currentScrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[1000] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-white shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;
