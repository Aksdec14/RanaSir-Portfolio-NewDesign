"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { useContent } from "@/lib/ContentContext";

export default function Contact() {
    const { content } = useContent();
    const c = content?.contact;

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        blocker: "",
    });

    const handleChange =
        (field: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSubmit = () => {
        console.log(form);
    };

    return (
        <section className="bg-stone-100 px-4 py-24 sm:px-6">
            <div className="mx-auto grid max-w-7xl gap-12 text-left lg:grid-cols-2 lg:gap-16">
                {/* Left — copy */}
                <div>
                    <p className="text-xs font-semibold tracking-widest text-red-800">
                        {c?.badge || "LET'S TALK"}
                    </p>

                    <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
                        {c?.heading || "The first step is easy."}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-neutral-600">
                        {c?.subtitle || "Tell me what's breaking. I'll tell you straight if I can help."}
                    </p>

                    <div className="mt-6 h-0.5 w-12 bg-red-800" />

                    <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-600">
                        {c?.description || "No pitch, no obligation. Send me a couple of lines about what's going on in your business, and I'll come back within a day with an honest view — whether it's something I can fix, and how I'd start."}
                    </p>

                    <div className="mt-10 rounded-md bg-red-800 p-8">
                        <p className="text-sm text-neutral-300">Direct</p>
                        <a
                            href={`mailto:${c?.email || "reachout@ranarajvindersingh.com"}`}
                            className="mt-2 block text-[15px] font-semibold text-stone-50 hover:text-red-500"
                        >
                            {c?.email || "reachout@ranarajvindersingh.com"}
                        </a>
                        <a
                            href={`https://${c?.linkedin || "linkedin.com/in/ranarajvindersingh"}`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 block text-[15px] font-semibold text-stone-50 hover:text-red-500"
                        >
                            {c?.linkedin || "linkedin.com/in/ranarajvindersingh"}
                        </a>
                        <p className="mt-4 text-sm text-neutral-400">
                            {c?.location || "Working with clients in India and worldwide."}
                        </p>
                    </div>
                </div>

                {/* Right — form */}
                <div className="rounded-md border border-neutral-200 bg-white p-8 sm:p-10">
                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="text-sm font-semibold text-neutral-900"
                            >
                                {c?.form_name_label || "Name"}
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder={c?.form_name_placeholder || "Your name"}
                                value={form.name}
                                onChange={handleChange("name")}
                                className="mt-2 w-full rounded-sm border border-neutral-200 bg-stone-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-800 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-neutral-900"
                            >
                                {c?.form_email_label || "Email"}
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder={c?.form_email_placeholder || "you@company.com"}
                                value={form.email}
                                onChange={handleChange("email")}
                                className="mt-2 w-full rounded-sm border border-neutral-200 bg-stone-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-800 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="company"
                                className="text-sm font-semibold text-neutral-900"
                            >
                                {c?.form_company_label || "Company"}
                            </label>
                            <input
                                id="company"
                                type="text"
                                placeholder={c?.form_company_placeholder || "Your company"}
                                value={form.company}
                                onChange={handleChange("company")}
                                className="mt-2 w-full rounded-sm border border-neutral-200 bg-stone-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-800 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="blocker"
                                className="text-sm font-semibold text-neutral-900"
                            >
                                {c?.form_blocker_label || "What's slowing your business down right now?"}
                            </label>
                            <textarea
                                id="blocker"
                                rows={4}
                                placeholder={c?.form_blocker_placeholder || "One line is plenty"}
                                value={form.blocker}
                                onChange={handleChange("blocker")}
                                className="mt-2 w-full resize-none rounded-sm border border-neutral-200 bg-stone-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-800 focus:outline-none"
                            />
                        </div>

                        <Button
                            label={c?.form_submit_text || "Send it — I'll reply within 24 hours"}
                            onClick={handleSubmit}
                            color="red"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}