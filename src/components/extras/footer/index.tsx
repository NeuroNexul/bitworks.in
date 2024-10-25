import { cn } from "@/lib/utils";
import React from "react";
import Logo from "../svgs/logo";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="pt-20 pb-20">
      <div className={cn("w-full max-w-5xl mx-auto px-5 md:px-10")}>
        <div className="top">
          {/* Links */}
          <div
            className={cn(
              "flex flex-row items-center justify-center gap-2",
              "text-center"
            )}
          >
            
          </div>

          {/* Socials */}
          <div
            className={cn("flex flex-row items-center justify-center gap-4")}
          >
            <div
              className={cn(
                "w-full h-0.5 bg-muted-foreground/50",
                "bg-gradient-to-r from-background to-primary-foreground/20"
              )}
            />

            <Link href="#">
              <FaFacebookF className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="#">
              <FaLinkedinIn className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="#">
              <FaInstagram className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="#">
              <FaXTwitter className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="#">
              <FaEnvelope className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <div
              className={cn(
                "w-full h-0.5 bg-muted-foreground/50",
                "bg-gradient-to-l from-background to-primary-foreground/20"
              )}
            />
          </div>
        </div>

        <div className="bottom mt-8">
          {/* Logo */}
          <div
            className={cn("flex items-center justify-center gap-1", "mx-auto")}
          >
            <Logo className="size-10 fill-none stroke-foreground stroke-[3] align-text-top" />
            <h2
              className={cn(
                "text-4xl font-thin text-foreground",
                "align-middle"
              )}
            >
              BitWorks
            </h2>
          </div>

          <div
            className={cn(
              "text-center text-base font-semibold text-gray-500",
              "mt-1"
            )}
          >
            Copyright © {new Date().getFullYear()} BitWorks Team.
          </div>

          {/* Links */}
          <div
            className={cn(
              "flex flex-row items-center justify-center gap-4",
              "mt-3",
              "text-muted-foreground text-sm",
              "[&>a:hover]:text-primary [&>a]:transition-colors"
            )}
          >
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
