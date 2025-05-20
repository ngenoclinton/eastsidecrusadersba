import  React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
// import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Eastside Crusaders | Basketball Coaching Academy",
  description: "Your premier destination for basketball excellence",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-black text-white`}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
