"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Lock,
  QrCode,
  ArrowRight,
  CheckCircle,
  Download,
  Eye,
} from "lucide-react";

const upcomingEvents = [
  {
    id: "1",
    name: "CLA360 University Engagement — Accra",
    location: "Accra, Ghana",
    date: "October 2026",
    format: "In-person",
    eligible: false,
    approved: false,
    status: "upcoming",
  },
];

interface ApprovedEvent {
  id: string;
  name: string;
  location: string;
  date: string;
  format: string;
  approved: boolean;
  qrCode?: string;
}

const approvedEvents: ApprovedEvent[] = [
  // Example of an approved event with QR code
  // {
  //   id: "2",
  //   name: "CLA360 University Engagement — Lagos",
  //   location: "Lagos, Nigeria",
  //   date: "September 2026",
  //   format: "In-person",
  //   approved: true,
  //   qrCode: "QR_CODE_DATA_HERE",
  // },
];

const pastEvents: typeof upcomingEvents = [];

export default function EngagementsPage() {
  const isVerified = false;

  return (
    <div className="p-6 lg:p-8">
      {/* Status Badge - shown when verified */}
      {isVerified && (
        <div className="mb-6 flex justify-center">
          <Badge className="bg-green-100 text-green-700 border border-green-200 px-4 py-1.5">
            <CheckCircle className="mr-2 h-4 w-4" />
            Status: University-Eligible (Verified)
          </Badge>
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">University Engagements</h1>
        <p className="mt-1 text-muted-foreground">
          View and register for curated university engagement opportunities.
        </p>
      </div>

      {!isVerified && (
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="flex items-start gap-4 p-4">
            <Lock className="h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <p className="font-medium text-amber-900">Verification Required</p>
              <p className="mt-1 text-sm text-amber-700">
                University engagements are only available to verified students with a Hard PRV Score.
                Complete verification to become eligible.
              </p>
              <Button size="sm" className="mt-3" asChild>
                <Link href="/app/documents">Continue Verification</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Eligibility Status */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Engagement Eligibility</p>
              <p className="mt-1 text-lg font-semibold">
                {isVerified ? "Eligible" : "Not Yet Eligible"}
              </p>
            </div>
            <Badge variant={isVerified ? "default" : "secondary"}>
              {isVerified ? "Verified" : "Verification Required"}
            </Badge>
          </div>
          {isVerified && (
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Your Hard PRV Score qualifies you for university engagements
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Upcoming Engagements</h2>
        {upcomingEvents.length > 0 ? (
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{event.name}</h3>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {event.format}
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{event.status}</Badge>
                      </div>
                      <div className="mt-4">
                        {event.eligible ? (
                          <div className="flex items-center gap-3">
                            <Badge className="bg-green-100 text-green-700">Eligible</Badge>
                            <Button size="sm">
                              Request to Attend <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">Not Eligible</Badge>
                            <span className="text-sm text-muted-foreground">
                              Complete verification to request attendance
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground">No upcoming engagements at this time</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Your Event Access - QR Codes */}
      {isVerified && (
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Your Event Access</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            QR codes for approved events appear here. Present your QR code at the event for entry.
          </p>
          {approvedEvents.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {approvedEvents.map((event) => (
                <Card key={event.id} className="border-2 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-700">Approved</Badge>
                        <h3 className="font-semibold text-foreground">{event.name}</h3>
                        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed bg-muted">
                        <QrCode className="h-16 w-16 text-foreground" />
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View QR
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <QrCode className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-muted-foreground">
                  QR codes will appear here when you're approved for events
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Event History */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Event History</h2>
        {pastEvents.length > 0 ? (
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <Badge variant="outline">Attended</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No past events</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* How It Works */}
      <Card className="mt-8 bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">How University Engagements Work</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">1</span>
              Complete verification and generate your Hard PRV Score
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">2</span>
              Browse upcoming engagements and request to attend
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">3</span>
              Receive approval and your QR-based access credential
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">4</span>
              Attend and engage directly with university representatives
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
