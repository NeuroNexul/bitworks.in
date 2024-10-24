import React from "react";
import Navbar from "../navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  children: React.ReactNode;
  noNavbar?: boolean;
  noFooter?: boolean;
};

export default function PageWrapper({
  children,
  noNavbar = false,
  noFooter = false,
}: Props) {
  return (
    <div className="relative h-full">
      {/* Navbar */}
      {!noNavbar && <Navbar />}

      {/* Content */}
      <div className="relative h-full">
        <ScrollArea
          className="relative z-0 h-full max-h-full w-full overscroll-contain"
          orientation="vertical"
          id="scroll-main"
        >
          {children}

          {/* Footer */}
          {!noFooter && <div></div>}
        </ScrollArea>
      </div>
    </div>
  );
}
