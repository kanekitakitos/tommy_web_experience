import { Geist, Geist_Mono } from "next/font/google";
import HomeScreen from "@/components/HomeScreen";
import CardScreen from "@/components/CardScreen";
import DifferenceScreen from "@/components/DifferenceScreen";
import WonderScreen from "@/components/WonderScreen";
import FooterScreen from "@/components/FooterScreen";
import TextScreen from "@/components/TextScreen";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const sectionsRef = useRef([]);
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const previousWidth = useRef(typeof window !== "undefined" ? window.innerWidth : 0);

  // ✅ reload on screen width change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== previousWidth.current) {
        previousWidth.current = window.innerWidth;
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // rest of your GSAP scroll logic
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

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
      isScrolling.current = true;

      if (scrollTween) scrollTween.kill();

      scrollTween = gsap.to(window, {
        scrollTo: { y: sections[index], autoKill: false },
        duration: 1,
        ease: "power2.out",
        onStart: () => (document.body.style.overflow = "hidden"),
        onComplete: () => {
          document.body.style.overflow = "";
          isScrolling.current = false;
          updateCurrentSection();
        },
      });
    };

    const isInDifferenceSection = () => {
      const section = sections[3];
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    let accumulatedDelta = 0;
    const threshold = 80;

    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (isInDifferenceSection()) {
        accumulatedDelta = 0;
        return;
      }

      accumulatedDelta += e.deltaY;

      if (Math.abs(accumulatedDelta) > threshold) {
        if (accumulatedDelta > 0) snapToSection(currentSection.current + 1);
        else snapToSection(currentSection.current - 1);
        accumulatedDelta = 0;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => (touchStartY = e.touches[0].clientY);
    const handleTouchEnd = (e) => {
      if (isScrolling.current || isInDifferenceSection()) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) {
        if (diff > 0) snapToSection(currentSection.current + 1);
        else snapToSection(currentSection.current - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling.current || isInDifferenceSection()) return;
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
    <div className="main font-[poppin] text-white bg-[url('/images/grids.svg')] bg-center bg-repeat overflow-x-hidden bg-black">
      <div className="fixed top-0 left-0 z-[999] h-screen w-full bg-[url('/images/noise.png')] bg-cover bg-center pointer-events-none opacity-30"></div>

      <section ref={(el) => (sectionsRef.current[0] = el)} className="relative z-10">
        <HomeScreen />
      </section>

      <section ref={(el) => (sectionsRef.current[1] = el)} className="relative z-10">
        <TextScreen />
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} className="relative z-10">
        <CardScreen />
      </section>

      <section ref={(el) => (sectionsRef.current[3] = el)} className="relative z-10">
        <DifferenceScreen />
      </section>

      <section ref={(el) => (sectionsRef.current[4] = el)} className="relative z-10">
        <WonderScreen />
      </section>

      <section ref={(el) => (sectionsRef.current[5] = el)} className="relative z-10">
        <FooterScreen />
      </section>
    </div>
  );
}
