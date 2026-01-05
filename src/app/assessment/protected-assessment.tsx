"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
import { motion, AnimatePresence } from "framer-motion";

// This component assumes the user is already authenticated
// It should be wrapped in an authentication check in the parent page

const TOTAL_STEPS = 9;

const stepInfo = [
  { title: "Welcome", icon: Sparkles, description: "Start your PRV assessment" },
  { title: "Profile Basics", icon: User, description: "Tell us about yourself" },
  { title: "Study Plan", icon: BookOpen, description: "Your academic goals" },
  { title: "Academic Background", icon: GraduationCap, description: "Education history" },
  { title: "Financial Readiness", icon: Wallet, description: "Financial planning" },
  { title: "Living Situation", icon: Home, description: "Accommodation plans" },
  { title: "Travel History", icon: Plane, description: "Visa & travel experience" },
  { title: "Career Goals", icon: Target, description: "Future aspirations" },
  { title: "Review", icon: FileCheck, description: "Confirm your information" },
];

export function ProtectedAssessment({ userEmail }: { userEmail: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [prvScore, setPrvScore] = useState<number | null>(null);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate PRV Score
      calculatePRVScore();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculatePRVScore = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const score = Math.floor(Math.random() * 30) + 70; // Random score between 70-100
      setPrvScore(score);
      setShowResults(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const progressPercentage = ((currentStep + 1) / TOTAL_STEPS) * 100;

  if (showResults && prvScore) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2">
              <CardHeader className="text-center pb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                >
                  <Award className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-3xl">Your PRV Score</CardTitle>
                <p className="text-muted-foreground mt-2">Profile Readiness Verification</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Score Display */}
                <div className="text-center">
                  <motion.div
                    className="text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.4 }}
                  >
                    {prvScore}/100
                  </motion.div>
                  <Badge className={`mt-4 ${prvScore >= 85 ? 'bg-green-100 text-green-700' : prvScore >= 70 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    {prvScore >= 85 ? 'Excellent Readiness' : prvScore >= 70 ? 'Good Readiness' : 'Needs Improvement'}
                  </Badge>
                </div>

                {/* Score Breakdown */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-semibold">Score Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { category: "Academic Readiness", score: Math.floor(Math.random() * 20) + 80 },
                      { category: "Financial Preparedness", score: Math.floor(Math.random() * 20) + 75 },
                      { category: "Visa Eligibility", score: Math.floor(Math.random() * 20) + 70 },
                      { category: "Profile Completeness", score: Math.floor(Math.random() * 20) + 80 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.category}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${item.score}%` }}
                              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                            />
                          </div>
                          <span className="text-sm font-semibold w-12 text-right">{item.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Report
                  </Button>
                </div>

                {/* Next Steps */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">Recommended Next Steps</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <p className="text-sm">Complete document verification to boost your score</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <p className="text-sm">Connect with universities matching your profile</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <p className="text-sm">Attend our upcoming virtual university fair</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                  <Button className="flex-1" variant="outline" asChild>
                    <Link href="/universities">Browse Universities</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="mx-auto max-w-4xl px-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {currentStep + 1} of {TOTAL_STEPS}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Assessment Card */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              {React.createElement(stepInfo[currentStep].icon, { className: "h-6 w-6 text-primary" })}
              <div>
                <CardTitle>{stepInfo[currentStep].title}</CardTitle>
                <p className="text-sm text-muted-foreground">{stepInfo[currentStep].description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step content would go here - simplified for brevity */}
                <div className="space-y-6">
                  <p className="text-center py-20 text-muted-foreground">
                    Assessment questions for step {currentStep + 1} would appear here
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>
          <div className="border-t px-6 py-4 flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-primary to-secondary text-white"
            >
              {currentStep === TOTAL_STEPS - 1 ? (
                isSubmitting ? "Calculating..." : "Get PRV Score"
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <Badge variant="outline" className="bg-white">
            <Shield className="mr-2 h-3 w-3" />
            Your data is secure and encrypted
          </Badge>
        </div>
      </div>
    </div>
  );
}
