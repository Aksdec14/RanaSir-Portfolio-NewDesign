import type { ReactNode } from "react";

type StepCardProps = {
    number: string;
    title: string;
    description: string;
    outcome: string;
    icon?: ReactNode;
    className?: string;
};

const DEFAULT_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
    >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

export default function StepCard({
    number,
    title,
    description,
    outcome,
    icon = DEFAULT_ICON,
    className = "",
}: StepCardProps) {
    return (
        <div
            className={`rounded-md border border-neutral-200 bg-white p-8 ${className}`}
        >
            <div className="flex items-start justify-between">
                <span className="text-2xl font-semibold text-red-800/40">
                    {number}
                </span>
                <span className="text-red-800">{icon}</span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-neutral-900">
                {title}
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                {description}
            </p>

            <hr className="mt-6 border-neutral-200" />

            <p className="mt-4 text-xs font-semibold tracking-wide text-red-800">
                OUTCOME: {outcome.toUpperCase()}
            </p>
        </div>
    );
}