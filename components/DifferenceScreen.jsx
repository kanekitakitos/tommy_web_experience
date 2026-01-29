"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverlayGlow from "./OverlayGlow";

const DifferenceScreen = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);
  const numbersRef = useRef([]);
  const animationTimelineRef = useRef(null);

  const targetNumbers = [81, 24, 37];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for boxes and numbers
    boxesRef.current.forEach((box) => {
      if (!box) return;
      gsap.set(box, { opacity: 0, y: 100, scale: 0.9 });
    });
    numbersRef.current.forEach((number) => {
      if (number) number.innerText = "+0";
    });

    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Reveal each card sequentially and animate numbers in sync
    boxesRef.current.forEach((box, i) => {
      if (!box) return;
      const numObj = { val: 0 };

      tl.to(box, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });

      tl.to(numObj, {
        val: targetNumbers[i],
        duration: 1,
        ease: "none",
        onUpdate: () => {
          const el = numbersRef.current[i];
          if (el) el.innerText = `+${Math.floor(numObj.val)}`;
        },
      }, "<+0.2");
    });

    animationTimelineRef.current = tl;

    return () => {
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
        animationTimelineRef.current = null;
      }
      ScrollTrigger.killAll();
    };
  }, []);

  // ScrollTrigger-driven animations replace previous intersection logic

  return (
    <section
      ref={sectionRef}
      className="h-screen flex flex-col items-center justify-center gap-20 text-white pointer-events-none relative"
    >
      <OverlayGlow />
      
      <h3 className="md:text-3xl text-xl text-center font-semibold w-4/5">
        This is how we are making a difference
      </h3>

      <div className="w-3/5 h-[70%] flex items-center justify-center relative md:scale-90 scale-50">
        <div
          ref={(el) => (boxesRef.current[0] = el)}
          className="box absolute flex items-center justify-center -translate-y-1/2 -translate-x-2/3 -rotate-3 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0"
        >
          <div className="w-[65%] font-[poppinsemi] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[0] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              >
                +0
              </span>
              <h3>Hours</h3>
            </div>
            <h3>Saved weekly</h3>
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[1] = el)}
          className="box absolute flex items-center justify-center md:-bottom-14 bottom-0 -rotate-2 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0"
        >
          <div className="w-[65%] font-[poppinsemi] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[1] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              >
                +0
              </span>
              <h3>Brands</h3>
            </div>
            <h3>Launched</h3>
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[2] = el)}
          className="box absolute flex items-center justify-center -translate-y-1/2 translate-x-[70%] rotate-[5.45deg] w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0"
        >
          <div className="w-[65%] font-[poppinsemi] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[2] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              >
                +0
              </span>
              <h3>Clients</h3>
            </div>
            <h3>Collaborated</h3>
          </div>
        </div>
      </div>

      {/* Top & bottom fades to blend with adjacent sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/70" />
    </section>
  );
};

export default DifferenceScreen;