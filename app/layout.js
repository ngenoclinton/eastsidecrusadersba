import React from "react";
import "./globals.css";
import { Bebas_Neue, Oswald, Poppins, Inter } from "next/font/google";

// import Navbar from "@/components/navbar"
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

// Primary font for headings and important text
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

// Secondary font for body text
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});
//
const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Eastside Crusaders | Basketball Coaching Academy",
  description: "Your premier destination for basketball excellence",
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png/jpg" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png/jpg" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};
export const viewport = {
  themeColor: "#0B6623",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={oswald.className}>
        {/* <body className={inter.className} className={`${bebasNeue.variable} ${oswald.variable} font-oswald bg-black text-white`}>           */}
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
  