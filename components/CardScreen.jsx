"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SpotlightCard from "./SpotlightCard";
import OverlayGlow from "./OverlayGlow";

const CardScreen = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card1TitleRef = useRef(null);
  const card2TitleRef = useRef(null);
  const card1BtnRef = useRef(null);
  const card2BtnRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  useEffect(() => {
    // Animate glow stroke for card 1
    if (glow1Ref.current) {
      gsap.to(glow1Ref.current, {
        boxShadow: "0 0 0 2px transparent, 4px -4px 12px rgba(119, 38, 193, 0.8), -4px 4px 12px transparent",
        duration: 0.75,
        repeat: -1,
        yoyo: false,
        ease: "linear",
        onRepeat: function() {
          const shadows = [
            "0 0 0 2px transparent, -4px -4px 12px rgba(119, 38, 193, 0.8), 4px 4px 12px transparent",
            "0 0 0 2px transparent, 4px -4px 12px rgba(119, 38, 193, 0.8), -4px 4px 12px transparent",
            "0 0 0 2px transparent, 4px 4px 12px rgba(119, 38, 193, 0.8), -4px -4px 12px transparent",
            "0 0 0 2px transparent, -4px 4px 12px rgba(119, 38, 193, 0.8), 4px -4px 12px transparent"
          ];
          const currentIteration = Math.floor(this.totalTime() / 0.75) % shadows.length;
          gsap.to(glow1Ref.current, {
            boxShadow: shadows[(currentIteration + 1) % shadows.length],
            duration: 0.75,
            ease: "linear"
          });
        }
      });
    }

    // Animate glow stroke for card 2
    if (glow2Ref.current) {
      gsap.to(glow2Ref.current, {
        boxShadow: "0 0 0 2px transparent, 4px -4px 12px rgba(119, 38, 193, 0.8), -4px 4px 12px transparent",
        duration: 0.75,
        repeat: -1,
        yoyo: false,
        ease: "linear",
        onRepeat: function() {
          const shadows = [
            "0 0 0 2px transparent, -4px -4px 12px rgba(119, 38, 193, 0.8), 4px 4px 12px transparent",
            "0 0 0 2px transparent, 4px -4px 12px rgba(119, 38, 193, 0.8), -4px 4px 12px transparent",
            "0 0 0 2px transparent, 4px 4px 12px rgba(119, 38, 193, 0.8), -4px -4px 12px transparent",
            "0 0 0 2px transparent, -4px 4px 12px rgba(119, 38, 193, 0.8), 4px -4px 12px transparent"
          ];
          const currentIteration = Math.floor(this.totalTime() / 0.75) % shadows.length;
          gsap.to(glow2Ref.current, {
            boxShadow: shadows[(currentIteration + 1) % shadows.length],
            duration: 0.75,
            ease: "linear"
          });
        }
      });
    }
  }, []);

  return (
    <div
      className="h-screen overflow-hidden font-[poppinmed] flex flex-col gap-16 items-center justify-center relative px-4"
      style={{ perspective: "2000px" }}
    >
      <OverlayGlow />

      <h3 className="md:text-3xl text-lg text-center md:w-[70%] w-full leading-snug">
        Whether you are a
      </h3>

      <div className="flex md:flex-row flex-col items-center justify-center gap-8 md:h-1/2 h-2/3 w-full md:w-2/5">
        {/* Card 1 */}
        <SpotlightCard
          className="custom-spotlight-card h-full md:w-1/2 w-3/5 md:scale-100 scale-95"
          spotlightColor="#7726c1"
        >
          <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
            <div 
              ref={glow1Ref}
              className="absolute inset-0 rounded-[inherit] border-2 border-transparent"
              style={{
                boxShadow: "0 0 0 2px transparent, -4px -4px 12px rgba(119, 38, 193, 0.8), 4px 4px 12px transparent"
              }}
            ></div>
          </div>
          <div
            ref={card1Ref}
            className="relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%]"
          >
            <div className="absolute h-full w-full flex flex-col text-center items-center justify-center py-26 gap-9">
              <h3 ref={card1TitleRef} className="text-3xl md:text-4xl uppercase">
                Business
              </h3>
              <div
                ref={card1BtnRef}
                className="absolute w-full flex gap-[7px] bottom-0"
              >
                <button onClick={() => {
                  window.location.href = "/b2b"
                }} className="group relative px-4 py-2 text-black bg-white cursor-pointer w-full overflow-hidden group h-[40px] rounded-[6px]">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                  <div className="relative h-full overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      Our Solutions
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                      Our Solutions
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard
          className="custom-spotlight-card h-full md:w-1/2 w-3/5 md:scale-100 scale-95"
          spotlightColor="#7726c1"
        >
          <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
            <div 
              ref={glow2Ref}
              className="absolute inset-0 rounded-[inherit] border-2 border-transparent"
              style={{
                boxShadow: "0 0 0 2px transparent, -4px -4px 12px rgba(119, 38, 193, 0.8), 4px 4px 12px transparent"
              }}
            ></div>
          </div>
          <div
            ref={card2Ref}
            className="relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%]"
          >
            <div className="absolute h-full w-full flex flex-col text-center items-center justify-center py-26 gap-9">
              <h3 ref={card2TitleRef} className="text-3xl md:text-4xl uppercase">
                Creator
              </h3>
              <div
                ref={card2BtnRef}
                className="absolute w-full flex gap-[7px] bottom-0"
              >
                <button onClick={() => {
                  window.location.href = "/b2c"
                }} className="group relative px-4 py-2 text-black bg-white cursor-pointer w-full overflow-hidden group h-[40px] rounded-[6px]">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                  <div className="relative h-full overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      Explore Now
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                      Explore Now
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default CardScreen;