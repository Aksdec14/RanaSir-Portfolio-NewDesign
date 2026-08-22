"use client";

import { useState } from "react";

type TestimonialCardProps = {
    quote: string;
    name: string;
    role: string;
    avatarUrl?: string;
};

function TestimonialCard({ quote, name, role, avatarUrl }: TestimonialCardProps) {
    return (
        <div className="flex h-full min-h-[280px] flex-col rounded-2xl bg-white p-6 sm:min-h-[320px] sm:p-7 lg:h-100 lg:p-6">
            <span className="font-serif text-3xl leading-none text-neutral-300">
                &ldquo;
            </span>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {quote}
            </p>

            <div className="mt-auto flex items-center gap-3 pt-6">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-red-800/10">
                    {avatarUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
                    )}
                </div>
                <div>
                    <p className="text-sm font-bold text-neutral-900">{name}</p>
                    <p className="text-xs text-neutral-500">{role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const testimonials: TestimonialCardProps[] = [
    {
        quote: "Working with us was an absolute game-changer for our business! From the very first meeting, their team took the time to truly understand our brand, our audience, and our long-term vision. Their designs didn't just look good, they elevated our entire brand identity and captured the essence of who we are in a way we didn't think was possible. We've received countless compliments since the rebrand went live.",
        name: "Jessica Lee",
        role: "Founder",
    },
    {
        quote: "They exceeded every expectation we had, and honestly, we had high ones! Their creative approach, combined with a deep understanding of our industry, brought our brand to life in a way that truly stands out from the competition. What impressed us most was their willingness to iterate and refine until every detail felt exactly right. It's rare to find a team this dedicated and this talented.",
        name: "Heather B.",
        role: "Project Manager",
    },
    {
        quote: "Partnering with them completely transformed our brand from the ground up. Their attention to detail, thoughtful process, and genuinely unique design sensibility perfectly captured our goals while pushing us creatively in directions we hadn't considered. The entire experience felt collaborative rather than transactional, and the end result speaks for itself, our customers notice the difference immediately.",
        name: "Olivia Tran",
        role: "Co-founder",
    },
];

    const [active, setActive] = useState(0);

    return (
        <section className="bg-stone-100 px-4 py-14 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-left text-3xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                    Client&rsquo;s <span className="text-red-800">Testimonials</span>
                </h2>

                <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.name} {...t} />
                    ))}
                </div>

                <div className="mt-8 flex justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setActive(i)}
                            className={`h-2 w-2 rounded-full transition ${
                                i === active ? "bg-red-800" : "bg-neutral-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}