"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
  Eye,
  Download,
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  status: "pending" | "uploaded" | "verified" | "rejected";
  required: boolean;
  file?: string;
  note?: string;
}

const initialDocuments: Document[] = [
  { id: "1", name: "Passport / National ID", type: "identity", status: "uploaded", required: true, file: "passport.pdf" },
  { id: "2", name: "Academic Transcripts", type: "academic", status: "pending", required: true },
  { id: "3", name: "Degree Certificate", type: "academic", status: "pending", required: true },
  { id: "4", name: "English Proficiency Test", type: "language", status: "pending", required: false },
  { id: "5", name: "CV / Resume", type: "supporting", status: "pending", required: false },
  { id: "6", name: "Statement of Purpose", type: "supporting", status: "pending", required: false },
];

export default function DocumentsPage() {
  const [documents, setDocuments] = useState(initialDocuments);

  const uploadedCount = documents.filter((d) => d.status !== "pending").length;
  const verifiedCount = documents.filter((d) => d.status === "verified").length;
  const requiredCount = documents.filter((d) => d.required).length;
  const requiredUploaded = documents.filter((d) => d.required && d.status !== "pending").length;

  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "uploaded":
        return <Clock className="h-5 w-5 text-amber-600" />;
      case "rejected":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: Document["status"]) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-700">Verified</Badge>;
      case "uploaded":
        return <Badge className="bg-amber-100 text-amber-700">Under Review</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-700">Needs Revision</Badge>;
      default:
        return <Badge variant="outline">Not Uploaded</Badge>;
    }
  };

  const handleUpload = (docId: string) => {
    setDocuments((docs) =>
      docs.map((d) =>
        d.id === docId ? { ...d, status: "uploaded" as const, file: "document.pdf" } : d
      )
    );
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Documents</h1>
        <p className="mt-1 text-muted-foreground">
          Upload and manage your verification documents. All required documents must be verified.
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">Documents Uploaded</p>
              <p className="mt-1 text-2xl font-bold">{uploadedCount}/{documents.length}</p>
              <Progress value={(uploadedCount / documents.length) * 100} className="mt-2 h-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Documents Verified</p>
              <p className="mt-1 text-2xl font-bold">{verifiedCount}/{documents.length}</p>
              <Progress value={(verifiedCount / documents.length) * 100} className="mt-2 h-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Required Documents</p>
              <p className="mt-1 text-2xl font-bold">{requiredUploaded}/{requiredCount}</p>
              <Progress value={(requiredUploaded / requiredCount) * 100} className="mt-2 h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(doc.status)}
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{doc.name}</p>
                      {doc.required && (
                        <Badge variant="outline" className="text-xs">Required</Badge>
                      )}
                    </div>
                    {doc.file && (
                      <p className="text-sm text-muted-foreground">{doc.file}</p>
                    )}
                    {doc.note && (
                      <p className="mt-1 text-sm text-red-600">{doc.note}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(doc.status)}
                  {doc.status === "pending" ? (
                    <Button size="sm" onClick={() => handleUpload(doc.id)}>
                      <Upload className="mr-2 h-4 w-4" /> Upload
                    </Button>
                  ) : (
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                      {doc.status !== "verified" && (
                        <Button size="sm" variant="ghost">
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upload Guidelines */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Upload Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              Documents must be clear, legible scans or photos
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              Accepted formats: PDF, JPG, PNG (max 10MB per file)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              Official transcripts should include institutional stamps or signatures
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              Non-English documents should include certified translations
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              Verification typically takes 3-5 business days
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
