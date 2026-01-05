import React from "react";
import OverlayGlow from "@/components/effects/OverlayGlow";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { LucideCheckCircle } from "lucide-react";

const FocusScreen = () => {
    return (
        // ALTERAÇÃO: min-h-[100dvh] para suporte mobile correto e overflow-x-hidden
        <section className="min-h-[100dvh] w-full flex flex-col items-center text-white relative overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 z-0">
                <OverlayGlow />
            </div>

            {/* Navbar */}
            <header className="z-20 md:w-[57%] w-[90%] flex justify-between items-center text-lg py-4 mt-2 md:mt-4">
                <Logo />
                <Button text="Book Meeting" isBookMeeting={true} />
            </header>

            {/* Main Content Wrapper */}
            {/* ALTERAÇÃO: Removido -mt-20 no mobile. Usamos flex-1 e py-12 para centrar e dar espaço. */}
            <div className="flex-1 flex flex-col items-center justify-center w-full z-10 py-12 md:py-0 md:-mt-20 gap-10 md:gap-0">

                <div className="z-10 flex flex-col items-center gap-6 px-4">
                    {/* ALTERAÇÃO: 
                        - text-3xl md:text-5xl lg:text-6xl
                        - whitespace-normal SEMPRE, ou pelo menos em tablets/mobile, evitando o corte lateral
                    */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:w-3/4 lg:w-2/3 w-full font-[poppinmed] text-white leading-tight md:leading-snug">
                        Focus on Creating – Not Managing
                    </h2>

                    {/* ALTERAÇÃO: Melhoria na legibilidade do texto descritivo */}
                    <p className="text-center md:w-[45%] w-full max-w-md md:max-w-none text-base md:text-lg text-white/80 mb-4 px-2">
                        At New Gen Services, we empower you to create more, create
                        better, and create at scale. Our AI-powered media solutions
                        handle the heavy lifting so you can focus on what you do
                        best - creating, performing, and connecting with your
                        audience.
                    </p>

                    <Button text="Book Meeting" isBookMeeting={true} />
                </div>

                {/* Footer List */}
                {/* ALTERAÇÃO: Layout flex-wrap e styling de "tags" em mobile para melhor visualização */}
                <div className="z-10 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white mt-8 md:mt-12 px-2">
                    {[
                        "For Creators",
                        "For Personal Brands",
                        "For Artists & Musicians",
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-2 bg-white/5 md:bg-transparent px-3 py-1.5 rounded-full md:px-0 md:py-0 border border-white/10 md:border-transparent">
                            <LucideCheckCircle className="text-white w-5 h-5 md:w-6 md:h-6 shrink-0" />
                            <span className="text-sm md:text-lg font-medium whitespace-nowrap">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusScreen;