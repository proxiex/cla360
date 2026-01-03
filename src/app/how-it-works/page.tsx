"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  User,
  GraduationCap,
  FileText,
  Wallet,
  Target,
  Award,
  Building2,
  Zap,
  Lock,
  Globe,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Start with Readiness",
    icon: FileCheck,
    description: "Take our soft PRV assessment to understand your visa, academic, and financial readiness before investing time and money.",
    features: [
      "No documents required",
      "Instant readiness signal",
      "Identify gaps early",
      "Free assessment",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Complete Verification",
    icon: Shield,
    description: "When ready, enter our verification process to standardize your profile and generate your Hard PRV Score.",
    features: [
      "Identity verification",
      "Academic credential checks",
      "Financial documentation",
      "Statement of intent review",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Get Matched",
    icon: Users,
    description: "Access university engagements, digital matching, and curated opportunities based on your verified profile.",
    features: [
      "University matching",
      "Direct engagement",
      "Application support",
      "Visa guidance",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const forStudents = [
  { icon: User, title: "Profile Assessment", description: "Understand where you stand" },
  { icon: FileText, title: "Document Verification", description: "Get credentials verified" },
  { icon: Award, title: "PRV Score", description: "Receive your readiness score" },
  { icon: Building2, title: "University Matching", description: "Connect with institutions" },
];

const forUniversities = [
  { icon: Shield, title: "Pre-Verified Students", description: "Engage ready candidates" },
  { icon: Lock, title: "Fraud Prevention", description: "Reduce document fraud" },
  { icon: TrendingUp, title: "Better Yield", description: "Improve conversion rates" },
  { icon: Globe, title: "Global Reach", description: "Access diverse talent" },
];

const benefits = [
  {
    title: "For Students",
    items: [
      "Know your readiness before applying",
      "Standardized profile accepted by universities",
      "Increased visa success rates",
      "Direct university engagement",
      "Transparent process",
    ],
  },
  {
    title: "For Universities",
    items: [
      "Pre-verified student pool",
      "Reduced fraud and risk",
      "Better enrollment yield",
      "Streamlined admissions",
      "Data-driven recruitment",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-28">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
              >
                <Zap className="h-8 w-8 text-primary" />
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                How CLA360 Works
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                A simple, structured pathway from readiness assessment to university engagement — built on verification and trust.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Process Steps */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Three Simple Steps
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From assessment to acceptance — here's how we help you succeed
              </p>
            </motion.div>

            <div className="space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </div>
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${step.color}`}>
                          <step.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                      <Card className="overflow-hidden border-2">
                        <div className={`h-2 bg-gradient-to-r ${step.color}`} />
                        <CardContent className="p-8">
                          <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                            <step.icon className="h-24 w-24 text-muted-foreground/30" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* For Students & Universities */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* For Students */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-8">For Students</h2>
                <div className="space-y-4">
                  {forStudents.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all">
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* For Universities */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-8">For Universities</h2>
                <div className="space-y-4">
                  {forUniversities.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all">
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                            <item.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why CLA360?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Benefits for all stakeholders in international education
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-all">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-6">{benefit.title}</h3>
                      <ul className="space-y-4">
                        {benefit.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Take the first step toward your international education journey
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/assessment">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
