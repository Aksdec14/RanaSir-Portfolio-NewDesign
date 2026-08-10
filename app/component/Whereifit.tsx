"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Fit = {
    title: string;
    description: string;
    tag: string;
};

const DEFAULT_ICONS: ReactNode[] = [
    <svg key="cxo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /><path d="M12 12v4" /><path d="m14 14-2-2-2 2" /></svg>,
    <svg key="problem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9"><circle cx="12" cy="12" r="8" /><path d="M12 2v2" /><circle cx="12" cy="12" r="2" /></svg>,
    <svg key="advisor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9"><path d="M12 2a4 4 0 0 0-4 4c0 1.5.5 2.5 1 3.5S10 12 10 13v2h4v-2c0-1 .5-1.5 1-2.5S16 7.5 16 6a4 4 0 0 0-4-4Z" /><path d="M9 21h6" /><path d="M10 17h4" /></svg>,
    <svg key="team" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9"><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" /><circle cx="19" cy="8" r="2" /><path d="M23 21v-1a3 3 0 0 0-2.5-3" /></svg>,
    <svg key="board" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9"><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg>,
];

const DEFAULT_FITS: Fit[] = [
    {
        title: "As your fractional CXO",
        description:
            "The core of what I do. I serve as your part-time Chief Excellence Officer — covering operations, people, governance, and strategy — so you can remain focused on product, customers, and growth. Senior, cross-functional capability, without the cost or commitment of a full-time hire, across one company or several at once, in any industry. I do not carry a sales or revenue target; I build the engine that allows yours to run.",
        tag: "Ongoing commitment",
    },
    {
        title: "For one expensive problem",
        description:
            "At times, it is not the whole business, but a single issue costing you significantly — a process that will not scale, a leadership structure that no longer fits, a governance gap ahead of a raise or exit, or a difficult integration following an acquisition. I identify the root cause and resolve it.",
        tag: "Project based",
    },
    {
        title: "As an advisor to you",
        description:
            "Some founders and chief executives require a seasoned operator to think alongside — on strategy, the operating model, governance, and the next phase of scale, as well as the more difficult decisions. Available on a discreet, as-needed basis.",
        tag: "Retainer access",
    },
    {
        title: "To level up your team",
        description:
            "Where the objective is capability that endures, I train and coach your people to run and improve their own operations — process, governance, change management, and leadership for the managers who will carry it forward.",
        tag: "Curated programs",
    },
    {
        title: "On your board",
        description:
            "As an independent director, I bring an operator's perspective to the boardroom, reading the operation behind the numbers and asking the questions that protect the business.",
        tag: "Governance appointment",
    },
];

import { useContent } from "@/lib/ContentContext";

export default function WhereIFit() {
    const { content } = useContent();
    const c = content?.where_i_fit;
    const fits: Fit[] = c?.fits || DEFAULT_FITS;

    const [active, setActive] = useState(0);

    const goPrev = () => setActive((i) => (i - 1 + fits.length) % fits.length);
    const goNext = () => setActive((i) => (i + 1) % fits.length);

    const current = fits[active];
    const icon = DEFAULT_ICONS[active] || DEFAULT_ICONS[0];

    return (
        <section id="ways-to-work" className="bg-stone-50 px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-6xl">
                {/* Header row with arrow controls */}
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-red-800 sm:text-6xl">
                            {c?.heading || "WHERE I FIT"}
                        </h2>
                        <p className="mt-3 text-lg font-semibold text-neutral-900">
                            {c?.subtitle || "Bring me in the way that fits where you are."}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={goPrev}
                            aria-label="Previous"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-red-800 hover:text-red-800"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={goNext}
                            aria-label="Next"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-red-800 hover:text-red-800"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel panel */}
                <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Panel side */}
                    <div className="relative">
                        <div
                            className="absolute -left-6 top-6 h-full w-full bg-red-800 transition-opacity duration-300"
                            aria-hidden
                        />
                        <div
                            key={`panel-${active}`}
                            className="relative flex aspect-[4/3] animate-[fadeIn_0.4s_ease] flex-col overflow-hidden border border-neutral-200 bg-white p-6 sm:aspect-[16/10] sm:p-10"
                        >
                            <h3 className="relative z-10 mt-4 max-w-[75%] text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:mt-6 sm:max-w-[70%] sm:text-3xl lg:text-4xl">
                                {current.title}
                            </h3>

                            <span className="pointer-events-none absolute bottom-4 right-5 h-16 w-16 text-red-800 sm:bottom-6 sm:right-8 sm:h-28 sm:w-28 [&>svg]:h-full [&>svg]:w-full">
                                {icon}
                            </span>
                        </div>
                    </div>

                    {/* Text side */}
                    <div key={`text-${active}`} className="animate-[fadeIn_0.4s_ease]">
                        <p className="max-w-lg text-[15px] leading-relaxed text-neutral-600">
                            {current.description}
                        </p>
                        <button className="group mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-red-800 transition-colors hover:text-red-950">
                            {current.tag}
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>

                        {/* Progress dots */}
                        <div className="mt-10 flex items-center gap-2">
                            {fits.map((fit, i) => (
                                <button
                                    key={fit.title}
                                    onClick={() => setActive(i)}
                                    aria-label={`Go to ${fit.title}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        i === active ? "w-8 bg-red-800" : "w-4 bg-neutral-300 hover:bg-neutral-400"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(6px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}