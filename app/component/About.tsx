"use client";

import { useContent } from "@/lib/ContentContext";

export default function About() {
  const { content } = useContent();
  const c = content?.about;
  const paragraphs = c?.paragraphs || [
    "I understand what is required to hold a business together through rapid growth, because I have built and run companies of my own, and have carried out this work — across operations, people, governance, and strategy — at scale, from early-stage ventures to multinational organisations, across industries, for three decades.",
    "Founded and continue to lead FusionEdge, a SaaS platform for enterprise operations.",
    "Rebuilt a listed company department by department — operations, human resources, governance, finance, and strategy alike — with every function assessed, corrected, and governed.",
    "Served as Chief Excellence Officer across a group of companies, building shared standards, a performance framework, and governance that has lasted. Coached founders and CEOs directly, from early-stage ventures to listed company leadership, across industries and irrespective of sector.",
    "I view the business as a whole — operations, people, governance, and strategy together — and remain engaged until the change is embedded, irrespective of industry or stage. Strategic judgment and hands-on execution, delivered by one person.",
  ];

  const heading = c?.heading || "Same seat, different side of the table — now I do this work for you.";
  const highlight = c?.heading_highlight || "now I do this work for you.";
  const hParts = heading.split(highlight);
  const headingHighlighted = hParts.length > 1 ? (
    <>{hParts[0]}<span className="text-red-700">{highlight}</span>{hParts[1]}</>
  ) : (
    heading
  );

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">

          {/* Left: image */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
              <img
                src="/about.jpeg"
                alt="Working session"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-red-700 sm:text-sm">
              {c?.badge || "WHY FOUNDERS BRING ME IN"}
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
              {headingHighlighted} for you.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-neutral-600 sm:text-lg lg:text-lg">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === paragraphs.length - 1
                      ? "border-l-2 border-red-700 pl-5 font-semibold text-red-900"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}