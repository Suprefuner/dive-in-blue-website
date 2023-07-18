"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"

import {
  HeroSection,
  AboutSection,
  BriefSection,
  SharkSection,
  CourseSection,
  GallerySection,
} from "./components/sections"
import useNavbarBgColor from "../hooks/useNavbarBgColor"
import useWindowWidth from "../hooks/useWindowWidth"
import useGeneral from "../hooks/useGeneral"
import useAuth from "../hooks/useAuth"

export default function Home() {
  const { setUser } = useAuth()
  const { setWindowWidth } = useGeneral()
  useNavbarBgColor()
  useWindowWidth()
  const session = useSession()

  useEffect(() => {
    if (session.status === "authenticated") {
      // @ts-ignore
      setUser(session.data.user)
    }
  }, [session, setUser])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [setWindowWidth])

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BriefSection />
      <SharkSection />
      <CourseSection />
      <GallerySection />
    </main>
  )
}
