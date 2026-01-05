"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import OverlayGlow from "@/components/effects/OverlayGlow";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      q: "Do I need to understand content ideas?",
      a: "Nope, zero need to figure out content ideas or plans. Instead, our crew takes care of it all - starting with planning, then digging into research, plus shaping a unique spin for your brand. Just tell us what you’re aiming for, what you like, along with where you’d like to head. From there, we shape those thoughts into neat, usable material. That way, things stay smooth and light on your end.",
    },
    {
      q: "How long does production take?",
      a: `Production time depends on the type of content you need, but we always focus on delivering fast without compromising quality. Most video edits are completed within 24–72 hours. AI-based content like voiceovers, visuals, or thumbnails is usually delivered within the same day to 48 hours, and automation setups typically take 3–7 days. Larger full-content packages may take 10–30 days depending on the volume, with faster turnaround options available for urgent requirements.`,
    },
    {
      q: "Can I make changes to automated content?",
      a: "For sure. You’re free to tweak things whenever needed. While the system creates the first version automatically, you can still rework it - change how it sounds or ask us to fix parts if it doesn’t match your voice. Any time you want adjustments, just say so. It’s your call at every step, keeping everything in line with how you communicate.",
    },
    {
      q: "Is the process fully AI-powered?",
      a: "The system runs on AI to boost how fast things are made, keep a steady flow, yet still brings fresh thoughts rapidly. Still, there's no full automation here. Each bit gets checked by people, tweaked carefully, while going through layers that test precision, spark originality, plus fit the brand tone. What you end up with mixes smart speed from tech together with sharp human touch.",
    },
  ];

  return (
    <section
      // ALTERAÇÃO: min-h-[100dvh] para mobile, padding vertical ajustado
      className="min-h-[100dvh] flex flex-col items-center gap-12 text-white relative py-20 md:py-0 md:justify-center"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow />
      </div>
      
      {/* Heading */}
      {/* ALTERAÇÃO: text-3xl fixo em mobile para evitar textos minúsculos ou enormes */}
      <h2 className="z-10 text-3xl md:text-5xl text-center md:w-1/2 w-[90%] font-[poppinmed] text-white leading-tight">
        Frequently Asked Questions
      </h2>

      {/* Card Container */}
      {/* ALTERAÇÃO: w-[95%] em mobile para aproveitar o espaço */}
      <div className="z-10 w-[95%] md:w-[70%] bg-white/10 backdrop-blur-xl rounded-xl border border-white/15 shadow-2xl py-4 px-3 md:px-8 relative">

        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`w-full rounded-md transition-all duration-500 ${isOpen ? "bg-white shadow-xl" : "bg-transparent"
                }`}
            >
              {/* Header Row */}
              <div
                onClick={() => setOpenIndex(isOpen ? null : i)}
                // ALTERAÇÃO: Mudança crítica para Flexbox normal com gap.
                // Removemos o 'absolute' do texto. Agora o texto flui naturalmente.
                className={`flex items-start md:items-center justify-between w-full cursor-pointer relative py-4 md:py-6 px-3 md:px-4 transition-colors gap-4 ${isOpen ? "text-purple-600" : "text-white"
                  }`}
              >
                {/* Index - shrink-0 impede que o número encolha */}
                <span className="text-sm opacity-80 w-8 shrink-0 pt-1 md:pt-0">{`0${i + 1}`}</span>

                {/* Question */}
                {/* ALTERAÇÃO: flex-1 ocupa o espaço disponível. md:pl-[20%] simula o design original desktop sem partir o mobile */}
                <p
                  className={`flex-1 text-sm md:text-base font-medium transition-all duration-500 md:pl-[15%] lg:pl-[25%] ${isOpen ? "opacity-100" : "opacity-70"
                    }`}
                >
                  {item.q}
                </p>

                {/* Animated Icon */}
                <div className="w-6 flex justify-end shrink-0 pt-0.5 md:pt-0">
                  <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-500`}>
                    {isOpen ? <X className="w-5 h-5 opacity-80" /> : <Plus className="w-5 h-5 opacity-80" />}
                  </div>
                </div>
              </div>

              {/* Answer Panel */}
              <div
                // ALTERAÇÃO: Aumentei max-h para 600px para garantir que textos longos cabem em mobile
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-[600px]" : "max-h-0"
                  }`}
              >
                {/* ALTERAÇÃO: Padding responsivo */}
                <div
                  className={`rounded-xl px-4 md:px-6 mb-6 flex transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                >
                  {/* Spacer desktop para alinhar a resposta com a pergunta */}
                  <div className="md:w-[35%] lg:w-[40%] md:block hidden shrink-0"></div>
                  
                  {/* Texto da resposta */}
                  <p className="text-sm text-gray-700 whitespace-pre-line w-full md:w-3/4 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {i !== faqs.length - 1 && <div className="w-full border-b border-white/20 mx-auto w-[95%]"></div>}
            </div>
          );
        })}

      </div>
    </section>
  );
}