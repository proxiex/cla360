import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  FileText,
  Shield,
  Award,
  Building2,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Help - CLA360",
  description: "Get help with CLA360",
};

const helpTopics = [
  {
    icon: FileText,
    title: "Documents & Verification",
    description: "Learn about document requirements and the verification process",
    href: "#documents",
  },
  {
    icon: Award,
    title: "PRV Scores",
    description: "Understand Soft and Hard PRV Scores and what they mean",
    href: "#prv-scores",
  },
  {
    icon: Building2,
    title: "University Engagements",
    description: "How to participate in university engagements",
    href: "#engagements",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "How we protect your data and privacy",
    href: "#privacy",
  },
];

const faqs = [
  {
    question: "How long does document verification take?",
    answer: "Document verification typically takes 3-5 business days. You will receive email notifications when your documents are reviewed.",
  },
  {
    question: "What documents are required for verification?",
    answer: "Required documents include: valid passport or national ID, official academic transcripts, and degree certificates. Optional documents include English proficiency test scores, CV, and statement of purpose.",
  },
  {
    question: "What is the difference between Soft and Hard PRV Scores?",
    answer: "Soft PRV Score is an early readiness signal based on your self-reported information. Hard PRV Score is a university-grade score based on verified documents and is required for university engagement.",
  },
  {
    question: "How can I participate in university engagements?",
    answer: "To participate in university engagements, you must complete verification and have a Hard PRV Score. Once verified, you can request to attend upcoming engagements through the Engagements page.",
  },
  {
    question: "Can I update my information after verification?",
    answer: "Some profile information can be updated after verification. However, changes to verified documents may require re-verification. Contact support for assistance with major changes.",
  },
  {
    question: "How do universities see my profile?",
    answer: "Once you complete verification, participating universities can view your verified profile and Hard PRV Score. You can track university interest through the 'Track University Interest' page.",
  },
];

export default function HelpPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Help Center</h1>
        <p className="mt-1 text-muted-foreground">
          Find answers to common questions and get support.
        </p>
      </div>

      {/* Search */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search for help..." />
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {helpTopics.map((topic) => (
          <Card key={topic.title} className="cursor-pointer transition-colors hover:bg-muted/50">
            <CardContent className="p-4">
              <topic.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-semibold">{topic.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-lg border p-4">
              <MessageCircle className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-medium">Live Chat</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Chat with our support team during business hours
                </p>
                <Button size="sm" className="mt-3">
                  Start Chat
                </Button>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border p-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-medium">Email Support</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  We typically respond within 24 hours
                </p>
                <Button size="sm" variant="outline" className="mt-3" asChild>
                  <a href="mailto:support@cla360.app">
                    support@cla360.app
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mt-8 bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Link
              href="/faq"
              className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
            >
              <span className="text-sm">Full FAQ Page</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/trust"
              className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
            >
              <span className="text-sm">Trust & Compliance</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/students"
              className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
            >
              <span className="text-sm">How CLA360 Works for Students</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
