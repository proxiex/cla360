"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  CheckCircle,
  FileText,
  User,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function VerifyTransitionPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="overflow-hidden border-2 border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <CardContent className="relative p-8 lg:p-12">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
              >
                <Shield className="h-10 w-10 text-primary" />
              </motion.div>

              <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                Enter Verification & University Readiness
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
                To generate a <strong className="text-foreground">Hard PRV Score</strong> and become 
                eligible for university engagement, you'll complete:
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {[
                {
                  icon: User,
                  title: "Your full academic and personal profile",
                  description: "Education history, program preferences, and career intent",
                },
                {
                  icon: FileText,
                  title: "Academic and identity document verification",
                  description: "Transcripts, certificates, and ID verification",
                },
                {
                  icon: Shield,
                  title: "Visa readiness inputs",
                  description: "Ties to home country, travel history, and financial confirmation",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 rounded-lg border bg-background p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 rounded-lg bg-muted/50 p-4"
            >
              <p className="text-center text-sm text-muted-foreground">
                This step is required before universities can view or engage your profile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/app">
                  Begin Verification
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
