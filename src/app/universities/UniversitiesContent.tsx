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
  AlertTriangle,
  Eye,
  Lock,
  Handshake,
  Target,
  Scale,
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
              Verified readiness.{" "}
              <span className="text-primary">Responsible engagement.</span>{" "}
              Better outcomes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              CLA360 is a verification-first platform that helps universities engage{" "}
              <strong>pre-verified, visa-ready students</strong> through structured digital and in-person pathways.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-muted-foreground font-medium"
            >
              We focus on <strong>quality, not volume</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/demo">
                    Explore How CLA360 Works
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

      {/* The Problem Universities Face */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Problem Universities Face
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              International recruitment today is constrained by:
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4">
            {[
              "High visa denial rates",
              "Low application-to-enrollment yield",
              "Limited visibility into student readiness before engagement",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-lg bg-destructive/5 border border-destructive/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <AlertTriangle className="h-6 w-6 shrink-0 text-destructive" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How CLA360 Helps */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How CLA360 Helps
            </h2>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-12">
            {/* Readiness Before Application */}
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
                      <h3 className="text-xl font-semibold text-foreground">Readiness Before Application</h3>
                      <p className="mt-3 text-muted-foreground">
                        CLA360 introduces structured readiness assessment <strong>before</strong> students engage universities.
                      </p>
                      <p className="mt-3 text-muted-foreground">
                        Students entering CLA360 university pathways have:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Completed readiness assessment",
                          "Verified academic and identity documents",
                          "A completed Hard PRV Score (university-grade readiness signal)",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm font-medium text-foreground">
                        This ensures universities engage students who are prepared, serious, and verifiable.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Verification-First Engagement */}
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
                      <h3 className="text-xl font-semibold text-foreground">Verification-First Engagement</h3>
                      <p className="mt-3 text-muted-foreground">
                        CLA360 is built around verification as a prerequisite, not an afterthought.
                      </p>
                      <p className="mt-3 text-muted-foreground">
                        Universities benefit from:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Standardized academic data",
                          "Authenticated documents",
                          "Reduced manual verification burden",
                          "Clear readiness signals aligned with institutional expectations",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm font-medium text-foreground">
                        Verification is enforced at the system level.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Structured Digital & In-Person Pathways */}
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
                      <h3 className="text-xl font-semibold text-foreground">Structured Digital & In-Person Pathways</h3>
                      <p className="mt-3 text-muted-foreground">
                        Universities engage students through:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Curated digital matching",
                          "Controlled visibility into verified student pools",
                          "Selective in-person university engagements",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">
                        These are <strong>not mass recruitment events</strong>.
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        They are designed for:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Offer-ready candidates</li>
                        <li>• High-intent engagement</li>
                        <li>• Improved yield and visa outcomes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Makes CLA360 Different */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Makes CLA360 Different
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                title: "Not a Marketplace",
                description: "CLA360 does not operate as an open marketplace or agent network.",
                icon: X,
              },
              {
                title: "Not Volume-Driven",
                description: "We do not optimize for application volume or lead generation.",
                icon: Target,
              },
              {
                title: "Standards-Based Access",
                description: "Only students who meet verification and readiness standards can engage universities.",
                icon: Lock,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <HoverScale>
                  <Card className="h-full border-2">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted"
                        whileHover={{ scale: 1.1 }}
                      >
                        <item.icon className="h-7 w-7 text-primary" />
                      </motion.div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mx-auto max-w-2xl text-center mt-8">
            <p className="text-muted-foreground font-medium">
              This protects institutional time, reputation, and outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Universities See */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Universities See
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Universities engaging through CLA360 gain access to:
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {[
              "Pre-verified student profiles",
              "Readiness signals designed to support admissions review",
              "Reduced noise from unprepared or unverifiable applicants",
              "Improved alignment between recruitment and visa outcomes",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-lg bg-background border-2"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Eye className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mx-auto max-w-2xl text-center mt-8">
            <p className="text-muted-foreground">
              CLA360 complements existing admissions processes — it does not replace them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What CLA360 Does (and Does Not Do) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What CLA360 Does (and Does Not Do)
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {/* What CLA360 DOES */}
            <FadeIn direction="left">
              <Card className="h-full border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">CLA360:</h3>
                  <ul className="space-y-3">
                    {[
                      "Supports readiness assessment and document verification",
                      "Facilitates structured student–university engagement",
                      "Prioritizes trust, compliance, and explainability",
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

            {/* What CLA360 does NOT */}
            <FadeIn direction="right">
              <Card className="h-full border-2 border-destructive/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">CLA360 does not:</h3>
                  <ul className="space-y-3">
                    {[
                      "Operate as an agent or representative",
                      "Guarantee admissions outcomes",
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

          <FadeIn delay={0.3} className="mx-auto max-w-2xl text-center mt-8">
            <p className="text-muted-foreground font-medium">
              Admissions authority remains entirely with the institution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Designed for Trust and Accountability */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Designed for Trust and Accountability
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              CLA360 emphasizes:
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              "Clear consent and auditability",
              "Explainable readiness signals",
              "Verification before engagement",
              "Responsible cross-border student mobility",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-lg bg-background border-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Scale className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mx-auto max-w-2xl text-center mt-8">
            <p className="text-muted-foreground">
              Our system is built to align with institutional, regulatory, and reputational requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How Universities Participate */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How Universities Participate
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Universities may engage with CLA360 through:
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              "Pilot participation",
              "Curated digital engagement",
              "Selective in-person university engagements",
              "Ongoing access to verified student pools",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-lg bg-muted/50 border"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Handshake className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mx-auto max-w-2xl text-center mt-8">
            <p className="text-muted-foreground">
              Engagement models are structured, limited, and institution-aligned.
            </p>
          </FadeIn>
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
              className="mt-6 text-xl text-foreground font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              CLA360 helps universities engage fewer students — but better ones.
            </motion.p>
            <div className="mt-8 space-y-2">
              <p className="text-muted-foreground">Readiness before application.</p>
              <p className="text-muted-foreground">Verification before engagement.</p>
              <p className="text-muted-foreground">Structure before outcomes.</p>
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
              Next Steps
            </h2>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/demo">
                    Request a University Overview <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/pilot">Explore Pilot Participation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/contact">Contact the CLA360 Team</Link>
                </Button>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
