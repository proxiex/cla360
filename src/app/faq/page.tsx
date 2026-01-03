import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ - CLA360",
  description: "Frequently asked questions about CLA360 from students, universities, and partners.",
};

const generalFaqs = [
  {
    question: "What is CLA360?",
    answer: "CLA360 is a verification-first platform that supports readiness assessment, document verification, and structured engagement between students and universities.",
  },
  {
    question: "Is CLA360 an agent or representative?",
    answer: "No. CLA360 does not act as an agent, intermediary, or representative for students or institutions.",
  },
  {
    question: "Does CLA360 guarantee admission or visa approval?",
    answer: "No. Admissions and visa decisions remain entirely with universities and immigration authorities.",
  },
  {
    question: 'What does "verified student" mean?',
    answer: "A verified student has completed identity and academic document verification and holds a completed Hard PRV Score.",
  },
  {
    question: "Who can use CLA360?",
    answer: "CLA360 is used by students preparing to apply abroad, universities engaging pre-verified candidates, and organizations supporting student mobility.",
  },
];

const studentFaqs = [
  {
    question: "Do I need to be verified to use CLA360?",
    answer: "Students may begin with readiness assessment. Verification is required to participate in university engagements.",
  },
  {
    question: "What happens after I complete my readiness assessment?",
    answer: "You will see clear next steps based on your readiness status, including whether verification is appropriate at that time.",
  },
  {
    question: "Can I participate in CLA360 university engagements without verification?",
    answer: "No. University engagements are designed for pre-verified students only.",
  },
  {
    question: "Does CLA360 help me apply to universities?",
    answer: "CLA360 does not submit applications on behalf of students. It supports readiness, verification, and structured engagement.",
  },
  {
    question: "Can I use CLA360 even if I'm not ready to apply yet?",
    answer: "Yes. CLA360 is designed to help students understand readiness before applying.",
  },
];

const universityFaqs = [
  {
    question: "What problem does CLA360 solve for universities?",
    answer: "CLA360 reduces risk and noise by enabling engagement with pre-verified, readiness-assessed students.",
  },
  {
    question: "How does CLA360 verify students?",
    answer: "CLA360 verifies identity and academic documents and standardizes data before students engage institutions.",
  },
  {
    question: "Do universities see all students on the platform?",
    answer: "No. Universities engage only with students who meet defined verification and readiness standards.",
  },
  {
    question: "Does CLA360 replace our admissions process?",
    answer: "No. CLA360 complements existing admissions workflows. All admissions decisions remain with the institution.",
  },
  {
    question: "How do universities participate in CLA360 engagements?",
    answer: "Universities may participate through curated digital or in-person engagements aligned with readiness standards.",
  },
];

const eventFaqs = [
  {
    question: "What types of events does CLA360 host?",
    answer: "CLA360 hosts two types of events: University Engagements (verification-based) and Student Learning Sessions (educational).",
  },
  {
    question: "Who can attend University Engagements?",
    answer: "Only students who have completed verification and hold a Hard PRV Score.",
  },
  {
    question: "Do Student Learning Sessions require verification?",
    answer: "No. Student Learning Sessions are open and educational.",
  },
];

const trustFaqs = [
  {
    question: "How is student data handled?",
    answer: "CLA360 uses consent-based data handling and secure verification processes.",
  },
  {
    question: "Is verification explainable?",
    answer: "Yes. Verification and readiness signals are designed to be transparent and auditable.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Answers to common questions from students, universities, and partners using CLA360.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {/* General FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">General</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions both students and universities care about.
              </p>
              <Accordion type="single" collapsible className="mt-6">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* For Students */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground">For Students</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions addressing student concerns.
              </p>
              <Accordion type="single" collapsible className="mt-6">
                {studentFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`student-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* For Universities */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground">For Universities</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions for institutions engaging with CLA360.
              </p>
              <Accordion type="single" collapsible className="mt-6">
                {universityFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`university-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Events & Engagements */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground">Events & Engagements</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions about CLA360 events.
              </p>
              <Accordion type="single" collapsible className="mt-6">
                {eventFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`event-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Trust & Data */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground">Trust & Data</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions about data handling and compliance.
              </p>
              <Accordion type="single" collapsible className="mt-6">
                {trustFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`trust-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
