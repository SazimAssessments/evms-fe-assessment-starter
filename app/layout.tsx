import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid place-items-center`}
      >
        <div className="my-18 grid place-items-center gap-4">
          <Image src={"/next.svg"} height={100} width={100} alt="Next logo" />
          <h1 className="text-xl font-medium">Next/Shadcn Starter Template</h1>
        </div>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
