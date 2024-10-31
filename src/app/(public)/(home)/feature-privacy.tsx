import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

export default function FeaturePrivacy({}: Props) {
  return (
    <div
      className={cn(
        "relative w-full md:w-[60%] flex flex-col",
        "p-5 md:p-10 pt-16 md-pt-10"
      )}
    >
      <h3 className="text-2xl font-semibold">Private and Secure</h3>
      <p className="text-lg font-medium text-muted-foreground pt-2">
        Build with confidence knowing everything stays within the team.
      </p>

      <div className={cn("relative -z-10 w-full h-full min-h-48 flex-grow")}>
        <div
          className={cn(
            "absolute -top-5 -right-5 -left-5 -bottom-5 md:-top-10 md:-right-10 md:-left-10 md:-bottom-10",
            "overflow-hidden contain-strict",
            "after:pointer-events-none after:absolute after:inset-0 after:-m-10 after:-mb-5 after:md:-mb-10 after:z-10 after:bg-background/40"
          )}
        >
          <div
            className={cn(
              "absolute top-0 left-0 right-0 bottom-0",
              // "bg-gradient-to-br from-primary-foreground to-primary-background rounded-3xl",
              // "transform -rotate-12",
              "bg-[url(https://res.cloudinary.com/djoo8ogmp/image/upload/v1730410142/uploaded/AdobeStock_671675040-scaled_jtmhmg.webp)]",
              "bg-cover bg-top bg-no-repeat bg-blend-luminosity bg-background",
              "after:absolute",
              "after:pointer-events-none after:absolute after:inset-0 after:-m-10 after:-mb-5 after:md:-mb-10 after:z-10 after:bg-[linear-gradient(to_top,hsl(var(--background))_15%,transparent_50%,hsl(var(--background))_85%)]",
              "before:pointer-events-none before:absolute before:inset-0 before:-m-10 before:-mb-5 before:md:-mb-10 before:z-10 before:bg-[linear-gradient(to_left,hsl(var(--background))_5%,transparent_50%,hsl(var(--background))_90%)]"
            )}
          >
            {/* <DottedTerrain /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
