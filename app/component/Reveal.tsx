"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    direction?: "left" | "right";
    delay?: number;
};

const OFFSETS = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
};

export default function Reveal({ children, direction = "left", delay = 0 }: RevealProps) {
    const { x, y } = OFFSETS[direction];
    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
