"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Building2,
  Eye,
  Calendar,
  ArrowRight,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PRVCompletePage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="overflow-hidden border-2 border-green-200">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-primary/5" />
          <CardContent className="relative p-8 lg:p-12">
            {/* Status Badge */}
            <div className="mb-6 flex justify-center">
              <Badge className="bg-green-100 text-green-700 border border-green-200 px-4 py-1.5 text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                Status: University-Eligible (Verified)
              </Badge>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
              >
                <Shield className="h-10 w-10 text-green-600" />
              </motion.div>

              <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                You're Now University-Ready
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
                Your profile is now <strong className="text-foreground">verified and eligible for university engagement</strong>.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              <p className="text-sm font-medium text-foreground text-center">This means:</p>
              {[
                {
                  icon: Building2,
                  text: "Universities participating in CLA360 can now view your profile",
                },
                {
                  icon: Eye,
                  text: "Institutions may express interest or invite you to apply",
                },
                {
                  icon: Calendar,
                  text: "You may be invited to curated digital or in-person university engagements",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border bg-background p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
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
                No guarantees. No agents. No applications sent on your behalf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 space-y-3 text-center"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/app/engagements">
                  View University Engagements
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/app/profile/preview">
                    See how universities view your profile
                  </Link>
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
