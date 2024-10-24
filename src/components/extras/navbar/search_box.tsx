"usse client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { SearchIcon, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = object;

export default function SearchBox({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("#search-box")) return;
      setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            className={cn(
              "h-full group/navButton",
              "p-1 rounded-full",
              "hover:bg-muted transition-colors duration-300",
              isOpen ? "bg-muted" : "bg-transparent",
              "pointer-events-auto"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={cn(
                "h-full",
                "flex flex-row items-center justify-center"
              )}
            >
              <div className={cn("h-8 w-8 grid place-items-center")}>
                <SearchIcon size={20} stroke="currentColor" fill="none" />
              </div>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Search</span>
        </TooltipContent>
      </Tooltip>

      <div className={cn("fixed bottom-16 left-0 right-0 w-full px-4")}>
        <div
          className={cn(
            "relative w-full max-w-lg mx-auto h-80",
            "p-2",
            "bg-background/70 border-2 rounded-3xl backdrop-blur-lg",
            "transition-all duration-300",
            "transform origin-bottom",
            isOpen ? "scale-100" : "scale-0",
            "flex flex-col items-center justify-center",
            "pointer-events-auto"
          )}
          id="search-box"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Bar */}
          <div
            className={cn(
              "flex flex-row items-center justify-center",
              "w-full border-b"
            )}
          >
            <div className="w-8 h-8 grid place-items-center">
              <SearchIcon size={20} stroke="currentColor" fill="none" />
            </div>
            <Input
              className={cn(
                "w-full h-10",
                "px-3 py-1",
                "border-0 rounded-full !ring-0",
                "font-jetbrains-mono"
              )}
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="w-8 h-8 grid place-items-center cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
              <XIcon size={20} stroke="currentColor" fill="none" />
            </div>
          </div>

          {/* Search Results */}
          {results.length > 0 ? (
            <ScrollArea className="w-full flex-grow">
              <div className="w-full"></div>
            </ScrollArea>
          ) : (
            <div className="w-full flex-grow flex items-center justify-center">
              <span className="text-muted-foreground">No results found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
