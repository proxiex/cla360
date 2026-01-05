"use client";

import Link from "next/link";
import { useState, useEffect, useRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  Lock,
  CheckCircle,
  Download,
  ArrowRight,
  Sparkles,
  Shield,
  GraduationCap,
  Building2,
  Calendar,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <div ref={ref}>
      <Progress value={progress} className="h-2 transition-all duration-1000 ease-out" />
    </div>
  );
}

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1500;
        const increment = value / (duration / 16);
        const counter = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(counter);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return <span ref={ref}>{count}</span>;
}

const requirements = [
  { id: 1, name: "Complete your profile", completed: true, icon: CheckCircle },
  { id: 2, name: "Upload required documents", completed: false, icon: Shield },
  { id: 3, name: "Complete visa readiness questionnaire", completed: false, icon: GraduationCap },
  { id: 4, name: "Documents verified by CLA360", completed: false, icon: Building2 },
];

const unlockBenefits = [
  { text: "Your profile becomes visible to universities", icon: Building2 },
  { text: "Eligibility for university recommendations", icon: Award },
  { text: "Access to curated university engagements", icon: Calendar },
  { text: "Invitation to CLA360 university events", icon: Sparkles },
];

const scoreBreakdown = [
  { label: "Financial Readiness", score: 28, max: 35, color: "bg-emerald-500" },
  { label: "Academic Readiness", score: 25, max: 30, color: "bg-blue-500" },
  { label: "Visa Signals", score: 18, max: 25, color: "bg-amber-500" },
  { label: "Program Alignment", score: 7, max: 10, color: "bg-violet-500" },
];

export function PRVScoreContent() {
  const [isVerified] = useState(false);
  const [hoveredReq, setHoveredReq] = useState<number | null>(null);

  return (
    <div className="p-6 lg:p-8">
      <FadeIn>
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4"
          >
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">PRV Score System</span>
          </motion.div>
          <h1 className="text-2xl font-bold text-foreground">Hard PRV Score</h1>
          <p className="mt-1 text-muted-foreground">
            Your university-grade readiness score based on verified information.
          </p>
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        {!isVerified ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Locked State Card */}
            <FadeIn delay={0.1}>
              <Card className="border-2 border-dashed overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardContent className="flex flex-col items-center justify-center py-16 text-center relative">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-muted to-muted/50 shadow-inner"
                  >
                    <Lock className="h-10 w-10 text-muted-foreground" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-xl font-semibold"
                  >
                    Hard PRV Score Not Yet Generated
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-2 max-w-md text-muted-foreground"
                  >
                    Complete verification to generate your Hard PRV Score. This score is based on
                    verified documents and is required for university engagement.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 flex items-center gap-4"
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Join 1,200+ verified students
                    </span>
                  </motion.div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Requirements Card */}
            <FadeIn delay={0.2}>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Requirements for Hard PRV Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {requirements.map((req, index) => (
                      <motion.div
                        key={req.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onMouseEnter={() => setHoveredReq(req.id)}
                        onMouseLeave={() => setHoveredReq(null)}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                          req.completed
                            ? "bg-primary/5 border border-primary/20"
                            : hoveredReq === req.id
                            ? "bg-muted/80 border border-muted-foreground/10"
                            : "bg-muted/50 border border-transparent"
                        }`}
                      >
                        <motion.div
                          animate={hoveredReq === req.id ? { scale: 1.1 } : { scale: 1 }}
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            req.completed
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted-foreground/10"
                          }`}
                        >
                          {req.completed ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <req.icon className="h-5 w-5 text-muted-foreground" />
                          )}
                        </motion.div>
                        <div className="flex-1">
                          <span
                            className={`font-medium ${
                              req.completed ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {req.name}
                          </span>
                          {req.completed && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="text-xs text-primary mt-0.5"
                            >
                              Completed
                            </motion.p>
                          )}
                        </div>
                        {!req.completed && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button className="mt-6 w-full group" size="lg" asChild>
                      <Link href="/app/documents">
                        Continue Verification
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Benefits Card */}
            <FadeIn delay={0.3}>
              <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    What Hard PRV Score Unlocks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {unlockBenefits.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-background/80 border border-border/50 shadow-sm"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Status Badge */}
            <FadeIn>
              <div className="flex justify-center">
                <Badge className="bg-green-100 text-green-700 border border-green-200 px-4 py-1.5">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Status: University-Eligible (Verified)
                </Badge>
              </div>
            </FadeIn>

            {/* Score Card */}
            <FadeIn delay={0.1}>
              <Card className="border-2 border-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <CheckCircle className="mr-1 h-3 w-3" /> Verified
                        </Badge>
                      </motion.div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-bold text-primary">
                          <AnimatedNumber value={78} delay={0.3} />
                        </span>
                        <span className="text-2xl text-muted-foreground">/100</span>
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-2 text-lg font-medium text-foreground"
                      >
                        Ready to Proceed
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-1 text-sm text-muted-foreground"
                      >
                        Verified on December 15, 2025
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      transition={{ type: "spring", delay: 0.4 }}
                    >
                      <Award className="h-20 w-20 text-primary" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Score Breakdown */}
            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Score Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {scoreBreakdown.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.label}</span>
                        <span className="font-semibold text-foreground">
                          {item.score}/{item.max}
                        </span>
                      </div>
                      <AnimatedProgress
                        value={(item.score / item.max) * 100}
                        delay={0.4 + index * 0.15}
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            {/* Verification Details */}
            <FadeIn delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>Verification Snapshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "Identity Verified", value: "Yes", positive: true },
                      { label: "Academic Documents Verified", value: "Yes", positive: true },
                      { label: "Verification Date", value: "Dec 15, 2025" },
                      { label: "Status", badge: "University-Eligible" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        {item.badge ? (
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            {item.badge}
                          </Badge>
                        ) : (
                          <span
                            className={`font-medium ${
                              item.positive ? "text-green-600 dark:text-green-400" : ""
                            }`}
                          >
                            {item.value}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Download Report */}
            <FadeIn delay={0.4}>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="w-full h-12 text-base" size="lg">
                  <Download className="mr-2 h-5 w-5" /> Download University-Grade Report
                </Button>
              </motion.div>
            </FadeIn>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
