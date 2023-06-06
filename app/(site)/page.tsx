"use client"

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

export default function Home() {
  useNavbarBgColor()
  useWindowWidth()
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
