"use client"

import { createRef, useRef } from "react"
import Image from "next/image"
import { MotionValue, motion, useScroll, useTransform } from "framer-motion"
import { Container } from "../components"
import ProfilePic from "./components/ProfilePic"
import ClipPath from "./components/ClipPath"
import StaffDescription from "./components/StaffDescription"

const NUMBER = 3

const AboutPage = () => {
  const scrollRef = useRef(null)

  // @ts-ignore
  const triggerRefs = []
  // @ts-ignore
  const refs = []
  let ys: MotionValue<string>[] = []

  const scrollOption = (target: any) => {
    return {
      container: scrollRef,
      target,
      offset: ["start", "end start"],
    }
  }

  for (let i = 0; i < NUMBER; i++) {
    // FIXME hook error
    triggerRefs.push(useRef(null))
    refs.push(useRef(null))

    const { scrollYProgress } = useScroll(scrollOption(refs[i]))
    ys[i] = useTransform(
      scrollYProgress,
      [i === 0 ? 0.5 : 0, 1],
      ["0%", "-100%"]
    )
  }

  // FIXME TRY TO CREATE MULTIPLE REF WITH RIGHT WAY =========
  // const triggerRefs = useRef([])
  // const refs = useRef([])
  // const ys: MotionValue[] = Array(NUMBER).fill("")

  // const scrollOption = (target: any) => {
  //   return {
  //     container: scrollRef,
  //     target,
  //     offset: ["start", "end start"],
  //   }
  // }

  // if (refs.current.length !== NUMBER) {
  //   refs.current = Array(NUMBER)
  //     .fill("")
  //     .map((_, i) => refs.current[i] || createRef())

  //   triggerRefs.current = Array(NUMBER)
  //     .fill("")
  //     .map((_, i) => refs.current[i] || createRef())
  // }
  // FIXME TRY TO CREATE MULTIPLE REF WITH RIGHT WAY =========

  return (
    <main className="min-h-screen relative text-primary">
      <Container>
        <div
          ref={scrollRef}
          className="
        flex flex-col gap-[50%] py-[calc((100vh-80px)*0.35/2)]
        h-[calc((100vh-80px)*0.75)] bg-primary-light
        absolute left-0 right-0 bottom-0 z-20
        overflow-y-scroll
        "
          style={{
            clipPath: `url(#myClip)`,
            WebkitClipPath: `url(#myClip)`,
          }}
        >
          {Array(3)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className={`flex-shrink-0 h-full mx-auto  overflow-y-scroll grid grid-cols-4 gap-10`}
              >
                <div className="col-span-3">
                  <StaffDescription />
                </div>
                <div ref={refs[i]} className="justify-self-end self-center ">
                  <ProfilePic />
                </div>
              </div>
            ))}
          <div
            className={`flex-shrink-0 h-full w-1/2 mx-auto overflow-y-scroll flex flex-col items-center pt-10`}
          >
            <h2 className="text-7xl font-bold mb-8">We are Dive In Blue</h2>
            <p className="text-xl">
              come join us to explore the beauty of the under world
            </p>
          </div>
        </div>
        <motion.div
          className="
        flex items-center justify-around gap-3
        absolute left-0 right-0 top-[calc(30vh+60px)]
        "
        >
          {Array(3)
            .fill("")
            .map((_, i) => (
              <motion.div
                style={{ y: ys[i] }}
                key={i}
                //@ts-ignore
                ref={triggerRefs[i]}
                className="pb-10"
              >
                <ProfilePic />
              </motion.div>
            ))}
        </motion.div>
        <ClipPath />
      </Container>
    </main>
  )
}

export default AboutPage
