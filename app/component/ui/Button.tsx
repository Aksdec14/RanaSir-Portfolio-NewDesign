import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    color?: "red" | "black" | "white" | "outline";
    className?: string;
    icon?: ReactNode;
};

const COLOR_STYLES: Record<NonNullable<ButtonProps["color"]>, string> = {
    red: "bg-red-800 text-stone-50 hover:bg-red-900 hover:shadow-lg hover:shadow-red-800/20",
    black:
        "bg-neutral-900 text-stone-50 hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20",
    white:
        "bg-stone-50 text-neutral-900 hover:bg-stone-100 border border-neutral-200",
    outline:
        "bg-transparent text-red-800 border border-red-800 hover:bg-red-800 hover:text-stone-50",
};

export default function Button({
    label,
    href,
    onClick,
    color = "red",
    className = "",
    icon,
}: ButtonProps) {
    const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${COLOR_STYLES[color]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {label}
                {icon}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={classes}>
            {label}
            {icon}
        </button>
    );
}