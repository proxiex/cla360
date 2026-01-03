import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  CheckCircle,
  Lock,
  Eye,
  FileCheck,
  Users,
  X,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Trust & Compliance - CLA360",
  description: "Built for verification, accountability, and responsible student mobility.",
};

export default function TrustPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Trust & Compliance
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Built for verification, accountability, and responsible student mobility.
              </p>
              <p className="mt-4 text-muted-foreground">
                CLA360 is designed as a verification-first platform supporting responsible global student mobility.
                Trust, compliance, and accountability are foundational — not add-ons.
              </p>
            </div>
          </div>
        </section>

        {/* Our Role */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground">Our Role</h2>
              <p className="mt-4 text-muted-foreground">
                CLA360 operates as a neutral infrastructure layer.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">We support:</h3>
                    <ul className="mt-4 space-y-2">
                      {[
                        "Readiness assessment",
                        "Document verification",
                        "Structured engagement between students and institutions",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">We do not:</h3>
                    <ul className="mt-4 space-y-2">
                      {[
                        "Act as an agent or representative",
                        "Guarantee admissions or visa outcomes",
                        "Influence university or government decisions",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <X className="h-4 w-4 shrink-0 text-destructive" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-6 text-sm font-medium text-muted-foreground">
                All admissions and visa determinations remain with the appropriate authorities.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Grid */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-12">
                {/* Verification Principles */}
                <div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Verification Principles</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Verification is enforced as a precondition for engagement, not an afterthought.
                  </p>
                  <div className="mt-6 space-y-4">
                    <p className="text-sm text-muted-foreground">CLA360 verification focuses on:</p>
                    <ul className="space-y-2">
                      {[
                        "Identity validation",
                        "Academic document authenticity",
                        "Data standardization for institutional review",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground">Verification is designed to:</p>
                    <ul className="space-y-2">
                      {[
                        "Reduce fraud risk",
                        "Improve decision quality",
                        "Protect institutional integrity",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-foreground">
                      Verification outcomes are explainable and aligned with institutional expectations.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Readiness & Scoring */}
                <div>
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Readiness & Scoring Signals</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    CLA360 uses structured readiness signals to support informed engagement.
                  </p>
                  <div className="mt-6 space-y-4">
                    <p className="text-sm text-muted-foreground">These signals:</p>
                    <ul className="space-y-2">
                      {[
                        "Reflect visa, academic, and financial preparedness",
                        "Are probabilistic, not deterministic",
                        "Do not replace institutional judgment",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-foreground">
                      Readiness signals are intended to support, not automate, decision-making.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Data Handling */}
                <div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Data Handling & Consent</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    CLA360 follows a consent-based data model.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "Students provide explicit consent before data is processed or shared",
                      "Data is used only for readiness assessment, verification, and engagement purposes",
                      "Institutions access only the data necessary for engagement",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    CLA360 does not sell student data or use data for unrelated purposes.
                  </p>
                </div>

                <Separator />

                {/* Privacy & Security */}
                <div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Privacy & Security</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    CLA360 applies security and privacy practices appropriate for handling sensitive 
                    academic and identity information.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">Our approach includes:</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      "Secure data storage and transmission",
                      "Role-based access controls",
                      "Auditability of verification and engagement actions",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Security practices are reviewed and updated as the platform evolves.
                  </p>
                </div>

                <Separator />

                {/* Transparency */}
                <div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Transparency & Explainability</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    CLA360 is committed to explainable systems.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "Verification outcomes are traceable",
                      "Readiness signals are interpretable at a high level",
                      "Institutions can understand how signals are generated without relying on black-box logic",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Transparency is critical for institutional trust.
                  </p>
                </div>

                <Separator />

                {/* Responsible Engagement */}
                <div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Responsible Engagement Standards</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    CLA360 enforces standards to ensure engagement remains responsible.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "University engagements are limited to verified students",
                      "Student learning sessions are clearly separated from recruitment",
                      "Access is governed by readiness and verification criteria",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    These standards protect students, institutions, and sponsors alike.
                  </p>
                </div>

                <Separator />

                {/* Continuous Improvement */}
                <div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Continuous Improvement</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Trust and compliance are ongoing commitments.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">CLA360 regularly:</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      "Reviews verification workflows",
                      "Updates standards as risks evolve",
                      "Incorporates institutional feedback",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Our goal is long-term credibility, not short-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Not Do */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground">What We Do Not Do</h2>
              <p className="mt-4 text-muted-foreground">For clarity, CLA360 does not:</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Provide immigration or visa advice",
                  "Guarantee admission, funding, or visa approval",
                  "Operate as an intermediary for applications",
                  "Override institutional or governmental authority",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-lg bg-destructive/5 p-4 text-foreground">
                    <X className="h-5 w-5 shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                Clear boundaries are essential to trust.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Contact & Inquiries
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Institutions, sponsors, and partners with trust or compliance questions may contact 
                the CLA360 team directly.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact CLA360</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
