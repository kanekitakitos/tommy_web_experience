import OverlayGlow from "@/components/effects/OverlayGlow";
import Button from "@/components/ui/Button";

/**
 * CCTASection Component
 * 
 * A variant of the Call-to-Action section tailored for Businesses (B2B).
 * Focuses on "Innovating Business" and achieving business goals.
 * 
 * Differences from CTASection:
 * - Copywriting targets business owners/enterprises.
 * - Responsive spacing adjustments for B2B layouts.
 * 
 * @component
 * @returns {JSX.Element} The rendered Business CTA section.
 */
export default function CCTASection() {
  return (
    <section
      // ALTERAÇÃO: min-h-[60dvh] em mobile para não ser gigante, min-h-screen em desktop
      // ALTERAÇÃO: py-24 em mobile (menos padding), py-0 em desktop (centrado via flex)
      className="w-full flex flex-col items-center justify-center text-white text-center px-4 relative min-h-[60dvh] md:min-h-screen py-24 md:py-0"
    >

      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow scale={1.2} />
      </div>

      {/* Container para limitar a largura máxima do conteúdo */}
      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto">

        {/* Main Heading */}
        {/* ALTERAÇÃO: text-3xl fixo em mobile para garantir leitura, text-5xl em desktop */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-[poppinmed] text-white leading-tight md:leading-tight">
          Ready to Innovate Your Business?
        </h2>

        {/* Subheading */}
        {/* ALTERAÇÃO: padding horizontal (px-4) e max-w-2xl para o texto não ir aos limites do ecrã */}
        <p className="text-center text-base md:text-lg text-gray-400 mt-6 mb-8 md:mt-8 md:mb-10 max-w-2xl px-2">
          Let’s discuss how our AI-powered solutions and expertise can help you achieve your business goals.
        </p>

        {/* CTA Button */}
        {/* ALTERAÇÃO: Removi o scale-110 no mobile para evitar overflow ou botões gigantes, mantive em desktop */}
        <div className="md:scale-110 transition-transform duration-300">
          <Button text={"Book a Meeting"} isBookMeeting={true} />
        </div>
      </div>

    </section>
  );
}