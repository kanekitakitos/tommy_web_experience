import { CheckCircle, XCircle } from "lucide-react";
import OverlayGlow from "@/components/effects/OverlayGlow";

export default function CFromCardScreen() {
  const beforeList = [
    "Customer calls and inquiries handled manually",
    "Disconnected tools and fragmented internal workflows",
    "Marketing efforts inconsistent and difficult to manage",
    "Brand messaging unclear across touchpoints",
    "Website not effectively supporting business objectives"
  ];

  const afterList = [
    "AI voice agents managing customer calls and inquiries",
    "Integrated automations connecting systems and workflows",
    "Structured marketing systems with results",
    "Clear and unified branding across all channels",
    "High-performing websites aligned with business goals"
  ];

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:gap-10 text-white relative py-12 md:py-20 px-4"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-0">
        <OverlayGlow />
      </div>

      {/* Título Principal */}
      {/* Título Principal */}
      <h2 className='z-10 text-3xl md:text-4xl lg:text-5xl text-center md:w-3/4 lg:w-2/3 w-full font-[poppinmed] text-white leading-tight mb-4'>
        Helping Your Business Stand Out
      </h2>

      {/* Cards Container */}
      <div className="z-10 flex md:flex-row flex-col justify-center gap-6 md:gap-8 w-full md:w-[95%] lg:w-[90%] max-w-6xl">

        {/* Before Card */}
        <div className="bg-white/[0.12] border border-white/30 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:scale-[1.02] hover:bg-white/[0.18] transition-all duration-300 cursor-default flex-1">
          <h3 className="text-xl font-bold mb-5 text-red-300">Before New Gen Services</h3>

          <ul className="flex flex-col gap-4">
            {beforeList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-gray-100 font-medium">
                {/* ALTERAÇÃO: shrink-0 impede que o ícone seja esmagado se o texto for longo */}
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Card */}
        <div className="bg-white/[0.12] border border-white/40 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_80px_rgba(34,197,94,0.6)] hover:scale-[1.02] hover:bg-white/[0.2] hover:border-green-400 transition-all duration-300 cursor-default flex-1 relative overflow-hidden">
          {/* Intense Green Ambient Light */}
          <div className="absolute inset-0 bg-green-500/10 pointer-events-none" />
          <h3 className="text-xl font-bold mb-5 text-green-300 relative z-10">After Partnering With Us</h3>

          <ul className="flex flex-col gap-4 relative z-10">
            {afterList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-gray-100 font-medium">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Paragraph */}
      <p className="z-10 text-center md:w-3/4 lg:w-3/5 w-full text-sm text-gray-400 mt-4 md:mt-8 italic leading-relaxed px-2">
        Before working with New Gen Services, businesses often operate with manual processes, disconnected systems, and marketing efforts that lack structure and consistency, leading to inefficiencies, unclear brand communication, and digital assets that do not fully support business objectives. After partnering with us, organizations benefit from AI-powered voice agents, integrated automations, structured marketing execution, cohesive branding, and high-performing websites—enabling smoother operations and allowing teams to focus on strategic growth and execution.
      </p>
    </section>
  );
}
