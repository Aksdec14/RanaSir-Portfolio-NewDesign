"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FitRow {
    left: string;
    right: string;
}

const rows: FitRow[] = [
    {
        left: "A fractional CXO isn't just a title you hire.",
        right: "It's your part-time Chief Excellence Officer for operations, people, governance, and strategy.",
    },
    {
        left: "One expensive problem doesn't need a retainer.",
        right: "It needs a root-cause fix — a process, a leadership gap, a messy integration.",
    },
    {
        left: "An advisor isn't the same thing as a consultant.",
        right: "It's a seasoned operator to think alongside on strategy, governance, and the hard calls.",
    },
    {
        left: "Training your team isn't a one-time workshop.",
        right: "It's building capability that stays with them long after I leave.",
    },
    {
        left: "A board seat isn't just a formality on paper.",
        right: "It's an independent eye on the operation behind the numbers, asking harder questions.",
    },
];

export default function WhereIFit() {
    return (
        <section className="w-full bg-white py-10 px-4 sm:py-10 sm:px-6 md:py-12">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:gap-10">
                {/* Left: portrait + caption */}
                <div className="mx-auto flex w-full max-w-sm flex-shrink-0 flex-col md:mx-0 md:w-[280px] md:max-w-none lg:w-[320px]">
                    <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px] md:h-[380px] lg:h-[420px]">
                        <Image
                            src="/HeaderImage.png"
                            alt="Business coach pointing to the right"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                    <div className="-mt-1 bg-red-800 px-5 py-5 sm:px-6 sm:py-6">
                        <p className="text-lg font-bold leading-tight text-white sm:text-xl">
                            Nobody Is Going
                            <br />
                            to Tell You This.
                            <br />
                            So I Will.
                        </p>
                    </div>
                </div>

                {/* Right: single bordered container with dividers */}
                <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white divide-y divide-neutral-200 mt-15">
                    {rows.map((row, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 md:flex-row md:items-start md:gap-6"
                        >
                            <p className="w-full flex-shrink-0 text-base text-red-900 sm:text-lg md:w-[260px] md:text-lg lg:w-[300px] lg:text-lg">
                                {row.left}
                            </p>
                            <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 rotate-90 text-red-700 sm:h-5 sm:w-5 md:mt-2 md:rotate-0" />
                            <p className="flex-1 text-base text-neutral-900 sm:text-lg md:max-w-[480px] lg:text-lg">
                                {row.right}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}