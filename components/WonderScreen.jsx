"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverlayGlow from "./OverlayGlow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WonderScreen = () => {
    const containerRef = useRef(null);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const buttonRef = useRef(null);
    const glowBorderRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                end: "top 35%",
                scrub: 0.8,
            },
        });

        tl.from(
            containerRef.current,
            { scale: 0.9, opacity: 0, ease: "power2.out" },
            0
        );

        const h2Words = h2Ref.current.querySelectorAll(".word");
        tl.from(
            h2Words,
            {
                y: 50,
                opacity: 0,
                scale: 0.8,
                stagger: 0.04,
                ease: "back.out(1.2)",
            },
            0.1
        );

        const h3Words = h3Ref.current.querySelectorAll(".word");
        tl.from(
            h3Words,
            { y: 30, opacity: 0, stagger: 0.02, ease: "power2.out" },
            0.3
        );

        tl.from(
            buttonRef.current,
            { y: 30, opacity: 0, scale: 0.9, ease: "back.out(1.5)" },
            0.5
        );

        // 🌟 Animated glowing border effect
        const glowPath = glowBorderRef.current;
        const totalLength = glowPath.getTotalLength();

        gsap.set(glowPath, {
            strokeDasharray: totalLength / 4,
            strokeDashoffset: totalLength,
            opacity: 0.8,
        });

        gsap.to(glowPath, {
            strokeDashoffset: 0,
            duration: 4,
            repeat: -1,
            ease: "none",
            modifiers: {
                strokeDashoffset: (value) =>
                    `${parseFloat(value) % totalLength}`,
            },
        });
    }, []);

    const splitText = (text) =>
        text.split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">
                {word}
            </span>
        ));

    return (
        <div className="h-screen flex justify-center items-center relative overflow-hidden">
            <OverlayGlow />

            <div
                ref={containerRef}
                className="relative md:w-2/5 w-[90%] h-[80%] flex flex-col items-center justify-center"
            >
                {/* SVG Border */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 800 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Base subtle border */}
                    <path
                        d="M20 20 H780 V400 H400 L350 430 H20 Z"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1.6"
                        fill="transparent"
                    />

                    {/* Animated glow border */}
                    <path
                        ref={glowBorderRef}
                        d="M20 20 H780 V400 H400 L350 430 H20 Z"
                        stroke="url(#glowGradient)"
                        strokeWidth="2.5"
                        filter="url(#blurFilter)"
                        fill="transparent"
                    />

                    <defs>
                        {/* glowing gradient color */}
                        <linearGradient
                            id="glowGradient"
                            x1="0"
                            y1="0"
                            x2="800"
                            y2="400"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop
                                offset="0%"
                                stopColor="#ffffff"
                                stopOpacity="1"
                            />
                            <stop
                                offset="50%"
                                stopColor="#b366ff"
                                stopOpacity="0.8"
                            />
                            <stop
                                offset="100%"
                                stopColor="#ffffff"
                                stopOpacity="1"
                            />
                        </linearGradient>

                        {/* subtle blur for glow */}
                        <filter
                            id="blurFilter"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                <h2
                    ref={h2Ref}
                    className="md:text-[26px] text-xl font-[poppin] text-center text-white"
                >
                    {splitText("Wondering how we can help?")}
                </h2>

                <h3
                    ref={h3Ref}
                    className="md:text-[28px] mt-6 w-4/5 text-center md:mt-6 font-[poppinmed] leading-[1.2] text-white/90"
                >
                    {splitText(
                        "Book a meeting or get in touch for a tailored solution."
                    )}
                </h3>

                <button
                    ref={buttonRef}
                    className="group mt-5 relative px-4 py-2 text-black bg-white cursor-pointer w-36 overflow-hidden h-[40px] rounded-[6px] text-sm font-[poppinmed]"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                    <div className="relative h-full overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                            Book Meeting
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                            Book Meeting
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default WonderScreen;
