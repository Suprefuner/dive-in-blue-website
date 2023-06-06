"use client"
// FIXME STUDY why i have to use client on this section? just becoz i import container

import { useState, useRef, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

import { Container } from "@/app/components"
import { aboutSectionParagraph } from "@/utils/constants"
import DecorCircle from "../../../components/DecorCircle"
import { slideIn } from "../../../animation/motion"
import WaveEdge from "@/app/components/WaveEdge"

const AboutSection = () => {
  const leftRef = useRef<HTMLDivElement>(null)
  const p1Ref = useRef<HTMLDivElement>(null)
  const p2Ref = useRef<HTMLDivElement>(null)
  const p3Ref = useRef<HTMLDivElement>(null)

  const pRefs = useMemo(() => [p1Ref, p2Ref, p3Ref], [])
  const [currentParagraph, setCurrentParagraph] = useState(0)

  useEffect(() => {
    let requestId: number | null = null

    const handleScroll = () => {
      if (requestId) return

      requestId = requestAnimationFrame(() => {
        if (!leftRef) return
        let index: number = 0

        if (window.innerWidth > 1024) {
          // WHEN LEFT'S BOTTOM IS GREATER THAN THE RIGHT'S TOP
          // === WHEN LEFT IS ENTER TO RIGHT'S HEIGHT AREA
          for (let paragraph of pRefs) {
            if (
              // @ts-ignore
              leftRef.current.getBoundingClientRect().bottom >
              // @ts-ignore
              paragraph.current.getBoundingClientRect().top
            ) {
              index = pRefs.indexOf(paragraph)
            }
          }
        } else {
          // WHEN LEFT'S BOTTOM IS LESS THAN THE RIGHT'S TOP
          // === WHEN LEFT IS PASS TO LAST RIGHT'S
          for (let paragraph of pRefs) {
            if (
              // @ts-ignore
              leftRef.current.getBoundingClientRect().bottom <
              // @ts-ignore
              paragraph.current.getBoundingClientRect().top
            ) {
              index = pRefs.indexOf(paragraph)
              break
            } else continue
          }
        }

        setCurrentParagraph(index)
        requestId = null
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pRefs, leftRef])

  return (
    <section className="lg:h-auto relative bg-white mt-[100vh]">
      <motion.div
        variants={slideIn({ direction: "up", delay: 2, duration: 0.5 })}
        initial="hide"
        animate="show"
        className="absolute left-0 right-0 -top-[100px]
        w-screen h-[100px] flex items-end"
      >
        <WaveEdge src="/bottom_wave.svg" />
      </motion.div>
      <Container className="lg:flex pt-[50px] md:pt-[100px] lg:py-[150px]">
        <div
          className="
          w-full lg:w-2/5 h-screen lg:h-screen
          pb-[150px] lg:pb-0 text-center"
        >
          <AnimatePresence>
            <div
              ref={leftRef}
              className="
              sticky top-10 lg:top-1/3 z-50 
              text-7xl md:text-8xl font-medium 
              flex items-start gap-5 py-6"
            >
              <div className="mx-auto lg:mx-0 overflow-hidden">
                <span className="inline-block">we </span>
                <span className="relative flex-1 w-full">
                  <motion.span
                    animate={{
                      y: currentParagraph >= pRefs.length - 1 ? 0 : "-100%",
                    }}
                    className="inline-block ml-5"
                  >
                    <span className="block">offer</span>
                    <span className="block absolute left-1/2 lg:left-0 bottom-0 -translate-x-1/2 lg:translate-x-0 translate-y-full">
                      are
                    </span>
                  </motion.span>
                </span>
              </div>
            </div>
          </AnimatePresence>
        </div>
        <div
          className="
          h-screen lg:w-3/5 px-10 lg:py-7
          absolute lg:static pt-[250px] md:pt-[300px] top-0 
          flex flex-col justify-between
          "
        >
          {aboutSectionParagraph.map((p, i) => (
            <p
              ref={pRefs[i]}
              key={p}
              className={clsx(
                `text-center lg:text-left text-4xl lg:text-5xl font-medium transition-all duration-500`,
                currentParagraph === i ? "" : "blur-sm opacity-40"
              )}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="absolute z-10 left-0 bottom-[20vh]">
          <DecorCircle />
        </div>
      </Container>
    </section>
  )
}
export default AboutSection
