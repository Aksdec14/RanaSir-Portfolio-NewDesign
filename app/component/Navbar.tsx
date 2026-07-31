"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/lib/ContentContext";

export default function Navbar() {
    const { content } = useContent();
    const c = content?.navbar;
    const links = c?.links || [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Expertise", href: "#expertise" },
        { label: "Contact", href: "#contact" },
    ];

    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Contact");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-stone-50/90 backdrop-blur-md shadow-sm"
                    : "bg-stone-50"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl"
                >
                    {c?.logo_prefix || "Executive"}<span className="text-red-800"> {c?.logo_suffix || "Portfolio"}</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-10 md:flex">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.label)}
                                className={`group relative text-[15px] font-medium tracking-wide transition-colors ${active === link.label
                                        ? "text-red-800"
                                        : "text-neutral-700 hover:text-neutral-900"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-red-800 transition-all duration-300 ${active === link.label ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden rounded-sm bg-red-800 px-6 py-3 text-sm font-semibold tracking-wide text-stone-50 transition-all duration-300 hover:bg-red-900 hover:shadow-lg hover:shadow-red-800/20 md:inline-block"
                >
                    {c?.cta_text || "Get in Touch"}
                </a>

                {/* Mobile toggle */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setMobileOpen((v) => !v)}
                    className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
                >
                    <span
                        className={`h-[1.5px] w-6 bg-neutral-900 transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-[1.5px] w-6 bg-neutral-900 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-[1.5px] w-6 bg-neutral-900 transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${mobileOpen ? "max-h-80" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-1 px-6 pb-6">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => {
                                    setActive(link.label);
                                    setMobileOpen(false);
                                }}
                                className={`block rounded-sm px-2 py-3 text-base font-medium ${active === link.label ? "text-red-800" : "text-neutral-800"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-sm bg-red-800 px-6 py-3 text-center text-sm font-semibold text-stone-50"
                        >
                            {c?.cta_text || "Get in Touch"}
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}