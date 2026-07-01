import type { Metadata } from "next";

import "./globals.css";

import CustomCursor from "@/components/CustomCursor";

import GrainOverlay from "@/components/GrainOverlay";

import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";



const fraunces = Fraunces({

  variable: "--font-display",

  subsets: ["latin"],

  axes: ["opsz", "SOFT", "WONK"],

  weight: ["300", "400", "500", "600", "700", "900"],

  style: ["normal", "italic"],

});

const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400","500","600","700"] });

const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400","500","600"] });



export const metadata: Metadata = {

  title: "Sanish Thapa Shrestha — Computer Engineering Student",

  description:

    "Sanish Thapa Shrestha is a Computer Engineering student at Khwopa Engineering College, Bhaktapur, building web platforms with Django and React, and experimental systems spanning gesture-driven graphics to bitwise data encoding.",

  metadataBase: new URL("https://sanishshrestha.dev"),

  openGraph: {

    title: "Sanish Thapa Shrestha — Computer Engineering Student",

    description:

      "Building structured platforms and experimental systems from Django apps to gesture driven particle fields.",

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
