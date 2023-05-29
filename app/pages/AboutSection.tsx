"use client"
// FIXME STUDY why i have to use client on this section? just becoz i import container

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { Container } from "../components"
import { aboutSectionParagraph } from "@/utils/constants"

const AboutSection = () => {
  const leftRef = useRef<HTMLDivElement>(null)
  const p1Ref = useRef<HTMLDivElement>(null)
  const p2Ref = useRef<HTMLDivElement>(null)
  const p3Ref = useRef<HTMLDivElement>(null)

  const pRefs = useMemo(() => [p1Ref, p2Ref, p3Ref], [])
  const [currentParagraph, setCurrentParagraph] = useState(0)

  const handleScroll = useCallback(() => {
    if (!leftRef) return
    let index: number = 0

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

    setCurrentParagraph(index)
  }, [leftRef, pRefs])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <section className="h-screen relative bg-white">
      <Container className="flex py-[150px]">
        <div className="h-full w-2/5">
          <span
            ref={leftRef}
            className="text-8xl font-medium sticky top-1/3 z-50"
          >
            we {currentParagraph === pRefs.length - 1 ? "offer" : "are"}
          </span>
        </div>
        <div className="flex flex-col justify-between w-3/5 py-7">
          {aboutSectionParagraph.map((p, i) => (
            <p
              ref={pRefs[i]}
              key={p}
              className={`text-5xl font-medium transition-all duration-500 ${
                currentParagraph === i ? "" : "blur-sm opacity-40"
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}
export default AboutSection
