"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverlayGlow from "@/components/effects/OverlayGlow";

/**
 * DifferenceScreen Component
 * 
 * A impact metrics showcase section.
 * Displays floating cards with stats (e.g., "50 Hours Saved", "1M+ Views").
 * 
 * Features:
 * - Mouse parallax effect on background grids.
 * - Floating/Hovering card animation using Sine waves.
 * - Counting numbers animation (counter-up) upon scrolling into view.
 * 
 * @component
 * @returns {JSX.Element} Interactive stats section.
 */
const DifferenceScreen = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const gridSecondaryRef = useRef(null);
  const spotlightRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const boxesRef = useRef([]);
  const numbersRef = useRef([]);
  const suffixesRef = useRef([]);
  const animationTimelineRef = useRef(null);

  const targetNumbers = [50, 100, 1000000];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const { clientY } = e;
      const targetY = (clientY / window.innerHeight - 0.5);

      gsap.to(gridRef.current, { y: targetY * 200, duration: 2, ease: "power2.out" });
      gsap.to(gridSecondaryRef.current, { y: targetY * 80, duration: 2.5, ease: "power2.out" });
      gsap.to(spotlightRef.current, { y: clientY - 400, opacity: 0.6, duration: 1, ease: "power2.out" });
      gsap.to(cardsContainerRef.current, { rotationX: -targetY * 15, duration: 1.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Setup Boxes
    boxesRef.current.forEach((box) => {
      if (!box) return;
      gsap.set(box, { opacity: 0, y: 50, scale: 0.85, rotationX: -20, filter: "blur(10px)", transformOrigin: "center center" });
    });

    // Setup Numbers
    numbersRef.current.forEach((number) => {
      if (number) {
        number.innerText = "0";
        gsap.set(number, { opacity: 0, scale: 0.8 });
      }
    });

    // Setup Sufixo Card 3 (M+): Começa com display 'none' para não atrapalhar o centro
    if (suffixesRef.current[2]) {
      gsap.set(suffixesRef.current[2], { display: "none", opacity: 0, scale: 0 });
    }

    if (!sectionRef.current) return;

    const startFloating = (box, i) => {
      gsap.to(box, { y: "-=12", duration: 2.5 + i * 0.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    };

    const entTl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", onEnter: () => entTl.play(), once: true }
    }).pause();

    boxesRef.current.forEach((box, i) => {
      if (!box) return;
      const numObj = { val: 0 };
      const startTime = i * 0.3;

      entTl.to(box, {
        opacity: 1, y: 0, scale: 1, rotationX: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
        onStart: () => startFloating(box, i)
      }, startTime);

      entTl.to(numbersRef.current[i], {
        opacity: 1, scale: 1, duration: 0.8, ease: "power2.out",
        onStart: () => {
          // Lógica Card 3 (Views)
          if (i === 2) {
            gsap.to(numObj, {
              val: targetNumbers[i],
              duration: 2.2, // Um pouco mais lento para apreciar a subida
              ease: "power1.inOut",
              onUpdate: () => {
                const el = numbersRef.current[i];
                if (el) el.innerText = Math.floor(numObj.val).toLocaleString("de-DE");
              },
              onComplete: () => {
                const el = numbersRef.current[i];
                if (el) el.innerText = "1";

                const suffix = suffixesRef.current[i];
                if (suffix) {
                  // Mostra o sufixo e anima
                  gsap.set(suffix, { display: "inline-block" });
                  gsap.to(suffix, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
                }
              }
            });
          } else {
            // Lógica normal (Card 1 e 2)
            gsap.to(numObj, {
              val: targetNumbers[i],
              duration: 1.5,
              ease: "power2.out",
              onUpdate: () => {
                const el = numbersRef.current[i];
                if (el) el.innerText = Math.floor(numObj.val).toLocaleString("de-DE");
              },
            });
          }
        }
      }, startTime + 0.4);
    });

    animationTimelineRef.current = entTl;
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationTimelineRef.current) animationTimelineRef.current.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="difference-section min-h-[100dvh] md:h-screen flex flex-col items-center justify-center gap-8 md:gap-2 text-white relative bg-black overflow-hidden py-12 md:py-0">
      <div ref={gridRef} className="absolute inset-0 z-0 bg-[url('/assets/images/grids.svg')] bg-center bg-repeat opacity-30 scale-150 pointer-events-none"></div>
      <div ref={gridSecondaryRef} className="absolute inset-0 z-0 bg-[url('/assets/images/grids.svg')] bg-center bg-repeat opacity-15 scale-[1.7] pointer-events-none blur-[2px]"></div>
      <div ref={spotlightRef} className="absolute top-0 left-0 right-0 h-[800px] z-0 pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,transparent_70%)] blur-[80px]" style={{ transform: "translateY(0)" }}></div>
      <div className="absolute inset-0 z-1 pointer-events-none"><OverlayGlow className="opacity-40" /></div>
      <div className="fixed top-0 left-0 z-1 h-screen w-full bg-[url('/assets/images/noise.png')] bg-cover bg-center pointer-events-none opacity-20"></div>

      <h3 className="md:text-4xl text-2xl text-center font-bold w-[90%] md:w-4/5 z-10 drop-shadow-lg mt-0 md:-mt-52 mb-1 md:mb-0 px-4 leading-tight">
        This is how we are making a difference
      </h3>

      <div ref={cardsContainerRef} className="w-full md:w-4/5 h-auto md:h-[50%] flex flex-col md:block items-center justify-center relative md:scale-95 scale-100 z-10 gap-6 md:gap-0 -mt-10 md:mt-0" style={{ perspective: "1000px" }}>

        {/* Card 1: 50 Hours */}
        <div ref={(el) => (boxesRef.current[0] = el)} className="box relative md:absolute md:top-[55%] left-auto md:left-1/2 md:-translate-y-1/2 md:-translate-x-[125%] md:-rotate-3 rotate-0 w-52 md:w-72 aspect-square bg-[url('/assets/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0 will-change-transform drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center backdrop-blur-md bg-black/20 border border-white/5 rounded-3xl mx-auto">
          <div className="w-[85%] font-[poppinsemi] flex flex-col items-center">
            <div className="flex flex-col items-center gap-0 w-full">
              <span ref={(el) => (numbersRef.current[0] = el)} className="tabular-nums text-white md:text-7xl text-4xl font-bold tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center w-full block">0</span>
              <h3 className="text-purple-400 uppercase tracking-[0.25em] md:text-[12px] text-[10px] font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">Hours</h3>
            </div>
            <h3 className="md:text-base text-sm text-white font-semibold mt-3 drop-shadow-md">Saved Weekly</h3>
          </div>
        </div>

        {/* Card 2: 100+ CLIENTS */}
        <div ref={(el) => (boxesRef.current[1] = el)} className="box relative md:absolute md:top-[80%] left-auto md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:-rotate-2 rotate-0 w-52 md:w-72 aspect-square bg-[url('/assets/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0 will-change-transform drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center backdrop-blur-md bg-black/20 border border-white/5 rounded-3xl mx-auto">
          <div className="w-[85%] font-[poppinsemi] flex flex-col items-center">
            <div className="flex flex-col items-center gap-0 w-full">
              <div className="flex items-baseline justify-center w-full">
                <span ref={(el) => (numbersRef.current[1] = el)} className="tabular-nums text-white md:text-7xl text-4xl font-bold tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center">0</span>
                <span className="md:text-4xl text-xl text-purple-400 font-bold ml-1 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]">+</span>
              </div>
              <h3 className="text-purple-400 uppercase tracking-[0.25em] md:text-[12px] text-[10px] font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">CLIENTS</h3>
            </div>
            <h3 className="md:text-base text-sm text-white font-semibold mt-3 drop-shadow-md">Onboarded</h3>
          </div>
        </div>

        {/* Card 3: 1M+ VIEWS (Animação Estável) */}
        <div ref={(el) => (boxesRef.current[2] = el)} className="box relative md:absolute md:top-[55%] left-auto md:left-1/2 md:-translate-y-1/2 md:translate-x-[25%] md:rotate-[5deg] rotate-0 w-52 md:w-72 aspect-square bg-[url('/assets/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0 will-change-transform drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center backdrop-blur-md bg-black/20 border border-white/5 rounded-3xl mx-auto">
          <div className="w-[85%] font-[poppinsemi] flex flex-col items-center">
            <div className="flex flex-col items-center gap-0 w-full">
              {/* Adicionado justify-center e w-full para segurar a posição */}
              <div className="flex items-baseline justify-center w-full">
                <span
                  ref={(el) => (numbersRef.current[2] = el)}

                  className="tabular-nums text-white md:text-6xl text-4xl font-bold tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center"
                >
                  0
                </span>
                <span
                  ref={(el) => (suffixesRef.current[2] = el)}
                  className="md:text-4xl text-xl text-purple-400 font-bold ml-1 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]"
                >
                  M+
                </span>
              </div>
              <h3 className="text-purple-400 uppercase tracking-[0.25em] md:text-[12px] text-[10px] font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">VIEWS</h3>
            </div>
            <h3 className="md:text-base text-sm text-white font-semibold mt-3 drop-shadow-md">Generated</h3>
          </div>
        </div>
      </div>
    </section >
  );
};

export default DifferenceScreen;