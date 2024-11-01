"use client";

import { AnimatedButton, Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import AnimateText from "@/components/utility/animate-text";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

export default function CommingSoon({}: Props) {
  const { data, status } = useSession();
  const path = usePathname();
  const cursor = React.useRef<HTMLDivElement>(null);
  const mouse = React.useRef({
    x: 0,
    y: 0,
  });
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const onMouseMove = (e: React.MouseEvent) => {
    if (cursor.current) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
  };

  useEffect(() => {
    if (!cursor.current) return;

    const TAIL_LENGTH = 40;
    let cursorCircles: Array<HTMLDivElement> = [];
    let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });
    let animationFrame: number;

    function initCursor() {
      if (!cursor.current) return;

      for (let i = 0; i < TAIL_LENGTH; i++) {
        let div = document.createElement("div");
        div.classList.add("cursor-circle");
        cursor.current.append(div);
      }
      cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"));
    }

    function updateCursor() {
      cursorHistory.shift();
      cursorHistory.push({ x: mouse.current.x, y: mouse.current.y });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;
        cursorCircles[i].style.transform = `translate(${current.x}px, ${
          current.y
        }px) scale(${i / TAIL_LENGTH})`;
      }

      animationFrame = requestAnimationFrame(updateCursor);
    }

    initCursor();
    updateCursor();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className={cn("w-full h-full relative cursor-none")}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onMouseMove={onMouseMove}
    >
      <div
        className={cn(
          "size-10 fixed z-50 -translate-x-1/2 -translate-y-1/2",
          "mix-blend-difference pointer-events-none",
          isTouchDevice ? "hidden" : "block"
        )}
        style={{
          opacity: isMouseOver ? 1 : 0,
          filter: "url(#goo)",
        }}
        ref={cursor}
      ></div>

      <div className={cn("w-full h-full absolute -z-10")}></div>

      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--muted-foreground))"
      />
      <Spotlight
        className="-top-20 left-24 md:left-[40rem] md:-top-20 md:hidden"
        fill="hsl(var(--muted-foreground)/60%)"
      />

      <div className={cn("w-full h-auto min-h-full py-10")}>
        <div className="w-full px-10 flex flex-row items-center justify-between">
          <div
            className={cn(
              "flex flex-row items-center justify-center gap-2",
              "opacity-0 animate-reveal-up delay-300",
              "border border-gray-300 rounded-md px-2 py-1"
            )}
          >
            <span className="text-sm font-medium">PATH:</span>
            <span className="text-sm font-light">
              {path === "/" ? "Home" : path}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "w-full pt-32 flex flex-col items-center justify-center"
          )}
        >
          {status === "authenticated" && (
            <div
              className={cn("w-auto flex flex-row justify-center items-center")}
            >
              <h2
                className={cn(
                  "text-3xl font-medium text-center",
                  "opacity-0 animate-reveal-up delay-300"
                )}
              >
                Welcome
              </h2>

              <div
                className={cn(
                  "rounded-full border ml-2 p-1",
                  "flex flex-row justify-center items-center",
                  "opacity-0 animate-reveal-up delay-500"
                )}
              >
                <img
                  src={data?.user?.image || ""}
                  alt="profile"
                  className={cn("size-10 rounded-full")}
                />

                <div className={cn("px-2")}>
                  <h3
                    className={cn(
                      "text-base font-medium text-left leading-3 pb-2"
                    )}
                  >
                    {data?.user?.name}
                  </h3>

                  <h3
                    className={cn(
                      "text-xs font-medium text-left lowercase leading-3"
                    )}
                  >
                    {data?.user?.email}
                  </h3>
                </div>
              </div>
            </div>
          )}

          <h1
            className={cn(
              "pt-10",
              "text-9xl font-medium text-center uppercase",
              "text-[clamp(3rem,12vw,8rem)] leading-[1]"
            )}
          >
            <AnimateText text="Coming Soon" />
          </h1>

          <p className={cn("pt-2", "text-xl font-medium text-center")}>
            <AnimateText text="We are working on something awesome!" />
          </p>

          <div className="pt-20 flex flex-row items-center justify-center md:justify-start gap-4">
            <Button
              variant="default"
              className="text-lg opacity-0 animate-reveal-up delay-300"
            >
              Join Us Now
            </Button>
            <AnimatedButton
              variant="ghost"
              className="text-lg opacity-0 animate-reveal-up [animation-delay:400ms"
            >
              Say Hello
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
