"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  Linkedin,
  Instagram,
  Youtube,
  Heart,
  Bell,
  BadgeCheck,
  User,
  Sparkles,
  Trophy,
  Target,
  BookOpen,
  Calendar,
  TrendingUp,
  Star,
  Zap,
  Rocket,
  ChevronRight,
  Play,
  MessageSquare,
  MapPin,
  Clock,
  Award,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { AnimatedLines } from "@/components/motion/AnimatedLines";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=900&fit=crop",
    alt: "Students collaborating",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=900&fit=crop",
    alt: "Students studying together",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=900&fit=crop",
    alt: "Student success",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science, MIT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "CLA360 made my application process so much smoother. The verification system saved me weeks!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Business, Stanford",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Finally, a platform that understands what international students need. Game changer!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Engineering, Harvard",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "The readiness assessment helped me understand exactly what I needed. Highly recommended!",
    rating: 5,
  },
];

const features = [
  {
    icon: Rocket,
    title: "Quick Start",
    description: "Get verified in under 48 hours",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and protected",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    icon: Trophy,
    title: "Success Rate",
    description: "95% acceptance rate for verified students",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with 500+ universities",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
  },
];

const upcomingEvents = [
  {
    title: "Virtual University Fair 2024",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    type: "Virtual",
    attendees: 1250,
  },
  {
    title: "Application Workshop",
    date: "March 20, 2024",
    time: "3:00 PM EST",
    type: "Hybrid",
    attendees: 450,
  },
  {
    title: "Meet Top Universities",
    date: "March 25, 2024",
    time: "1:00 PM EST",
    type: "In-Person",
    attendees: 800,
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Completely Redesigned */}
        <section className="relative min-h-[95vh] overflow-hidden flex items-center">
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-purple-400/10" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,119,198,0.2),transparent_50%)]" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20 w-full z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Enhanced Text Content */}
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* New Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 mb-8"
                >
                  <Badge className="mb-4 bg-gradient-purple text-white border-0 px-4 py-1.5 text-sm font-medium">
                    <Sparkles className="h-4 w-4 mr-2" />
                    #1 Student Verification Platform
                  </Badge>
                </motion.div>

                {/* Enhanced Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
                >
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your Journey to
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Global Education
                  </span>
                  <br />
                  <span className="text-foreground">
                    Starts Here
                  </span>
                </motion.h1>

                {/* Enhanced Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
                >
                  Join thousands of students who've successfully navigated their path to top universities worldwide. 
                  Get verified, get ready, get accepted.
                </motion.p>

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 space-y-3"
                >
                  {[
                    "48-hour verification process",
                    "Direct university connections",
                    "Personalized guidance",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      size="lg" 
                      className="bg-gradient-purple hover:opacity-90 text-white rounded-full px-8 shadow-purple-lg" 
                      asChild
                    >
                      <Link href="/register">
                        <Rocket className="mr-2 h-5 w-5" />
                        Start Your Journey
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="rounded-full px-8 group" 
                      asChild
                    >
                      <Link href="/demo">
                        <Play className="mr-2 h-5 w-5 text-primary" />
                        Watch Demo
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-12 flex items-center gap-8"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full bg-gradient-purple border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">10,000+ Students</p>
                    <p className="text-xs text-muted-foreground">Successfully verified this month</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Interactive Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  {/* Animated Blob Background */}
                  <motion.div
                    className="absolute -inset-20 opacity-70"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/30 via-purple-500/30 to-purple-600/30 blur-3xl" />
                  </motion.div>
                  
                  {/* Main Image Container with Perspective */}
                  <motion.div 
                    className="relative"
                    style={{ perspective: "1000px" }}
                  >
                    <motion.div
                      className="relative w-[500px] h-[600px] mx-auto"
                      style={{
                        rotateY: 5,
                        rotateX: -5,
                      }}
                      whileHover={{
                        rotateY: 0,
                        rotateX: 0,
                        transition: { duration: 0.5 },
                      }}
                    >
                      {/* Modern Card Frame */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl shadow-2xl overflow-hidden border border-white/50">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-full"
                          >
                            <img
                              src={heroImages[currentImage].src}
                              alt={heroImages[currentImage].alt}
                              className="w-full h-2/3 object-cover"
                            />
                            
                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent">
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="h-14 w-14 rounded-2xl bg-gradient-purple flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform">
                                    <GraduationCap className="h-6 w-6 text-white" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-foreground">Student Profile</p>
                                    <p className="text-xs text-muted-foreground">Verified & Ready</p>
                                  </div>
                                  <Badge className="ml-auto bg-green-100 text-green-700 border-green-200">
                                    <BadgeCheck className="h-3 w-3 mr-1" />
                                    Active
                                  </Badge>
                                </div>
                                
                                {/* Progress Bars */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">Profile Completion</span>
                                    <span className="font-semibold">95%</span>
                                  </div>
                                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-primary to-secondary"
                                      initial={{ width: 0 }}
                                      animate={{ width: "95%" }}
                                      transition={{ duration: 1, delay: 0.5 }}
                                    />
                                  </div>
                                  
                                  <div className="flex items-center justify-between text-xs mt-2">
                                    <span className="text-muted-foreground">Readiness Score</span>
                                    <span className="font-semibold">87/100</span>
                                  </div>
                                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-green-400 to-green-600"
                                      initial={{ width: 0 }}
                                      animate={{ width: "87%" }}
                                      transition={{ duration: 1, delay: 0.7 }}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Floating Interactive Cards */}
                      <motion.div
                        initial={{ opacity: 0, x: -30, y: -10 }}
                        animate={{ opacity: 1, x: -20, y: 0 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05, x: -25 }}
                        className="absolute -left-16 top-20 bg-white rounded-2xl shadow-xl p-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-purple-light flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">Top 5%</p>
                            <p className="text-xs text-muted-foreground">In your region</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 30, y: 10 }}
                        animate={{ opacity: 1, x: 20, y: 0 }}
                        transition={{ delay: 1 }}
                        whileHover={{ scale: 1.05, x: 25 }}
                        className="absolute -right-16 top-40 bg-white rounded-2xl shadow-xl p-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-24 w-24 rounded-full bg-gradient-purple-light flex items-center justify-center mb-6">
                            <Star className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">15 Unis</p>
                            <p className="text-xs text-muted-foreground">Interested in you</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{ scale: 1.05, y: 15 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <Zap className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm font-bold text-foreground">Fast Track Available</span>
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Carousel Indicators */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === currentImage 
                            ? "w-8 bg-gradient-purple" 
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                <Zap className="h-3 w-3 mr-1" />
                Why Students Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-foreground">Everything You Need to</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Succeed Globally
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From verification to acceptance, we've got your back every step of the way
              </p>
            </motion.div>

            {/* Features Bento Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <Card className="h-full border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardContent className="p-6 relative z-10">
                      <motion.div 
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bgColor} mb-4`}
                        animate={{
                          scale: hoveredFeature === i ? 1.1 : 1,
                          rotate: hoveredFeature === i ? 360 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className={`h-7 w-7 ${feature.color}`} />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                      
                      {i === 0 && (
                        <div className="mt-6 flex gap-3">
                          <Badge variant="outline" className="bg-white">
                            <Clock className="h-3 w-3 mr-1" />
                            Fast
                          </Badge>
                          <Badge variant="outline" className="bg-white">
                            <Shield className="h-3 w-3 mr-1" />
                            Secure
                          </Badge>
                          <Badge variant="outline" className="bg-white">
                            <Award className="h-3 w-3 mr-1" />
                            Trusted
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Testimonials Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                <MessageSquare className="h-3 w-3 mr-1" />
                Success Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-foreground">Hear from Students</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Like You
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-foreground mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Redesigned */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                <Target className="h-3 w-3 mr-1" />
                Simple Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-foreground">Your Path to Success in</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  3 Simple Steps
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-purple hidden lg:block" />
              
              <div className="space-y-16 lg:space-y-24">
                {[
                  {
                    number: "1",
                    title: "Get Assessed",
                    subtitle: "Know where you stand",
                    description: "Take our comprehensive readiness assessment to understand your strengths and areas for improvement.",
                    icon: Target,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    number: "2",
                    title: "Get Verified",
                    subtitle: "Build your trusted profile",
                    description: "Upload your documents and complete verification to create a university-grade student profile.",
                    icon: Shield,
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    number: "3",
                    title: "Get Connected",
                    subtitle: "Meet your dream universities",
                    description: "Connect with pre-interested universities through exclusive events and direct engagement opportunities.",
                    icon: Rocket,
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Step Card */}
                    <div className="flex-1 max-w-md mx-auto lg:mx-0">
                      <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                        <CardContent className="p-8 relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                              {step.number}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                              <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Center Icon */}
                    <motion.div
                      className="hidden lg:flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-lg z-10"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Calendar className="h-3 w-3 mr-1" />
                Don't Miss Out
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-foreground">Upcoming Events &</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={event.type === 'Virtual' ? 'default' : event.type === 'Hybrid' ? 'secondary' : 'outline'}>
                          {event.type === 'Virtual' && <Globe className="h-3 w-3 mr-1" />}
                          {event.type === 'In-Person' && <MapPin className="h-3 w-3 mr-1" />}
                          {event.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          <Users className="h-3 w-3 inline mr-1" />
                          {event.attendees}+ attending
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="/events">
                  View All Events
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section - New */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-purple-500/5 to-purple-400/10" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                <TrendingUp className="h-3 w-3 mr-1" />
                Our Impact
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-foreground">Numbers That</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Speak for Themselves
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { number: "10,000+", label: "Students Verified", icon: GraduationCap, color: "from-blue-500 to-cyan-500" },
                { number: "500+", label: "Partner Universities", icon: Building2, color: "from-purple-500 to-pink-500" },
                { number: "95%", label: "Success Rate", icon: Trophy, color: "from-green-500 to-emerald-500" },
                { number: "48hrs", label: "Verification Time", icon: Clock, color: "from-orange-500 to-red-500" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <motion.div
                        className={`h-16 w-16 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.h3
                        className="text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: i * 0.1 + 0.3 }}
                      >
                        {stat.number}
                      </motion.h3>
                      <p className="text-muted-foreground mt-2">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Redesigned */}
        <section className="relative py-32 lg:py-40 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-purple-dark" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundImage: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/10 backdrop-blur mb-8"
              >
                <Sparkles className="h-10 w-10 text-white" />
              </motion.div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to Start Your
                <br />
                <span className="text-yellow-300">Global Journey?</span>
              </h2>
              <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
                Join thousands of students who've already taken the first step towards their dream education.
                Your future is waiting.
              </p>
              
              <motion.div 
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 shadow-2xl" 
                    asChild
                  >
                    <Link href="/register">
                      <User className="mr-2 h-5 w-5" />
                      Create Your Profile
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8" 
                    asChild
                  >
                    <Link href="/contact">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Talk to an Advisor
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3"
              >
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-white text-sm font-medium">
                  100% Secure • No Hidden Fees • Cancel Anytime
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
