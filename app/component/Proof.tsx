"use client";

import { useContent } from "@/lib/ContentContext";


function StaircaseItem({
    text,
    index,
    total,
}: {
    text: string;
    index: number;
    total: number;
}) {
    // Higher index = higher up (like the reference, ascending left→right)
    const liftStep = 34; // px per step
    const maxLift = (total - 1) * liftStep;
    const lift = index * liftStep;

    return (
        <div
            className="flex w-44 flex-shrink-0 flex-col sm:w-52"
            style={{ marginTop: maxLift - lift }}
        >
            <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-red-800">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-red-800/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-800">
                    Step {index + 1}
                </span>
            </div>
            <div className="mt-3 h-px w-8 bg-red-800/40" />
            <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                {text}
            </p>
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
        <section id="proof" className="bg-stone-100 px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl text-left">
                {/* Header */}
                <p className="text-xs font-semibold tracking-widest text-red-800">
                    {c?.badge || "A RECORD OF RESULTS"}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                    {c?.heading || "Thirty years of building, fixing, and governing businesses — from startup to multinational, across industries."}
                </h2>
                <div className="mt-6 h-0.5 w-12 bg-red-800" />

                {/* Track record: intro (top) + staircase row (below) */}
                <div className="mt-10">
                    <p className="max-w-xl text-[15px] leading-relaxed text-red-800">
                        {(c as { recordIntro?: string } | undefined)?.recordIntro ||
                            "A track record built across three decades — operations, governance, strategy, and growth — proven at every stage from startup to multinational."}
                    </p>

                    {/* Desktop: staircase row */}
                    <div className="hidden overflow-x-auto pb-4 sm:block">
                        <div className="flex items-start gap-8">
                            {record.map((item, i) => (
                                <StaircaseItem
                                    key={item}
                                    text={item}
                                    index={i}
                                    total={record.length}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile: simple stacked list */}
                    <div className="mt-8 divide-y divide-neutral-200 sm:hidden">
                        {record.map((item, i) => (
                            <div key={item} className="flex items-start gap-3 py-4">
                                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-800/10 text-[11px] font-bold text-red-800">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-[14px] leading-relaxed text-neutral-600">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                
            
            </div>
        </section>
    );
}