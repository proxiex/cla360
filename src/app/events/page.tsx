import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Events - CLA360",
  description: "CLA360 hosts University Engagements and Student Learning Sessions. Structured engagement and student learning — clearly separated.",
};

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                CLA360 Events
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Structured engagement and student learning — clearly separated.
              </p>
              <p className="mt-4 text-muted-foreground">
                CLA360 hosts two types of events, each designed for a different purpose in the student journey.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">University Engagements</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Selective and verification-based
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="mx-auto h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">Student Learning Sessions</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Open and educational
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
              Both are announced here. Each follows its own standards.
            </p>
          </div>
        </section>

        {/* University Engagements Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">University Engagements</h2>
                  <div className="mt-1 flex gap-2">
                    <Badge variant="secondary">Verified</Badge>
                    <Badge variant="secondary">Selective</Badge>
                    <Badge variant="secondary">Offer-Ready</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground">Purpose</h3>
                  <p className="mt-2 text-muted-foreground">
                    University Engagements are structured interactions between universities and pre-verified students.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">These include:</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      In-person university tours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Curated university fairs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Selective digital university engagements
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    They are not open recruitment events.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-foreground">Who Can Participate</h3>
                  <p className="mt-2 text-muted-foreground">
                    Participation is limited to students who have:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Completed document verification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      A completed Hard PRV Score
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    This ensures universities engage only with pre-verified, university-ready candidates.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-foreground">How Registration Works (Students)</h3>
                  <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>1. Review announced engagement details</li>
                    <li>2. Select "Request to Attend"</li>
                    <li>3. Eligibility is automatically checked</li>
                    <li>4. Approved students receive confirmation and a QR-based access credential</li>
                  </ol>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Only approved, verified students receive access.
                  </p>
                </div>
              </div>

              {/* Upcoming University Engagements */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground">Upcoming University Engagements</h3>
                <p className="mt-1 text-sm text-muted-foreground">(Displayed only when confirmed)</p>

                <Card className="mt-6 border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">CLA360 University Engagement — Accra</CardTitle>
                        <Badge className="mt-2" variant="outline">Coming Soon</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Accra, Ghana</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>October 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Selective in-person engagement</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-medium text-foreground">
                      Eligibility: Verified CLA360 students only
                    </p>
                    <Button className="mt-4" disabled>
                      Request to Attend (Coming Soon)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Student Learning Sessions Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-accent" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Student Learning Sessions</h2>
                  <div className="mt-1 flex gap-2">
                    <Badge variant="secondary">Educational</Badge>
                    <Badge variant="secondary">Open</Badge>
                    <Badge variant="secondary">Informational</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground">Purpose</h3>
                  <p className="mt-2 text-muted-foreground">
                    Student Learning Sessions are designed to help students learn about studying abroad 
                    through shared experiences.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">These sessions:</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Feature current and former international students
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Focus on expectations, preparation, and realities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Do not provide access to universities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Do not require verification or PRV Scores
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    They are strictly educational.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-foreground">Who Can Attend</h3>
                  <p className="mt-2 text-muted-foreground">
                    Any student exploring study abroad may attend.
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    No verification is required.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-foreground">How Registration Works (Students)</h3>
                  <p className="mt-2 text-muted-foreground">
                    To attend a Student Learning Session, students must:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Register with their name</li>
                    <li>• Provide a valid email address</li>
                    <li>• Provide a phone number</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    This information is used only to send the session access link and share reminders.
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    No additional screening applies.
                  </p>
                </div>
              </div>

              {/* Upcoming Student Learning Sessions */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground">Upcoming Student Learning Sessions</h3>

                <Card className="mt-6 border-2 border-accent/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">Monthly Student Learning Session</CardTitle>
                        <Badge className="mt-2" variant="outline">Virtual</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground">
                      Topic: Life as an International Student — What to Expect
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Format: Virtual panel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>Speakers: Current and former international students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Date: To be announced</span>
                      </div>
                    </div>
                    <Button className="mt-4" variant="outline">
                      Register to Attend
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Distinction */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="mx-auto max-w-3xl border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Important Distinction</h3>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Student Learning Sessions</strong> are educational only.
                        They do not provide access to university engagements.
                      </p>
                      <p>
                        <strong className="text-foreground">University Engagements</strong> are verification-based 
                        and require completed readiness and verification steps.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stay Informed CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Stay Informed
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                To receive updates about upcoming university engagements or student learning sessions:
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/subscribe">Join CLA360 Event Updates</Link>
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
