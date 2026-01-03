"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  FileText,
  Shield,
  CreditCard,
  Users,
  BookOpen,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "getting-started", label: "Getting Started", icon: BookOpen },
  { id: "verification", label: "Verification", icon: Shield },
  { id: "prv-score", label: "PRV Score", icon: FileText },
  { id: "universities", label: "Universities", icon: Users },
  { id: "billing", label: "Billing & Payments", icon: CreditCard },
];

const faqs = [
  {
    category: "getting-started",
    question: "What is CLA360?",
    answer: "CLA360 is a global operating system for verified international education. We connect students and universities through AI-powered verification, readiness assessment (PRV Score), and structured engagement pathways.",
  },
  {
    category: "getting-started",
    question: "How do I get started?",
    answer: "Start with our free Soft PRV assessment at /assessment. This gives you an early readiness signal without requiring any documents. When you're ready, you can enter verification to unlock university matching.",
  },
  {
    category: "getting-started",
    question: "Is CLA360 free?",
    answer: "The Soft PRV assessment is completely free. Verification services have associated fees, which vary by region and service level. Contact us for detailed pricing.",
  },
  {
    category: "verification",
    question: "What documents do I need for verification?",
    answer: "You'll need: (1) Government-issued ID, (2) Academic transcripts and certificates, (3) Financial documentation (bank statements, sponsor letters), and (4) Statement of intent. Our platform guides you through each step.",
  },
  {
    category: "verification",
    question: "How long does verification take?",
    answer: "Identity verification typically completes within 24-48 hours. Academic credential verification takes 5-7 business days. Full verification (Hard PRV Score) is usually complete within 2 weeks.",
  },
  {
    category: "verification",
    question: "Is my data secure?",
    answer: "Yes. We use bank-level encryption, comply with GDPR and international data protection standards, and never share your data without explicit consent. Read our Privacy Policy for details.",
  },
  {
    category: "prv-score",
    question: "What is a PRV Score?",
    answer: "PRV (Pre-Readiness Verification) Score is a 0-100 metric assessing your readiness for international study across financial, academic, visa, and alignment dimensions. Soft PRV is self-reported; Hard PRV is document-verified.",
  },
  {
    category: "prv-score",
    question: "What's the difference between Soft and Hard PRV?",
    answer: "Soft PRV is based on your self-reported information (free, instant). Hard PRV requires document verification and is accepted by universities for admissions decisions (fee applies).",
  },
  {
    category: "prv-score",
    question: "Can I improve my PRV Score?",
    answer: "Yes! Your score updates as you improve your profile. Common improvements: increase savings, complete English tests, strengthen academic records, or clarify your career plan.",
  },
  {
    category: "universities",
    question: "How does university matching work?",
    answer: "Once verified, you're matched with universities based on your PRV Score, academic profile, field of study, and preferences. Universities can then engage you directly through our platform.",
  },
  {
    category: "universities",
    question: "Do universities see my full profile?",
    answer: "Universities see your verified credentials and PRV Score only if you grant permission. You control what information is shared and with whom.",
  },
  {
    category: "billing",
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards (Visa, Mastercard, Amex), bank transfers, and mobile money in select regions. All payments are processed securely.",
  },
  {
    category: "billing",
    question: "Can I get a refund?",
    answer: "Verification fees are non-refundable once processing begins. If you haven't started verification, contact support within 7 days for a full refund.",
  },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "support@cla360.app",
    detail: "Response within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available on dashboard",
    detail: "Mon-Fri, 9am-6pm GMT",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "+1 (555) 123-4567",
    detail: "Mon-Fri, 9am-5pm GMT",
  },
];

export default function HelpPage() {
  const [selectedCategory, setSelectedCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
                <HelpCircle className="h-8 w-8 text-primary" />
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                How can we help?
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Find answers, get support, or reach out to our team
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto mt-10 max-w-xl"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 pl-12 pr-4 text-base"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                      <p className="text-sm text-primary mb-1">{method.description}</p>
                      <p className="text-xs text-muted-foreground">{method.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Quick answers to common questions
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border hover:border-primary/50"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border rounded-lg px-6 bg-background">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">No results found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your search or browse different categories
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Still need help?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Privacy Protected</p>
                      <p className="text-sm text-muted-foreground">Your information is secure</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">Message sent!</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
