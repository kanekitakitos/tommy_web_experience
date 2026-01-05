import React from "react";
import OverlayGlow from "@/components/effects/OverlayGlow";
import { PlayCircle, Sparkles, Radio, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const UnlockCardScreen = () => {
    const cards = [
        {
            icon: <PlayCircle className="w-6 h-6 text-white" />,
            title: "Media Production Services",
            desc: `We turn your raw ideas into polished, high-quality media. From video edits to audio, graphics, and visuals — we refine everything to match your brand.`,
            points: [
                "Professional video editing for platforms like YouTube, TikTok, Instagram and more",
                "Audio and music production",
                "Graphic design, visual content",
                "Marketing that convert viewers into followers",
            ],
            btn: "Work With Us",
        },
        {
            icon: <Sparkles className="w-6 h-6 text-white" />,
            title: "AI Content Production",
            desc: `We deliver end-to-end AI content production - from scripting and voiceovers to visuals and final delivery - designed to produce consistent, high-quality assets efficiently and at scale for modern digital channels. Perfect for faceless YouTube channels.`,
            points: [
                "AI-generated voiceovers & audio editing",
                "Professional images and video content created with Gen AI expertise",
                "Full content production services at exclusive prices",
                "Fast turnaround times for busy content calendars"
            ],
            btn: "Upgrade Your Content",
        },
        {
            icon: <Radio className="w-6 h-6 text-white" />,
            title: "Content Automation",
            desc: `Automate your content workflow – creating, repurposing, and posting across all platforms. You create once; it handles the rest.`,
            points: [
                "Automatic generation of audio, visuals and captions",
                "Smart content repurposing",
                "Auto-schedule and publish content across platforms",
                "Custom automated workflows that increase productivity"
            ],
            btn: "Automate Your Workflow",
        },
    ];

    return (
        <section
            // ALTERAÇÃO: min-h-[100dvh] e py-20 em mobile para melhor aproveitamento do ecrã
            className="min-h-[100dvh] flex flex-col items-center justify-center text-white relative py-20 md:py-40"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <OverlayGlow />
            </div>

            <div className="z-10 flex flex-col items-center w-full gap-2 mb-8 md:mb-12 px-4">
                {/* ALTERAÇÃO: text-3xl fixo em mobile para legibilidade */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:w-3/4 lg:w-2/3 w-full font-[poppinmed] text-white leading-tight capitalize">
                    unlock your Creative Potential
                </h2>
                <p className="text-center md:w-3/4 lg:w-2/5 w-full text-sm md:text-base text-gray-400">
                    Professional content systems for creators and artists.
                </p>
            </div>

            <div className="z-10 w-full flex justify-center py-4 md:py-6 px-4">
                {/* ALTERAÇÃO: gap-6 em mobile */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-sm md:max-w-[95%] lg:max-w-[85%] items-stretch">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            // ALTERAÇÃO: p-6 em mobile. min-h-0 em mobile (altura automática), min-h-[420px] em desktop.
                            className="bg-white/[0.12] border border-white/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:bg-white/[0.18] hover:border-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500 relative overflow-hidden min-h-0 md:min-h-[420px] w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] box-border"
                        >
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex flex-col gap-5 relative z-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#7726C1] to-[#a855f7] flex items-center justify-center mb-1 shrink-0 shadow-lg shadow-purple-500/20">
                                    {React.cloneElement(card.icon, { className: "w-7 h-7 md:w-8 md:h-8 text-white" })}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold font-[poppinmed] leading-tight text-white">
                                    {card.title}
                                </h3>
                                <p className="text-sm md:text-[15px] text-gray-200 leading-relaxed font-medium">
                                    {card.desc}
                                </p>

                                <ul className="mt-2 md:mt-4 flex flex-col gap-3">
                                    {card.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[13px] md:text-[14px] text-white/90 font-medium">
                                            {/* ALTERAÇÃO: shrink-0 para o ícone não deformar */}
                                            <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
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
    );
};

export default UnlockCardScreen;