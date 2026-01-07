import OverlayGlow from "@/components/effects/OverlayGlow";
import Button from "@/components/ui/Button";

/**
 * CTASection Component
 * 
 * The main Call-to-Action section, likely used on the Home/Creator page.
 * Encourages users to "Book a Meeting" with a focus on competing with full-time teams.
 * 
 * Design:
 * - Full-screen height (min-h-screen) with centered content.
 * - Large typography and a prominent CTA button.
 * - Background glow effect.
 * 
 * @component
 * @returns {JSX.Element} The rendered CTA section.
 */
export default function CTASection() {
  return (
    <section
      // ALTERAÇÃO: min-h-[60dvh] em mobile para compactar a secção, py-24 em vez de py-40
      className="w-full flex flex-col items-center justify-center text-white text-center px-4 relative min-h-[60dvh] md:min-h-screen py-24 md:py-0"
    >

      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow scale={1.2} />
      </div>

      {/* Container para limitar a largura em ecrãs grandes */}
      <div className="z-10 flex flex-col items-center max-w-5xl mx-auto">

        {/* Main Heading */}
        {/* ALTERAÇÃO: text-3xl em mobile para garantir legibilidade imediata, text-5xl/6xl em desktop */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-[poppinmed] text-white leading-tight md:leading-tight">
          Everything you need to compete with full-time content teams
        </h2>

        {/* Subheading */}
        {/* ALTERAÇÃO: max-w-2xl para garantir que as linhas de texto não ficam demasiado compridas */}
        <p className="text-center text-base md:text-lg text-gray-400 mt-6 mb-8 md:mt-8 md:mb-10 max-w-2xl px-2">
          Stop sacrificing your creativity for logistics. Let us manage the production
          and automation so you can get back to doing what you do best.
        </p>

        {/* CTA Button */}
        {/* ALTERAÇÃO: Scale apenas em desktop (md:scale-110) para evitar problemas de layout em ecrãs pequenos */}
        <div className="md:scale-110 transition-transform duration-300">
          <Button text={"Book a Meeting"} isBookMeeting={true} />
        </div>

      </div>

    </section>
  );
}