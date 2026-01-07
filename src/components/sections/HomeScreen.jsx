"use client";
import React, { useEffect, useRef } from "react";
import Orb from "@/components/effects/Orb";
import OverlayGlow from "@/components/effects/OverlayGlow";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const businessWords = ["Businesses", "Creators", "Artists", "Entrepreneurs"];






/**
 * HomeScreen Component
 * 
 * The Landing Page Hero section.
 * Features the main value proposition, a rotating list of target audiences, and the interactive `Orb`.
 * 
 * Key Logic:
 * - Word Cycler: "Powering the future of [Businesses / Creators / ...]" using GSAP to slide words.
 * - Orb Integration: Centers the WebGL orb as a primary visual anchor.
 * 
 * @component
 * @returns {JSX.Element} Landing page hero.
 */
const HomeScreen = () => {
    const wordRef = useRef(null);
    const containerRef = useRef(null);
    const currentIndex = useRef(0);
    const tl = useRef(null);

    useEffect(() => {
        const animateWord = () => {
            const nextIndex = (currentIndex.current + 1) % businessWords.length;
            const nextWord = businessWords[nextIndex];

            gsap.to(wordRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                    if (!wordRef.current || !containerRef.current) return;

                    const temp = document.createElement("span");
                    temp.style.position = "absolute";
                    temp.style.visibility = "hidden";
                    temp.style.whiteSpace = "nowrap";
                    temp.style.font = getComputedStyle(wordRef.current).font;
                    temp.innerText = nextWord;
                    document.body.appendChild(temp);
                    const newWidth = temp.offsetWidth + 4;
                    document.body.removeChild(temp);

                    gsap.to(containerRef.current, {
                        width: newWidth,
                        duration: 0.4,
                        ease: "power2.out",
                        onComplete: () => {
                            if (!wordRef.current) return;
                            wordRef.current.innerText = nextWord;
                            currentIndex.current = nextIndex;

                            gsap.fromTo(
                                wordRef.current,
                                { y: 20, opacity: 0 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.6,
                                    ease: "power2.out",
                                    delay: 0.05,
                                }
                            );
                        },
                    });
                },
            });
        };

        tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1.6, delay: 1 });
        tl.current.call(animateWord);
        tl.current.to({}, { duration: 2 });
        tl.current.call(animateWord);
        tl.current.to({}, { duration: 2 });
        tl.current.call(animateWord);
        tl.current.to({}, { duration: 2 });
        tl.current.call(animateWord);
        tl.current.to({}, { duration: 2 });

        return () => tl.current && tl.current.kill();
    }, []);

    return (
        <div className="min-h-[100dvh] w-full overflow-x-hidden flex flex-col items-center relative">

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <OverlayGlow />
            </div>

            {/* Navbar */}
            <header className="z-20 md:w-[80%] lg:w-[57%] w-[90%] flex justify-between items-center text-lg py-4 md:mt-4">
                <Logo />
                <Button text="Book Meeting" isBookMeeting={true} />
            </header>

            {/* Main Content Wrapper */}
            <main className="flex-1 flex flex-col items-center justify-center w-full z-10 gap-4 md:gap-8 lg:gap-0 py-6 md:py-0">

                {/* Hero Text */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:w-[80%] lg:w-2/3 w-[90%] font-[poppinmed] text-white z-10 leading-snug">
                    Powering the future of{" "}
                    <span
                        ref={containerRef}
                        className="font-[poppinmed] relative inline-block overflow-hidden align-bottom md:align-baseline text-purple-400"
                        style={{
                            display: "inline-block",
                            verticalAlign: "bottom",
                            minWidth: "10px"
                        }}
                    >
                        <span
                            ref={wordRef}
                            style={{
                                display: "inline-block",
                                textAlign: "center",
                                whiteSpace: "nowrap"
                            }}
                        >
                            {businessWords[0]}
                        </span>
                    </span>
                    <br className="hidden md:block" />
                    <span className="block mt-2 md:mt-0">
                        with AI, Digital Innovation & Media
                    </span>
                </h2>

                {/* Orb Section Container */}
                <div className="relative aspect-square w-full max-w-[320px] md:max-w-[380px] lg:max-w-[480px] my-4 md:my-8 transform-gpu flex items-center justify-center">


                    {/* A Orb original */}
                    <div className="absolute inset-0 z-10 pointer-events-auto">
                        <Orb />
                    </div>
                </div>

                {/* Bottom Text */}
                <p className="md:w-[60%] lg:w-[35%] w-[85%] font-[poppin] text-sm md:text-lg lg:text-xl text-center text-white/80 drop-shadow-sm leading-relaxed z-10">
                    Modern solutions for businesses and creators who want to grow,
                    stand out, and save time.
                </p>

            </main>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-black z-0" />
        </div>
    );
};

export default HomeScreen;