"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  CheckCircle,
  Users,
  GraduationCap,
  Building2,
  ArrowRight,
  FileCheck,
  Globe,
  Lock,
  Sparkles,
  Linkedin,
  Instagram,
  Youtube,
  Heart,
  Bell,
  BadgeCheck,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLines } from "@/components/motion/AnimatedLines";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face",
    alt: "Professional student with clipboard",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=700&fit=crop&crop=face",
    alt: "Graduate student celebrating",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face",
    alt: "Professional woman smiling",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5 flex items-center">
          {/* Animated Background Lines */}
          <AnimatedLines />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-8"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Your Global Education Partner</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
              >
                The Global Operating System for{" "}
                <span className="text-primary">Verified International Education</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-muted-foreground max-w-xl"
              >
                CLA360 connects students and universities through AI-powered verification and automation.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" variant="outline" className="group rounded-full px-6" asChild>
                    <Link href="/assessment">
                      Get Started
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

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12 flex items-center gap-4"
              >
                <span className="text-sm text-primary font-medium">Follow Us:</span>
                <div className="flex items-center gap-3">
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Youtube className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
              </div>

              {/* Right Column - Image Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex justify-center relative"
              >
                <div className="relative">
                  {/* Circular Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl scale-110" />
                  
                  {/* Image Container */}
                  <div className="relative w-[400px] h-[480px]">
                    {/* Circle Frame */}
                    <div className="absolute inset-0 rounded-[40%_40%_35%_35%] bg-gradient-to-b from-sky-100 to-sky-50 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage}
                          src={heroImages[currentImage].src}
                          alt={heroImages[currentImage].alt}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.7 }}
                          className="w-full h-full object-cover object-top"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Floating Badge - Approved */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <Heart className="h-4 w-4 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">Approved</p>
                        <p className="text-[10px] text-muted-foreground">Transcript</p>
                      </div>
                    </motion.div>

                    {/* Floating Badge - Student ID */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">Student ID</p>
                        <p className="text-[10px] text-muted-foreground">••••••••</p>
                      </div>
                    </motion.div>

                    {/* Floating Badge - Notification */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="absolute -left-8 bottom-1/4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Bell className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">Notification</p>
                        <div className="flex items-center gap-1">
                          <BadgeCheck className="h-3 w-3 text-primary" />
                          <p className="text-[10px] text-muted-foreground">PRV: 87/100</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentImage ? "bg-primary w-6" : "bg-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who CLA360 Serves */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                One platform. Multiple stakeholders. Shared trust.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                CLA360 sits at the intersection of students, institutions, and oversight bodies — 
                aligning incentives through verification and readiness standards.
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
              {/* Universities Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Building2 className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">
                        Universities & Colleges
                      </h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        Reduce risk. Improve yield. Protect admissions integrity.
                      </p>
                      <ul className="mt-6 space-y-3">
                        {[
                          "Engage only pre-verified students",
                          "Reduce document fraud and visa denials",
                          "Focus recruitment on offer-ready candidates",
                          "Participate in curated digital and in-person engagements",
                        ].map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          >
                            <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <Button className="mt-8" variant="outline" asChild>
                        <Link href="/universities">
                          Learn how universities use CLA360 <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Students Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </motion.div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">
                        For Students
                      </h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        Start with readiness.
                      </p>
                      <ul className="mt-6 space-y-3">
                        {[
                          "Understand visa and application readiness",
                          "Complete verification when appropriate",
                          "Engage universities through structured, trusted pathways",
                        ].map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <Button className="mt-8" asChild>
                        <Link href="/students">
                          Go to the Students page <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How The System Works */}
        <section className="bg-muted/30 py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Readiness first. Verification second. Engagement last.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                CLA360 introduces structure before application and trust before access.
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Early readiness assessment",
                  description: "Understand your visa, academic, and financial readiness before committing resources.",
                  icon: FileCheck,
                },
                {
                  step: "02",
                  title: "Document verification and standardization",
                  description: "Verify identity and academic credentials to create a university-grade profile.",
                  icon: Shield,
                },
                {
                  step: "03",
                  title: "Controlled engagement",
                  description: "Connect verified students with institutions through structured pathways.",
                  icon: Users,
                },
              ].map((item, index) => (
                <motion.div 
                  key={item.step} 
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <motion.div 
                    className="flex flex-col items-center text-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-8 w-8" />
                    </motion.div>
                    <span className="mt-4 text-sm font-medium text-primary">Step {item.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mx-auto mt-12 max-w-xl text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm font-medium text-muted-foreground">
                No shortcuts. No mass pipelines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why CLA360 Exists */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Global mobility needs better signals.
              </h2>
            </motion.div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {[
                {
                  title: "Applications alone don't indicate readiness.",
                  icon: Globe,
                },
                {
                  title: "Volume doesn't equal quality.",
                  icon: Users,
                },
                {
                  title: "Trust must be earned before engagement.",
                  icon: Lock,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-0 bg-muted/50 h-full">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="h-8 w-8 text-primary" />
                        </motion.div>
                        <p className="mt-4 text-sm font-medium text-foreground">{item.title}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="mx-auto mt-12 max-w-2xl text-center text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CLA360 was built to introduce standards where uncertainty exists — for students, 
              institutions, and the systems that connect them.
            </motion.p>
          </div>
        </section>

        {/* People / Testimonials Section */}
        <section className="py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted by students worldwide
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from students who have successfully navigated their journey with CLA360
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Kwame Asante",
                  country: "Ghana",
                  university: "University of Toronto",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                  quote: "CLA360 helped me understand my readiness before I even started applying. The verification process gave universities confidence in my application.",
                },
                {
                  name: "Amina Okonkwo",
                  country: "Nigeria",
                  university: "University of Manchester",
                  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
                  quote: "The PRV Score was a game changer. I knew exactly what to improve before submitting my applications. Now I'm studying my dream course in the UK!",
                },
                {
                  name: "David Mensah",
                  country: "Kenya",
                  university: "McGill University",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                  quote: "The structured pathway CLA360 provides is incredible. No more guessing if I'm ready — the platform showed me exactly where I stood.",
                },
                {
                  name: "Fatima Hassan",
                  country: "Egypt",
                  university: "TU Munich",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
                  quote: "From verification to university matching, CLA360 made my journey to Germany seamless. I felt supported every step of the way.",
                },
                {
                  name: "Emmanuel Adeyemi",
                  country: "Nigeria",
                  university: "University of British Columbia",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                  quote: "The document verification saved me so much time. Universities trusted my credentials immediately because they were pre-verified.",
                },
                {
                  name: "Grace Nyambura",
                  country: "Kenya",
                  university: "University of Melbourne",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                  quote: "I was matched with universities that actually fit my profile. No more applying blindly — CLA360 connected me with the right opportunities.",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full border-2 hover:border-primary/30 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                          >
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
                            />
                            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-2 pt-4 border-t">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span className="text-xs font-medium text-primary">
                            {testimonial.university}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { value: "5,000+", label: "Students Verified" },
                { value: "120+", label: "Partner Universities" },
                { value: "35+", label: "Countries Represented" },
                { value: "92%", label: "Visa Success Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-16 lg:py-20 overflow-hidden relative">
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
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Engage with CLA360
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">Choose your path:</p>
              <motion.div 
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/universities">For Universities</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/students">For Students</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link href="/contact">For Partners</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
