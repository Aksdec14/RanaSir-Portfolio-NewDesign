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
                {/* Track record */}
                <p className="text-xs font-semibold tracking-widest text-red-800">
                    {c?.badge || "A RECORD OF RESULTS"}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                    {c?.heading || "Thirty years of building, fixing, and governing businesses — from startup to multinational, across industries."}
                </h2>
                <div className="mt-6 h-0.5 w-12 bg-red-800" />

                <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                    {record.map((item) => (
                        <li key={item} className="flex gap-4">
                            <span className="mt-2 h-1.5 w-4 flex-shrink-0 bg-red-800" />
                            <p className="text-[15px] leading-relaxed text-neutral-600">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Testimonials */}
                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.quote} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}