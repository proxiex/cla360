"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  FileCheck,
  Shield,
  Users,
  AlertTriangle,
  X,
  GraduationCap,
  Target,
  UserCheck,
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

export function StudentsContent() {
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
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>For Students</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
            >
              Know Before{" "}
              <span className="text-primary">You Go</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl font-semibold text-foreground"
            >
              Visa readiness. Financial preparedness. Verified pathways to universities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-muted-foreground"
            >
              Assess readiness, complete verification, and connect with universities through 
              digital matching and curated in-person engagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/assessment">
                    Check your free Soft PRV Score
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* What CLA360 Does */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One Simple Job
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              CLA360 helps answer one question early:
            </p>
            <motion.p 
              className="mt-4 text-2xl font-semibold text-foreground"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Am I ready to apply to study abroad?"
            </motion.p>
            <p className="mt-6 text-muted-foreground">
              Most students apply first and learn later.
            </p>
            <p className="mt-2 text-muted-foreground">
              CLA360 helps you assess readiness before you apply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How It Works - Step 1 */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-16">
            {/* Step 1 */}
            <FadeIn>
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FileCheck className="h-7 w-7" />
                    </motion.div>
                    <div>
                      <span className="text-sm font-medium text-primary">Step 01</span>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">Soft PRV Score</h3>
                      <p className="mt-3 text-muted-foreground">
                        Generate a <strong>free Soft PRV Score</strong> to get an early signal of:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {["Visa readiness", "Academic fit", "Overall application readiness"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground italic">
                        If you're not ready to apply yet, you'll know early — and can pause without unnecessary cost or pressure.
                      </p>
                      <motion.div className="mt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" asChild>
                          <Link href="/assessment">
                            Check your Soft PRV Score <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.1}>
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Shield className="h-7 w-7" />
                    </motion.div>
                    <div>
                      <span className="text-sm font-medium text-primary">Step 02</span>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">Hard PRV Score + Verification</h3>
                      <p className="mt-3 text-muted-foreground">
                        If you choose to move forward, you pay to:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Submit full information",
                          "Verify academic and identity documents",
                          "Generate a Hard PRV Score",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        This is the <strong>verified, university-grade score</strong> institutions actually trust.
                      </p>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium text-foreground">Once completed:</p>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Your profile is verified</li>
                          <li>• Your data is standardized</li>
                          <li>• Your readiness is defensible</li>
                        </ul>
                        <p className="mt-3 text-sm font-medium text-primary">
                          You now enter the CLA360 verified student pool.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.2}>
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Users className="h-7 w-7" />
                    </motion.div>
                    <div>
                      <span className="text-sm font-medium text-primary">Step 03</span>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">Matching & Real Opportunities</h3>
                      <p className="mt-3 text-muted-foreground">
                        Verified students can:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Receive recommendations from best-fit universities",
                          "Be visible to institutions seeking pre-verified candidates",
                          "Be invited to curated CLA360 university engagements, including selective in-person opportunities",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">
                        These are not mass recruiting events.
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        They are designed for offer-ready students.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Important to Know */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <Card className="border-2 border-amber-200 bg-amber-50/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Important to Know</h3>
                    <p className="mt-3 text-muted-foreground">
                      CLA360 university engagements are designed for <strong>pre-verified students</strong>.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      Universities participate in CLA360 to meet students who have:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                        Verified academic and identity documents
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                        A completed Hard PRV Score
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Only students who meet these verification standards are eligible to participate in CLA360 digital and in-person university engagements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Who CLA360 Is For */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who CLA360 Is For
            </h2>
            <p className="mt-4 text-muted-foreground">
              CLA360 is designed for students who:
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4">
            {[
              "Want to understand their readiness before applying",
              "Are willing to complete verification when appropriate",
              "Are seeking structured, university-aligned pathways",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-lg bg-background border-2"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <UserCheck className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mx-auto max-w-2xl text-center mt-8">
            <p className="text-muted-foreground font-medium">
              CLA360 is built around standards, not shortcuts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What CLA360 Is (And Isn't) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What CLA360 Is (And Isn't)
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {/* What CLA360 IS */}
            <FadeIn direction="left">
              <Card className="h-full border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">CLA360 is:</h3>
                  <ul className="space-y-3">
                    {[
                      "A readiness and verification platform",
                      "A structured readiness assessment framework",
                      "A pathway for verified student–university engagement",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            {/* What CLA360 is NOT */}
            <FadeIn direction="right">
              <Card className="h-full border-2 border-destructive/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">CLA360 does not:</h3>
                  <ul className="space-y-3">
                    {[
                      "Operate as an agent or representative",
                      "Guarantee admission outcomes",
                      "Influence visa decisions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Bottom Line
            </h2>
            <motion.p 
              className="mt-6 text-xl text-foreground font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              CLA360 helps you assess readiness, complete verification, and engage universities — in that order.
            </motion.p>
            <div className="mt-6 space-y-2">
              <p className="text-muted-foreground">Nothing more.</p>
              <p className="text-muted-foreground">Nothing less.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Start With Clarity
            </h2>
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/assessment">
                  Check your Soft PRV Score <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
