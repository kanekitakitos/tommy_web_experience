import React, { useEffect, useRef } from "react";
import FocusScreen from "@/components/sections/FocusScreen"
import UnlockCardScreen from "@/components/sections/UnlockCardScreen";
import FromCardScreen from "@/components/sections/FromCardScreen";
import TestimonialsSwiper from "@/components/sections/TestimonialsSwiper";
import CTASection from "@/components/sections/CTASection";
import FooterScreen from "@/components/sections/FooterScreen";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const B2CPage = () => {
    const sectionsRef = useRef([]);
    const currentSection = useRef(0);
    const isScrolling = useRef(false);
    const previousWidth = useRef(typeof window !== "undefined" ? window.innerWidth : 0);

    // ✅ reload on screen width change
    useEffect(() => {
        let resizeTimeout = null;
        const handleResize = () => {
            if (window.innerWidth !== previousWidth.current) {
                previousWidth.current = window.innerWidth;
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    try {
                        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) ScrollTrigger.refresh();
                    } catch (e) { }
                    window.dispatchEvent(new Event('resize'));
                    window.dispatchEvent(new Event('scroll'));
                }, 220);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); clearTimeout(resizeTimeout); };
    }, []);

    useEffect(() => {
        // Mobile check removed to enable animation on all devices

        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

        const throttle = (func, limit) => {
            let inThrottle;
            return function (...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => (inThrottle = false), limit);
                }
            };
        };

        const sections = sectionsRef.current;
        let scrollTween = null;

        const updateCurrentSection = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            sections.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + window.scrollY;
                    const sectionBottom = sectionTop + rect.height;
                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        currentSection.current = index;
                    }
                }
            });
        };

        const snapToSection = (index) => {
            if (isScrolling.current || index < 0 || index >= sections.length) return;

            const isGoingUp = index < currentSection.current;
            isScrolling.current = true;

            if (scrollTween) scrollTween.kill();

            scrollTween = gsap.to(window, {
                scrollTo: { y: sections[index], autoKill: false },
                duration: 0.8,
                ease: "expo.out",
                onStart: () => {
                    document.body.style.overflow = "hidden";
                    document.body.classList.add('is-snapping');
                },
                onComplete: () => {
                    document.body.style.overflow = "";
                    document.body.classList.remove('is-snapping');
                    isScrolling.current = false;
                    updateCurrentSection();
                },
            });
        };

        const isAtBottom = () => {
            const section = sections[currentSection.current];
            if (!section) return true;
            const rect = section.getBoundingClientRect();
            return rect.bottom <= window.innerHeight + 5;
        };

        const isAtTop = () => {
            const section = sections[currentSection.current];
            if (!section) return true;
            const rect = section.getBoundingClientRect();
            return rect.top >= -5;
        };

        const handleWheel = (e) => {
            if (isScrolling.current) {
                e.preventDefault();
                return;
            }

            if (e.deltaY > 0 && !isAtBottom()) return;
            if (e.deltaY < 0 && !isAtTop()) return;

            accumulatedDelta += e.deltaY;
            const threshold = 60;

            if (Math.abs(accumulatedDelta) > threshold) {
                if (accumulatedDelta > 0) snapToSection(currentSection.current + 1);
                else snapToSection(currentSection.current - 1);
                accumulatedDelta = 0;
            }
        };

        let accumulatedDelta = 0;
        let touchStartY = 0;
        const handleTouchStart = (e) => (touchStartY = e.touches[0].clientY);
        const handleTouchEnd = (e) => {
            if (isScrolling.current) return;
            const diff = touchStartY - e.changedTouches[0].clientY;

            if (diff > 0 && !isAtBottom()) return;
            if (diff < 0 && !isAtTop()) return;

            if (Math.abs(diff) > 60) {
                if (diff > 0) snapToSection(currentSection.current + 1);
                else snapToSection(currentSection.current - 1);
            }
        };

        const handleKeyDown = (e) => {
            if (isScrolling.current) return;

            if ((e.key === "ArrowDown" || e.key === "PageDown") && !isAtBottom()) return;
            if ((e.key === "ArrowUp" || e.key === "PageUp") && !isAtTop()) return;

            if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                snapToSection(currentSection.current + 1);
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                snapToSection(currentSection.current - 1);
            }
        };

        const handleScroll = throttle(() => {
            if (!isScrolling.current) updateCurrentSection();
        }, 200);

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });
        window.addEventListener("keydown", handleKeyDown);

        snapToSection(0);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("keydown", handleKeyDown);
            ScrollTrigger.getAll().forEach((t) => t.kill());
            if (scrollTween) scrollTween.kill();
        };
    }, []);

    return (
        <div className="main font-[poppin] text-white overflow-x-hidden bg-transparent relative z-10 flex flex-col gap-y-64 md:gap-y-80 lg:gap-y-96">
            <section ref={(el) => (sectionsRef.current[0] = el)} className="relative">
                <FocusScreen />
            </section>

            <section ref={(el) => (sectionsRef.current[1] = el)} className="relative z-10">
                <UnlockCardScreen />
            </section>

            <section ref={(el) => (sectionsRef.current[2] = el)} className="relative z-10 flex flex-col gap-y-2 pb-20 lg:pb-60">
                <FromCardScreen />
                <TestimonialsSwiper />
            </section>

            <section ref={(el) => (sectionsRef.current[3] = el)} className="relative z-10">
                <CTASection />
            </section>

            <section ref={(el) => (sectionsRef.current[4] = el)} className="relative z-10">
                <FooterScreen />
            </section>
        </div>
    );
};

export default B2CPage;
