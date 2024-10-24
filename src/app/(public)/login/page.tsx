import PageWrapper from "@/components/extras/page_wrapper";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import React from "react";
import Form from "./form";

type Props = {
  searchParams: Promise<{
    callbackUrl?: string;
    error?: string;
    verify_request?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const { error, callbackUrl, verify_request } = await searchParams;

  return (
    <PageWrapper>
      <main className="">
        <Spotlight
          className="-top-20 left-0 md:left-60 md:-top-20"
          fill="hsl(var(--muted-foreground))"
        />
        <Spotlight
          className="-top-20 left-24 md:left-[40rem] md:-top-20 md:hidden"
          fill="hsl(var(--muted-foreground)/60%)"
        />

        <section
          className={cn(
            "w-full max-w-md mx-auto h-dvh",
            "flex flex-col justify-center items-center gap-4",
            "px-8 py-8"
          )}
        >
          <div
            className={cn(
              "w-full h-auto",
              "px-4 py-4",
              "bg-muted border border-muted-foreground/70 rounded-lg shadow-lg",
              "animate-bring-in opacity-0"
            )}
          >
            <Form
              error={error}
              callbackUrl={callbackUrl}
              verify_request={verify_request}
            />
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
