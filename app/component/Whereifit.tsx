"use client";

import type { ReactNode } from "react";

type FitCardProps = {
    title: string;
    description: string;
    tag: string;
    icon: ReactNode;
    image?: string;
    className?: string;
};

function FitCard({ title, description, tag, icon, image, className = "" }: FitCardProps) {
    return (
        <div
            className={`flex h-full flex-col rounded-md border border-neutral-200 bg-white p-8 text-left ${className}`}
        >
            <div className="h-0.5 w-8 bg-red-800" />

            <div className="mt-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                    <span className="text-red-800">{icon}</span>
                    <h3 className="mt-3 text-2xl font-bold leading-snug text-neutral-900">
                        {title}
                    </h3>
                </div>
                {image && (
                    <img
                        src={image}
                        alt=""
                        className="h-20 w-20 flex-shrink-0 rounded-sm object-cover"
                    />
                )}
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                {description}
            </p>

            {/* Spacer pushes the divider + tag to the bottom regardless of content length */}
            <div className="mt-auto pt-6">
                <hr className="border-neutral-200" />
                <p className="mt-4 text-xs font-semibold tracking-wide text-red-800">
                    {tag.toUpperCase()}
                </p>
            </div>
        </div>
    );
}

const DEFAULT_ICONS: ReactNode[] = [
    <svg key="cxo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /><path d="M12 12v4" /><path d="m14 14-2-2-2 2" /></svg>,
    <svg key="problem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="8" /><path d="M12 2v2" /><circle cx="12" cy="12" r="2" /></svg>,
    <svg key="advisor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2a4 4 0 0 0-4 4c0 1.5.5 2.5 1 3.5S10 12 10 13v2h4v-2c0-1 .5-1.5 1-2.5S16 7.5 16 6a4 4 0 0 0-4-4Z" /><path d="M9 21h6" /><path d="M10 17h4" /></svg>,
    <svg key="team" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" /><circle cx="19" cy="8" r="2" /><path d="M23 21v-1a3 3 0 0 0-2.5-3" /></svg>,
    <svg key="board" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg>,
];

const DEFAULT_FITS = [
    { title: "As your fractional CXO", description: "The core of what I do. I become your part-time operations and excellence chief — owning the back end so you can stay on product, customers, and growth. Senior operating muscle, without the cost or commitment of a full-time hire, across one company or a few at once. I don't carry a sales or revenue target; I build the engine that lets yours run.", tag: "Ongoing commitment" },
    { title: "For one expensive problem", description: "Sometimes it's not the whole operation — it's one thing that's costing you badly. A process that won't scale. Missed SLAs. A messy integration after an acquisition. I come in, find the root cause, and fix it.", tag: "Project based" },
    { title: "As an advisor to you", description: "Some founders and CEOs just need a seasoned operator to think with — on the operating model, the next stage of scale, the hard calls. Quiet, on-call, in your corner.", tag: "Retainer access" },
    { title: "To level up your team", description: "When the goal is capability that stays, I train and coach your people to run and improve their own operations — process, change, and leadership for the managers who'll carry it.", tag: "Curated programs", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop" },
    { title: "On your board", description: "As an independent director, I bring an operator's eye to the boardroom — reading the operation behind the numbers and asking the questions that protect the business.", tag: "Governance appointment", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

import { useContent } from "@/lib/ContentContext";

export default function WhereIFit() {
    const { content } = useContent();
    const c = content?.where_i_fit;
    const fits = c?.fits || DEFAULT_FITS;

    return (
        <section className="bg-stone-100 px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-7xl text-left">
                <h2 className="text-4xl font-extrabold tracking-tight text-red-800 sm:text-6xl">
                    {c?.heading || "WHERE I FIT"}
                </h2>
                <p className="mt-3 text-lg font-semibold text-neutral-900">
                    {c?.subtitle || "Bring me in the way that fits where you are."}
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {fits.slice(0, 3).map((fit, i) => (
                        <FitCard key={fit.title} {...fit} icon={DEFAULT_ICONS[i] || DEFAULT_ICONS[0]} />
                    ))}
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {fits.slice(3).map((fit, i) => (
                        <FitCard key={fit.title} {...fit} icon={DEFAULT_ICONS[i + 3] || DEFAULT_ICONS[0]} />
                    ))}
                </div>
            </div>
        </section>
    );
}