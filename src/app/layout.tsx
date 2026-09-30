import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://free-for-students.vercel.app'),
  title: {
    default: "StudentPerks India | Free Developer Tools & Cloud Credits",
    template: "%s | StudentPerks India",
  },
  description: "The Ultimate Student Developer Benefits Directory. Unlock free cloud credits, AI coding assistants, domains, and design suites with your student ID.",
  keywords: [
    "student developer perks india", 
    "free developer tools for students", 
    "github student developer pack", 
    "free cloud credits for students", 
    "free domains for students", 
    "azure for students india", 
    "aws educate india",
    "linkedin premium free for students",
    "gemini advanced free for students",
    "free programming tools",
    "student discounts india"
  ],
  authors: [{ name: "Hirendra", url: "https://hirendra.dev" }],
  creator: "Hirendra",
  publisher: "StudentPerks India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://free-for-students.vercel.app",
    title: "StudentPerks India | Free Developer Tools & Cloud Credits",
    description: "Unlock thousands of dollars in free developer tools, cloud credits, and design suites curated for students. 100% free with your student email.",
    siteName: "StudentPerks India",
    images: [
      {
        url: "/og-image.jpg", // Optional: Add an og-image.jpg to your public folder
        width: 1200,
        height: 630,
        alt: "StudentPerks India - Free Developer Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudentPerks India | Developer Benefits",
    description: "Unlock free cloud credits, AI tools, and domains with your student email. The ultimate directory for student developers.",
    creator: "@hirendra84",
  },
  verification: {
    google: "Rv1sZd8TcIXxvnWV7a0J621nwy6324QErfNW9jmjZc8",
    other: {
      "google-adsense-account": "ca-pub-9011973120317258",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9011973120317258"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5LSJSVNQ79"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5LSJSVNQ79');
          `}
        </Script>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "StudentPerks India",
              "url": "https://free-for-students.vercel.app",
              "description": "Unlock free developer tools, cloud credits, and design suites curated for students in India.",
              "publisher": {
                "@type": "Organization",
                "name": "StudentPerks India",
                "url": "https://free-for-students.vercel.app"
              }
            })
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
