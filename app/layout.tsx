import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planned by Ayesha — Event Planning & Coordination · Los Angeles",
  description:
    "Boutique event planning and coordination in Los Angeles — weddings, walimas, and private celebrations, held in good light.",
  openGraph: {
    type: "website",
    title: "Planned by Ayesha — Event Planning & Coordination · Los Angeles",
    description:
      "Boutique event planning and coordination in Los Angeles — weddings, walimas, and private celebrations, held in good light.",
    url: "https://plannedbyayesha.vercel.app/",
    images: [
      {
        url: "https://plannedbyayesha.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Planned by Ayesha — Event Planning & Coordination, Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planned by Ayesha — Event Planning & Coordination · Los Angeles",
    description:
      "Boutique event planning and coordination in Los Angeles — weddings, walimas, and private celebrations, held in good light.",
    images: ["https://plannedbyayesha.vercel.app/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,500;1,600&family=Jost:wght@300;400;500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
