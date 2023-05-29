"use client"

import { useRef } from "react"
import Image from "next/image"
import { Container, GooeyButton } from "../components"
import { motion, useScroll, useTransform } from "framer-motion"

const SharkSection = () => {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()

  const left = useTransform(scrollYProgress, [0.2, 0.5], [-200, 500])
  const right = useTransform(scrollYProgress, [0.2, 0.5], [-500, 500])

  return (
    <section ref={containerRef} className="h-screen bg-sky-500 overflow-hidden">
      <Container className="px-[200px] relative">
        <div className="text-9xl font-semibold">
          <motion.h2
            style={{ left }}
            className="
            absolute top-1/2 left-[10%] -translate-y-[150%] z-0
            "
          >
            Play
          </motion.h2>
          <motion.h2
            style={{ right }}
            className="
          absolute top-[55%] right-[10%] z-20
          "
          >
            with me
          </motion.h2>
          <Image
            src="/carton_shark.png"
            fill
            alt="image of cartoon shark"
            className="absolute top-0 object-cover scale-75 z-10 select-none pointer-events-none"
          />
        </div>
        <div className="absolute top-1/2 z-20">
          <GooeyButton>Come play</GooeyButton>
        </div>
      </Container>
    </section>
  )
}
export default SharkSection
