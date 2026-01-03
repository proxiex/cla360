"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
              >
                <FileText className="h-8 w-8 text-primary" />
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Terms of Service
              </h1>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 2, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-8 lg:p-12 prose prose-slate max-w-none">
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using CLA360's services, you accept and agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>

                  <h2>2. Description of Service</h2>
                  <p>
                    CLA360 provides a platform for international education verification, readiness assessment, and 
                    university matching services. Our services include:
                  </p>
                  <ul>
                    <li>Pre-Readiness Verification (PRV) Score assessment</li>
                    <li>Identity and academic credential verification</li>
                    <li>University matching and engagement facilitation</li>
                    <li>Educational resources and guidance</li>
                  </ul>

                  <h2>3. User Accounts</h2>
                  <p>
                    To access certain features, you must create an account. You are responsible for:
                  </p>
                  <ul>
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                    <li>Providing accurate and complete information</li>
                  </ul>

                  <h2>4. Verification Services</h2>
                  <p>
                    Our verification services require you to submit documents and information. You agree that:
                  </p>
                  <ul>
                    <li>All submitted documents are authentic and unaltered</li>
                    <li>All information provided is accurate and truthful</li>
                    <li>You have the right to share the documents you submit</li>
                    <li>Verification fees are non-refundable once processing begins</li>
                  </ul>

                  <h2>5. PRV Score</h2>
                  <p>
                    The PRV Score is an assessment tool and does not guarantee:
                  </p>
                  <ul>
                    <li>University admission or acceptance</li>
                    <li>Visa approval from any government</li>
                    <li>Scholarship or funding awards</li>
                    <li>Specific outcomes in your education journey</li>
                  </ul>
                  <p>
                    The PRV Score is based on information provided and verified at the time of assessment and may 
                    change as circumstances evolve.
                  </p>

                  <h2>6. University Partnerships</h2>
                  <p>
                    CLA360 facilitates connections with partner universities but does not:
                  </p>
                  <ul>
                    <li>Make admission decisions on behalf of universities</li>
                    <li>Guarantee acceptance to any institution</li>
                    <li>Control university admission policies or criteria</li>
                    <li>Act as an education agent or recruiter</li>
                  </ul>

                  <h2>7. Fees and Payments</h2>
                  <p>
                    Certain services require payment. You agree to:
                  </p>
                  <ul>
                    <li>Pay all applicable fees as described on our platform</li>
                    <li>Provide accurate payment information</li>
                    <li>Accept that verification fees are non-refundable once processing begins</li>
                    <li>Understand that prices may change with notice</li>
                  </ul>

                  <h2>8. Intellectual Property</h2>
                  <p>
                    All content, features, and functionality on CLA360 are owned by us and protected by copyright, 
                    trademark, and other intellectual property laws. You may not:
                  </p>
                  <ul>
                    <li>Copy, modify, or distribute our content without permission</li>
                    <li>Use our trademarks or branding without authorization</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Create derivative works based on our services</li>
                  </ul>

                  <h2>9. Prohibited Conduct</h2>
                  <p>
                    You agree not to:
                  </p>
                  <ul>
                    <li>Submit false, fraudulent, or misleading information</li>
                    <li>Impersonate another person or entity</li>
                    <li>Interfere with or disrupt our services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use our services for any illegal purpose</li>
                    <li>Harass, abuse, or harm other users</li>
                  </ul>

                  <h2>10. Data Privacy</h2>
                  <p>
                    Your use of our services is also governed by our Privacy Policy. We collect, use, and protect 
                    your personal information as described in that policy.
                  </p>

                  <h2>11. Disclaimers</h2>
                  <p>
                    CLA360 services are provided "as is" without warranties of any kind. We do not guarantee:
                  </p>
                  <ul>
                    <li>Uninterrupted or error-free service</li>
                    <li>Specific results or outcomes</li>
                    <li>Accuracy of third-party information</li>
                    <li>Compatibility with all devices or systems</li>
                  </ul>

                  <h2>12. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, CLA360 shall not be liable for:
                  </p>
                  <ul>
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or opportunities</li>
                    <li>Damages resulting from university or visa decisions</li>
                    <li>Actions or omissions of third parties</li>
                  </ul>

                  <h2>13. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold CLA360 harmless from any claims, damages, or expenses arising from:
                  </p>
                  <ul>
                    <li>Your violation of these Terms</li>
                    <li>Your use of our services</li>
                    <li>Your violation of any rights of another party</li>
                    <li>False or fraudulent information you provide</li>
                  </ul>

                  <h2>14. Termination</h2>
                  <p>
                    We may suspend or terminate your account if you:
                  </p>
                  <ul>
                    <li>Violate these Terms of Service</li>
                    <li>Provide false or fraudulent information</li>
                    <li>Engage in prohibited conduct</li>
                    <li>Fail to pay applicable fees</li>
                  </ul>
                  <p>
                    You may terminate your account at any time by contacting support.
                  </p>

                  <h2>15. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of material changes 
                    via email or platform notification. Continued use of our services after changes constitutes 
                    acceptance of the modified Terms.
                  </p>

                  <h2>16. Governing Law</h2>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of [Jurisdiction], 
                    without regard to conflict of law principles.
                  </p>

                  <h2>17. Dispute Resolution</h2>
                  <p>
                    Any disputes arising from these Terms or our services shall be resolved through:
                  </p>
                  <ul>
                    <li>Good faith negotiation between parties</li>
                    <li>Mediation if negotiation fails</li>
                    <li>Binding arbitration as a final resort</li>
                  </ul>

                  <h2>18. Contact Information</h2>
                  <p>
                    For questions about these Terms, contact us at:
                  </p>
                  <ul>
                    <li>Email: legal@cla360.app</li>
                    <li>Address: [Company Address]</li>
                  </ul>

                  <div className="mt-12 p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-0">
                      <strong>Note:</strong> These Terms of Service are a legal agreement between you and CLA360. 
                      Please read them carefully and contact us if you have any questions before using our services.
                    </p>
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
