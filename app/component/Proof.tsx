"use client";

import { useContent } from "@/lib/ContentContext";

type TestimonialCardProps = {
    quote: string;
    name: string;
    role: string;
};

function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
    return (
        <div className="flex h-full flex-col rounded-md border border-neutral-200 bg-white p-8 text-left">
            <p className="text-[15px] leading-relaxed text-neutral-700">
                &ldquo;{quote}&rdquo;
            </p>

            <div className="mt-auto pt-6">
                <hr className="border-neutral-200" />
                <p className="mt-4 text-sm font-bold text-neutral-900">
                    {name}
                </p>
                <p className="text-xs font-semibold tracking-wide text-red-800">
                    {role.toUpperCase()}
                </p>
            </div>
        </div>
    );
}

type TimelineItemProps = {
    index: number;
    text: string;
    side: "left" | "right";
};

function TimelineItem({ index, text, side }: TimelineItemProps) {
    const num = String(index).padStart(2, "0");

    return (
        <div className="relative flex items-start sm:min-h-[110px]">
            {/* Mobile layout: dot + text in a row */}
            <div className="flex w-full items-start gap-4 sm:hidden">
                <span className="relative mt-1 flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-red-800">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-red-800/40" />
                </span>
                <div>
                    <p className="text-xl font-extrabold leading-none text-neutral-900">
                        {num}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                        {text}
                    </p>
                </div>
            </div>

            {/* Desktop layout: alternating left/right around center line */}
            <div className="hidden w-full sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-6">
                <div className="text-right">
                    {side === "left" && (
                        <div>
                            <p className="text-xl font-extrabold leading-none text-neutral-900">
                                {num}
                            </p>
                            <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                                {text}
                            </p>
                        </div>
                    )}
                </div>

                <span className="relative mt-2 flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-red-800">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-red-800/40" />
                </span>

                <div className="text-left">
                    {side === "right" && (
                        <div>
                            <p className="text-xl font-extrabold leading-none text-neutral-900">
                                {num}
                            </p>
                            <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                                {text}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Proof() {
    const { content } = useContent();
    const c = content?.proof;
    const record = c?.record || [
        "30 years across operations, HR, governance, and strategy, from early-stage ventures to organisations exceeding 1,000 employees",
        "Rebuilt a listed company department by department, with every function — including HR and governance — assessed, corrected, and governed",
        "Served as Chief Excellence Officer across a group of companies, establishing shared standards, a performance framework, and lasting governance",
        "Coached founders and CEOs directly, from first-time founders to listed company leadership, across industries",
        "Led mergers and acquisitions from the operator's perspective — due diligence, negotiation, and integration that delivers measurable value",
        "Built a company's market presence from inception — brand, digital strategy, public relations, and industry standing",
        "Built a customer success function from inception, managing operations processing 90,000 documents monthly without compromising quality",
    ];
    const testimonials = c?.testimonials || [
        { quote: "He came in when we were scaling fast and losing control of the back end. Within months, the chaos had a system — and it held.", name: "Founder & CEO", role: "SaaS Scale-up" },
        { quote: "I've worked with a lot of operators. Few can walk the floor, read a room, and fix the process in the same afternoon.", name: "Group CEO", role: "Multi-entity Holding Company" },
        { quote: "He found the real bottleneck — not the one in our dashboards, the one no one wanted to name. Then he fixed it.", name: "COO Peer", role: "Manufacturing Group" },
    ];

    return (
        <section id="proof" className="bg-stone-100 px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-7xl text-left">
                {/* Header */}
                <p className="text-xs font-semibold tracking-widest text-red-800">
                    {c?.badge || "A RECORD OF RESULTS"}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                    {c?.heading || "Thirty years of building, fixing, and governing businesses — from startup to multinational, across industries."}
                </h2>
                <div className="mt-6 h-0.5 w-12 bg-red-800" />

                {/* Track record: intro text (left) + timeline (right), like the reference layout */}
                <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="text-[15px] leading-relaxed text-red-800">
                            {(c as { recordIntro?: string } | undefined)?.recordIntro ||
                                "A track record built across three decades — operations, governance, strategy, and growth — proven at every stage from startup to multinational."}
                        </p>
                    </div>

                    <div className="relative">
                        {/* Center vertical line (desktop) */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-300 sm:block" />
                        {/* Left vertical line (mobile) */}
                        <div className="absolute left-[5px] top-0 h-full w-px bg-neutral-300 sm:hidden" />

                        <div className="flex flex-col gap-10 sm:gap-4">
                            {record.map((item, i) => (
                                <TimelineItem
                                    key={item}
                                    index={i + 1}
                                    text={item}
                                    side={i % 2 === 0 ? "right" : "left"}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.quote} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}