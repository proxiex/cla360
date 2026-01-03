"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  FileText,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Download,
  ExternalLink,
  Calendar,
  ArrowRight,
  Filter,
  BookOpen,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Research", icon: FileText },
  { id: "trends", label: "Market Trends", icon: TrendingUp },
  { id: "insights", label: "Student Insights", icon: Users },
  { id: "policy", label: "Policy & Compliance", icon: Award },
  { id: "data", label: "Data Reports", icon: BarChart3 },
];

const researchPapers = [
  {
    id: 1,
    title: "Global Student Mobility Trends 2024",
    category: "trends",
    date: "December 2024",
    readTime: "12 min read",
    downloads: "2.3K",
    excerpt: "An in-depth analysis of international student movement patterns, emerging destinations, and the impact of post-pandemic policies on global education.",
    tags: ["Mobility", "Trends", "2024"],
    featured: true,
  },
  {
    id: 2,
    title: "The PRV Score Framework: Methodology & Validation",
    category: "data",
    date: "November 2024",
    readTime: "18 min read",
    downloads: "1.8K",
    excerpt: "Technical documentation of the Pre-Readiness Verification (PRV) scoring system, including validation studies and predictive accuracy metrics.",
    tags: ["PRV", "Methodology", "Research"],
    featured: true,
  },
  {
    id: 3,
    title: "Document Fraud in International Admissions",
    category: "policy",
    date: "October 2024",
    readTime: "15 min read",
    downloads: "3.1K",
    excerpt: "A comprehensive study on the prevalence of document fraud, detection methods, and the role of verification systems in maintaining academic integrity.",
    tags: ["Fraud", "Compliance", "Security"],
    featured: false,
  },
  {
    id: 4,
    title: "Financial Readiness & Visa Success Rates",
    category: "insights",
    date: "September 2024",
    readTime: "10 min read",
    downloads: "1.5K",
    excerpt: "Correlation analysis between financial preparedness indicators and visa approval outcomes across major study destinations.",
    tags: ["Finance", "Visa", "Success"],
    featured: false,
  },
  {
    id: 5,
    title: "AI in Education Verification: Opportunities & Challenges",
    category: "trends",
    date: "August 2024",
    readTime: "14 min read",
    downloads: "2.7K",
    excerpt: "Exploring the role of artificial intelligence in streamlining credential verification while addressing privacy and ethical considerations.",
    tags: ["AI", "Technology", "Ethics"],
    featured: false,
  },
  {
    id: 6,
    title: "Student Decision-Making: What Influences University Choice",
    category: "insights",
    date: "July 2024",
    readTime: "11 min read",
    downloads: "1.9K",
    excerpt: "Survey results from 5,000+ students revealing key factors that influence destination and institution selection in international education.",
    tags: ["Survey", "Behavior", "Choice"],
    featured: false,
  },
];

const stats = [
  { label: "Research Papers", value: "45+", icon: FileText },
  { label: "Data Points Analyzed", value: "2M+", icon: BarChart3 },
  { label: "Countries Studied", value: "80+", icon: Globe },
  { label: "Partner Institutions", value: "150+", icon: Award },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPapers = researchPapers.filter((paper) => {
    const matchesCategory = selectedCategory === "all" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPapers = researchPapers.filter(p => p.featured);

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
                <Lightbulb className="h-8 w-8 text-primary" />
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Research & Insights
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Data-driven research on international education, student mobility, verification standards, and the future of global learning.
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
                    placeholder="Search research papers, topics, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 pl-12 pr-4 text-base"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border bg-card p-6 text-center shadow-sm"
                >
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <div className="mt-3 text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Research */}
        {featuredPapers.length > 0 && (
          <section className="py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Featured Research</h2>
                    <p className="mt-2 text-muted-foreground">Our latest and most impactful studies</p>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  {featuredPapers.map((paper, i) => (
                    <motion.div
                      key={paper.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="group h-full border-2 hover:border-primary/50 hover:shadow-xl transition-all">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              Featured
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {paper.date}
                            </div>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {paper.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {paper.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {paper.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {paper.readTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                {paper.downloads}
                              </span>
                            </div>
                            <Button variant="ghost" size="sm" className="group/btn">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Research */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">All Research</h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
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

              {/* Research Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPapers.map((paper, i) => (
                  <motion.div
                    key={paper.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="group h-full hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between gap-2 mb-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {paper.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            {paper.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {paper.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {paper.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {paper.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Download className="h-3 w-3" />
                            {paper.downloads}
                          </span>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredPapers.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">No research found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">
                        Partner with us on research
                      </h2>
                      <p className="mt-4 text-muted-foreground">
                        Collaborate with CLA360 on cutting-edge research in international education, verification standards, and student mobility.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-4">
                        <Button size="lg" asChild>
                          <Link href="/contact">
                            Get in Touch
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link href="/trust">
                            View Methodology
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Target, label: "Data-Driven" },
                        { icon: Users, label: "Collaborative" },
                        { icon: Award, label: "Peer-Reviewed" },
                        { icon: Globe, label: "Global Impact" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 text-center"
                        >
                          <item.icon className="h-8 w-8 text-primary" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
