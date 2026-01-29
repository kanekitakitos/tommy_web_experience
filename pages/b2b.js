import React from "react";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import CFocusScreen from "@/components/CFocusScreen";
import CUnlockCardScreen from "@/components/CUnlockCardScreen";
import CFromCardScreen from "@/components/CFromCardScreen";
import CCTASection from "@/components/CCTASection";

const b2c = () => {
    return (
        <div className="main font-[poppin] text-white bg-[url('/images/grids.svg')] bg-center bg-repeat overflow-x-hidden bg-black">
            <div className="fixed top-0 left-0 z-[999] h-screen w-full bg-[url('/images/noise.png')] bg-cover bg-center pointer-events-none opacity-30"></div>
            <CFocusScreen />
            <CUnlockCardScreen />
            <CFromCardScreen />
            <TestimonialsSwiper />
            <CCTASection />
        </div>
    );
};

export default b2c;
