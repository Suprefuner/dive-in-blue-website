// "use client"

import "./globals.css"
import { Poppins } from "next/font/google"
import { Navbar, Footer } from "./components"
// import { motion } from "framer-motion"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
})

export const metadata = {
  title: "Dive In Blue | Greatest diving partner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const MotionNavbar = motion(Navbar)

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {/* <MotionNavbar
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 6.5,
            duration: 0.5,
            type: "tween",
            ease: "easeOut",
          }}
        /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
