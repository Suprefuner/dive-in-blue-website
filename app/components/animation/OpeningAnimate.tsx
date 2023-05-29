"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const CUBIC_BEZIER = [0.76, 0, 0.24, 1]

const OpeningAnimate = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleAnimationComplete = () => {
    document.documentElement.style.overflow = ""
    if (ref.current) ref.current.remove()
  }

  return (
    <div ref={ref}>
      <motion.div
        animate={{ y: "-50vh" }}
        transition={{
          delay: 3,
          duration: 3,
          type: "tween",
          ease: CUBIC_BEZIER,
        }}
        className="bg-primary text-white w-full h-[50vh] absolute top-0 left-0 z-[100] flex items-end justify-center pb-5"
        onAnimationComplete={handleAnimationComplete}
      >
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 3,
            type: "tween",
            ease: [0.3, 0.99, 0.99, 0],
          }}
          className="text-7xl font-semibold py-3 text-center"
        >
          Dive in blue
        </motion.h2>
      </motion.div>

      <motion.div
        animate={{ y: "50vh" }}
        transition={{
          delay: 3,
          duration: 3,
          type: "tween",
          ease: CUBIC_BEZIER,
        }}
        className="bg-primary text-white w-full h-[50vh] absolute bottom-0 left-0 z-[100] flex justify-center items-start pt-5"
      >
        <motion.h2
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          transition={{
            duration: 3,
            type: "tween",
            ease: [0.3, 0.99, 0.99, 0],
          }}
          className="text-7xl font-semibold py-3 text-center"
        >
          Explore with us
        </motion.h2>
      </motion.div>
    </div>
  )
}
export default OpeningAnimate
