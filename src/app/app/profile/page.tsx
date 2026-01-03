"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Save } from "lucide-react";

const countries = [
  "Ghana", "Nigeria", "Kenya", "South Africa", "Egypt", "Ethiopia", "Tanzania",
  "Uganda", "Rwanda", "Cameroon", "Senegal", "Other",
];

const destinations = ["United States", "Canada", "United Kingdom", "Germany", "France", "Netherlands", "Australia", "Ireland", "Other"];

const programLevels = ["Undergraduate", "Master's", "PhD", "Certificate/Diploma"];

const fieldsOfStudy = [
  "Business & Management", "Engineering", "Computer Science & IT", "Medicine & Health Sciences",
  "Law", "Arts & Humanities", "Social Sciences", "Natural Sciences", "Education", "Other",
];

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="mt-1 text-muted-foreground">Complete your profile to proceed with verification.</p>
        </div>
        <Badge variant="secondary">70% Complete</Badge>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="education">Education History</TabsTrigger>
          <TabsTrigger value="program">Program Preferences</TabsTrigger>
          <TabsTrigger value="career">Career Intent</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+233 XX XXX XXXX" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="citizenship">Country of Citizenship</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="residence">Current Country of Residence</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Current Address</Label>
                <Textarea id="address" placeholder="Enter your current address" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">Most Recent Education</h4>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Institution Name</Label>
                    <Input placeholder="University of Ghana" />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree/Certificate</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shs">Senior High School</SelectItem>
                        <SelectItem value="diploma">Diploma/HND</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select field" /></SelectTrigger>
                      <SelectContent>
                        {fieldsOfStudy.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                      <SelectContent>
                        {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input type="month" />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date (or Expected)</Label>
                    <Input type="month" />
                  </div>
                  <div className="space-y-2">
                    <Label>GPA / Grade</Label>
                    <Input placeholder="3.5 / 4.0" />
                  </div>
                </div>
              </div>
              <Button variant="outline">+ Add Another Education</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="program">
          <Card>
            <CardHeader>
              <CardTitle>Program Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Intended Destination</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select destination" /></SelectTrigger>
                    <SelectContent>
                      {destinations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Intended Program Level</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                    <SelectContent>
                      {programLevels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select field" /></SelectTrigger>
                    <SelectContent>
                      {fieldsOfStudy.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Intended Intake</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select timeframe" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fall2025">Fall 2025</SelectItem>
                      <SelectItem value="spring2026">Spring 2026</SelectItem>
                      <SelectItem value="fall2026">Fall 2026</SelectItem>
                      <SelectItem value="spring2027">Spring 2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Specific Programs of Interest (Optional)</Label>
                <Textarea placeholder="List any specific programs or universities you're interested in..." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="career">
          <Card>
            <CardHeader>
              <CardTitle>Career Intent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Intended Profession After Graduation</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select profession" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Doctor/Healthcare Professional</SelectItem>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="developer">Software Developer/IT Professional</SelectItem>
                      <SelectItem value="business">Business/Finance Professional</SelectItem>
                      <SelectItem value="lawyer">Lawyer</SelectItem>
                      <SelectItem value="teacher">Teacher/Academic</SelectItem>
                      <SelectItem value="researcher">Researcher/Scientist</SelectItem>
                      <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Where do you intend to work after school?</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Country</SelectItem>
                      <SelectItem value="destination">Destination Country</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="unsure">Unsure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Why does this program fit your career plan?</Label>
                <Textarea placeholder="Explain how your intended program aligns with your career goals..." rows={4} />
              </div>
              <div className="space-y-2">
                <Label>Are you open to returning home after graduation if required?</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select response" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="unsure">Unsure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex items-center justify-end gap-4">
        {saved && (
          <span className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" /> Changes saved
          </span>
        )}
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
    </div>
  );
}
