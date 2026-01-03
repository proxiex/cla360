"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -inset-[100%] opacity-50"
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(69, 159, 183, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 100% 100%, rgba(69, 159, 183, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 100% 0%, rgba(69, 159, 183, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 0% 100%, rgba(69, 159, 183, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 0% 0%, rgba(69, 159, 183, 0.3), transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function ParallaxBackground({ offset = 0 }: { offset?: number }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 opacity-20"
      style={{
        y: scrollY * 0.5,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/10"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </motion.div>
  );
}
