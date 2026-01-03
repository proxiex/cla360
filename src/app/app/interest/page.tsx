import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Building2,
  Clock,
  ArrowRight,
  Lock,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Track University Interest - CLA360",
  description: "Track university interest in your profile",
};

const universityInterest = [
  {
    id: "1",
    university: "Sample University",
    location: "United States",
    action: "Viewed Profile",
    date: "Dec 20, 2025",
    status: "viewed",
  },
];

export default function InterestPage() {
  const isVerified = false;
  const totalViews = 0;
  const expressedInterest = 0;
  const invitations = 0;

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Track University Interest</h1>
        <p className="mt-1 text-muted-foreground">
          This section shows activity from universities engaging verified students.
        </p>
      </div>

      {!isVerified && (
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="flex items-start gap-4 p-4">
            <Lock className="h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <p className="font-medium text-amber-900">Profile Not Yet Visible</p>
              <p className="mt-1 text-sm text-amber-700">
                Your profile will become visible to universities once you complete verification 
                and generate your Hard PRV Score.
              </p>
              <Button size="sm" className="mt-3" asChild>
                <Link href="/app/documents">Continue Verification</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Profile Views</p>
              <p className="text-2xl font-bold">{totalViews}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expressed Interest</p>
              <p className="text-2xl font-bold">{expressedInterest}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Invitations</p>
              <p className="text-2xl font-bold">{invitations}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {isVerified && universityInterest.length > 0 ? (
            <div className="space-y-4">
              {universityInterest.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.university}</p>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant="outline">{item.action}</Badge>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <Eye className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 font-medium text-foreground">No Activity Yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {isVerified
                  ? "Universities will appear here when they view or express interest in your profile."
                  : "Complete verification to make your profile visible to universities."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="mt-8 bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">How University Interest Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Once your profile is verified, universities participating in CLA360 can:
            </p>
            <ul className="ml-4 space-y-2 list-disc">
              <li>View your verified profile and Hard PRV Score</li>
              <li>Express interest in your application</li>
              <li>Send invitations to apply or engage further</li>
            </ul>
            <p className="font-medium text-foreground">
              You do not need to contact universities directly through CLA360. If interest is 
              expressed, you will be notified here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
