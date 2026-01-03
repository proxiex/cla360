"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Shield,
  Zap,
  Award,
  TrendingUp,
  ArrowRight,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We prioritize verification and transparency to build trust between students and institutions.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description: "Every decision we make puts students first, ensuring their success is our success.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building infrastructure that serves students and universities across continents.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We leverage technology to solve complex problems in international education.",
  },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    bio: "Former Director of International Admissions at top universities. PhD in Education Policy.",
  },
  {
    name: "Michael Osei",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Built verification systems at scale. 15+ years in EdTech and AI.",
  },
  {
    name: "Amara Nwosu",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face",
    bio: "Led student services at international education organizations across Africa.",
  },
  {
    name: "David Kim",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "Product leader with experience at education platforms serving millions of students.",
  },
];

const milestones = [
  { year: "2021", title: "Founded", description: "CLA360 established with a mission to standardize international education verification" },
  { year: "2022", title: "First 1,000 Students", description: "Verified our first thousand students and partnered with 20 universities" },
  { year: "2023", title: "Global Expansion", description: "Expanded to 50+ countries with 100+ university partnerships" },
  { year: "2024", title: "5,000+ Verified", description: "Reached 5,000 verified students and launched PRV Score framework" },
];

export default function AboutPage() {
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
                <Heart className="h-8 w-8 text-primary" />
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Building trust in global education
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                CLA360 is the operating system for verified international education — connecting students, universities, and oversight bodies through standardized verification and readiness assessment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To introduce structure, standards, and trust into international education by verifying student readiness before application and creating transparent pathways between students and universities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-6">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where every student has a clear, trusted pathway to international education, and every university can confidently engage with pre-verified, ready-to-succeed candidates.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4"
                      >
                        <value.icon className="h-7 w-7 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experienced leaders from education, technology, and operations
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all group">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative mb-4"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full aspect-square rounded-xl object-cover"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                          <button className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                            <Linkedin className="h-4 w-4 text-primary" />
                          </button>
                          <button className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                            <Mail className="h-4 w-4 text-primary" />
                          </button>
                        </div>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-primary mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Journey</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key milestones in building the future of international education
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold z-10">
                        {milestone.year}
                      </div>
                      <Card className="flex-1 hover:shadow-lg transition-all">
                        <CardContent className="p-6">
                          <div className="md:hidden text-sm font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "5,000+", label: "Students Verified", icon: Users },
                { value: "150+", label: "Partner Universities", icon: Award },
                { value: "50+", label: "Countries", icon: Globe },
                { value: "92%", label: "Visa Success Rate", icon: TrendingUp },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center">
                    <CardContent className="p-8">
                      <stat.icon className="mx-auto h-10 w-10 text-primary mb-4" />
                      <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
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
                Join us in transforming education
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Whether you're a student, university, or partner — let's build the future together.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/students">
                    For Students
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/universities">For Universities</Link>
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
