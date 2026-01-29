import OverlayGlow from "./OverlayGlow";
import Button from "./partials/Button";

export default function CCTASection() {
  return (
    <section className="h-screen overflow-hidden w-full flex flex-col items-center justify-center text-white text-center px-4 relative">

    <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow scale={1.1} />
      </div>

      {/* Main Heading */}
      <h2 className="z-10 md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-tight">
        Ready to Innovate Your Business?
      </h2>

      {/* Subheading */}
      <p className="z-10 text-center md:w-2/5 w-[95%] my-6">
        Let’s discuss how our AI-powered solutions and digital expertise can help you achieve your business goals.
      </p>

      {/* CTA Button */}
      <Button text={"Book a Meeting"}/>


    </section>
  );
}
