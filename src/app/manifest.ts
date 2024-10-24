import type { MetadataRoute } from "next";

import Logo_48 from "@/assets/maskable/maskable_icon_x48.png";
import Logo_72 from "@/assets/maskable/maskable_icon_x72.png";
import Logo_96 from "@/assets/maskable/maskable_icon_x96.png";
import Logo_128 from "@/assets/maskable/maskable_icon_x128.png";
import Logo_192 from "@/assets/maskable/maskable_icon_x192.png";
import Logo_384 from "@/assets/maskable/maskable_icon_x384.png";
import Logo_512 from "@/assets/maskable/maskable_icon_x512.png";
import Logo_1024 from "@/assets/maskable/maskable_icon.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BitWorks",
    short_name: "BitWorks",
    description:
      "At BitWorks, we focus on collaborative coding, knowledge sharing, and pushing the boundaries of technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      {
        purpose: "maskable",
        sizes: "1024x1024",
        src: Logo_1024.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "48x48",
        src: Logo_48.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "72x72",
        src: Logo_72.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "96x96",
        src: Logo_96.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "128x128",
        src: Logo_128.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "192x192",
        src: Logo_192.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "384x384",
        src: Logo_384.src,
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "512x512",
        src: Logo_512.src,
        type: "image/png",
      },
    ],
  };
}
