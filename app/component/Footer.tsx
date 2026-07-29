import Button from "./ui/Button";

const NAV_GROUPS = [
    {
        label: "Strategy",
        links: [
            { label: "The Problem", href: "#the-problem" },
            { label: "About", href: "#about" },
        ],
    },
    {
        label: "Methodology",
        links: [
            { label: "How I Work", href: "#how-i-work" },
            { label: "What Tools Miss", href: "#what-tools-miss" },
        ],
    },
    {
        label: "Engagement",
        links: [
            { label: "Ways to Work", href: "#ways-to-work" },
            { label: "Proof", href: "#proof" },
        ],
    },
    {
        label: "Connect",
        links: [{ label: "Contact", href: "#contact" }],
    },
];

export default function Footer() {
    return (
        <footer className="bg-red-800 px-6 py-8 sm:px-10">
            <div className="mx-auto max-w-7xl text-left">
                {/* Top: brand + tagline */}
                <div className="flex flex-col gap-6 border-b border-red-700/60 pb-10 lg:flex-row lg:items-start lg:justify-between">
                    <h2 className="text-4xl font-extrabold tracking-tight text-stone-50">
                        Rana Rajvinder Singh
                    </h2>
                    <div className="lg:max-w-3xl pt-16">
                        <p className="text-2xl font-bold text-stone-50">
                            I turn a growing but hurting business into one
                            that runs.
                        </p>
                        <p className="mt-1 text-2xl font-bold text-red-200">
                            Fractional CXO · Operational Excellence ·
                            Independent Director.
                        </p>
                    </div>
                </div>

                {/* Nav groups */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-red-700/60 py-10 sm:grid-cols-4">
                    {NAV_GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="text-xs font-semibold tracking-widest text-red-300">
                                {group.label.toUpperCase()}
                            </p>
                            <ul className="mt-4 space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-md font-medium text-stone-50 hover:text-red-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA panel */}
                <div className="py-10">
                    <div className="flex flex-col gap-6 border-l-2 border-stone-50 bg-red-900/40 p-8 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xl font-bold leading-snug text-stone-50">
                                If your business is outgrowing its
                                operation, let&apos;s talk.
                            </p>
                            <p className="mt-2 text-sm text-red-200">
                                Direct executive intervention for scaling
                                complexities.
                            </p>
                        </div>
                        <Button
                            label="Book a call"
                            href="#contact"
                            color="white"
                            className="flex-shrink-0"
                        />
                    </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-4 border-t border-red-700/60 pt-8 text-xs text-red-200 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © 2026 Rana Rajvinder Singh{" "}
                        <span className="mx-2">·</span> India{" "}
                        <span className="mx-2">·</span>{" "}
                        <a
                            href="mailto:reachout@ranarajvindersingh.com"
                            className="underline decoration-red-300/60 underline-offset-2 hover:text-stone-50"
                        >
                            reachout@ranarajvindersingh.com
                        </a>
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}