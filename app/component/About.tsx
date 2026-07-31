"use client";

import { useContent } from "@/lib/ContentContext";

export default function About() {
  const { content } = useContent();
  const c = content?.about;
  const paragraphs = c?.paragraphs || [
    "I've started and run my own companies, so I know exactly what it feels like when growth outpaces the operation — the late nights, the dropped balls, the sense that the thing you built is starting to run you instead of the other way round. One of them, FusionEdge, is a SaaS platform for enterprise operations that I built and still run — I understood how operations work deeply enough to build the software that runs them.",
    "Then I did it at scale. Inside a listed organisation, I took the entire operation apart and put it back together — procurement, production, HR, admin, facilities, support, finance — one process at a time. I found what was broken, redesigned it, chose the right systems to run it, and built the governance to keep it honest. Then I coached the CEO and leadership team to run it that way long after I'd left.",
    "That's the difference between me and most advisors. I don't look at one department and hand you a report. I see the whole business at once — where it leaks time, money, and momentum — and I stay until it's fixed and holding. I've done this for companies of every size, from startups to organisations of more than a thousand people.",
    "When we work together, you get someone senior enough to sit with your board and grounded enough to fix the thing that's actually broken on the floor. Both, in one person.",
  ];

  const heading = c?.heading || "I've sat in your chair. Then I went and fixed it for others.";
  const highlight = c?.heading_highlight || "Then I went and fixed it";
  const hParts = heading.split(highlight);
  const headingHighlighted = hParts.length > 1 ? (
    <>{hParts[0]}<span className="text-red-700">{highlight}</span>{hParts[1]}</>
  ) : (
    heading
  );

  const boldPhrase = "Both, in one person.";
  const lastPara = paragraphs[paragraphs.length - 1];
  const lpParts = lastPara.split(boldPhrase);
  const lastParagraph = lpParts.length > 1 ? (
    <>{lpParts[0]}<strong className="font-semibold text-neutral-900">{boldPhrase}</strong>{lpParts[1]}</>
  ) : (
    lastPara
  );

  return (
    <section className="bg-white">
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
              {headingHighlighted} for others.
            </h2>

            <div className="mt-7 space-y-5 text-[12px] leading-[1.75] text-neutral-600 sm:text-base lg:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i} className={i === paragraphs.length - 1 ? "border-l-2 border-red-700 pl-5 text-neutral-800" : ""}>
                  {i === paragraphs.length - 1 ? lastParagraph : p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}