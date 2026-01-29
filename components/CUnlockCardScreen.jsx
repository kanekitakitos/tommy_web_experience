import React from 'react'
import OverlayGlow from './OverlayGlow'
import {
  BadgeCheck,
  Bot,
  CheckCircle,
  Layout,
  Target,
  Workflow,
} from "lucide-react";
import Button from './partials/Button';


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
    desc: `Stop wasting time on repetitive tasks. We build custom AI workflows that automate your operations — from data entry and email management to multi-step automations, so you operate with the efficiency of companies twice your size.`,
    points: [
      "Custom workflows tailored to your business processes",
      "Reduce manual work by up to 80%",
      "Eliminate human error in repetitive tasks",
      "Scale operations without scaling overhead",
    ],
    btn: "Automate Your Workflow",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
    title: "Branding",
    desc: `Your brand is more than a logo — it's the story you tell and the impression you leave. We create cohesive brand identities that resonate with your audience and stand out in a crowded market.`,
    points: [
      "Complete brand identity systems from logo to brand voice",
      "Strategic positioning that connects with your audience",
      "Consistent visual language across all touchpoints",
      "Brand guidelines that scale with your business",
    ],
    btn: "Build Your Brand",
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Marketing",
    desc: `Growth doesn’t happen by accident. We develop data-driven marketing strategies that attract the right audience, convert leads, and turn customers into advocates.`,
    points: [
      "Multi-channel strategies across digital and social platforms",
      "Content that educates, engages and converts",
      "Performance tracking and continuous optimization",
      "ROI-focused campaigns that deliver measurable results",
    ],
    btn: "Scale Your Marketing",
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
    btn: "Transform Your Website",
  },
];


  return (
    <section
      className="min-h-[200vh] flex flex-col items-center gap-12 text-white relative"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow />
      </div>

      <div className='z-10 flex flex-col items-center w-full gap-4'>
        <h2 className='md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-snug'>What We Offer</h2>
      <p className='text-center md:w-[42%] w-[95%] mb-4'>Transform your business with end-to-end solutions that combine cutting-edge AI technology with proven digital strategies.</p>
      </div>

      <div className="z-10 w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 w-[90%] md:w-[82%] mx-auto">
  {cards.map((card) => (
    <div
      key={card.title}
      className="bg-[#fff]/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex flex-col w-full md:w-[30%] min-w-[260px]"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-[#7726C1] flex items-center justify-center mb-4">
        {card.icon}
      </div>

      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed mb-6">
        {card.desc}
      </p>

      <div className="w-full h-px bg-white/10 mb-6 md:block hidden" />

      <ul className="md:flex flex-col gap-3 mb-6 hidden">
        {card.points.map((point) => (
          <li key={point} className="flex gap-3 items-start text-sm text-gray-300">
            <div className="h-2 w-4"><CheckCircle className="scale-75" /></div>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="grow"></div>
      <Button text={card.btn} className="w-full" />
    </div>
  ))}
</div>

    </div>
    </section>
  )
}

export default CUnlockCardScreen