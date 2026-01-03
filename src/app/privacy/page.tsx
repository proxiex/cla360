"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                <Shield className="h-8 w-8 text-primary" />
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
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
                  <h2>1. Introduction</h2>
                  <p>
                    CLA360 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                    how we collect, use, disclose, and safeguard your information when you use our platform and services.
                  </p>

                  <h2>2. Information We Collect</h2>
                  
                  <h3>2.1 Personal Information</h3>
                  <p>
                    We collect information you provide directly, including:
                  </p>
                  <ul>
                    <li><strong>Account Information:</strong> Name, email address, phone number, date of birth, country of residence</li>
                    <li><strong>Identity Documents:</strong> Government-issued ID, passport, national ID card</li>
                    <li><strong>Academic Records:</strong> Transcripts, certificates, diplomas, test scores</li>
                    <li><strong>Financial Information:</strong> Bank statements, sponsor letters, proof of funds</li>
                    <li><strong>Profile Information:</strong> Educational background, career goals, study preferences</li>
                  </ul>

                  <h3>2.2 Automatically Collected Information</h3>
                  <ul>
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                    <li><strong>Cookies:</strong> Session data, preferences, analytics information</li>
                  </ul>

                  <h2>3. How We Use Your Information</h2>
                  <p>
                    We use collected information to:
                  </p>
                  <ul>
                    <li><strong>Provide Services:</strong> Process verification, calculate PRV Scores, facilitate university matching</li>
                    <li><strong>Communicate:</strong> Send updates, notifications, and support responses</li>
                    <li><strong>Improve Platform:</strong> Analyze usage patterns, enhance features, fix issues</li>
                    <li><strong>Ensure Security:</strong> Detect fraud, prevent abuse, protect user accounts</li>
                    <li><strong>Comply with Law:</strong> Meet legal obligations and respond to lawful requests</li>
                    <li><strong>Research:</strong> Conduct anonymized studies on education trends (with consent)</li>
                  </ul>

                  <h2>4. Information Sharing and Disclosure</h2>
                  
                  <h3>4.1 With Your Consent</h3>
                  <p>
                    We share your verified profile with universities only when you explicitly grant permission. 
                    You control what information is shared and with whom.
                  </p>

                  <h3>4.2 Service Providers</h3>
                  <p>
                    We work with third-party service providers for:
                  </p>
                  <ul>
                    <li>Identity verification services</li>
                    <li>Academic credential authentication</li>
                    <li>Payment processing</li>
                    <li>Cloud hosting and storage</li>
                    <li>Analytics and monitoring</li>
                  </ul>
                  <p>
                    These providers are contractually obligated to protect your data and use it only for specified purposes.
                  </p>

                  <h3>4.3 Legal Requirements</h3>
                  <p>
                    We may disclose information when required by law or to:
                  </p>
                  <ul>
                    <li>Comply with legal processes or government requests</li>
                    <li>Enforce our Terms of Service</li>
                    <li>Protect rights, property, or safety of CLA360, users, or others</li>
                    <li>Prevent fraud or security threats</li>
                  </ul>

                  <h3>4.4 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred. 
                    We will notify you of any such change and your options.
                  </p>

                  <h2>5. Data Security</h2>
                  <p>
                    We implement industry-standard security measures including:
                  </p>
                  <ul>
                    <li><strong>Encryption:</strong> TLS/SSL for data in transit, AES-256 for data at rest</li>
                    <li><strong>Access Controls:</strong> Role-based permissions, multi-factor authentication</li>
                    <li><strong>Monitoring:</strong> 24/7 security monitoring and threat detection</li>
                    <li><strong>Audits:</strong> Regular security assessments and penetration testing</li>
                    <li><strong>Compliance:</strong> SOC 2, GDPR, and other relevant standards</li>
                  </ul>
                  <p>
                    However, no system is 100% secure. We cannot guarantee absolute security of your information.
                  </p>

                  <h2>6. Data Retention</h2>
                  <p>
                    We retain your information for as long as:
                  </p>
                  <ul>
                    <li>Your account is active</li>
                    <li>Needed to provide services</li>
                    <li>Required by law or regulation</li>
                    <li>Necessary for legitimate business purposes</li>
                  </ul>
                  <p>
                    Verified documents are retained for 7 years to comply with education industry standards. 
                    You can request deletion of your account and data at any time, subject to legal retention requirements.
                  </p>

                  <h2>7. Your Rights and Choices</h2>
                  
                  <h3>7.1 Access and Correction</h3>
                  <p>
                    You can access and update your personal information through your account dashboard or by contacting support.
                  </p>

                  <h3>7.2 Data Portability</h3>
                  <p>
                    You can request a copy of your data in a structured, machine-readable format.
                  </p>

                  <h3>7.3 Deletion</h3>
                  <p>
                    You can request deletion of your account and personal data. Some information may be retained 
                    as required by law or for legitimate business purposes.
                  </p>

                  <h3>7.4 Marketing Communications</h3>
                  <p>
                    You can opt out of marketing emails by clicking "unsubscribe" or adjusting preferences in your account.
                  </p>

                  <h3>7.5 Cookies</h3>
                  <p>
                    You can control cookies through your browser settings. Note that disabling cookies may affect 
                    platform functionality.
                  </p>

                  <h2>8. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place, including:
                  </p>
                  <ul>
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Privacy Shield frameworks where applicable</li>
                  </ul>

                  <h2>9. Children's Privacy</h2>
                  <p>
                    Our services are not intended for users under 16. We do not knowingly collect information from 
                    children. If you believe we have collected information from a child, please contact us immediately.
                  </p>

                  <h2>10. Third-Party Links</h2>
                  <p>
                    Our platform may contain links to third-party websites. We are not responsible for their privacy 
                    practices. Please review their privacy policies before providing any information.
                  </p>

                  <h2>11. Changes to Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy periodically. We will notify you of material changes via:
                  </p>
                  <ul>
                    <li>Email notification</li>
                    <li>Platform announcement</li>
                    <li>Updated "Last Modified" date</li>
                  </ul>
                  <p>
                    Continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>

                  <h2>12. Regional Specific Rights</h2>
                  
                  <h3>12.1 European Economic Area (EEA)</h3>
                  <p>
                    If you are in the EEA, you have additional rights under GDPR including:
                  </p>
                  <ul>
                    <li>Right to object to processing</li>
                    <li>Right to restrict processing</li>
                    <li>Right to lodge a complaint with supervisory authority</li>
                    <li>Right to withdraw consent</li>
                  </ul>

                  <h3>12.2 California Residents</h3>
                  <p>
                    California residents have rights under CCPA including:
                  </p>
                  <ul>
                    <li>Right to know what personal information is collected</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of sale of personal information (we do not sell your data)</li>
                    <li>Right to non-discrimination for exercising privacy rights</li>
                  </ul>

                  <h2>13. Contact Us</h2>
                  <p>
                    For privacy-related questions, requests, or concerns:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> privacy@cla360.app</li>
                    <li><strong>Data Protection Officer:</strong> dpo@cla360.app</li>
                    <li><strong>Address:</strong> [Company Address]</li>
                  </ul>

                  <div className="mt-12 p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-0">
                      <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your data. 
                      If you have any questions about how we handle your information, please don't hesitate to contact us.
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
