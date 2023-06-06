"use client"

import { useState, useRef, useLayoutEffect, useCallback } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import ResizeObserver from "resize-observer-polyfill"
import { TextBGColorChangeAnimation } from "@/app/components"
import Photos from "../Photos"

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
      setMargin((window.innerWidth - 1160) / 2)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      handleResize(entries)
    )

    resizeObserver.observe(ghostRef.current!)
    return () => resizeObserver.disconnect()
  }, [handleResize])

  const { scrollYProgress } = useScroll({
    target: ghostRef,
  })

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [
      margin < 0 ? -margin : 0,
      margin < 0
        ? -scrollRange! + viewportWidth - margin!
        : -scrollRange! + viewportWidth - margin! * 2,
    ]
  )

  const spring = useSpring(transform, {
    damping: 15,
    mass: 0.27,
    stiffness: 55,
  })

  return (
    <section ref={containerRef} className="relative bg-white">
      <div className="sticky top-0 left-0 right-0">
        <div className="flex flex-col items-start justify-center h-screen overflow-x-hidden">
          {/* 
          =========================================
          HEADING
          =========================================
          */}
          <div
            ref={wrapperRef}
            className="mb-[100px] mx-auto md:mx-0"
            style={margin >= 0 ? { marginLeft: margin } : undefined}
          >
            <TextBGColorChangeAnimation className="text-4xl text-center lg:text-7xl pl-8 lg:pl-0">
              This would be you
            </TextBGColorChangeAnimation>
          </div>

          {/* 
          =========================================
          PHOTOS
          =========================================
          */}
          <motion.div
            ref={scrollRef}
            style={{
              x: spring,
              marginLeft: margin,
            }}
            className="flex items-center gap-5"
          >
            <Photos />
          </motion.div>
        </div>
      </div>
      {/* CREATE SCROLL HEIGHT FOR HORIZONTAL SCROLL */}
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="w-screen bg-red-500 relative -z-10"
      />
    </section>
  )
}
export default GallerySection
