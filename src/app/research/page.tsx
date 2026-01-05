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
  Shield,
  Building2,
  GraduationCap,
  Scale,
  Cpu,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Research", icon: FileText },
  { id: "geopolitics", label: "Global Politics & Mobility", icon: Globe },
  { id: "africa", label: "Africa-Focused", icon: Compass },
  { id: "visa", label: "Visa Readiness & Risk", icon: Shield },
  { id: "verification", label: "Verification & Trust", icon: Award },
  { id: "universities", label: "Universities & Enrollment", icon: Building2 },
  { id: "sponsors", label: "Sponsors & Funding", icon: Target },
  { id: "technology", label: "Technology & AI", icon: Cpu },
  { id: "policy", label: "Policy & Ethics", icon: Scale },
  { id: "future", label: "Future Scenarios", icon: TrendingUp },
  { id: "cla360", label: "CLA360 Perspectives", icon: Lightbulb },
];

const researchPapers = [
  // Global Politics & Student Mobility
  {
    id: 1,
    title: "How Geopolitics Is Quietly Reshaping Global Student Mobility in 2025–2030",
    category: "geopolitics",
    date: "January 2025",
    readTime: "14 min read",
    excerpt: "An analysis of how shifting international relations and policy changes are redirecting student flows between major destination countries.",
    tags: ["Geopolitics", "Mobility", "2025"],
    featured: true,
  },
  {
    id: 2,
    title: "From Soft Power to Selectivity: Why Student Visas Are Becoming a National Security Issue",
    category: "geopolitics",
    date: "January 2025",
    readTime: "12 min read",
    excerpt: "Examining the evolving relationship between immigration policy and national security considerations in student visa frameworks.",
    tags: ["Visa Policy", "Security", "Trends"],
    featured: true,
  },
  {
    id: 3,
    title: "How Immigration Politics in the U.S., Canada, and Europe Affect African Applicants Disproportionately",
    category: "geopolitics",
    date: "December 2024",
    readTime: "15 min read",
    excerpt: "Data-driven analysis of visa approval disparities and the systemic factors that create unequal access to international education.",
    tags: ["Immigration", "Africa", "Policy"],
    featured: false,
  },
  {
    id: 4,
    title: "Why Visa Policy Is Now Education Policy",
    category: "geopolitics",
    date: "November 2024",
    readTime: "10 min read",
    excerpt: "How visa regulations have become the de facto gatekeepers of global education access.",
    tags: ["Visa", "Education", "Policy"],
    featured: false,
  },
  // Africa-Focused Mobility Dynamics
  {
    id: 5,
    title: "Why Africa Will Drive Global Student Mobility Growth Over the Next Decade",
    category: "africa",
    date: "January 2025",
    readTime: "16 min read",
    excerpt: "Demographic trends, economic growth, and educational demand position Africa as the next frontier in international student mobility.",
    tags: ["Africa", "Growth", "Demographics"],
    featured: true,
  },
  {
    id: 6,
    title: "Country-by-Country Breakdown: How Visa Approval Rates Differ Across Africa",
    category: "africa",
    date: "December 2024",
    readTime: "18 min read",
    excerpt: "Comprehensive data analysis of visa outcomes by country of origin, revealing significant disparities in approval rates.",
    tags: ["Africa", "Visa Data", "Analysis"],
    featured: false,
  },
  {
    id: 7,
    title: "Why African Credentials Are Trusted Less — and How Verification Changes That",
    category: "africa",
    date: "November 2024",
    readTime: "12 min read",
    excerpt: "Examining the trust deficit facing African academic credentials and the role of verification infrastructure in addressing it.",
    tags: ["Credentials", "Trust", "Verification"],
    featured: false,
  },
  {
    id: 8,
    title: "The Hidden Cost of Applying Abroad from Africa",
    category: "africa",
    date: "October 2024",
    readTime: "11 min read",
    excerpt: "Beyond tuition: analyzing the full financial burden of international education applications for African students.",
    tags: ["Costs", "Access", "Barriers"],
    featured: false,
  },
  // Visa Readiness & Risk Signals
  {
    id: 9,
    title: "What Visa Officers Actually Look For (Beyond the Application Checklist)",
    category: "visa",
    date: "January 2025",
    readTime: "13 min read",
    excerpt: "Insights into visa assessment criteria that go beyond documentation requirements.",
    tags: ["Visa", "Assessment", "Insights"],
    featured: false,
  },
  {
    id: 10,
    title: "Why Financial Preparedness Is the Strongest Visa Predictor",
    category: "visa",
    date: "December 2024",
    readTime: "10 min read",
    excerpt: "Data analysis showing the correlation between financial readiness signals and visa approval outcomes.",
    tags: ["Finance", "Visa", "Prediction"],
    featured: false,
  },
  {
    id: 11,
    title: "Early Risk Signals Universities Can Detect Before Issuing an Offer",
    category: "visa",
    date: "November 2024",
    readTime: "14 min read",
    excerpt: "A framework for identifying readiness indicators that predict successful enrollment outcomes.",
    tags: ["Risk", "Universities", "Signals"],
    featured: false,
  },
  // Verification, Fraud, and Trust Infrastructure
  {
    id: 12,
    title: "The Global Rise of Academic Document Fraud — and Why Africa Is Over-Policed",
    category: "verification",
    date: "January 2025",
    readTime: "15 min read",
    excerpt: "Examining fraud prevalence globally while addressing the disproportionate scrutiny applied to certain regions.",
    tags: ["Fraud", "Verification", "Equity"],
    featured: false,
  },
  {
    id: 13,
    title: "Verification vs Policing: Designing Trust Without Exclusion",
    category: "verification",
    date: "December 2024",
    readTime: "12 min read",
    excerpt: "How verification systems can build trust while avoiding discriminatory outcomes.",
    tags: ["Trust", "Design", "Inclusion"],
    featured: false,
  },
  {
    id: 14,
    title: "What 'University-Grade Verification' Actually Means",
    category: "verification",
    date: "November 2024",
    readTime: "11 min read",
    excerpt: "Defining standards for verification that meet institutional requirements without creating barriers.",
    tags: ["Standards", "Verification", "Quality"],
    featured: false,
  },
  // Universities, Enrollment Strategy & Yield
  {
    id: 15,
    title: "Why Application Volume Is a Misleading Metric",
    category: "universities",
    date: "January 2025",
    readTime: "10 min read",
    excerpt: "Moving beyond vanity metrics to meaningful measures of international recruitment success.",
    tags: ["Metrics", "Strategy", "Yield"],
    featured: false,
  },
  {
    id: 16,
    title: "The True Cost of Low-Intent International Applicants",
    category: "universities",
    date: "December 2024",
    readTime: "12 min read",
    excerpt: "Calculating the hidden costs of processing applications from students unlikely to enroll.",
    tags: ["Costs", "Efficiency", "Admissions"],
    featured: false,
  },
  {
    id: 17,
    title: "How Universities Can Reduce Visa Denials Without Lowering Standards",
    category: "universities",
    date: "November 2024",
    readTime: "14 min read",
    excerpt: "Strategies for improving visa outcomes while maintaining academic selectivity.",
    tags: ["Visa", "Standards", "Strategy"],
    featured: false,
  },
  // Technology, AI & Infrastructure
  {
    id: 18,
    title: "Why Education Needs Trust Infrastructure, Not Marketplaces",
    category: "technology",
    date: "January 2025",
    readTime: "13 min read",
    excerpt: "The case for verification-first platforms over volume-driven recruitment marketplaces.",
    tags: ["Infrastructure", "Trust", "EdTech"],
    featured: false,
  },
  {
    id: 19,
    title: "AI, Bias, and African Applicants: Designing Fair Systems",
    category: "technology",
    date: "December 2024",
    readTime: "15 min read",
    excerpt: "Addressing algorithmic bias in education technology and ensuring equitable outcomes.",
    tags: ["AI", "Bias", "Fairness"],
    featured: false,
  },
  {
    id: 20,
    title: "Why Scoring Systems Must Be Transparent to Be Legitimate",
    category: "technology",
    date: "November 2024",
    readTime: "11 min read",
    excerpt: "The importance of explainability in readiness assessment and verification systems.",
    tags: ["Transparency", "Scoring", "Trust"],
    featured: false,
  },
  // Policy, Ethics & Responsible Mobility
  {
    id: 21,
    title: "Responsible Student Mobility: A Framework for the Next Decade",
    category: "policy",
    date: "January 2025",
    readTime: "16 min read",
    excerpt: "Proposing principles for ethical and sustainable international education practices.",
    tags: ["Ethics", "Framework", "Mobility"],
    featured: false,
  },
  {
    id: 22,
    title: "Who Protects Students From Bad Advice?",
    category: "policy",
    date: "December 2024",
    readTime: "12 min read",
    excerpt: "Examining the accountability gap in international education guidance and recruitment.",
    tags: ["Protection", "Agents", "Ethics"],
    featured: false,
  },
  // Future Scenarios & Foresight
  {
    id: 23,
    title: "What Happens If Visa Approval Rates Continue to Decline?",
    category: "future",
    date: "January 2025",
    readTime: "14 min read",
    excerpt: "Scenario planning for a more restrictive global mobility environment.",
    tags: ["Future", "Scenarios", "Planning"],
    featured: false,
  },
  {
    id: 24,
    title: "Will Study Abroad Become a Privilege of the Verified?",
    category: "future",
    date: "December 2024",
    readTime: "11 min read",
    excerpt: "Exploring how verification requirements may reshape access to international education.",
    tags: ["Access", "Verification", "Future"],
    featured: false,
  },
  // CLA360 Perspective Pieces
  {
    id: 25,
    title: "Why Readiness Must Come Before Application",
    category: "cla360",
    date: "January 2025",
    readTime: "8 min read",
    excerpt: "The rationale for assessing student readiness before engaging with universities.",
    tags: ["Readiness", "Philosophy", "CLA360"],
    featured: false,
  },
  {
    id: 26,
    title: "Verification as a Public Good in Global Education",
    category: "cla360",
    date: "December 2024",
    readTime: "10 min read",
    excerpt: "How verification infrastructure benefits students, universities, and the broader education ecosystem.",
    tags: ["Verification", "Public Good", "Impact"],
    featured: false,
  },
  {
    id: 27,
    title: "Why Structure Beats Scale",
    category: "cla360",
    date: "November 2024",
    readTime: "9 min read",
    excerpt: "The case for quality-focused engagement over volume-driven recruitment.",
    tags: ["Quality", "Structure", "Philosophy"],
    featured: false,
  },
];

const stats = [
  { label: "Research Themes", value: "10", icon: FileText },
  { label: "Articles Planned", value: "60+", icon: BarChart3 },
  { label: "Focus Regions", value: "Africa+", icon: Globe },
  { label: "Partner Institutions", value: "Growing", icon: Award },
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
                Data-driven, research-lite analysis on global student mobility, verification infrastructure, 
                visa readiness, and responsible cross-border education — with a focus on Africa.
              </p>
              <p className="mt-3 text-sm text-muted-foreground italic">
                Every article reflects the readiness-first approach supported by CLA360.
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
              <div className="overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
                <div className="flex gap-2 mb-8 min-w-max">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
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

        {/* About This Research Section */}
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
                        About Our Research
                      </h2>
                      <p className="mt-4 text-muted-foreground">
                        Every article is treated as research-lite, not opinion. We use data, policy references, 
                        and institutional framing. We write with neutrality, not advocacy.
                      </p>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                          "This article is published by the team at CLA360, a verification-first platform 
                          focused on readiness and responsible global student mobility."
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Learn more at <Link href="/" className="text-primary hover:underline">cla360.com</Link>
                        </p>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-4">
                        <Button size="lg" asChild>
                          <Link href="/contact">
                            Partner on Research
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link href="/trust">
                            Our Methodology
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Target, label: "Data-Driven" },
                        { icon: Scale, label: "Neutral Framing" },
                        { icon: BookOpen, label: "Policy-Referenced" },
                        { icon: Globe, label: "Africa-Focused" },
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
