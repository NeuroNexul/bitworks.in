import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisVerticalIcon,
  LockKeyholeIcon,
  RotateCwIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  url: string;
  title: string;
  image?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function BrowserLayout({
  url,
  title,
  children,
  className,
  image,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "w-full h-full rounded-lg overflow-hidden shadow-lg select-none",
        "bg-secondary",
        className
      )}
      {...props}
    >
      {/* Browser Header */}
      <div className="h-6 flex items-stretch justify-start gap-2 px-2 bg-primary-foreground">
        {/* Browser Buttons */}
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>

        {/* Tabs */}
        <div className="h-full flex items-stretch">
          <div
            className={cn(
              "relative z-0 h-full flex flex-row items-stretch px-2",
              "before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:rounded-br-md before:bg-primary-foreground",
              "after:absolute after:top-0 after:right-0 after:h-full after:w-2 after:rounded-bl-md after:bg-primary-foreground"
            )}
          >
            <div
              className={cn(
                "absolute w-full h-1/2 bottom-0 left-0 bg-secondary -z-10"
              )}
            />
            <div
              className={cn(
                "flex items-center justify-between space-x-2 px-2",
                "text-xs text-white bg-secondary",
                "rounded-t-md"
              )}
            >
              <span>{title}</span>
              <span>
                <XIcon className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Browser URL */}
      <div
        className={cn(
          "w-full h-6 flex items-stretch justify-start gap-2 px-2 py-0.5 bg-secondary",
          "border-b border-primary-foreground"
        )}
      >
        <div className="flex items-center space-x-1">
          <ArrowLeftIcon className="w-3 h-3" />
          <ArrowRightIcon className="w-3 h-3" />
          <RotateCwIcon className="w-3 h-3" />
        </div>
        <div className="flex items-center gap-2 bg-primary-foreground px-2 rounded-full w-full text-muted-foreground text-xs">
          <LockKeyholeIcon className="w-3 h-3" />
          <span className="">{url}</span>
        </div>
        <div className="flex items-center space-x-1">
          <EllipsisVerticalIcon className="w-3 h-3" />
        </div>
      </div>

      <div className="overflow-hidden p-1 h-full flex-grow">
        {image ? (
          <Image
            src={image}
            alt={title}
            className="w-full h-full rounded-md object-cover object-top filter grayscale"
            width={376}
            height={200}
          />
        ) : (
          <div className="rounded-md overflow-hidden h-full">{children}</div>
        )}
      </div>
    </div>
  );
}
