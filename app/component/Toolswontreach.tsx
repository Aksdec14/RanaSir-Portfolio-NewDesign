"use client";

import { useContent } from "@/lib/ContentContext";

export default function ToolsWontReach() {
    const { content } = useContent();
    const c = content?.tools_wont_reach;
    const paragraphs = c?.paragraphs || [
        "Right now everyone's selling you software to fix your business. Map the process. Build the dashboard. Generate the SOP. I use those tools too — they're useful. But here's what no one selling them will tell you: they only see what gets recorded. And the real problem almost never gets recorded.",
        "The bottleneck that's killing you isn't in the data. It's in the side conversation after the meeting, where someone finally says what they actually think. It's in the room that goes quiet when you raise the thing nobody wants to own. It's the team that lost faith in a process months ago and has been quietly working around it ever since. It's the tension between two departments that adds a week to every handoff — and that no one will put in an email.",
        "No software will ever find that. A dashboard can't read a room. An algorithm can't sense who's protecting their turf, who's checked out, who knows where the bodies are buried but won't say so until they trust you. That takes a person on the ground — talking, watching, reading the pulse, asking the second and third question until the real answer comes out.",
        "That's the work I do that a tool never will. I'll bring in the right systems where they help — but the digging that happens between people, on the floor, in the unsaid? That's twenty-five years of knowing exactly what to look for. Buy the software if you like. It won't save you. Finding the real problem still takes a human who's done this before.",
    ];

    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 sm:grid-cols-[minmax(0,320px)_1fr]">
                    {/* Left — fixed/sticky */}
                    <div className="sm:sticky sm:top-24 sm:h-fit">
                        <p className="text-xs font-semibold tracking-widest text-red-800">
                            {c?.badge || "THE PART NO SOFTWARE REACHES"}
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
                            {c?.heading || "You can automate the operation. You can't automate finding out what's actually wrong with it."}
                        </h2>

                        <div className="mt-8 h-0.5 w-22 bg-red-800" />
                    </div>

                    {/* Right — scrollable body copy */}
                    <div className="space-y-6 text-[15px] leading-relaxed text-neutral-600">
                        {paragraphs.map((p, i) => (
                            <p key={i} className={i === paragraphs.length - 1 ? "font-medium text-neutral-900" : ""}>
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}