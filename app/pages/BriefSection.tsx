"use client"

import { useRef } from "react"
import Image from "next/image"
import { Container, TextBGColorChangeAnimation } from "../components"
import { motion, useInView } from "framer-motion"
import { briefList } from "@/utils/constants"
import SeaSnakeDecor from "../components/SeaSnakeDecor"
import SeaSnakeMobileDecor from "../components/SeaSnakeMobileDecor"

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
      <motion.div className="absolute z-10 left-0 right-0 bottom-0 w-screen h-[100px] flex items-end ">
        <Image
          src="/bottom_wave_blue.svg"
          alt="wave"
          width={1500}
          height={200}
          className="w-screen"
        />
      </motion.div>
      <Container className="pt-[150px] lg:pt-0 px-8 lg:px-[200px] lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col justify-center items-start gap-10 relative">
          <div className="hidden lg:block">
            <TextBGColorChangeAnimation>
              Not just the perfect holiday... <br />
              DIVE IN BLUE have your back
            </TextBGColorChangeAnimation>
          </div>
          <div className="lg:hidden text-center mx-auto">
            <TextBGColorChangeAnimation>
              Not just the perfect holiday... <br />
              DIVE IN BLUE offer you
            </TextBGColorChangeAnimation>
          </div>
          <ul className="md:w-3/5 space-y-2">
            {briefList.map((item, i) => (
              <li key={i} className="cursor-pointer group relative w-[65vw]">
                {/* indicator */}
                <div className="hidden md:block w-3.5 h-3.5 rounded-full bg-primary absolute top-1.5 left-0 z-10" />
                <span
                  className="
                  inline-block relative z-20 rounded-lg
                  md:bg-white
                  md:group-hover:bg-primary 
                  md:group-hover:text-white 
                  md:hover:translate-x-5 
                  md:group-hover:px-3 py-1
                  duration-700 transition-all
                  decoration-wavy
                  "
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <motion.div
            animate={{ y: isInView ? "60%" : "100%" }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            className="hidden md:block absolute right-0 bottom-0"
          >
            <SeaSnakeDecor />
          </motion.div>
          <motion.div
            animate={{ y: isInView ? "43%" : "100%" }}
            transition={{
              type: "tween",
              duration: 1,
            }}
            className="md:hidden absolute right-0 -bottom-[20vh]"
          >
            <SeaSnakeMobileDecor />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
export default BriefSection
