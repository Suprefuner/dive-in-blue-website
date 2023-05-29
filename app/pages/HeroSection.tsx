"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Video,
  OpeningAnimate,
  Container,
  GooeyButton,
  AboutSectionTopWave,
} from "../components"

const containerVariant = {
  show: {
    transition: {
      delayChildren: 7,
      staggerChildren: 0.2,
    },
  },
}

const childVariant = {
  hide: { y: "100%" },
  show: {
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
    },
  },
}

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"
  }, [])

  return (
    // FIXME STUDY WHY ONLY WORKS WHEN H-SCREEN NOT MIN-H-SCREEN
    <section className="h-screen relative">
      <div
        className="absolute bottom-0 w-full h-full bg-[center_bottom_-6rem] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/about-section-top-wave.svg)",
        }}
      ></div>
      <Container className="flex flex-col justify-center items-start">
        <Video source="/hero_video.mp4" />
        <OpeningAnimate />
        <motion.h1
          variants={containerVariant}
          initial="hide"
          animate="show"
          className="w-3/4 text-[78px] font-semibold mb-10 leading-[110%] text-white/80"
        >
          <div className="overflow-hidden">
            <motion.span variants={childVariant} className="inline-block">
              ready when
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={childVariant} className="inline-block">
              you are - It's time to
            </motion.span>
          </div>
          <div className="mt-2 overflow-hidden">
            <motion.span variants={childVariant} className="inline-block">
              find Mermaid
            </motion.span>
          </div>
        </motion.h1>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 7.8,
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <GooeyButton>Call us</GooeyButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
export default HeroSection
