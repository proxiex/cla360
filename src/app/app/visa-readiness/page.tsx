"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Save, Shield, AlertCircle } from "lucide-react";

export default function VisaReadinessPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Visa Readiness</h1>
          <p className="mt-1 text-muted-foreground">
            Complete your visa readiness assessment. This information helps evaluate your overall readiness.
          </p>
        </div>
        <Badge variant="secondary">40% Complete</Badge>
      </div>

      {/* Info Banner */}
      <Card className="mb-8 border-blue-200 bg-blue-50">
        <CardContent className="flex items-start gap-4 p-4">
          <Shield className="h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <p className="font-medium text-blue-900">Why this matters</p>
            <p className="mt-1 text-sm text-blue-700">
              Visa readiness is a key component of your Hard PRV Score. Strong ties to your home country, 
              clear intent, and financial preparedness all contribute to a stronger profile.
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="ties" className="space-y-6">
        <TabsList>
          <TabsTrigger value="ties">Ties to Home Country</TabsTrigger>
          <TabsTrigger value="travel">Travel History</TabsTrigger>
          <TabsTrigger value="financial">Financial Confirmation</TabsTrigger>
        </TabsList>

        <TabsContent value="ties">
          <Card>
            <CardHeader>
              <CardTitle>Ties to Home Country</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Employment Status</Label>
                <RadioGroup defaultValue="employed">
                  {["Employed", "Self-employed", "Student", "Unemployed"].map((status) => (
                    <div key={status} className="flex items-center space-x-2">
                      <RadioGroupItem value={status.toLowerCase()} id={`emp-${status}`} />
                      <Label htmlFor={`emp-${status}`}>{status}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Do you have a job you will return to after your studies?</Label>
                <RadioGroup defaultValue="yes">
                  {["Yes", "No", "Not applicable"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase().replace(" ", "-")} id={`job-${option}`} />
                      <Label htmlFor={`job-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Do you have immediate family in your home country?</Label>
                <RadioGroup defaultValue="yes">
                  {["Yes", "No"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`fam-${option}`} />
                      <Label htmlFor={`fam-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Do you have significant assets or responsibilities at home?</Label>
                <p className="text-sm text-muted-foreground">(property, business, caregiving responsibilities)</p>
                <RadioGroup defaultValue="no">
                  {["Yes", "No"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`asset-${option}`} />
                      <Label htmlFor={`asset-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="travel">
          <Card>
            <CardHeader>
              <CardTitle>Travel History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Have you traveled outside your home country before?</Label>
                <RadioGroup defaultValue="yes">
                  {["Yes", "No"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`travel-${option}`} />
                      <Label htmlFor={`travel-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Where have you traveled? (Select all that apply)</Label>
                <div className="space-y-2">
                  {["Africa", "Europe", "United States", "Canada", "Asia", "Middle East", "Other"].map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox id={`region-${region}`} />
                      <Label htmlFor={`region-${region}`}>{region}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Did you return on time from your previous travels?</Label>
                <RadioGroup defaultValue="yes">
                  {["Yes", "No"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`return-${option}`} />
                      <Label htmlFor={`return-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Have you ever had a visa refusal?</Label>
                <RadioGroup defaultValue="no">
                  {["Yes", "No"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`refusal-${option}`} />
                      <Label htmlFor={`refusal-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle>Financial Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Primary funding source(s)</Label>
                <div className="space-y-2">
                  {["Self/Family", "Scholarship", "Sponsor/Employer", "Loan", "Mixed"].map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <Checkbox id={`fund-${source}`} />
                      <Label htmlFor={`fund-${source}`}>{source}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Can you provide proof of funds for your first year of study?</Label>
                <RadioGroup defaultValue="yes">
                  {["Yes", "No", "Unsure"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`proof-${option}`} />
                      <Label htmlFor={`proof-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Do you have a scholarship?</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awarded">Yes - Awarded</SelectItem>
                    <SelectItem value="shortlisted">Yes - Shortlisted</SelectItem>
                    <SelectItem value="applied">Applied - Awaiting</SelectItem>
                    <SelectItem value="no">No scholarship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-amber-900">Financial Documentation</p>
                    <p className="mt-1 text-sm text-amber-700">
                      During Hard PRV verification, you may be asked to provide bank statements or 
                      sponsorship letters to confirm your financial readiness.
                    </p>
                  </div>
                </div>
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
