"use client"

import { useEffect } from "react"
import Image from "next/image"
import { delay, motion } from "framer-motion"
import { Video, OpeningAnimate, Container, GooeyButton } from "../components"
import { staggerContainer, slideIn } from "../animation/motion"

// FIXME WHY CAN'T USE slideIn function? no stagger effect
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
  // useEffect(() => {
  //   document.documentElement.style.overflow = "hidden"
  // }, [])

  return (
    // FIXME STUDY WHY ONLY WORKS WHEN H-SCREEN NOT MIN-H-SCREEN
    <section className="w-screen h-screen px-8 fixed top-0 left-0 right-0">
      <div
        className="
          absolute right-1/2 md:right-[100px] bottom-[100px] z-50
          translate-x-1/2 md:translate-x-0 px-3 
          border-[3px] border-black rounded-full 
          brightness-0 invert opacity-75"
      >
        <Image
          src="/arrow.svg"
          alt="arrow pointing down"
          width={20}
          height={150}
          className="animate-pointing-down"
        />
      </div>
      {/* <OpeningAnimate /> */}
      {/* div wrap video to add some darkness make navbar more contrast */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b from-black/70 via-transparent to-transparent
          pointer-events-none select-none"
      >
        <Video source="/hero_video-compressed.mp4" />
      </div>
      <Container className="flex flex-col justify-center items-start relative">
        <motion.h1
          variants={staggerContainer(7, 0.2)}
          initial="hide"
          animate="show"
          className="
          mx-auto md:mx-0
          lg:w-3/4 text-5xl md:text-[68px] xl:text-[78px] font-semibold mb-10 leading-[110%] text-white/80
          "
        >
          <div className="heading--desktop">
            <div className="overflow-hidden hidden md:block">
              <motion.span variants={childVariant} className="inline-block">
                ready when
              </motion.span>
            </div>
            <div className="overflow-hidden hidden md:block">
              <motion.span variants={childVariant} className="inline-block">
                you are - It's time to
              </motion.span>
            </div>
            <div className="mt-2 overflow-hidden hidden md:block">
              <motion.span variants={childVariant} className="inline-block">
                find Mermaid
              </motion.span>
            </div>
          </div>
          <div className="heading--mobile">
            <div className="mt-2 overflow-hidden text-center md:hidden">
              <motion.span variants={childVariant} className="inline-block">
                ready to find
              </motion.span>
            </div>
            <div className="mt-2 overflow-hidden text-center md:hidden">
              <motion.span variants={childVariant} className="inline-block">
                Mermaid
              </motion.span>
            </div>
          </div>
        </motion.h1>
        <div className="overflow-hidden mx-auto md:mx-0">
          <motion.div
            // variants={slideIn({ direction: "up", delay: 7.8, duration: 0.5 })}
            // initial="hide"
            // animate="show"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              delay: 7.8,
              duration: 0.5,
            }}
          >
            <GooeyButton color="secondary">Call us</GooeyButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
export default HeroSection
