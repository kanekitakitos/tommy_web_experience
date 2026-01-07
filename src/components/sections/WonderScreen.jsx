"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverlayGlow from "@/components/effects/OverlayGlow";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * WonderScreen Component
 * 
 * The final Call-to-Action (CTA) screen of the scroll flow. 
 * Features a unique dynamic SVG border animation that resembles a "folder" or "speech bubble" shape.
 * 
 * Key Features:
 * - Dynamic SVG Path: Calculates a custom path shape based on the container size.
 * - ResizeObserver: Recalculates the path automatically when the component dimensions change.
 * - GSAP Animations: 
 *   - Intro: Elements scale and fade in with staggered timing.
 *   - Continuous: A "glow" effect travels along the SVG border path infinitely.
 * 
 * @component
 * @returns {JSX.Element} The rendered CTA section.
 */
const WonderScreen = () => {
    /** @type {React.MutableRefObject<HTMLDivElement>} Main container ref for size calculation and trigger */
    const containerRef = useRef(null);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const buttonRef = useRef(null);
    /** @type {React.MutableRefObject<SVGPathElement>} Ref for the animated glow path */
    const glowBorderRef = useRef(null);
    const baseBorderRef = useRef(null);

    // Estado para guardar o caminho SVG calculado dinamicamente
    const [pathD, setPathD] = useState("");

    /**
     * Calculates the SVG path string ("d" attribute) for the custom border shape.
     * The shape includes a "notch" or cutout at the bottom.
     * 
     * Formula:
     * 1. Start at top-left.
     * 2. Go to top-right.
     * 3. Go down to the bottom (minus notch height).
     * 4. Draw the notch/triangle cutout.
     * 5. Finish at bottom-left and close path.
     * 
     * @callback updatePath
     */
    const updatePath = useCallback(() => {
        if (containerRef.current) {
            // Obtém o tamanho exato do container de texto (que varia no mobile)
            const { offsetWidth: w, offsetHeight: h } = containerRef.current;

            // Se as dimensões forem 0 ou irreais, não atualiza para evitar glitch
            if (w === 0 || h === 0) return;

            // Configurações do desenho
            const strokeWidth = 2.5;
            const m = strokeWidth / 2; // Margem para não cortar o stroke
            const notchHeight = 30;   // Altura fixa do recorte (notch)
            const notchWidth = 50;    // Largura horizontal do recorte diagonal

            const top = m;
            const left = m;
            const right = w - m;
            const bottomMain = h - m - notchHeight; // Linha inferior antes do recorte
            const bottomNotch = h - m;            // Fundo real do recorte

            // Início do recorte (notch) - aproximandamente no centro
            const notchStartX = (w * 0.5) + notchWidth;
            const notchPeakX = w * 0.5; // Pico do recorte no centro

            // Desenha o caminho SVG dinâmico (pasta invertida)
            // M: Move, H: Horiz Line, V: Vert Line, L: Line to, Z: Close
            const d = `
                M${left} ${top}
                H${right}
                V${bottomMain}
                H${notchStartX}
                L${notchPeakX} ${bottomNotch}
                H${left}
                Z
            `.replace(/\s+/g, ' ').trim(); // Limpa espaços

            setPathD(d);
        }
    }, []);

    // Atualiza o caminho quando o componente muda de tamanho (ResizeObserver é mais robusto que window resize)
    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const resizeObserver = new ResizeObserver(() => {
            updatePath();
            // Atualiza o ScrollTrigger quando o tamanho muda para garantir precisão
            ScrollTrigger.refresh();
        });

        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, [updatePath]);

    useGSAP(() => {
        // Garante que o updatePath rode na montagem inicial também
        updatePath();

        // 3. Animações de entrada (ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "top 35%",
                scrub: 0.8,
            },
        });

        // Use fromTo instead of from to avoid race conditions leaving elements invisible
        tl.fromTo(
            containerRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, ease: "power2.out", duration: 0.8 },
            0
        );

        const h2Words = h2Ref.current.querySelectorAll(".word");
        if (h2Words.length > 0) {
            tl.fromTo(
                h2Words,
                { y: 30, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, stagger: 0.04, ease: "back.out(1.2)" },
                0.1
            );
        }

        const h3Words = h3Ref.current.querySelectorAll(".word");
        if (h3Words.length > 0) {
            tl.fromTo(
                h3Words,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.02, ease: "power2.out" },
                0.3
            );
        }

        tl.fromTo(
            buttonRef.current,
            { y: 20, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, ease: "back.out(1.5)" },
            0.5
        );

    }, [updatePath]);

    // 4. Animação contínua do Glow (precisa de useEffect separado pois depende de pathD estar pronto)
    useGSAP(() => {
        if (!pathD || !glowBorderRef.current) return;

        const glowPath = glowBorderRef.current;
        // getTotalLength funciona perfeitamente no caminho calculado dinamicamente
        const totalLength = glowPath.getTotalLength();

        // Cancela animações anteriores para evitar conflitos no resize
        gsap.killTweensOf(glowPath);

        gsap.set(glowPath, {
            strokeDasharray: totalLength / 3,
            strokeDashoffset: totalLength,
            opacity: 0.8,
        });

        gsap.to(glowPath, {
            strokeDashoffset: 0,
            duration: 4,
            repeat: -1,
            ease: "none",
            modifiers: {
                strokeDashoffset: (value) =>
                    `${parseFloat(value) % totalLength}`,
            },
        });
    }, [pathD]); // Executa sempre que o caminho muda

    const splitText = (text) =>
        text.split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">
                {word}
            </span>
        ));

    return (
        <div className="min-h-[100dvh] w-full flex justify-center items-center relative overflow-hidden py-20 px-4">
            <OverlayGlow />

            <div
                ref={containerRef}
                // Altura h-auto, padding interno px-6 md:px-12 para responsividade
                className="relative w-full max-w-4xl h-auto flex flex-col items-center justify-center py-16 px-6 md:py-24 md:px-12 opacity-0" // Start with opacity 0 to prevent FOUC, GSAP will handle showing it
                style={{ opacity: 0 }} // Inline style fallback
            >
                {/* SVG Border Dinâmico */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="glowGradient" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                            <stop offset="50%" stopColor="#b366ff" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                        </linearGradient>
                        <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Base subtle border - usa o caminho calculado (pathD) */}
                    <path
                        ref={baseBorderRef}
                        d={pathD}
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="1.5"
                        fill="transparent"
                    />

                    {/* Animated glow border - usa o mesmo caminho (pathD) */}
                    <path
                        ref={glowBorderRef}
                        d={pathD}
                        stroke="url(#glowGradient)"
                        strokeWidth="2.5"
                        filter="url(#blurFilter)"
                        fill="transparent"
                        // vectorEffect garante que a espessura da linha não muda ao redimensionar
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Conteúdo (Z-index automático superior ao SVG absoluto) */}
                <h2 ref={h2Ref} className="text-2xl md:text-4xl font-[poppin] text-center text-white leading-tight">
                    {splitText("Wondering how we can help?")}
                </h2>

                <h3 ref={h3Ref} className="text-base md:text-xl mt-6 w-full md:w-3/4 text-center font-[poppinmed] leading-relaxed text-white/80">
                    {splitText("Book a meeting or get in touch for a tailored solution.")}
                </h3>

                <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto">
                    <div className="w-full sm:w-auto">
                        <Button text="Book Meeting" isBookMeeting={true} className="w-full sm:w-auto justify-center" />
                    </div>
                    <div className="w-full sm:w-auto">
                        <Button
                            text="Get in Touch"
                            // Lógica de Redirecionamento de Email
                            onClick={() => window.location.href = 'mailto:contact@newgenservices.co'}
                            className="!bg-transparent !text-white border-white/20 hover:border-white/40 w-full sm:w-auto justify-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WonderScreen;