import { CheckCircle, XCircle } from "lucide-react";
import OverlayGlow from "@/components/effects/OverlayGlow";

export default function FromCardScreen() {
  const beforeList = [
    "Hours spent editing every single video",
    "Inconsistent posting schedules",
    "Choosing between quality and quantity",
    "Doing everything yourself",
  ];

  const afterList = [
    "Timely delivery of professional content",
    "Consistent presence across all platforms",
    "High-quality output without burnout",
    "Time to focus on creating and growing",
  ];


  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:gap-10 text-white relative py-12 md:py-20 px-4"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-0">
        <OverlayGlow />
      </div>

      <h2 className='z-10 text-3xl md:text-5xl text-center md:w-2/3 w-full font-[poppinmed] text-white leading-tight mb-2'>
        From Overwhelmed to Outstanding
      </h2>

      {/* Cards Container */}
      {/* ALTERAÇÃO: w-full e max-w-6xl para melhor controlo de largura */}
      <div className="z-10 flex md:flex-row flex-col justify-center gap-6 md:gap-8 w-full md:w-[90%] max-w-6xl">

        {/* Before Card */}
        {/* ALTERAÇÃO: p-6 em mobile para poupar espaço horizontal */}
        <div className="bg-white/[0.12] border border-white/30 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:scale-[1.02] hover:bg-white/[0.18] transition-all duration-300 cursor-default flex-1">
          <h3 className="text-xl font-bold mb-5 text-red-300">Before New Gen Services</h3>

          <ul className="flex flex-col gap-4">
            {beforeList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-gray-100 font-medium">
                {/* ALTERAÇÃO: shrink-0 para o ícone não amassar */}
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
                {/* ALTERAÇÃO: shrink-0 para o ícone não amassar */}
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      
      <p className="z-10 text-center md:w-3/5 w-full max-w-2xl text-sm text-gray-400 mt-4 md:mt-6 italic leading-relaxed px-2">
        Before working with New Gen Services, creators often spend hours editing every 
        video, struggle with inconsistent posting schedules, constantly choose between 
        quality and quantity, and end up doing everything themselves. After partnering 
        with us, they experience timely delivery of professional content, consistent 
        presence across all platforms, high-quality output without burnout, and the 
        freedom to focus on creating and growing.
      </p>
    </section>
  );
}