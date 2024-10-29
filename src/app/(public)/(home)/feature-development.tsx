import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

export default function FeatureDevelopment({}: Props) {
  return (
    <div className={cn("relative w-full md:w-[40%]", "p-5 md:p-10 pt-16 md:pt-10")}>
      <h3 className="text-2xl font-semibold">Fun and Productive Environment</h3>
      <p className="text-lg font-medium text-muted-foreground pt-2">
        Bitworks blends serious innovation with fun, making collaboration a joy.
      </p>

      <div className={cn("relative -z-10 w-full h-48")}>
        <div
          className={cn(
            "absolute -left-5 md:-left-10 -bottom-5 md:-bottom-10 -right-5 md:-right-10 -top-5 md:-top-10",
            "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(to_bottom,_hsl(var(--background))_0%,transparent_50%,transparent_50%,_hsl(var(--background))_100%)]",
            "after:-mb-1"
          )}
        >
          <div
            className={cn(
              "[perspective:4000px] [perspective-origin:100%_0] [transform-style:preserve-3d]",
              "relative w-full h-full contain-strict overflow-hidden"
              // "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:-mr-1 after:bg-[linear-gradient(to_right,transparent_80%,hsl(var(--background))_90%)]",
            )}
          >
            <div
              className={cn(
                "[transform:translateX(2%)_scale(1.2)_rotateX(47deg)_rotateY(31deg)_rotate(324deg)] [transform-origin:top_left]",
                "[backface-visibility:hidden]",
                "absolute inset-0 h-[24rem] w-[42.66rem] mt-16 -ml-32 border border-primary-foreground rounded-3xl shadow-2xl"
                // "contain-strict overflow-hidden"
              )}
            >
              <div
                className={cn(
                  "relative w-full h-full",
                  "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:-mr-1 after:bg-[linear-gradient(to_bottom_right,transparent_40%,hsl(var(--background))_58%)]",
                  "bg-[url(https://res.cloudinary.com/djoo8ogmp/image/upload/v1730229882/uploaded/image_feskuq.webp)]",
                  "bg-cover bg-top bg-no-repeat",
                  "animate-reveal-up opacity-0 [animation-delay:500ms]",
                  "rounded-3xl"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
