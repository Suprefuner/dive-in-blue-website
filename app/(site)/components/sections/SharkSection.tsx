"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import clsx from "clsx"
import { slideIn } from "@/app/animation/motion"
import useIntervalFishAnimation from "@/app/hooks/useIntervalFishAnimation"
import useIntervalBubbleAnimation from "@/app/hooks/useIntervalBubbleAnimation"

import Bubble from "../animations/Bubble"
import { Container, GooeyButton } from "@/app/components"
import WaveEdge from "@/app/components/WaveEdge"

const SharkSection = () => {
  const containerRef = useRef<HTMLElement>(null)

  const { fishShow, setFishShow, fishPosition } = useIntervalFishAnimation()
  const { bubbles, showBubble, setShowBubble } = useIntervalBubbleAnimation()

  const { scrollYProgress } = useScroll()
  const left = useTransform(scrollYProgress, [0.2, 0.6], [-500, 800])
  const right = useTransform(scrollYProgress, [0.2, 0.6], [-500, 400])

  return (
    <section
      ref={containerRef}
      className="h-screen bg-primary-light overflow-hidden relative"
    >
      {bubbles.map((bubble, i) => {
        const { size, y, x, time } = bubble
        return (
          <div key={i} className="absolute top-2/3 left-1/2 z-10">
            {/* @ts-ignore */}
            <Bubble
              size={size!}
              y={y}
              x={x}
              time={time}
              showBubble={showBubble}
              setShowBubble={setShowBubble}
            />
          </div>
        )
      })}

      <div
        // @ts-ignore
        style={{ "--y": `${fishPosition}%` }}
        className={clsx(
          `absolute top-1/2 right-0 -translate-y-2/3 
          translate-x-[70vw] md:translate-x-[50vw] lg:translate-x-[33vw] 
          brightness-100 invert 
          w-[70vw] md:w-[50vw] lg:w-[33vw] aspect-video
          `,
          fishShow ? "animate-fish-move" : ""
        )}
        onAnimationEnd={() => setFishShow(false)}
      >
        <Image src="/fishes.svg" alt="fishes" fill />
      </div>
      <motion.div
        variants={slideIn({ direction: "up", delay: 2, duration: 0.5 })}
        initial="hide"
        animate="show"
        className="absolute left-0 right-0 bottom-0 z-20
        w-screen h-[100px] flex items-end"
      >
        <WaveEdge src="/bottom_wave.svg" />
      </motion.div>
      <Container className="relative">
        <div className="text-7xl text-primary text-center md:text-8xl lg:text-9xl font-semibold">
          <div className="pt-[6rem] md:pt-0">
            <motion.h2
              style={{ left }}
              className="md:absolute top-1/2 left-0 md:-translate-y-[150%] z-0
              md:drop-shadow-[5px_5px_0_rgba(0,0,0,0.25)] "
            >
              Play
            </motion.h2>
            <motion.h2
              style={{ right }}
              className="md:absolute top-[55%] right-0 z-20
              md:drop-shadow-[15px_15px_0_rgba(0,0,0,0.25)]"
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
