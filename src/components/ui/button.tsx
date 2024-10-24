import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "group/animate-button flex flex-row items-center justify-center gap-2",
          buttonVariants({ variant, size, className }),
          "[&_svg]:pointer-events-none [&_svg]:size-auto [&_svg]:shrink-0"
        )}
        ref={ref}
        {...props}
      >
        {children}
        <div className={cn("flex flex-row items-center justify-center gap-0")}>
          <div className="w-3 overflow-visible flex items-center justify-center">
            <ArrowRightIcon
              stroke="currentColor"
              className={cn(
                "!size-4",
                "transition-all duration-300 ease-in-out",
                "transform translate-x-0 opacity-100",
                "group-hover/animate-button:translate-x-[100%] group-hover/animate-button:opacity-0"
              )}
              style={{
                transitionDelay: "0ms",
              }}
            />
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-2 overflow-visible flex items-center justify-center"
            >
              <ChevronRightIcon
                stroke="currentColor"
                className={cn(
                  "!size-4",
                  "transition-all duration-300 ease-in-out",
                  "transform translate-x-[-100%] opacity-0",
                  "group-hover/animate-button:translate-x-0 group-hover/animate-button:opacity-100"
                )}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </Comp>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { Button, buttonVariants, AnimatedButton };
