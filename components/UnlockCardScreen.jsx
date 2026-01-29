import React from "react";
import OverlayGlow from "./OverlayGlow";
import { PlayCircle, Sparkles, Radio, CheckCircle } from "lucide-react";
import Button from "./partials/Button";

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
            btn: "Elevate Your Content",
        },
        {
            icon: <Sparkles className="w-6 h-6 text-white" />,
            title: "AI Content Solutions",
            desc: `We create studio-quality voiceovers and visuals using AI—fast, polished, and affordable. Perfect for promos, social posts, and thumbnails.`,
            points: [
                "AI-generated voiceovers (natural + professional)",
                "Custom images and video content created with advanced AI tools",
                "High-quality content without the high cost studio requirements",
                "Fast turnaround times for social and content calendars",
            ],
            btn: "Innovate Your Strategy",
        },
        {
            icon: <Radio className="w-6 h-6 text-white" />,
            title: "Content Automation",
            desc: `We automate your entire content workflow creating, repurposing, and posting across all platforms. You create once; it handles the rest.`,
            points: [
                "Automatic generation of audio, captions, graphics, and videos",
                "Content repurposing (one video becomes shorts, reels, audiograms, blogs, etc.)",
                "Auto-schedule and publish content across Instagram, TikTok, YouTube, Twitter, and LinkedIn",
                "Automated workflows that save time and multiply reach",
            ],
            btn: "Automate Your Workflow",
        },
    ];

    return (
        <section className="min-h-screen flex flex-col items-center gap-12 text-white relative">
            <div className="pointer-events-none absolute inset-0 z-0">
                <OverlayGlow />
            </div>

            <div className="z-10 flex flex-col items-center w-full gap-4">
                <h2 className="md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-snug capitalize">
                    unlock your Creative Potential
                </h2>
                <p className="text-center md:w-2/5 w-[95%] mb-4">
                    Whether you're a creator, artist, or building your personal
                    brand, we provide the tools and systems to produce
                    professional content without burning out.
                </p>
            </div>

            <div className="z-10 w-full flex justify-center">
                <div className="grid md:grid-cols-3 gap-8 w-[90%] md:w-[82%]">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-[#fff]/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex flex-col"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-lg bg-[#7726C1] flex items-center justify-center mb-4">
                                {card.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-2">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed mb-6">
                                {card.desc}
                            </p>

                            <div className="w-full h-px bg-white/10 mb-6 md:block hidden" />

                            <ul className="md:flex flex-col gap-3 mb-6 hidden">
                                {card.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex gap-3 items-start text-sm text-gray-300"
                                    >
                                        <div className="h-2 w-4">
                                            <CheckCircle className=" scale-75" />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="grow"></div>
                            <Button text={card.btn} className={"w-full"} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnlockCardScreen;
