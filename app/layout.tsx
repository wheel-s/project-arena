
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "././components/menu";
import { CarProvider } from "./components/carcontext";
import {SingleProvider} from "./components/SingleCarContex"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoFocus",
  description: "an autimibile intelligence platform",
  icons:{
    icon: 'fast-forward.',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SingleProvider>
        <CarProvider>
        <Menu/>
        {children}
        </CarProvider>
        </SingleProvider>
      </body>
    </html>
  );
}
