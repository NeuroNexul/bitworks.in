import BrowserLayout from "@/components/extras/browser";
import { cn } from "@/lib/utils";
import React from "react";

const items = [
  {
    name: "Dit Hij",
    image:
      "https://res.cloudinary.com/djoo8ogmp/image/upload/v1729859155/uploaded/marc-kuiper-37764_jlpwew.webp",
    projects: [
      {
        name: "Projectus",
        image:
          "https://res.cloudinary.com/djoo8ogmp/image/upload/v1729858527/uploaded/Project-Management-Tool-UI-Kit-01_jjx7eu.webp",
      },
      {
        name: "GoPidge",
        image:
          "https://res.cloudinary.com/djoo8ogmp/image/upload/v1729858760/uploaded/RxE4MGO4hoqQD1U1IWCh31XtIVk_syj0ng.webp",
      },
    ],
  },
];

type Props = {};

export default function FeatureDomain({}: Props) {
  const item = items[Math.floor(Math.random() * items.length)];

  return (
    <div className={cn("relative w-full md:w-[60%]", "p-5 md:p-10 pt-16 md-pt-10 overflow-hidden")}>
      <h3 className="text-2xl font-semibold">
        Get yourself and your projects an identity
      </h3>
      <p className="text-lg font-medium text-muted-foreground pt-2">
        Stand out with a personalized&nbsp;
        <span className={cn(
          "-my-1 px-2 py-1",
          "bg-primary-foreground text-primary-background rounded-lg border border-muted-foreground/50",
        )}>
          *.bitworks.in
        </span>
        &nbsp;that reflects your individuality
        and gives your projects a unique presence.
      </p>

      <div
        className={cn(
          "relative -z-10 w-full h-48",
          "after:pointer-events-none after:absolute after:inset-0 after:-m-10 after:-mb-5 after:md:-mb-10 after:z-10 after:bg-[linear-gradient(to_bottom,transparent_50%,_hsl(var(--background))_100%)]",
          "before:pointer-events-none before:absolute before:inset-0 before:-m-10 before:-mb-5 before:md:-mb-10 before:z-10 before:bg-[linear-gradient(to_right,hsl(var(--background))_5%,transparent_10%,transparent_90%,hsl(var(--background))_95%)]",
        )}
      >
        <BrowserLayout
          url={`https://${item.name.split(" ")[0].toLowerCase()}.bitworks.in`}
          title={item.name}
          className={cn(
            "absolute z-10 -bottom-12 left-1/2 -translate-x-1/2",
            "w-96 h-52"
          )}
          image={item.image}
        />

        <BrowserLayout
          url={`https://${item.projects[0].name
            .split(" ")[0]
            .toLowerCase()}.${item.name
            .split(" ")[0]
            .toLowerCase()}.bitworks.in`}
          title={item.projects[0].name}
          className={cn(
            "absolute -bottom-20 left-2/3 -tr anslate-x-1/2",
            "w-96 h-52"
          )}
          image={item.projects[0].image}
        />

        <BrowserLayout
          url={`https://${item.projects[1].name
            .split(" ")[0]
            .toLowerCase()}.${item.name
            .split(" ")[0]
            .toLowerCase()}.bitworks.in`}
          title={item.projects[1].name}
          className={cn("absolute -bottom-20 left-[-50px]", "w-96 h-52")}
          image={item.projects[1].image}
        />
      </div>
    </div>
  );
}
