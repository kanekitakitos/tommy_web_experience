import OverlayGlow from "./OverlayGlow";
import Button from "./partials/Button";

export default function CTASection() {
  return (
    <section className="h-screen overflow-hidden w-full flex flex-col items-center justify-center text-white text-center px-4 relative">

    <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow scale={1.1} />
      </div>

      {/* Main Heading */}
      <h2 className="z-10 md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-tight">
        Everything you need to compete with full-time content teams
      </h2>

      {/* Subheading */}
      <p className="z-10 text-center md:w-2/5 w-[95%] my-6">
        Stop sacrificing your creativity for logistics. Let us manage the production
        and automation so you can get back to doing what you do best.
      </p>

      {/* CTA Button */}
      <Button text={"Book a Meeting"}/>


    </section>
  );
}
