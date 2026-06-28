import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  title: "Sanish Shrestha — Computer Engineering Student",
  description:
    "Sanish Shrestha is a Computer Engineering student at Khwopa College of Engineering, Bhaktapur, building web platforms with Django and React, and experimental systems spanning gesture-driven graphics to bitwise data encoding.",
  metadataBase: new URL("https://sanishshrestha.dev"),
  openGraph: {
    title: "Sanish Shrestha — Computer Engineering Student",
    description:
      "Building structured platforms and experimental systems — from Django apps to gesture-driven particle fields.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-signal selection:text-paper">
        <GrainOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
