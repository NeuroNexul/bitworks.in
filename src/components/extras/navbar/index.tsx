"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  CircleIcon,
  ClapperboardIcon,
  HomeIcon,
  InfoIcon,
  LayoutDashboardIcon,
  LogInIcon,
  LucideProps,
  PenToolIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import SearchBox from "./search_box";
import { useSession } from "next-auth/react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = object;

export default function Navbar({}: Props) {
  const { status } = useSession();
  const pathname = "/" + usePathname().slice(1).split("/")[0];

  const buttons = useMemo(
    () =>
      [
        { href: "/", icon: HomeIcon, name: "Home" },
        { href: "/read-more", icon: InfoIcon, name: "Read More" },
        { href: "/blogs", icon: PenToolIcon, name: "Blogs" },
        { href: "/showcase", icon: ClapperboardIcon, name: "Showcase" },
        { href: "/community", icon: UsersIcon, name: "Community" },
        status === "authenticated"
          ? { href: "/dashboard", icon: LayoutDashboardIcon, name: "Dashboard" }
          : status === "unauthenticated"
          ? { href: "/login", icon: LogInIcon, name: "Login" }
          : { href: "#", icon: CircleIcon, name: "Loading" },
      ].filter(Boolean),
    [status]
  );

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "px-4 py-2 h-auto",
        "flex flex-row items-center justify-center gap-2",
        "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "flex-shrink relative w-[calc(100%-52px-0.5rem)] max-w-fit",
          "border-2 rounded-full backdrop-blur-lg bg-background/70 overflow-hidden",
          "transition-all duration-300",
          "pointer-events-auto",
          "shadow-xl shadow-background drop-shadow-xl"
        )}
      >
        <ScrollArea orientation="horizontal" className="w-full" width={5}>
          <div
            className={cn(
              "flex flex-row flex-shrink gap-0 items-center justify-evenly",
              "px-1 py-1"
            )}
          >
            {buttons.map(({ href, icon, name }) => (
              <NavbarButton
                key={href}
                href={href}
                icon={icon}
                name={name}
                selected={pathname === href}
              />
            ))}
          </div>
        </ScrollArea>
      </div>

      <SearchBox />
    </nav>
  );
}

function NavbarButton({
  href,
  icon,
  name,
  selected = false,
}: Readonly<{
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  name: string;
  selected?: boolean;
}>) {
  return (
    <Link
      href={href}
      className={cn(
        selected ? "mx-2 first-of-type:ml-0 last-of-type:mr-0" : ""
      )}
    >
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            className={cn(
              "h-full group/navButton",
              "px-0 py-1 rounded-full",
              "hover:bg-muted transition-colors duration-300",
              selected ? "bg-muted" : "bg-transparent",
              selected ? "px-3" : "px-1"
            )}
          >
            <div
              className={cn(
                "h-full",
                "flex flex-row items-center justify-center",
                selected ? "gap-2" : "gap-0"
              )}
            >
              <div
                className={cn(
                  "h-8 grid place-items-center",
                  selected ? "w-auto" : "w-8"
                )}
              >
                {React.createElement(icon, {
                  size: 20,
                  stroke: "currentColor",
                  fill: "none",
                })}
              </div>

              <div
                className={cn(
                  selected ? "max-w-full" : "max-w-0",
                  // "group-hover/navButton:max-w-7xl",
                  "overflow-hidden",
                  "transition-all duration-1000 ease-linear delay-0"
                )}
              >
                <span
                  className={cn(
                    "text-sm font-medium align-text-top text-nowrap"
                  )}
                >
                  {name}
                </span>
              </div>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>{name}</span>
        </TooltipContent>
      </Tooltip>
    </Link>
  );
}
