"use client"

import { motion } from "framer-motion"

import { Video, Container, GooeyButton } from "@/app/components"
import OpeningAnimate from "../animations/OpeningAnimate"
import { staggerContainer } from "@/app/animation/motion"
import useGeneral from "@/app/store"
import ScrollDownIndicator from "../animations/ScrollDownIndicator"

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

const HEADING = {
  desktop: ["ready when", "you are - It's time to", "find Mermaid"],
  mobile: ["ready to find", "Mermaid"],
}

const HeroSection = () => {
  // useEffect(() => {
  //   document.documentElement.style.overflow = "hidden"
  // }, [])
  const windowWidth = useGeneral((store) => store.windowWidth)

  return (
    // FIXME STUDY WHY ONLY WORKS WHEN H-SCREEN NOT MIN-H-SCREEN
    <section className="w-screen h-screen px-8 fixed top-0 left-0 right-0 -z-10">
      {/* <OpeningAnimate /> */}
      {/* WRAP VIDEO TO ADD SOME DARKNESS TO MAKE NAVBAR MORE CONTRAST */}
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
          className="mx-auto md:mx-0 mb-10 
          lg:w-3/4 text-5xl md:text-[68px] xl:text-[78px] 
          font-semibold leading-[110%] text-white/80
          "
        >
          {windowWidth >= 768
            ? HEADING["desktop"].map((line) => (
                <div key={line} className="overflow-hidden hidden md:block">
                  <motion.span variants={childVariant} className="inline-block">
                    {line}
                  </motion.span>
                </div>
              ))
            : HEADING["mobile"].map((line) => (
                <div
                  key={line}
                  className="mt-2 overflow-hidden text-center md:hidden"
                >
                  <motion.span variants={childVariant} className="inline-block">
                    {line}
                  </motion.span>
                </div>
              ))}
        </motion.h1>
        <div className="overflow-hidden mx-auto md:mx-0">
          <motion.div
            // SINCE IT'S APPLY GOOEY FILTER IT NEED MORE Y SPACE
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
      <ScrollDownIndicator />
    </section>
  )
}
export default HeroSection
