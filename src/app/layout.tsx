import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feed-your-brain-landing.vercel.app"),
  title: "Feed Your Brain - ADHD Nutrition Guide",
  description:
    "A practical, evidence-based guide for adults with ADHD to beat brain fog, boost stable energy, and regain mental clarity — Without rigid diets or overwhelming rules.",
  keywords: [
    "ADHD",
    "nutrition",
    "brain fog",
    "focus",
    "mental clarity",
    "ADHD diet",
    "ADHD guide",
    "Feed Your Brain",
  ],
  authors: [{ name: "EvolvEdits" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Feed Your Brain - ADHD Nutrition Guide",
    description:
      "A practical, evidence-based guide for adults with ADHD to beat brain fog, boost stable energy, and regain mental clarity.",
    url: "/",
    siteName: "Feed Your Brain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feed Your Brain - ADHD Nutrition Guide",
    description:
      "A practical, evidence-based guide for adults with ADHD to beat brain fog, boost stable energy, and regain mental clarity.",
  },
  other: {
    "facebook-domain-verification": "wh5ky0svjx9rbizc3brjna4xow37fv",
  },
};

// Facebook Pixel ID
const FB_PIXEL_ID = "901120396196486";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Facebook Pixel Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
