"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProtectedAssessment } from "./protected-assessment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Download,
  Mail,
  Printer,
  Shield,
  Sparkles,
  User,
  GraduationCap,
  BookOpen,
  Wallet,
  Home,
  Plane,
  Target,
  FileCheck,
  Award,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TOTAL_STEPS = 9;

const stepInfo = [
  { title: "Welcome", icon: Sparkles, description: "Start your readiness assessment" },
  { title: "Profile Basics", icon: User, description: "Tell us about yourself" },
  { title: "Study Plan", icon: BookOpen, description: "Your academic goals" },
  { title: "Academic Readiness", icon: GraduationCap, description: "Your academic background" },
  { title: "Financial Readiness", icon: Wallet, description: "Your funding situation" },
  { title: "Ties to Home", icon: Home, description: "Your connections to home country" },
  { title: "Travel History", icon: Plane, description: "Your travel experience" },
  { title: "Career Plan", icon: Target, description: "Your future goals" },
  { title: "Review", icon: FileCheck, description: "Confirm your information" },
  { title: "Results", icon: Award, description: "Your PRV Score" },
];

function AnimatedProgress({ value, className = "" }: { value: number; className?: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timer);
  }, [value]);
  return <Progress value={progress} className={`transition-all duration-700 ease-out ${className}`} />;
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

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const countries = [
  "Ghana", "Nigeria", "Kenya", "South Africa", "Egypt", "Ethiopia", "Tanzania",
  "Uganda", "Rwanda", "Cameroon", "Senegal", "Ivory Coast", "Morocco", "Algeria",
  "Other African Country", "India", "Pakistan", "Bangladesh", "Philippines", 
  "Vietnam", "Indonesia", "Other Asian Country", "Other",
];

const destinations = ["United States", "Canada", "United Kingdom", "Germany", "France", "Netherlands", "Australia", "Ireland", "Other Europe", "Other"];

const educationLevels = ["Junior High School (JHS)", "Senior High School (SHS)", "Diploma/HND", "Bachelor's Degree", "Master's Degree", "PhD", "Other"];

const programLevels = ["Undergraduate", "Master's", "PhD", "Certificate/Diploma", "Other"];

const fieldsOfStudy = [
  "Business & Management", "Engineering", "Computer Science & IT", "Medicine & Health Sciences",
  "Law", "Arts & Humanities", "Social Sciences", "Natural Sciences", "Education", "Other",
];

const professions = [
  "Doctor/Healthcare Professional", "Engineer", "Software Developer/IT Professional",
  "Business/Finance Professional", "Lawyer", "Teacher/Academic", "Researcher/Scientist",
  "Entrepreneur", "Government/Public Service", "Other",
];

interface AssessmentData {
  citizenship: string;
  residence: string;
  ageRange: string;
  educationLevel: string;
  destination: string;
  intakeTimeframe: string;
  programLevel: string;
  fieldOfStudy: string;
  programType: string;
  gpaScale: string;
  gpaValue: string;
  classRanking: string;
  hasEnglishTest: string;
  englishTestType: string;
  englishScore: string;
  hasAcademicGaps: string;
  hasAcademicDiscipline: string;
  fundingSources: string[];
  fundsRange: string;
  understandsCost: string;
  canPayFirstYear: string;
  hasDependents: string;
  scholarshipStatus: string;
  employmentStatus: string;
  hasReturnJob: string;
  hasFamilyHome: string;
  hasAssets: string;
  hasTravelHistory: string;
  travelRegions: string[];
  returnedOnTime: string;
  hasVisaRefusals: string;
  intendedProfession: string;
  workLocation: string;
  careerPlanReason: string;
  openToReturn: string;
  consentAccuracy: boolean;
  consentUnderstanding: boolean;
}

const initialData: AssessmentData = {
  citizenship: "",
  residence: "",
  ageRange: "",
  educationLevel: "",
  destination: "",
  intakeTimeframe: "",
  programLevel: "",
  fieldOfStudy: "",
  programType: "",
  gpaScale: "",
  gpaValue: "",
  classRanking: "",
  hasEnglishTest: "",
  englishTestType: "",
  englishScore: "",
  hasAcademicGaps: "",
  hasAcademicDiscipline: "",
  fundingSources: [],
  fundsRange: "",
  understandsCost: "",
  canPayFirstYear: "",
  hasDependents: "",
  scholarshipStatus: "",
  employmentStatus: "",
  hasReturnJob: "",
  hasFamilyHome: "",
  hasAssets: "",
  hasTravelHistory: "",
  travelRegions: [],
  returnedOnTime: "",
  hasVisaRefusals: "",
  intendedProfession: "",
  workLocation: "",
  careerPlanReason: "",
  openToReturn: "",
  consentAccuracy: false,
  consentUnderstanding: false,
};

function calculateScore(data: AssessmentData) {
  let financialScore = 0;
  let academicScore = 0;
  let visaScore = 0;
  let alignmentScore = 0;

  // Financial (35 points max)
  const fundsMap: Record<string, number> = {
    "<$5k": 2, "$5k-$10k": 5, "$10k-$20k": 10, "$20k-$40k": 18, "$40k-$80k": 25, "$80k+": 30,
  };
  financialScore += fundsMap[data.fundsRange] || 0;
  if (data.understandsCost === "Yes") financialScore += 2;
  if (data.canPayFirstYear === "Yes") financialScore += 3;
  if (data.scholarshipStatus === "Awarded") financialScore += 5;
  else if (data.scholarshipStatus === "Shortlisted") financialScore += 3;
  if (data.hasDependents === "Yes") financialScore -= 3;
  financialScore = Math.min(35, Math.max(0, financialScore));

  // Academic (30 points max)
  const gpa = parseFloat(data.gpaValue) || 0;
  let normalizedGpa = 0;
  if (data.gpaScale === "4.0") normalizedGpa = gpa;
  else if (data.gpaScale === "5.0") normalizedGpa = (gpa / 5) * 4;
  else if (data.gpaScale === "100") normalizedGpa = (gpa / 100) * 4;
  
  if (normalizedGpa >= 3.5) academicScore += 20;
  else if (normalizedGpa >= 3.0) academicScore += 15;
  else if (normalizedGpa >= 2.5) academicScore += 10;
  else academicScore += 5;

  if (data.hasEnglishTest === "Yes") academicScore += 5;
  else if (data.hasEnglishTest === "Booked") academicScore += 3;
  if (data.classRanking === "Top 10%") academicScore += 5;
  else if (data.classRanking === "Top 25%") academicScore += 3;
  if (data.hasAcademicGaps === "Yes") academicScore -= 3;
  if (data.hasAcademicDiscipline === "Yes") academicScore -= 5;
  academicScore = Math.min(30, Math.max(0, academicScore));

  // Visa Signals (25 points max)
  if (data.employmentStatus === "Employed" || data.employmentStatus === "Self-employed") visaScore += 5;
  if (data.hasReturnJob === "Yes") visaScore += 5;
  if (data.hasFamilyHome === "Yes") visaScore += 5;
  if (data.hasAssets === "Yes") visaScore += 3;
  if (data.hasTravelHistory === "Yes") {
    visaScore += 4;
    if (data.returnedOnTime === "Yes") visaScore += 3;
  }
  if (data.hasVisaRefusals === "Yes") visaScore -= 5;
  visaScore = Math.min(25, Math.max(0, visaScore));

  // Alignment (10 points max)
  if (data.intendedProfession && data.intendedProfession !== "") alignmentScore += 3;
  if (data.careerPlanReason && data.careerPlanReason.length > 50) alignmentScore += 4;
  if (data.openToReturn === "Yes") alignmentScore += 3;
  if (data.intakeTimeframe === "0-3 months") alignmentScore -= 2;
  alignmentScore = Math.min(10, Math.max(0, alignmentScore));

  const total = financialScore + academicScore + visaScore + alignmentScore;
  
  let band = "Not Ready Yet";
  if (total >= 70) band = "Ready to Proceed";
  else if (total >= 50) band = "Proceed with Conditions";

  const flags: string[] = [];
  if (financialScore < 15) flags.push("Funding currently below typical first-year requirement for your target destination.");
  if (academicScore < 15) flags.push("Academic profile may need strengthening before application.");
  if (visaScore < 10) flags.push("Consider strengthening ties to home country for visa readiness.");
  if (data.careerPlanReason.length < 50) flags.push("Career plan needs clarity to strengthen intent.");
  if (data.hasVisaRefusals === "Yes") flags.push("Prior visa refusals may require additional documentation.");

  return {
    total,
    financial: financialScore,
    academic: academicScore,
    visa: visaScore,
    alignment: alignmentScore,
    band,
    flags,
  };
}

export default function AssessmentPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated (simplified check - replace with real auth)
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      if (user) {
        const userData = JSON.parse(user);
        setIsAuthenticated(true);
        setUserEmail(userData.email || "");
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-20 lg:py-32">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mx-auto mb-8 h-20 w-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="text-foreground">Get Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    PRV Score
                  </span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your Profile Readiness Verification (PRV) score helps you understand your 
                  readiness for international education. Sign up to get your personalized assessment.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Benefits */}
                  <div className="grid gap-4 md:grid-cols-3 max-w-2xl mx-auto">
                    {[
                      { icon: Target, title: "Personalized Score", desc: "Get insights tailored to your profile" },
                      { icon: FileCheck, title: "Instant Results", desc: "Receive your PRV score immediately" },
                      { icon: Award, title: "Action Plan", desc: "Get recommendations to improve" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-8"
                      asChild
                    >
                      <Link href="/register">
                        <User className="mr-2 h-5 w-5" />
                        Create Account & Get PRV Score
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                      <Link href="/login">
                        Already have an account? Sign In
                      </Link>
                    </Button>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8">
                    <Badge variant="outline" className="bg-white">
                      <Shield className="mr-2 h-3 w-3" />
                      Free • Secure • No Credit Card Required
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // User is authenticated, show the assessment
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProtectedAssessment userEmail={userEmail} />
      </main>
      <Footer />
    </div>
  );
}

// Original assessment code below (keeping for reference but not using)
function OriginalAssessmentPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<AssessmentData>(initialData);
  const [score, setScore] = useState<ReturnType<typeof calculateScore> | null>(null);

  const updateData = (field: keyof AssessmentData, value: string | string[] | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    const result = calculateScore(data);
    setScore(result);
    setStep(TOTAL_STEPS);
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    nextStep();
  };

  const goBack = () => {
    setDirection(-1);
    prevStep();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-2xl px-6 py-12 lg:py-20">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Card className="overflow-hidden border-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  <CardHeader className="text-center relative pb-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                    >
                      <Sparkles className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-2xl">Start with readiness</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <p className="text-center text-muted-foreground">
                      Answer a few questions to get an early readiness signal. No documents.
                    </p>
                    
                    <div className="grid grid-cols-4 gap-2 py-4">
                      {[
                        { icon: User, label: "Profile" },
                        { icon: GraduationCap, label: "Academic" },
                        { icon: Wallet, label: "Financial" },
                        { icon: Target, label: "Career" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex flex-col items-center gap-1 text-center"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <item.icon className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <span className="text-xs text-muted-foreground">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3"
                    >
                      <Button size="lg" onClick={goNext} className="w-full group">
                        Start Soft PRV Score
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Button>
                      <Button size="lg" variant="outline" className="w-full" asChild>
                        <Link href="/signin">Sign in (optional)</Link>
                      </Button>
                    </motion.div>
                    
                    <p className="text-center text-xs text-muted-foreground">
                      No guarantees. This is an early signal based on your inputs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step >= 1 && step < TOTAL_STEPS && (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="space-y-6"
              >
                {/* Progress Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {(() => {
                        const StepIcon = stepInfo[step]?.icon || Sparkles;
                        return <StepIcon className="h-4 w-4 text-primary" />;
                      })()}
                      <span className="font-medium">{stepInfo[step]?.title}</span>
                    </div>
                    <span className="text-muted-foreground">
                      Step {step} of {TOTAL_STEPS - 1}
                    </span>
                  </div>
                  <AnimatedProgress value={progress} className="h-2" />
                  <div className="flex gap-1">
                    {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          i < step ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {step === 1 && (
                  <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Profile Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Country of citizenship</Label>
                      <Select value={data.citizenship} onValueChange={(v) => updateData("citizenship", v)}>
                        <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                        <SelectContent>
                          {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Current country of residence</Label>
                      <Select value={data.residence} onValueChange={(v) => updateData("residence", v)}>
                        <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                        <SelectContent>
                          {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Age range</Label>
                      <RadioGroup value={data.ageRange} onValueChange={(v) => updateData("ageRange", v)}>
                        {["Under 18", "18-24", "25-34", "35+"].map((a) => (
                          <div key={a} className="flex items-center space-x-2">
                            <RadioGroupItem value={a} id={a} />
                            <Label htmlFor={a}>{a}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Highest education level completed</Label>
                      <Select value={data.educationLevel} onValueChange={(v) => updateData("educationLevel", v)}>
                        <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                        <SelectContent>
                          {educationLevels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Study Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Intended destination</Label>
                      <Select value={data.destination} onValueChange={(v) => updateData("destination", v)}>
                        <SelectTrigger><SelectValue placeholder="Select destination" /></SelectTrigger>
                        <SelectContent>
                          {destinations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Intended intake timeframe</Label>
                      <RadioGroup value={data.intakeTimeframe} onValueChange={(v) => updateData("intakeTimeframe", v)}>
                        {["0-3 months", "3-6 months", "6-12 months", "12+ months"].map((t) => (
                          <div key={t} className="flex items-center space-x-2">
                            <RadioGroupItem value={t} id={t} />
                            <Label htmlFor={t}>{t}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Intended program level</Label>
                      <Select value={data.programLevel} onValueChange={(v) => updateData("programLevel", v)}>
                        <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                        <SelectContent>
                          {programLevels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Field of study</Label>
                      <Select value={data.fieldOfStudy} onValueChange={(v) => updateData("fieldOfStudy", v)}>
                        <SelectTrigger><SelectValue placeholder="Select field" /></SelectTrigger>
                        <SelectContent>
                          {fieldsOfStudy.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Intended program type</Label>
                      <RadioGroup value={data.programType} onValueChange={(v) => updateData("programType", v)}>
                        {["Research/Thesis", "Coursework", "Professional", "Undecided"].map((t) => (
                          <div key={t} className="flex items-center space-x-2">
                            <RadioGroupItem value={t} id={`pt-${t}`} />
                            <Label htmlFor={`pt-${t}`}>{t}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Readiness</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>GPA Scale</Label>
                        <Select value={data.gpaScale} onValueChange={(v) => updateData("gpaScale", v)}>
                          <SelectTrigger><SelectValue placeholder="Select scale" /></SelectTrigger>
                          <SelectContent>
                            {["4.0", "5.0", "100", "Other"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>GPA Value</Label>
                        <Input type="number" step="0.01" value={data.gpaValue} onChange={(e) => updateData("gpaValue", e.target.value)} placeholder="e.g., 3.5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Class ranking (optional)</Label>
                      <RadioGroup value={data.classRanking} onValueChange={(v) => updateData("classRanking", v)}>
                        {["Top 10%", "Top 25%", "Middle", "Unknown"].map((r) => (
                          <div key={r} className="flex items-center space-x-2">
                            <RadioGroupItem value={r} id={`rank-${r}`} />
                            <Label htmlFor={`rank-${r}`}>{r}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Do you have an English proficiency test?</Label>
                      <RadioGroup value={data.hasEnglishTest} onValueChange={(v) => updateData("hasEnglishTest", v)}>
                        {["Yes", "No", "Booked"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`eng-${o}`} />
                            <Label htmlFor={`eng-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {data.hasEnglishTest === "Yes" && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Test type</Label>
                          <Select value={data.englishTestType} onValueChange={(v) => updateData("englishTestType", v)}>
                            <SelectTrigger><SelectValue placeholder="Select test" /></SelectTrigger>
                            <SelectContent>
                              {["TOEFL", "IELTS", "Duolingo", "Other"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Score (optional)</Label>
                          <Input value={data.englishScore} onChange={(e) => updateData("englishScore", e.target.value)} placeholder="e.g., 100" />
                        </div>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label>Any academic gaps greater than 12 months?</Label>
                      <RadioGroup value={data.hasAcademicGaps} onValueChange={(v) => updateData("hasAcademicGaps", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`gap-${o}`} />
                            <Label htmlFor={`gap-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Any academic dismissals or withdrawals?</Label>
                      <RadioGroup value={data.hasAcademicDiscipline} onValueChange={(v) => updateData("hasAcademicDiscipline", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`disc-${o}`} />
                            <Label htmlFor={`disc-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Readiness</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Primary funding source(s)</Label>
                      <div className="space-y-2">
                        {["Self/Family", "Scholarship", "Sponsor/Employer", "Loan", "Mixed"].map((s) => (
                          <div key={s} className="flex items-center space-x-2">
                            <Checkbox
                              id={`fund-${s}`}
                              checked={data.fundingSources.includes(s)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  updateData("fundingSources", [...data.fundingSources, s]);
                                } else {
                                  updateData("fundingSources", data.fundingSources.filter((f) => f !== s));
                                }
                              }}
                            />
                            <Label htmlFor={`fund-${s}`}>{s}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Estimated total available funds</Label>
                      <RadioGroup value={data.fundsRange} onValueChange={(v) => updateData("fundsRange", v)}>
                        {["<$5k", "$5k-$10k", "$10k-$20k", "$20k-$40k", "$40k-$80k", "$80k+"].map((r) => (
                          <div key={r} className="flex items-center space-x-2">
                            <RadioGroupItem value={r} id={`funds-${r}`} />
                            <Label htmlFor={`funds-${r}`}>{r}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Do you understand the expected annual cost?</Label>
                      <RadioGroup value={data.understandsCost} onValueChange={(v) => updateData("understandsCost", v)}>
                        {["Yes", "Somewhat", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`cost-${o}`} />
                            <Label htmlFor={`cost-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Can you pay first-year costs + proof of funds if required?</Label>
                      <RadioGroup value={data.canPayFirstYear} onValueChange={(v) => updateData("canPayFirstYear", v)}>
                        {["Yes", "No", "Unsure"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`pay-${o}`} />
                            <Label htmlFor={`pay-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Do you have dependents relying on you financially?</Label>
                      <RadioGroup value={data.hasDependents} onValueChange={(v) => updateData("hasDependents", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`dep-${o}`} />
                            <Label htmlFor={`dep-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {data.fundingSources.includes("Scholarship") && (
                      <div className="space-y-2">
                        <Label>Scholarship status</Label>
                        <RadioGroup value={data.scholarshipStatus} onValueChange={(v) => updateData("scholarshipStatus", v)}>
                          {["Applied", "Shortlisted", "Awarded", "Not applicable"].map((s) => (
                            <div key={s} className="flex items-center space-x-2">
                              <RadioGroupItem value={s} id={`schol-${s}`} />
                              <Label htmlFor={`schol-${s}`}>{s}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {step === 5 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Visa Readiness - Ties to Home Country</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Employment status</Label>
                      <RadioGroup value={data.employmentStatus} onValueChange={(v) => updateData("employmentStatus", v)}>
                        {["Employed", "Self-employed", "Student", "Unemployed"].map((s) => (
                          <div key={s} className="flex items-center space-x-2">
                            <RadioGroupItem value={s} id={`emp-${s}`} />
                            <Label htmlFor={`emp-${s}`}>{s}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Do you have a job you will return to?</Label>
                      <RadioGroup value={data.hasReturnJob} onValueChange={(v) => updateData("hasReturnJob", v)}>
                        {["Yes", "No", "Not applicable"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`ret-${o}`} />
                            <Label htmlFor={`ret-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Immediate family in home country?</Label>
                      <RadioGroup value={data.hasFamilyHome} onValueChange={(v) => updateData("hasFamilyHome", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`fam-${o}`} />
                            <Label htmlFor={`fam-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Significant assets or responsibilities at home?</Label>
                      <p className="text-xs text-muted-foreground">(property, business, caregiving)</p>
                      <RadioGroup value={data.hasAssets} onValueChange={(v) => updateData("hasAssets", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`asset-${o}`} />
                            <Label htmlFor={`asset-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 6 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Visa Readiness - Travel History</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Have you traveled outside your home country before?</Label>
                      <RadioGroup value={data.hasTravelHistory} onValueChange={(v) => updateData("hasTravelHistory", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`travel-${o}`} />
                            <Label htmlFor={`travel-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {data.hasTravelHistory === "Yes" && (
                      <>
                        <div className="space-y-2">
                          <Label>Where have you traveled? (Select all that apply)</Label>
                          <div className="space-y-2">
                            {["Africa", "Europe", "United States", "Canada", "Asia", "Middle East", "Other"].map((r) => (
                              <div key={r} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`region-${r}`}
                                  checked={data.travelRegions.includes(r)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      updateData("travelRegions", [...data.travelRegions, r]);
                                    } else {
                                      updateData("travelRegions", data.travelRegions.filter((reg) => reg !== r));
                                    }
                                  }}
                                />
                                <Label htmlFor={`region-${r}`}>{r}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Did you return on time?</Label>
                          <RadioGroup value={data.returnedOnTime} onValueChange={(v) => updateData("returnedOnTime", v)}>
                            {["Yes", "No"].map((o) => (
                              <div key={o} className="flex items-center space-x-2">
                                <RadioGroupItem value={o} id={`returned-${o}`} />
                                <Label htmlFor={`returned-${o}`}>{o}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </>
                    )}
                    <div className="space-y-2">
                      <Label>Prior visa refusals?</Label>
                      <RadioGroup value={data.hasVisaRefusals} onValueChange={(v) => updateData("hasVisaRefusals", v)}>
                        {["Yes", "No"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`refusal-${o}`} />
                            <Label htmlFor={`refusal-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 7 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Intent & Career Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>What profession do you want after graduation?</Label>
                      <Select value={data.intendedProfession} onValueChange={(v) => updateData("intendedProfession", v)}>
                        <SelectTrigger><SelectValue placeholder="Select profession" /></SelectTrigger>
                        <SelectContent>
                          {professions.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Where do you intend to work after school?</Label>
                      <RadioGroup value={data.workLocation} onValueChange={(v) => updateData("workLocation", v)}>
                        {["Home country", "Destination country", "Flexible", "Unsure"].map((l) => (
                          <div key={l} className="flex items-center space-x-2">
                            <RadioGroupItem value={l} id={`work-${l}`} />
                            <Label htmlFor={`work-${l}`}>{l}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Why does this program fit your career plan?</Label>
                      <Textarea
                        value={data.careerPlanReason}
                        onChange={(e) => updateData("careerPlanReason", e.target.value)}
                        placeholder="Briefly explain how this program aligns with your career goals..."
                        maxLength={300}
                      />
                      <p className="text-xs text-muted-foreground">{data.careerPlanReason.length}/300 characters</p>
                    </div>
                    <div className="space-y-2">
                      <Label>Are you open to returning home after graduation if required?</Label>
                      <RadioGroup value={data.openToReturn} onValueChange={(v) => updateData("openToReturn", v)}>
                        {["Yes", "No", "Unsure"].map((o) => (
                          <div key={o} className="flex items-center space-x-2">
                            <RadioGroupItem value={o} id={`open-${o}`} />
                            <Label htmlFor={`open-${o}`}>{o}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 8 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Review & Consent</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg bg-muted p-4 text-sm">
                      <h4 className="font-semibold">Summary</h4>
                      <div className="mt-2 space-y-1 text-muted-foreground">
                        <p><strong>Citizenship:</strong> {data.citizenship || "Not specified"}</p>
                        <p><strong>Destination:</strong> {data.destination || "Not specified"}</p>
                        <p><strong>Program Level:</strong> {data.programLevel || "Not specified"}</p>
                        <p><strong>Field:</strong> {data.fieldOfStudy || "Not specified"}</p>
                        <p><strong>GPA:</strong> {data.gpaValue || "Not specified"} / {data.gpaScale || "N/A"}</p>
                        <p><strong>Funds Range:</strong> {data.fundsRange || "Not specified"}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent-accuracy"
                          checked={data.consentAccuracy}
                          onCheckedChange={(checked) => updateData("consentAccuracy", !!checked)}
                        />
                        <Label htmlFor="consent-accuracy" className="text-sm leading-relaxed">
                          I confirm these answers are accurate to the best of my knowledge.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent-understanding"
                          checked={data.consentUnderstanding}
                          onCheckedChange={(checked) => updateData("consentUnderstanding", !!checked)}
                        />
                        <Label htmlFor="consent-understanding" className="text-sm leading-relaxed">
                          I understand this is an early readiness signal and does not guarantee admission or visa approval.
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={goBack} disabled={step === 1} className="group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back
                  </Button>
                  {step < 8 ? (
                    <Button onClick={goNext} className="group">
                      Continue <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} disabled={!data.consentAccuracy || !data.consentUnderstanding} className="group">
                      Generate Score <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                </div>
              </motion.div>
            )}

            {step === TOTAL_STEPS && score && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="space-y-6"
              >
                <Card className="overflow-hidden border-2 border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  <CardHeader className="text-center relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                    >
                      <Award className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-2xl">Your Soft PRV Score</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-6xl font-bold text-primary"
                      >
                        <AnimatedNumber value={score.total} delay={0.4} />
                      </motion.div>
                    <p className="text-sm text-muted-foreground">out of 100</p>
                    <Badge className="mt-2" variant={score.band === "Ready to Proceed" ? "default" : score.band === "Proceed with Conditions" ? "secondary" : "destructive"}>
                      {score.band}
                    </Badge>
                  </div>

                    <div className="grid gap-4">
                      {[
                        { label: "Financial Readiness", value: score.financial, max: 35, delay: 0.5 },
                        { label: "Academic Readiness", value: score.academic, max: 30, delay: 0.6 },
                        { label: "Visa Signals", value: score.visa, max: 25, delay: 0.7 },
                        { label: "Program Alignment", value: score.alignment, max: 10, delay: 0.8 },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item.delay }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{item.label}</span>
                            <span className="font-semibold">{item.value}/{item.max}</span>
                          </div>
                          <AnimatedProgress value={(item.value / item.max) * 100} className="h-2" />
                        </motion.div>
                      ))}
                    </div>

                  {score.flags.length > 0 && (
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        Key Areas to Address
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {score.flags.map((flag, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-500">•</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap justify-center gap-3">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" /> Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="mr-2 h-4 w-4" /> Email Report
                    </Button>
                  </div>

                  <p className="text-center text-xs text-muted-foreground">
                    This is an early signal, not a guarantee. Universities do not use Soft PRV Scores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Continue to Verification</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Enter verification to unlock university engagement:
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Verify identity + academics
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Standardize your profile
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Generate Hard PRV Score
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Become eligible for digital matching + curated engagements
                        </li>
                      </ul>
                      <Button className="mt-4" asChild>
                        <Link href="/app">Continue to Verification <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

                <div className="text-center">
                  <Button variant="ghost" asChild>
                    <Link href="/">Save & come back later</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}
