"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function DefaultProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
}
