"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Circle,
  GraduationCap,
  Shield,
  FileCheck,
  User,
  Wallet,
  BookOpen,
  Target,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Building2,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

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

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), delay * 1000 + 100);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return <Progress value={progress} className="h-2 transition-all duration-1000 ease-out" />;
}

const verificationSteps = [
  { id: "identity", label: "Identity Verification", icon: User, status: "completed" },
  { id: "academic", label: "Academic Records", icon: BookOpen, status: "in_progress" },
  { id: "financial", label: "Financial Documents", icon: Wallet, status: "pending" },
  { id: "intent", label: "Statement of Intent", icon: Target, status: "pending" },
];

const quickActions = [
  { label: "Continue Verification", href: "/app/documents", icon: Shield, color: "bg-blue-500" },
  { label: "View PRV Score", href: "/app/prv-score", icon: Award, color: "bg-green-500" },
  { label: "Visa Readiness", href: "/app/visa-readiness", icon: FileCheck, color: "bg-purple-500" },
  { label: "University Engagements", href: "/app/engagements", icon: Calendar, color: "bg-orange-500" },
];

const alerts = [
  { message: "Documents pending verification", type: "warning", href: "/app/documents" },
  { message: "Visa readiness incomplete", type: "warning", href: "/app/visa-readiness" },
];

const recentActivity = [
  { action: "Completed identity verification", time: "2 hours ago", icon: CheckCircle },
  { action: "Updated academic records", time: "Yesterday", icon: FileCheck },
  { action: "Started financial documentation", time: "2 days ago", icon: Wallet },
];

export default function DashboardPage() {
  const userName = "Samuel"; // This would come from auth context
  const softPrvScore = 72;
  const verificationProgress = 40;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CLA360</span>
            </Link>
            <Badge variant="secondary" className="hidden sm:flex">
              Dashboard
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your study abroad journey
          </p>
        </motion.div>

        {/* Key Alerts */}
        {alerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="space-y-2">
              {alerts.map((alert, i) => (
                <Link
                  key={i}
                  href={alert.href}
                  className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 hover:bg-amber-100 transition-colors"
                >
                  <Bell className="h-4 w-4 text-amber-600" />
                  <span className="flex-1 text-sm font-medium text-amber-900">{alert.message}</span>
                  <ChevronRight className="h-4 w-4 text-amber-600" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { label: "Hard PRV Score", value: 0, suffix: "", icon: Award, color: "text-green-500", status: "Not Started" },
            { label: "Verification", value: verificationProgress, suffix: "%", icon: Shield, color: "text-blue-500" },
            { label: "University Interest", value: 3, suffix: "", icon: Building2, color: "text-purple-500" },
            { label: "Event Invites", value: 1, suffix: "", icon: Calendar, color: "text-orange-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold mt-1">
                        <AnimatedNumber value={stat.value} delay={0.2 + i * 0.1} />
                        <span className="text-lg font-normal text-muted-foreground">{stat.suffix}</span>
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* PRV Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Your PRV Score Journey
                    </CardTitle>
                    <Badge variant="outline" className="text-primary">
                      Soft Score
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-6">
                  <div className="flex items-center gap-8">
                    <div className="relative">
                      <svg className="w-32 h-32 -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="12"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="12"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 352" }}
                          animate={{ strokeDasharray: `${(softPrvScore / 100) * 352} 352` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold">
                            <AnimatedNumber value={softPrvScore} delay={0.5} />
                          </div>
                          <div className="text-xs text-muted-foreground">of 100</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-500">+8 points this week</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Complete verification to unlock your Hard PRV Score and university matching.
                      </p>
                      <Button asChild className="group">
                        <Link href="/app/prv-score">
                          View Full Score
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Verification Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      Verification Progress
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {verificationProgress}% complete
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <AnimatedProgress value={verificationProgress} delay={0.5} />
                  
                  <div className="space-y-3">
                    {verificationSteps.map((step, i) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className={`flex items-center justify-between p-3 rounded-lg border ${
                          step.status === "completed"
                            ? "bg-green-500/5 border-green-500/20"
                            : step.status === "in_progress"
                            ? "bg-blue-500/5 border-blue-500/20"
                            : "bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${
                            step.status === "completed"
                              ? "bg-green-500/10 text-green-500"
                              : step.status === "in_progress"
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            <step.icon className="h-4 w-4" />
                          </div>
                          <span className="font-medium">{step.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {step.status === "completed" ? (
                            <Badge variant="outline" className="text-green-500 border-green-500/20">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Complete
                            </Badge>
                          ) : step.status === "in_progress" ? (
                            <Button size="sm" asChild>
                              <Link href={`/app/verification/${step.id}`}>
                                Continue
                              </Link>
                            </Button>
                          ) : (
                            <Badge variant="outline" className="text-muted-foreground">
                              <Circle className="h-3 w-3 mr-1" />
                              Pending
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* University Engagement Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Card className="border-2 border-green-200 bg-green-50/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-green-600" />
                    University Engagement Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-muted-foreground">Verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-muted-foreground">PRV Score Completed</span>
                  </div>
                  <div className="mt-4 pt-3 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Universities can now:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• View your profile</li>
                      <li>• Express interest</li>
                      <li>• Invite you to engagements</li>
                    </ul>
                  </div>
                  <Button size="sm" className="w-full mt-2" asChild>
                    <Link href="/app/engagements">
                      View University Engagements
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickActions.map((action, i) => (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <Link
                        href={action.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          <action.icon className="h-4 w-4" />
                        </div>
                        <span className="flex-1 font-medium">{action.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-1.5 rounded-full bg-muted">
                        <activity.icon className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Help Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Need Help?</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our advisors are here to guide you through your journey.
                      </p>
                      <Button size="sm" variant="outline" className="mt-3" asChild>
                        <Link href="/app/support">
                          Contact Support
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
