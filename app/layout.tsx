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
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&family=Outfit:wght@300;400;500&display=swap"
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
