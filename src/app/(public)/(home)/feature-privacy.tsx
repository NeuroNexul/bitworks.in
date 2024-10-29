import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

export default function FeaturePrivacy({}: Props) {
  return (
    <div className={cn("w-full md:w-[60%]", "p-5 md:p-10 pt-16 md-pt-10")}>
      <h3 className="text-2xl font-semibold">Private and Secure</h3>
      <p className="text-lg font-medium text-muted-foreground pt-2">
        Build with confidence knowing everything stays within the team.
      </p>
    </div>
  );
}
