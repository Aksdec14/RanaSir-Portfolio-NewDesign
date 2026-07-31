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
        "Rebuilt a listed company department by department — every function mapped, fixed, systematised, and governed.",
        "Drove excellence across a group of companies as Chief Excellence Officer — common standards, a performance framework, and a governance structure, all put in place and made to stick.",
        "Led teams of more than a thousand people at peak — and worked across every size of company, from startups to large organisations.",
        "Led M&A from the operator's side — due diligence, negotiation, and the integration that actually makes a deal pay off.",
        "Built a company's entire market presence from nothing — brand, digital, PR, and a platform that put it on industry stages.",
        "Built a customer success function from zero, and ran operations handling 90,000 documents a month with the quality holding.",
    ];
    const testimonials = c?.testimonials || [
        { quote: "He came in when we were scaling fast and losing control of the back end. Within months, the chaos had a system — and it held.", name: "Founder & CEO", role: "SaaS Scale-up" },
        { quote: "I've worked with a lot of operators. Few can walk the floor, read a room, and fix the process in the same afternoon.", name: "Group CEO", role: "Multi-entity Holding Company" },
        { quote: "He found the real bottleneck — not the one in our dashboards, the one no one wanted to name. Then he fixed it.", name: "COO Peer", role: "Manufacturing Group" },
    ];

    return (
        <section className="bg-stone-100 px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-7xl text-left">
                {/* Track record */}
                <p className="text-xs font-semibold tracking-widest text-red-800">
                    {c?.badge || "WHAT I'VE ACTUALLY DONE"}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                    {c?.heading || "Twenty-five years of taking broken things and making them work."}
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