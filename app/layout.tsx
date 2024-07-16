import { GeistSans } from "geist/font/sans";
import Navbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import TotalFooter from "./components/TotalFooter";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex justify-center items-center">
        <NextUIProvider>
          <Navbar></Navbar>
          {children}
          <TotalFooter></TotalFooter>
        </NextUIProvider>
      </body>
    </html>
  );
}
