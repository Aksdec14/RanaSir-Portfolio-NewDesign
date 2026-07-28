"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";


export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <section
            className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 [grid-template-areas:'text'_'image'_'button'] md:grid-cols-2 md:px-10 md:py-14 md:[grid-template-areas:'text_image']"
        >
            {/* Left: text content */}
            <div className="[grid-area:text]">
                <p className="text-sm font-semibold tracking-widest text-red-800">
                    FRACTIONAL CXO · OPERATIONAL EXCELLENCE
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-5xl">
                    Your business is <span className="text-red-800">growing</span> faster
                    than it can hold itself <span className="text-red-800">together</span>.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
                    That&apos;s not a failure. It&apos;s the moment every good
                    company hits — when the product is working, the customers
                    are coming, and the operation underneath quietly starts to
                    crack. Processes that lived in someone&apos;s head. A team
                    improvising. Founders firefighting instead of building.
                </p>

                <div className="mt-4 max-w-xl">
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-2 border-b border-neutral-200 py-3 text-left text-base font-semibold text-neutral-900"
                    >
                        How I fix it
                        <svg
                            className={`h-4 w-4 flex-shrink-0 text-red-800 transition-transform duration-300 ${open ? "rotate-180" : ""
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="min-h-0">
                            <p className="pt-4 text-base leading-relaxed text-neutral-600">
                                I step in and fix that. As a fractional CXO, I
                                rebuild the operation behind the business —
                                the processes, systems, and structure — so
                                the company can keep growing without
                                breaking. I&apos;ve run companies of my own
                                and rebuilt one listed organisation
                                department by department, so I&apos;m not
                                theorising. I&apos;ve been where you are.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop-only CTA, right under the accordion */}
                <div className="mt-8 hidden max-w-xl md:block">
                    <Button
                        label="Book a 30-minute call — tell me what's breaking"
                        href="#contact"
                        color="red"
                    />
                </div>
            </div>

            {/* Right: portrait */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-lg [grid-area:image]">
                <Image
                    src="/hero.png"
                    alt="Executive portrait"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            {/* Mobile-only CTA, below the image */}
            <div className="[grid-area:button] md:hidden">
                <Button
                    label="Book a 30-minute call — tell me what's breaking"
                    href="#contact"
                    color="red"
                />
            </div>

        </section>
        
    );
}