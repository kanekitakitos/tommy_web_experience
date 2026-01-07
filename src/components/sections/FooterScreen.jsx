"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import OverlayGlow from "@/components/effects/OverlayGlow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * FooterScreen Component
 * 
 * The global footer of the application.
 * Contains navigation links, social media icons, and legal pages (Privacy/Terms).
 * 
 * Animations:
 * - ScrollTrigger-based entry animation: Elements (Title, Button, Links) slide up and fade in as the user reaches the bottom.
 * - Text splitting for the title "Modern Solutions".
 * 
 * @component
 * @returns {JSX.Element} The site footer.
 */
const FooterScreen = () => {
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const socialsRef = useRef(null);
    const bottomLinksRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-container",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });

        // Title word animation
        const titleWords = titleRef.current.querySelectorAll(".word");
        tl.from(
            titleWords,
            {
                y: 40,
                opacity: 0,
                scale: 0.8,
                stagger: 0.03,
                ease: "power2.out",
                duration: 0.6,
            },
            0
        );

        // Button animation
        tl.from(
            buttonRef.current,
            {
                y: 30,
                opacity: 0,
                scale: 0.9,
                ease: "back.out(1.5)",
                duration: 0.6,
            },
            0.2
        );

        // Socials heading
        tl.from(
            socialsRef.current,
            {
                y: 30,
                opacity: 0,
                ease: "power2.out",
                duration: 0.6,
            },
            0.3
        );

        // Bottom links
        tl.from(
            bottomLinksRef.current,
            {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                ease: "power2.out",
                duration: 0.6,
            },
            0.5
        );

        // Force ScrollTrigger to refresh its positions after the animations are set up.
        // This is crucial for client-side navigation where the DOM layout might change.
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => clearTimeout(timer);

    }, []);

    // Split text into words
    const splitText = (text) => {
        return text.split(" ").map((word, i) => (
            <span
                key={i}
                className="word inline-block"
                style={{ marginRight: "0.30em" }}
            >
                {word}
            </span>
        ));
    };

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="footer-container h-screen overflow-hidden flex flex-col relative">
            <Image
                className="absolute -translate-y-1/2 -translate-x-1/3"
                width={1000}
                height={1}
                src={"/assets/images/ellipseoverlay.svg"}
                alt="background overlay"
            />
            <OverlayGlow />
            <div className="md:p-7 p-4 pt-0 md:pt-15 h-full border-t-[0.6] relative">

                {/* Bottom fade (visible on all devices) */}
                <div
                    className="
                        absolute bottom-0 left-0 w-full h-[100px] md:h-[120px]
                        bg-gradient-to-t from-[#0a001a] via-[#0a001a]/70 to-transparent
                        pointer-events-none
                        -z-10
                    "
                />

                {/* Left-right smooth fade */}
                <div
                    className="
                        absolute inset-0
                        bg-gradient-to-r from-[#0a001a]/95 via-transparent to-[#0a001a]/95
                        opacity-60 sm:opacity-70 md:opacity-80
                        pointer-events-none
                        -z-10
                    "
                />

                <div className="flex md:flex-row flex-col justify-between h-full">
                    <div className="flex flex-col md:items-start items-center md:gap-0 gap-5">
                        <h4 ref={titleRef} className="md:text-2xl mt-10 md:mt-0 text-xl md:text-start text-center w-2/3 md:w-full lg:w-2/3">
                            {splitText("New Gen Services,")}
                            <span className="font-[poppin]">
                                Modern Solutions
                            </span>
                        </h4>
                        <Button
                            ref={buttonRef}
                            text="Book Meeting"
                            isBookMeeting={true}
                            className="mt-5"
                        />
                    </div>
                    <div className="flex flex-col md:items-end items-center justify-between py-10 md:py-0">
                        <div className="flex flex-col md:items-end items-center">
                            <h5 className="text-xl mb-3">Quick Links</h5>
                            <ul className="flex flex-col md:items-end items-center gap-2">
                                <li>
                                    <button onClick={handleBackToTop} className="text-gray-400 hover:text-white transition-colors text-sm">Back to Top</button>
                                </li>
                                <li>
                                    <Link href="/b2b" className="text-gray-400 hover:text-white transition-colors text-sm">Businesses</Link>
                                </li>
                                <li>
                                    <Link href="/b2c" className="text-gray-400 hover:text-white transition-colors text-sm">Creators</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:items-end items-center mb-10 md:mb-0">
                            <h5 ref={socialsRef} className="text-xl">
                                Socials
                            </h5>
                            <div className="flex gap-2.5 text-2xl mt-3">
                                <Link
                                    href="https://www.instagram.com/newgenservices.ai/"
                                    target="_blank"
                                    className="cursor-pointer scale-90 hover:scale-100 transition-transform duration-300"
                                >
                                    <AiFillInstagram />
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@newgenservices_ai"
                                    target="_blank"
                                    className="cursor-pointer scale-90 hover:scale-100 transition-transform duration-300"
                                >
                                    <AiFillYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-7 px-4 md:py-5 py-3 flex justify-between items-center border-t-[0.6] bg-[#040404]">

                {/* ALTERAÇÃO: Link com mailto: */}
                <Link
                    ref={(el) => (bottomLinksRef.current[0] = el)}
                    className="relative overflow-hidden inline-block group text-xs md:text-base text-center cursor-pointer"
                    href="mailto:contact@newgenservices.co"
                >
                    <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                        contact@newgenservices.co
                    </span>
                    <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        contact@newgenservices.co
                    </span>
                </Link>

                <div
                    ref={(el) => (bottomLinksRef.current[1] = el)}
                    className="relative overflow-hidden inline-block group text-xs md:text-base text-center"
                >
                    <span className="block leading-none">
                        ©2025 New Gen Services
                    </span>
                </div>
                <div className="flex gap-4 items-center">
                    <Link
                        ref={(el) => (bottomLinksRef.current[2] = el)}
                        className="relative overflow-hidden inline-block group text-xs md:text-base text-center"
                        href={"/privacy"}
                    >
                        <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                            Privacy Policy
                        </span>
                        <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                            Privacy Policy
                        </span>
                    </Link>
                    <Link
                        ref={(el) => (bottomLinksRef.current[3] = el)}
                        className="relative overflow-hidden inline-block group text-xs md:text-base text-center"
                        href={"/terms"}
                    >
                        <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                            Terms & Conditions
                        </span>
                        <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                            Terms & Conditions
                        </span>
                    </Link>
                </div>
            </div>
            {/* Top fade to blend from previous section */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-transparent to-black" />
        </div>
    );
};

export default FooterScreen;