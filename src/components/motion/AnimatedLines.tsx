"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const lines = [
  { id: 1, d: "M 80 80 L 200 80 L 200 180", delay: 0 },
  { id: 2, d: "M 480 60 L 620 60 L 620 180 L 720 180 L 720 280 L 950 280", delay: 0.2 },
  { id: 3, d: "M 700 220 L 850 220 L 850 290 L 950 290", delay: 0.4 },
  { id: 4, d: "M 520 380 L 580 380 L 580 500 L 680 500", delay: 0.6 },
];

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { 
        duration: 1.5, 
        delay, 
        ease: [0.16, 1, 0.3, 1] as const // cubic-bezier values as array
      },
      opacity: { duration: 0.3, delay },
    },
    transitionEnd: { pathLength: 1 } // Ensure final state is maintained
  })
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: delay + 1.5,
    },
  }),
};

const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as const, // Using cubic-bezier values for easeInOut
    },
  },
};

function getEndPoint(d: string): { x: number; y: number } {
  const parts = d.trim().split(/\s+/);
  const x = parseFloat(parts[parts.length - 2]);
  const y = parseFloat(parts[parts.length - 1]);
  return { x, y };
}

export function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {lines.map((line) => {
          const endPoint = getEndPoint(line.d);
          return (
            <g key={line.id}>
              <motion.path
                d={line.d}
                stroke="rgba(0, 102, 153, 0.25)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                custom={line.delay}
              />
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="6"
                fill="#006699"
                variants={dotVariants}
                initial="hidden"
                animate="visible"
                custom={line.delay}
              />
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="6"
                fill="rgba(0, 102, 153, 0.3)"
                variants={pulseVariants}
                animate="pulse"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
