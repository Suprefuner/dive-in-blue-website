import "./globals.css"
import { Poppins } from "next/font/google"
import { Navbar, Footer, GooeyFilter } from "./components"
import AuthContext from "@/context/AuthContext"

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
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContext>
          <Navbar />
          {children}
          <Footer />
          {/* @ts-ignore */}
          <GooeyFilter />
        </AuthContext>
      </body>
    </html>
  )
}
