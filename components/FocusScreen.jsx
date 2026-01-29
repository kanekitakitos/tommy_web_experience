import React from "react";
import OverlayGlow from "./OverlayGlow";
import Button from "./partials/Button";
import { LucideCheckCircle } from "lucide-react";

const FocusScreen = () => {
    return (
        <section className="h-screen flex flex-col items-center gap-20 text-white relative">
            <div className="pointer-events-none absolute inset-0 z-0">
                <OverlayGlow />
            </div>

            {/* Navbar */}
            <header className="z-10 md:w-[57%] w-[90%] flex justify-between items-center text-lg p-3 mt-4">
                <div className="select-none">
                    <img
                        src="/images/logonewgen.png"
                        alt="Logo"
                        className="w-36 object-contain"
                    />
                </div>

                <Button text="Book Meeting" />
            </header>

            <div className="z-10 flex flex-col items-center gap-6">
                <h2 className="md:text-5xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-snug text-nowrap">
                    Focus on Creating – Not Managing
                </h2>
                <p className="text-center md:w-[45%] w-[95%] mb-4">
                    At New Gen Services, we empower you to create more, create
                    better, and create at scale. Our AI-powered media solutions
                    handle the heavy lifting so you can focus on what you do
                    best - creating, performing, and connecting with your
                    audience.
                </p>
                <Button text="Book Meeting" />
            </div>
            <div className="z-10 flex flex-wrap justify-center items-center gap-6 text-white">
                {[
                    "For Creators",
                    "For Personal Brands",
                    "For Artists & Musicians",
                ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                        <LucideCheckCircle className="text-white md:text-lg text-sm" />
                        <span className="md:text-lg font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FocusScreen;
