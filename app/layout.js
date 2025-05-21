import  React from "react"
import "./globals.css"
import { Bebas_Neue, Oswald, Poppins} from "next/font/google"

// import Navbar from "@/components/navbar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

// Primary font for headings and important text
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
})

// Secondary font for body text
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Eastside Crusaders | Basketball Coaching Academy",
  description: "Your premier destination for basketball excellence",
   icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
}
export const viewport = {
  themeColor: "#0B6623",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
<body className={`${bebasNeue.variable} ${oswald.variable} font-oswald bg-black text-white`}>        
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
