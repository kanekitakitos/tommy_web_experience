import React from 'react'
import OverlayGlow from "@/components/effects/OverlayGlow";
import {
  BadgeCheck,
  Bot,
  CheckCircle,
  Layout,
  Target,
  Workflow,
} from "lucide-react";
import Button from "@/components/ui/Button";


const CUnlockCardScreen = () => {

  const cards = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "AI Voice Agents & Chatbots",
      desc: `Never miss a customer interaction. Our intelligent voice agents and chatbots handle inquiries 24/7, qualify leads, book appointments, and provide instant support freeing your team to focus on what matters most.`,
      points: [
        "24/7 customer engagement",
        "Automated lead qualification and appointment booking",
        "Natural conversations that feel human, powered by AI",
        "Seamless integration with your existing systems",
      ],
      btn: "Get Your AI Agent",
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      title: "AI Automations",
      desc: `Effortlessly handle repetitive tasks. We build custom AI workflows that automate your operations - from data entry and email management to multi-step automations, so you operate faster and more efficiently.`,
      points: [
        "Custom workflows tailored to your business",
        "Eliminate human error in repetitive tasks",
        "Increase efficiency and reduce manual work",
        "Scale operations faster and more affordably",
      ],
      btn: "Automate Your Workflow",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Marketing",
      desc: `Growth doesn’t happen by accident. We develop data-driven marketing strategies that attract the right audience, convert leads, and build trust & authority.`,
      points: [
        "Personalised strategies across digital and social platforms",
        "ROI-focused campaigns that deliver results",
        "Professional content that scales your brand",
        "Performance tracking and continuous optimisation",
      ],
      btn: "Scale Your Marketing",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-white" />,
      title: "Branding",
      desc: `Your brand is more than a logo - it's the story you tell, your values and the impression you leave. We create cohesive brand identities that resonate with your audience and stand out in your market.`,
      points: [
        "Complete visual and sonic branding",
        "Strategic positioning in your market",
        "Consistent visual and tonal language ",
        "Professional & exclusive designs ",
      ],
      btn: "Build Your Brand",
    },
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Web Design",
      desc: `Your website is your digital storefront. We design and build high-performing websites that convert visitors into customers with intuitive UI/UX and optimized conversion flows.`,
      points: [
        "Modern, responsive design that works on any device",
        "Optimized for speed, SEO and conversions",
        "User-friendly interfaces that guide visitors to action",
        "Built with scalability and future growth in mind",
      ],
      btn: "Start Your Project",
    },
  ];


  return (
    <section
      // ALTERAÇÃO: min-h-[100dvh] para mobile, py-20 em mobile vs py-40 em desktop
      className="min-h-[100dvh] flex flex-col items-center justify-center text-white relative py-20 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow />
      </div>

      {/* Header Section */}
      <div className='z-10 flex flex-col items-center w-full gap-4 mb-8 md:mb-12 px-4'>
        {/* ALTERAÇÃO: text-3xl fixo em mobile para garantir leitura */}
        <h2 className='text-3xl md:text-5xl text-center md:w-2/3 w-full font-[poppinmed] text-white leading-tight capitalize'>
          What We Offer
        </h2>
        <p className='text-center md:w-1/2 w-full text-sm md:text-base text-gray-400 leading-relaxed'>
          Transform your business with end-to-end AI and digital solutions.
        </p>
      </div>

      {/* Grid Section */}
      <div className="z-10 w-full flex justify-center py-4 md:py-8 px-4">
        {/* ALTERAÇÃO: gap-6 em mobile para poupar espaço, max-w-7xl para limitar em ecrãs gigantes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-7xl mx-auto items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              // ALTERAÇÃO:
              // 1. w-full max-w-md (mobile): Ocupa largura total mas não fica gigante em tablets pequenos
              // 2. md:w-[calc(32%...)] (desktop): 3 colunas equilibradas
              // 3. h-auto: Altura ajustável ao conteúdo
              className="bg-white/[0.12] border border-white/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:bg-white/[0.18] hover:border-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500 w-full max-w-md md:max-w-none md:w-[calc(32%-1rem)] min-h-0 md:min-h-[420px] relative overflow-hidden"
            >
              {/* Stronger inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#7726C1] to-[#a855f7] flex items-center justify-center mb-2 shrink-0 shadow-lg shadow-purple-500/20">
                  {React.cloneElement(card.icon, { className: "w-7 h-7 md:w-8 md:h-8 text-white" })}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold font-[poppinmed] leading-tight text-white">
                  {card.title}
                </h3>
                
                <p className="text-sm md:text-[15px] text-gray-200 leading-relaxed">
                  {card.desc}
                </p>

                <ul className="mt-4 flex flex-col gap-3">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-100 font-medium">
                      {/* ALTERAÇÃO: shrink-0 para o ícone não amassar */}
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 relative z-10">
                <Button text={card.btn} isBookMeeting={true} className="w-full py-3 !text-sm font-bold tracking-wide" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CUnlockCardScreen