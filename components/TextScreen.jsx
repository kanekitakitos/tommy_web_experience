"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import OverlayGlow from "./OverlayGlow";

const efficiencyWords = ["Efficiency", "Results", "Revenue", "Possibilities"];
const costWords = ["Costs", "Time", "Effort", "Hassle"];

const TextScreen = () => {
  const effRef = useRef(null);
  const costRef = useRef(null);
  const effContainerRef = useRef(null);
  const costContainerRef = useRef(null);
  const effIndex = useRef(0);
  const costIndex = useRef(0);
  const effTL = useRef(null);
  const costTL = useRef(null);

  // Function for smooth width measurement + animation (like HomeScreen)
  const animateWord = (ref, containerRef, words, indexRef) => {
    const nextIndex = (indexRef.current + 1) % words.length;
    const nextWord = words[nextIndex];

    gsap.to(ref.current, {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        const temp = document.createElement("span");
        temp.style.position = "absolute";
        temp.style.visibility = "hidden";
        temp.style.whiteSpace = "nowrap";
        temp.style.font = getComputedStyle(ref.current).font;
        temp.innerText = nextWord;
        document.body.appendChild(temp);
        const newWidth = temp.offsetWidth + 4;
        document.body.removeChild(temp);

        gsap.to(containerRef.current, {
          width: newWidth,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            ref.current.innerText = nextWord;
            indexRef.current = nextIndex;

            gsap.fromTo(
              ref.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.05 }
            );
          },
        });
      },
    });
  };

  useEffect(() => {
    // Efficiency words animation
    effTL.current = gsap.timeline({ repeat: -1, repeatDelay: 1.8, delay: 1 });
    effTL.current.call(() => animateWord(effRef, effContainerRef, efficiencyWords, effIndex));
    effTL.current.to({}, { duration: 2 });
    effTL.current.call(() => animateWord(effRef, effContainerRef, efficiencyWords, effIndex));
    effTL.current.to({}, { duration: 2 });
    effTL.current.call(() => animateWord(effRef, effContainerRef, efficiencyWords, effIndex));
    effTL.current.to({}, { duration: 2 });
    effTL.current.call(() => animateWord(effRef, effContainerRef, efficiencyWords, effIndex));

    // Cost words animation
    costTL.current = gsap.timeline({ repeat: -1, repeatDelay: 1.8, delay: 1.6 });
    costTL.current.call(() => animateWord(costRef, costContainerRef, costWords, costIndex));
    costTL.current.to({}, { duration: 2 });
    costTL.current.call(() => animateWord(costRef, costContainerRef, costWords, costIndex));
    costTL.current.to({}, { duration: 2 });
    costTL.current.call(() => animateWord(costRef, costContainerRef, costWords, costIndex));
    costTL.current.to({}, { duration: 2 });
    costTL.current.call(() => animateWord(costRef, costContainerRef, costWords, costIndex));

    return () => {
      effTL.current && effTL.current.kill();
      costTL.current && costTL.current.kill();
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden text-white flex items-center justify-center">
      <OverlayGlow />
      <h3 className="font-[poppinmed] md:w-3/5 w-full md:text-3xl text-lg text-center my-36 leading-snug z-10">
        We leverage AI to achieve more<br/>
        <span
          ref={effContainerRef}
          className="font-[poppinmed] relative inline-block overflow-hidden align-baseline"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          <span
            ref={effRef}
            style={{
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {efficiencyWords[0]}
          </span>
        </span>{" "}
        with less{" "}
        <span
          ref={costContainerRef}
          className="font-[poppinmed] relative inline-block overflow-hidden align-baseline"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          <span
            ref={costRef}
            style={{
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {costWords[0]}
          </span>
        </span>{" "}
        and empower <br/> creators to focus on what really matters.
      </h3>
    </div>
  );
};

export default TextScreen;
