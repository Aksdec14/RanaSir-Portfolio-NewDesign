"use client";

import { useContent } from "@/lib/ContentContext";

export default function ToolsWontReach() {
    const { content } = useContent();
    const c = content?.tools_wont_reach;
    const paragraphs = c?.paragraphs || [
        "A great deal of software is offered as the solution to operational strain. I make use of these tools as well, but they report only what has been recorded, and the true source of the problem is rarely recorded.",
        "It surfaces in the conversation that follows a meeting. In the room that falls silent at the wrong moment. In the workaround a team adopted months earlier and never disclosed. A dashboard cannot read a room.",
        "Identifying it requires a person on the ground, listening, observing, and asking a second and third question until the underlying answer emerges. This is what thirty years of this work teaches a person to notice.",
    ];

    return (
        <section id="what-tools-miss" className="bg-white px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 sm:grid-cols-[minmax(0,320px)_1fr]">
                    {/* Left — fixed/sticky */}
                    <div className="sm:sticky sm:top-24 sm:h-fit">
                        <p className="text-xs font-semibold tracking-widest text-red-800">
                            {c?.badge || "THE PART NO SOFTWARE REACHES"}
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
                            {c?.heading || "You can automate the operation. You cannot automate identifying what is actually wrong with it."}
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