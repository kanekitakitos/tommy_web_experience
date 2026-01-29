import { CheckCircle, XCircle } from "lucide-react";
import OverlayGlow from "./OverlayGlow";

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
      className="md:h-[80vh] h-screen flex flex-col items-center md:gap-18 gap-12 text-white relative"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-1/2 inset-0 z-0">
        <OverlayGlow />
      </div>

      <h2 className='z-10 md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-snug'>From Overwhelmed to Outstanding</h2>

      {/* Cards */}
      <div className="z-10 flex md:flex-row flex-col justify-center gap-8 w-[90%] md:w-[70%]">

        {/* Before */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Before New Gen Services</h3>

          <ul className="flex flex-col gap-3">
            {beforeList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                <XCircle className="w-4 h-4 text-red-500 mt-[2px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-xl">
          <h3 className="text-lg font-semibold mb-4">After Partnering With Us</h3>

          <ul className="flex flex-col gap-3">
            {afterList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-[2px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Paragraph */}
      <p className="z-10 text-center md:w-1/2 w-[95%] mb-4 text-[#E6E6E6]">
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
