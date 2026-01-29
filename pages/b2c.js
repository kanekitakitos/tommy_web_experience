import React from "react";
import FocusScreen from "@/components/FocusScreen"
import UnlockCardScreen from "@/components/UnlockCardScreen";
import FromCardScreen from "@/components/FromCardScreen";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import FAQSection from "@/components/partials/FAQSection";
import CTASection from "@/components/CTASection";

const b2b = () => {
    return (
        <div className="main font-[poppin] text-white bg-[url('/images/grids.svg')] bg-center bg-repeat overflow-x-hidden bg-black">
            <div className="fixed top-0 left-0 z-[999] h-screen w-full bg-[url('/images/noise.png')] bg-cover bg-center pointer-events-none opacity-30"></div>
            <FocusScreen />
            <UnlockCardScreen />
            <FromCardScreen />
            <TestimonialsSwiper />
            <CTASection />
        </div>
    );
};

export default b2b;
