"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { useContent } from "@/lib/ContentContext";


export default function Hero() {
    const { content } = useContent();
    const c = content?.hero;

    const [open, setOpen] = useState(false);

    const handleCtaClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const heading = c?.heading || "Your business is growing faster than it can hold itself together.";
    const word1 = c?.highlight_word_1 || "growing";
    const word2 = c?.highlight_word_2 || "together";
    const parts = heading.split(new RegExp(`(${word1}|${word2})`, "i"));

    return (
        <section
            className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-6 [grid-template-areas:'text'_'image'_'button'] md:grid-cols-2 md:px-10 md:py-8 md:[grid-template-areas:'text_image']"
        >
            {/* Left: text content */}
            <div className="[grid-area:text]">
                <p className="text-sm font-semibold tracking-widest text-red-800">
                    {c?.badge || "FRACTIONAL CXO · OPERATIONS · PEOPLE · GOVERNANCE · STRATEGY"}
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-5xl">
                    {parts.map((part, i) =>
                        part.toLowerCase() === word1.toLowerCase() || part.toLowerCase() === word2.toLowerCase() ? (
                            <span key={i} className="text-red-800">{part}</span>
                        ) : (
                            <span key={i}>{part}</span>
                        )
                    )}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
                    {c?.description || "Over three decades, I have built and run companies of my own, scaled operations from early-stage ventures to multinational organisations, and worked directly alongside founders across industries — spanning operations, people, governance, and strategy. I recognise this stage of growth because I have led through it, repeatedly, and I address it as a matter of established practice, not theory."}
                </p>

                {/* Desktop-only CTA, right under the accordion */}
                <div className="mt-8 hidden max-w-xl md:block">
                    <Button
                        label={c?.cta_text || "Schedule a Conversation"}
                        href="#contact"
                        onClick={handleCtaClick}
                        color="red"
                    />
                </div>
            </div>

            {/* Right: portrait */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-lg [grid-area:image]">
                <Image
                    src="/HeaderImage.png"
                    alt="Executive portrait"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Mobile-only CTA, below the image */}
            <div className="flex justify-center [grid-area:button] md:hidden">
                <Button
                    label={c?.cta_text || "Schedule a Conversation"}
                    href="#contact"
                    onClick={handleCtaClick}
                    color="red"
                />
            </div>

        </section>
        
    );
}