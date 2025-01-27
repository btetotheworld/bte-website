import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vastagoGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/VastagoGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/VastagoGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vastago-grotesk",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beliver's Tech Expo",
  description:
    "Empowering Believers to Integrate Faith and Technology For Ethnical Innovation and Career Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vastagoGrotesk.variable} ${vastagoGrotesk.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
