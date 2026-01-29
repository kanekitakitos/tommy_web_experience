"use client";
import React, { useEffect, useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";
import OverlayGlow from "./OverlayGlow";
import gsap from "gsap";
import Button from "./partials/Button";

const businessWords = ["Businesses", "Creators", "Artists", "Entrepreneurs"];

const HomeScreen = () => {
    const wordRef = useRef(null);
    const containerRef = useRef(null);
    const currentIndex = useRef(0);
    const tl = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 0.78; // 0.5x = half speed (slow motion)
        }
    }, []);

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
        <div className="h-screen overflow-hidden flex flex-col items-center relative bg-black">
            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <OverlayGlow />
            </div>

            {/* Navbar */}
            <header className="z-10 md:w-[57%] w-[90%] flex justify-between items-center text-lg p-3 mt-4">
                <div className="select-none">
                    <img
                        src="/images/logonewgen.png"
                        alt="Logo"
                        className="w-36 object-contain"
                    />
                </div>

                <Button text="Book Meeting" />

                {/* <CgMenuRight className="text-2xl md:hidden text-white" /> */}
            </header>

            {/* Hero Section */}
            <h2 className="md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white z-10 leading-snug">
                Powering the future of{" "}
                <span
                    ref={containerRef}
                    className="font-[poppinmed] relative inline-block overflow-hidden align-baseline"
                    style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                    }}
                >
                    <span
                        ref={wordRef}
                        style={{
                            display: "inline-block",
                            textAlign: "center",
                        }}
                    >
                        {businessWords[0]}
                    </span>
                </span>
                <br />
                <span className="block">
                    with AI, Digital Innovation & Media
                </span>
            </h2>

            {/* Orb Section */}
            <video
                ref={videoRef}
                src="/neonloop.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative aspect-square md:w-[400px] w-4/5 mt-10 object-cover mx-auto mix-blend-screen opacity-90"
            />

            <p className="md:w-[30%] font-[poppin] w-4/5 md:text-xl text-center text-white/80 mt-6 mb-16 z-10">
                Modern solutions for businesses and creators who want to grow,
                stand out, and save time.
            </p>

            {/* Bottom fade for smooth transition */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
        </div>
    );
};

export default HomeScreen;
