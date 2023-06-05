"use client"

import { useRef } from "react"
import Image from "next/image"
import { Container, GooeyButton } from "../components"
import { motion, useScroll, useTransform } from "framer-motion"

const SharkSection = () => {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    // container: containerRef,
  })

  const left = useTransform(scrollYProgress, [0.2, 0.6], [-500, 800])
  const right = useTransform(scrollYProgress, [0.2, 0.6], [-500, 400])

  return (
    <section
      ref={containerRef}
      className="h-screen bg-primary-light overflow-hidden relative"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          delay: 2,
          type: "tween",
          duration: 0.5,
        }}
        className="absolute left-0 right-0 bottom-0 z-20
        w-screen h-[100px] flex items-end"
      >
        <Image
          src="/bottom_wave.svg"
          alt="wave"
          width={1500}
          height={200}
          className="w-screen"
        />
      </motion.div>
      <Container className="relative">
        <div className="text-7xl text-primary text-center md:text-8xl lg:text-9xl font-semibold">
          <div className="pt-[6rem] md:pt-0">
            <motion.h2
              style={{ left }}
              className="md:absolute top-1/2 left-0 md:-translate-y-[150%] z-0 drop-shadow-[5px_5px_0_rgba(0,0,0,0.25)] "
            >
              Play
            </motion.h2>
            <motion.h2
              style={{ right }}
              className="md:absolute top-[55%] right-0 z-20 drop-shadow-[15px_15px_0_rgba(0,0,0,0.25)]"
            >
              with me
            </motion.h2>
          </div>
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            <Image
              src="/carton_shark.png"
              alt="image of cartoon shark"
              fill
              className="absolute object-cover left-0 bottom-0 translate-y-[15rem] drop-shadow-[10px_10px_0_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
        <div className="w-max mx-auto mt-10 md:mt-0 md:absolute top-[70%] left-[20%] z-20">
          <GooeyButton color="secondary">Come play</GooeyButton>
        </div>
      </Container>
    </section>
  )
}
export default SharkSection
