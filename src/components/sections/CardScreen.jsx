"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SpotlightCard from "@/components/ui/SpotlightCard";
import OverlayGlow from "@/components/effects/OverlayGlow";

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
    const animateGlow = (ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          boxShadow: "0 0 0 2px transparent, 4px -4px 12px rgba(119, 38, 193, 0.8), -4px 4px 12px transparent",
          duration: 0.75,
          repeat: -1,
          yoyo: false,
          ease: "linear",
          onRepeat: function () {
            const shadows = [
              "0 0 0 2px transparent, -4px -4px 12px rgba(119, 38, 193, 0.8), 4px 4px 12px transparent",
              "0 0 0 2px transparent, 4px -4px 12px rgba(119, 38, 193, 0.8), -4px 4px 12px transparent",
              "0 0 0 2px transparent, 4px 4px 12px rgba(119, 38, 193, 0.8), -4px -4px 12px transparent",
              "0 0 0 2px transparent, -4px 4px 12px rgba(119, 38, 193, 0.8), 4px -4px 12px transparent"
            ];
            const currentIteration = Math.floor(this.totalTime() / 0.75) % shadows.length;
            gsap.to(ref.current, {
              boxShadow: shadows[(currentIteration + 1) % shadows.length],
              duration: 0.75,
              ease: "linear"
            });
          }
        });
      }
    };

    animateGlow(glow1Ref);
    animateGlow(glow2Ref);
  }, []);

  return (
    <div
      // AJUSTE: gap-6 em mobile para poupar espaço vertical, gap-16 em desktop para "ar"
      className="min-h-[100dvh] w-full overflow-y-auto overflow-x-hidden font-[poppinmed] flex flex-col gap-6 md:gap-16 items-center justify-center relative px-4 py-8 md:py-0"
      style={{ perspective: "2000px" }}
    >
      <OverlayGlow />

      {/* AJUSTE: text-lg em mobile para não ocupar tanto espaço visual */}
      <h3 className="lg:text-3xl md:text-2xl text-lg font-semibold text-center md:w-[70%] w-full leading-snug z-10">
        Whether you are a
      </h3>

      <div className="flex md:flex-row flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-5xl md:h-[400px] lg:h-[500px]">

        {/* Card 1 */}
        <SpotlightCard
          // AJUSTE: max-w-xs em mobile impede que a carta fique demasiado larga em telemóveis grandes
          className="custom-spotlight-card w-full max-w-xs md:max-w-none md:w-[48%] lg:w-1/2 h-[260px] md:h-full scale-100"
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
            <div className="absolute h-full w-full flex flex-col text-center items-center justify-center py-8 md:py-12 lg:py-20 px-6">

              <h3 ref={card1TitleRef} className="text-2xl md:text-3xl lg:text-5xl uppercase font-bold tracking-wider mb-5 md:mb-0">
                Business
              </h3>

              <div
                ref={card1BtnRef}
                className="w-full flex gap-[7px] mt-auto md:absolute md:bottom-8 md:left-0 md:px-6"
              >
                <button onClick={() => {
                  window.location.href = "/b2b"
                }} className="group relative px-4 py-2 text-black bg-white cursor-pointer w-full overflow-hidden h-[40px] md:h-[45px] rounded-[6px] shadow-lg">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                  <div className="relative h-full overflow-hidden font-medium text-sm md:text-base flex items-center justify-center">
                    <span className="absolute flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      Our Solutions
                    </span>
                    <span className="absolute flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
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
          // AJUSTE: max-w-xs em mobile
          className="custom-spotlight-card w-full max-w-xs md:max-w-none md:w-[48%] lg:w-1/2 h-[260px] md:h-full scale-100"
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
            <div className="absolute h-full w-full flex flex-col text-center items-center justify-center py-8 md:py-12 lg:py-20 px-6">

              <h3 ref={card2TitleRef} className="text-2xl md:text-3xl lg:text-5xl uppercase font-bold tracking-wider mb-5 md:mb-0">
                Creator
              </h3>

              <div
                ref={card2BtnRef}
                className="w-full flex gap-[7px] mt-auto md:absolute md:bottom-8 md:left-0 md:px-6"
              >
                <button onClick={() => {
                  window.location.href = "/b2c"
                }} className="group relative px-4 py-2 text-black bg-white cursor-pointer w-full overflow-hidden h-[40px] md:h-[45px] rounded-[6px] shadow-lg">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                  <div className="relative h-full overflow-hidden font-medium text-sm md:text-base flex items-center justify-center">
                    <span className="absolute flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      Explore Now
                    </span>
                    <span className="absolute flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
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