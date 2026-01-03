import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Circle,
  AlertCircle,
  ArrowRight,
  FileText,
  Shield,
  Award,
  Building2,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Dashboard - CLA360",
  description: "Your CLA360 student dashboard",
};

const verificationSteps = [
  { name: "Profile completed", status: "completed" },
  { name: "Documents uploaded", status: "in_progress" },
  { name: "Visa readiness completed", status: "pending" },
  { name: "Hard PRV Score generated", status: "pending" },
];

const alerts = [
  { type: "warning", message: "Complete your profile to continue verification" },
  { type: "info", message: "Upload your academic transcripts to proceed" },
];

export default function DashboardPage() {
  const completedSteps = verificationSteps.filter((s) => s.status === "completed").length;
  const progress = (completedSteps / verificationSteps.length) * 100;

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Welcome back. Here's your verification status.</p>
      </div>

      {/* Status Banner */}
      <Card className="mb-8 border-2 border-amber-200 bg-amber-50">
        <CardContent className="flex items-center gap-4 p-4">
          <AlertCircle className="h-6 w-6 text-amber-600" />
          <div className="flex-1">
            <p className="font-medium text-amber-900">Verification In Progress</p>
            <p className="text-sm text-amber-700">Complete all steps to become university-eligible.</p>
          </div>
          <Button size="sm" asChild>
            <Link href="/app/profile">Continue <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Progress Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Verification Progress</span>
              <Badge variant="secondary">{completedSteps}/{verificationSteps.length} Complete</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="mb-6 h-2" />
            <div className="space-y-4">
              {verificationSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  {step.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  ) : step.status === "in_progress" ? (
                    <div className="relative">
                      <Circle className="h-5 w-5 text-primary" />
                      <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25" />
                    </div>
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/50" />
                  )}
                  <span className={step.status === "pending" ? "text-muted-foreground" : "text-foreground"}>
                    {step.name}
                  </span>
                  {step.status === "in_progress" && (
                    <Badge variant="outline" className="ml-auto">In Progress</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/app/profile">
                <FileText className="mr-2 h-4 w-4" /> Complete Profile
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/app/documents">
                <FileText className="mr-2 h-4 w-4" /> Upload Documents
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/app/visa-readiness">
                <Shield className="mr-2 h-4 w-4" /> Visa Readiness
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <Card key={index} className={alert.type === "warning" ? "border-amber-200 bg-amber-50" : "border-blue-200 bg-blue-50"}>
                <CardContent className="flex items-center gap-3 p-4">
                  <AlertCircle className={`h-5 w-5 ${alert.type === "warning" ? "text-amber-600" : "text-blue-600"}`} />
                  <p className={`text-sm ${alert.type === "warning" ? "text-amber-900" : "text-blue-900"}`}>
                    {alert.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Status Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Hard PRV Score</p>
              <p className="text-lg font-semibold">Not Generated</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">University Interest</p>
              <p className="text-lg font-semibold">0 Views</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
              <p className="text-lg font-semibold">0 Eligible</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* University Engagement Status */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>University Engagement Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted p-4">
            <div className="flex items-start gap-3">
              <Circle className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Not Yet Verified</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Complete verification to become eligible for university engagement. Universities can view 
                  and express interest in verified students only.
                </p>
                <Button className="mt-4" size="sm" asChild>
                  <Link href="/app/documents">Continue Verification</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
