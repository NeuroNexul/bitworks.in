import { cn } from "@/lib/utils";
import React from "react";
import AddClassOnVisibility from "./add-class-on-visibility";

type Props = {
  text: string;
  initialDelay?: number;
  delay?: number;
  className?: string;
  animateOnView?: boolean;
  repeat?: boolean;
};

export default function AnimateText({
  text,
  initialDelay = 0,
  delay = 100,
  className,
  animateOnView,
  repeat,
}: Props) {
  if (animateOnView)
    return (
      <>
        {text.split(" ").map((word, i) => (
          <AddClassOnVisibility
            key={i}
            asChild
            classNameOnView="animate-reveal-up"
            reverse={repeat}
          >
            <span
              className={cn("inline-block opacity-0", className)}
              style={{
                animationDelay: `${initialDelay + i * delay}ms`,
              }}
            >
              {word}&nbsp;
            </span>
          </AddClassOnVisibility>
        ))}
      </>
    );
  else
    return (
      <>
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className={cn(
              "inline-block animate-reveal-up opacity-0",
              className
            )}
            style={{
              animationDelay: `${initialDelay + i * delay}ms`,
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </>
    );
}
