"use client";

import StepCard from "./ui/Stepcard";

const ICONS = [
    <svg key="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>,
    <svg key="wrench" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    <svg key="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>,
];

import { useContent } from "@/lib/ContentContext";

export default function HowIWork() {
    const { content } = useContent();
    const c = content?.how_i_work;
    const steps = c?.steps || [
        { number: "01", title: "Find it.", description: "I go through the business and map how the work really flows — not the org chart, the reality. Within a few weeks you'll have a clear, honest picture of where the business is bleeding and which fixes matter most.", outcome: "Clarity" },
        { number: "02", title: "Fix it.", description: "We work down the list in priority order. I redesign the broken processes, put the right systems in place, sort out the structure and the back-office functions, and clear the blocks one by one — with my hands on it, not from a slide.", outcome: "Execution" },
        { number: "03", title: "Make it stick.", description: "The real job is making sure it holds after I leave. I coach your leaders to run the new way and embed the habits and governance so the business doesn't slide back. You end up with an operation that runs without me — and without you having to hold it together.", outcome: "Autonomy" },
    ];

    return (
        <section className="bg-stone-100">
            {/* Header */}
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                    <div className="text-left">
                        <h2 className="text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
                            {c?.heading_part1 || "A WAY"} <span className="text-red-800">{c?.heading_part2 || "THROUGH"}</span>
                        </h2>
                        <p className="mt-4 text-lg font-medium text-neutral-600">
                            {c?.subtitle || "Find it. Fix it. Make it stick."}
                        </p>
                        <div className="mt-6 h-0.5 w-12 bg-red-800" />
                    </div>
                    <p className="max-w-xl text-left text-[15px] leading-relaxed text-neutral-00">
                        {c?.description || "Walking into a messy operation is overwhelming for everyone except someone who's done it many times. Here's how I cut through it."}
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="bg-neutral-200/60 px-6 py-16">
                <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
                    {steps.map((step, i) => (
                        <StepCard key={step.number} {...step} icon={ICONS[i] || ICONS[0]} />
                    ))}
                </div>
            </div>

        </section>
    );
}