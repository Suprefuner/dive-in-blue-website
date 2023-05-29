"use client"

import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import ResizeObserver from "resize-observer-polyfill"
import { TextBGColorChangeAnimation, Container } from "../components"
import { galleryPhotos } from "@/utils/constants"
import Image from "next/image"

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [margin, setMargin] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  useLayoutEffect(() => {
    // @ts-ignore
    if (scrollRef.current) setScrollRange(scrollRef.current?.scrollWidth)

    // @ts-ignore
    if (wrapperRef.current)
      setMargin(wrapperRef.current?.getBoundingClientRect().left)

    if (typeof window !== "undefined") setMargin((window.innerWidth - 1160) / 2)
  }, [])

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportWidth(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      handleResize(entries)
    )

    resizeObserver.observe(ghostRef.current!)
    return () => resizeObserver.disconnect()
  }, [handleResize])

  useEffect(() => {
    console.log(scrollRange)
  }, [scrollRange])

  const { scrollYProgress } = useScroll({
    target: ghostRef,
  })

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange! + viewportWidth - margin! * 2]
  )

  const spring = useSpring(transform, {
    damping: 15,
    mass: 0.27,
    stiffness: 55,
  })

  return (
    <section ref={containerRef}>
      <div className="sticky top-0 left-0 right-0">
        <div className="flex flex-col items-start justify-center h-screen overflow-x-hidden">
          <div
            ref={wrapperRef}
            className="mb-[100px]"
            style={{
              marginLeft: margin,
            }}
          >
            <TextBGColorChangeAnimation className="text-7xl">
              This would be you
            </TextBGColorChangeAnimation>
          </div>
          <motion.div
            style={{
              x: spring,
              marginLeft: margin,
            }}
            ref={scrollRef}
            className="flex items-center gap-5"
          >
            {galleryPhotos.map((photo, i) => (
              <Image
                key={i}
                src={photo}
                alt="picture of underwater"
                priority={true}
                width={450}
                height={200}
                className="w-full h-full object-cover aspect-video"
              />
            ))}
          </motion.div>
        </div>
      </div>
      {/* to create the scroll height for the horizontal scroll */}
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="w-screen"
      />
    </section>
  )
}
export default GallerySection
