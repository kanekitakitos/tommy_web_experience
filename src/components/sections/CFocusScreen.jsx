import React from "react";
import OverlayGlow from "@/components/effects/OverlayGlow";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { LucideCheckCircle } from "lucide-react";

/**
 * CFocusScreen Component
 * 
 * The Hero/Intro section for the Business (B2B) page.
 * Focuses on "Services Built for Growth" and scaling operations.
 * 
 * Features:
 * - Navbar integration (Logo + Book Meeting).
 * - "Tags" footer list ("For SMBs", "Enterprise", "Start-ups").
 * - Responsive typography (adjusts for mobile/desktop).
 * 
 * @component
 * @returns {JSX.Element} The Business Hero section.
 */
const CFocusScreen = () => {
    return (
        // ALTERAÇÃO: min-h-[100dvh] para garantir que cabe tudo sem cortar, mesmo com barras de navegador
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
            {/* ALTERAÇÃO: Removido -mt-20 no mobile. Usamos padding vertical (py-12) para dar espaço. */}
            <div className="flex-1 flex flex-col items-center justify-center w-full z-10 py-12 md:py-0 md:-mt-10 gap-10 md:gap-0">

                <div className="flex flex-col items-center gap-6 px-4">
                    {/* ALTERAÇÃO: 
                        - text-4xl em mobile (legível) vs md:text-6xl
                        - Removido text-nowrap em mobile (adicionado md:whitespace-nowrap) para não cortar em ecrãs muito pequenos
                    */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center md:w-3/4 lg:w-2/3 w-full font-[poppinmed] text-white leading-tight md:leading-snug md:whitespace-normal lg:whitespace-nowrap">
                        Services Built for Growth
                    </h2>

                    {/* ALTERAÇÃO: Texto base maior em mobile para leitura fácil */}
                    <p className="text-center md:w-3/4 lg:w-[45%] w-full max-w-md md:max-w-none text-base md:text-lg text-white/80 mb-4 px-2">
                        AI-powered solutions and creative expertise designed to help
                        your business scale smarter, faster, and more efficiently.
                    </p>

                    <Button
                        text="Get in Touch"
                        // Lógica de Redirecionamento de Email
                        onClick={() => window.location.href = 'mailto:contact@newgenservices.co'}
                    />
                </div>

                {/* Footer / Features List */}
                {/* ALTERAÇÃO: Flex-wrap garante que os itens passam para a linha de baixo se não houver espaço */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white mt-8 md:mt-16 px-4">
                    {["For SMBs", "For Enterprises", "For Start-ups"].map(
                        (item) => (
                            <div key={item} className="flex items-center gap-2 bg-white/5 md:bg-transparent px-3 py-1.5 rounded-full md:px-0 md:py-0">
                                <LucideCheckCircle className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
                                <span className="text-sm md:text-lg font-medium whitespace-nowrap">
                                    {item}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default CFocusScreen;