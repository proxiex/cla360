"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Building2,
  FileCheck,
  X,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { AnimatedLines } from "@/components/motion/AnimatedLines";

function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HoverScale({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function UniversitiesContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5 flex items-center">
        <AnimatedLines />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-8"
            >
              <Building2 className="h-4 w-4 text-primary" />
              <span>For Universities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
            >
              Engage{" "}
              <span className="text-primary">Pre-Verified Students</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl text-muted-foreground"
            >
              Reduce risk. Improve yield. Protect admissions integrity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-muted-foreground"
            >
              CLA360 provides verified, readiness-assessed students through structured 
              digital and in-person engagement pathways.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">
                    Request Partnership Info
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/events">View Engagement Events</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Universities Get */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Universities Get
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Access to students who are verified, assessed, and ready to engage.
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              "Pre-verified identity and academic credentials",
              "Standardized readiness scores (PRV)",
              "Reduced document fraud risk",
              "Higher conversion from engagement to offer",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How Universities Engage
            </h2>
          </FadeIn>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Define Requirements",
                description: "Set your verification thresholds and engagement preferences.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Access Verified Pool",
                description: "Browse and filter students who meet your criteria.",
                icon: Shield,
              },
              {
                step: "03",
                title: "Structured Engagement",
                description: "Connect through digital matching or curated in-person events.",
                icon: Users,
              },
            ].map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.15}>
                <HoverScale>
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="h-8 w-8" />
                    </motion.div>
                    <span className="mt-4 text-sm font-medium text-primary">Step {item.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </HoverScale>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What CLA360 Does NOT Do */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What CLA360 Does NOT Do
            </h2>
            <p className="mt-4 text-muted-foreground">
              Transparency in what we don't provide:
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              "We do not guarantee enrollment outcomes",
              "We do not act as agents or intermediaries",
              "We do not influence admission decisions",
              "We do not provide volume-based pipelines",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg bg-background border"
                  whileHover={{ scale: 1.02 }}
                >
                  <X className="h-6 w-6 shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, white 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Partner With CLA360
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join universities engaging verified, offer-ready students.
            </p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Request Partnership Info <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/events">View Events</Link>
                </Button>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
