"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  classNameOnView: string;
  classNameOffView?: string;
  asChild: boolean;
  threshold?: number;
  reverse?: boolean;
} & React.ComponentProps<"div">;

export default function AddClassOnVisibility({
  children,
  classNameOnView,
  classNameOffView,
  asChild,
  threshold = 0.5,
  reverse,
  className,
  ...props
}: Props) {
  const Component = asChild ? Slot : "div";
  // Create new ref to attach to the element if not provided
  const newRef = React.useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (!newRef) return;
    const el = newRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          !reverse && observer.disconnect();
        } else {
          reverse && setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [newRef, classNameOnView, classNameOffView, threshold, reverse]);

  return (
    <Component
      className={cn(className, isInView ? classNameOnView : classNameOffView)}
      ref={newRef}
      {...props}
    >
      {children}
    </Component>
  );
}
