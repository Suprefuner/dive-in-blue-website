"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Container, TextBGColorChangeAnimation } from "@/app/components"
import { SeaSnakeDecor } from "@/app/components"
import WaveEdge from "@/app/components/WaveEdge"
import BriefSectionList from "../BriefSectionList"

const BriefSection = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    amount: 0.8,
    once: true,
  })

  return (
    <section
      ref={ref}
      className="h-screen w-full overflow-hidden relative bg-white"
    >
      <div
        className="absolute z-10 left-0 right-0 bottom-0 
      w-screen h-[100px] flex items-end"
      >
        <WaveEdge src="/bottom_wave_blue.svg" />
      </div>
      <Container
        className="
        pt-[150px] lg:pt-0 
        px-8 md:px-[60px] lg:px-[200px] 
        lg:flex lg:items-center lg:justify-center
      "
      >
        <div className="flex flex-col justify-center items-start gap-10 relative">
          <div className="text-center md:text-left mx-auto md:mx-0">
            <TextBGColorChangeAnimation>
              Not just the perfect holiday... <br />
              DIVE IN BLUE offer you
            </TextBGColorChangeAnimation>
          </div>
          <BriefSectionList />
          <motion.div
            animate={{ y: isInView ? "60%" : "100%" }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            className="absolute right-0 bottom-0"
          >
            <SeaSnakeDecor />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
export default BriefSection
