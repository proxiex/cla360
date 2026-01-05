"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

interface UniversityStatusBadgeProps {
  isVerified: boolean;
  className?: string;
}

export function UniversityStatusBadge({ isVerified, className = "" }: UniversityStatusBadgeProps) {
  if (isVerified) {
    return (
      <Badge className={`bg-green-100 text-green-700 border border-green-200 ${className}`}>
        <CheckCircle className="mr-1.5 h-3.5 w-3.5" />
        University-Eligible (Verified)
      </Badge>
    );
  }

  return (
    <Badge variant="secondary" className={className}>
      <Clock className="mr-1.5 h-3.5 w-3.5" />
      Verification In Progress
    </Badge>
  );
}
