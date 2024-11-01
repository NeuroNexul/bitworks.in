import type { Metadata } from "next";
import { Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import DefaultProvider from "@/contexts";
import Gooey from "@/components/extras/svgs/gooey";
import { auth } from "@/auth/auth.config";

const barlow_font = Barlow({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--barlow",
  subsets: ["latin"],
});

const jetbrains_mono_font = JetBrains_Mono({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitWorks",
  description:
    "At BitWorks, we focus on collaborative coding, knowledge sharing, and pushing the boundaries of technology.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitworks.dev",
    siteName: "BitWorks",
    title: "BitWorks",
    description:
      "At BitWorks, we focus on collaborative coding, knowledge sharing, and pushing the boundaries of technology.",
    images: [
      {
        url: "https://res.cloudinary.com/djoo8ogmp/image/upload/v1729950647/uploaded/download_dspezl.png",
        width: 1200,
        height: 749,
        alt: "BitWorks",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased font-barlow",
          "dark",
          barlow_font.variable,
          jetbrains_mono_font.variable
        )}
      >
        <Gooey />
        <DefaultProvider session={session}>{children}</DefaultProvider>
      </body>
    </html>
  );
}
