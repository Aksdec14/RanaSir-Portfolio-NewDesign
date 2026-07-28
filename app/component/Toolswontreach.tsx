export default function ToolsWontReach() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 sm:grid-cols-[minmax(0,320px)_1fr]">
                    {/* Left — fixed/sticky */}
                    <div className="sm:sticky sm:top-24 sm:h-fit">
                        <p className="text-xs font-semibold tracking-widest text-red-800">
                            THE PART NO SOFTWARE REACHES
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
                            You can automate the operation. You can&apos;t
                            automate finding out what&apos;s actually wrong
                            with it.
                        </h2>

                        <div className="mt-8 h-0.5 w-22 bg-red-800" />
                    </div>

                    {/* Right — scrollable body copy */}
                    <div className="space-y-6 text-[15px] leading-relaxed text-neutral-600">
                        <p>
                            Right now everyone&apos;s selling you software to
                            fix your business. Map the process. Build the
                            dashboard. Generate the SOP. I use those tools
                            too — they&apos;re useful. But here&apos;s what
                            no one selling them will tell you: they only see
                            what gets recorded. And the real problem almost
                            never gets recorded.
                        </p>

                        <p>
                            The bottleneck that&apos;s killing you isn&apos;t
                            in the data. It&apos;s in the side conversation
                            after the meeting, where someone finally says
                            what they actually think. It&apos;s in the room
                            that goes quiet when you raise the thing nobody
                            wants to own. It&apos;s the team that lost faith
                            in a process months ago and has been quietly
                            working around it ever since. It&apos;s the
                            tension between two departments that adds a week
                            to every handoff — and that no one will put in
                            an email.
                        </p>

                        <p>
                            No software will ever find that. A dashboard
                            can&apos;t read a room. An algorithm can&apos;t
                            sense who&apos;s protecting their turf, who&apos;s
                            checked out, who knows where the bodies are
                            buried but won&apos;t say so until they trust
                            you. That takes a person on the ground —
                            talking, watching, reading the pulse, asking the
                            second and third question until the real answer
                            comes out.
                        </p>

                        <p className="font-medium text-neutral-900">
                            That&apos;s the work I do that a tool never will.
                            I&apos;ll bring in the right systems where they
                            help — but the digging that happens between
                            people, on the floor, in the unsaid?
                            That&apos;s twenty-five years of knowing exactly
                            what to look for. Buy the software if you like.
                            It won&apos;t save you. Finding the real problem
                            still takes a human who&apos;s done this before.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}