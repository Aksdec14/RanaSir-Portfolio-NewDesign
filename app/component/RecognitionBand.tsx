"use client";

import { useContent } from "@/lib/ContentContext";

export default function RecognitionBand() {
  const { content } = useContent();
  const c = content?.recognition;
  const points = c?.points || [
    { lead: "The business doubled, but the back office didn't.", rest: "Things slip through. Customers feel it. You feel it more." },
    { lead: "Everything runs through you.", rest: "Nothing important happens unless you're in the room — which means you can't step back, and you can't scale." },
    { lead: "You've hired good people, but the machine still stutters.", rest: "The problem isn't the people. It's that no one has designed how the work actually flows." },
    { lead: "You bought the tools, and they didn't fix it.", rest: "Software doesn't fix a broken process. It just makes the mess faster." },
  ];

  return (
    <section className="bg-red-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-5 md:items-start md:gap-8 md:px-10 md:py-20">
        {/* Left: heading + closing line */}
        <div className="md:col-span-2">
          <p className="text-sm font-semibold tracking-widest text-red-200">
            {c?.badge || "SOUND FAMILIAR?"}
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {c?.heading || "You probably recognise at least one of these."}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-red-100 sm:text-lg">
            {c?.description || "If any of that lands, you don't need more strategy. You need someone to go in, find what's actually slowing the business down, and fix it —"}{" "}
            <span className="font-semibold text-white">
              {c?.closing_highlight || "across every function, not one corner at a time."}
            </span>
          </p>
        </div>

        {/* Right: cards, stacked single column */}
        <div className="flex flex-col gap-4 md:col-span-3">
          {points.map((point, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:flex sm:items-start sm:gap-4 sm:p-6"
            >
              <p className="font-semibold leading-snug text-white sm:w-56 sm:flex-shrink-0">
                {point.lead}
              </p>
              <p className="mt-1.5 leading-relaxed text-red-100 sm:mt-0">
                {point.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}