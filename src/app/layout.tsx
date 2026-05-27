import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Hardman Borges | Senior Software & Solutions Engineer",
  description: "Senior Software & Solutions Engineer specializing in Contact Center Platforms, Telecom Solutions, and System Integration. Expert in NICE CXone, Avaya, Java/Spring Boot, React, and omnichannel architecture. Based in São Paulo, Brazil.",
  keywords: [
    "Solutions Engineer", 
    "Software Engineer", 
    "Contact Center Platforms", 
    "NICE CXone", 
    "Avaya",
    "System Integration", 
    "Java Developer", 
    "Spring Boot", 
    "React Developer", 
    "TypeScript", 
    "Telecom Solutions", 
    "API Integration", 
    "Omnichannel",
    "IVR Development",
    "Solution Architecture",
    "São Paulo", 
    "Arthur Hardman Borges"
  ],
  authors: [{ name: "Arthur Hardman Borges" }],
  openGraph: {
    title: "Arthur Hardman Borges | Senior Software & Solutions Engineer",
    description: "Senior Software & Solutions Engineer specializing in Contact Center Platforms and Telecom Solutions",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
