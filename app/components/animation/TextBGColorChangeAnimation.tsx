"use client"

import { FC, ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TextBGColorChangeAnimationProps {
  children: ReactNode
  className?: string
}

const TextBGColorChangeAnimation: FC<TextBGColorChangeAnimationProps> = ({
  children,
  className,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: "all" })

  return (
    <div>
      <motion.h2
        ref={ref}
        style={{
          backgroundPosition: isInView ? "0%" : "none",
          transition: "all 2s ease-in-out",
        }}
        className={`
          text-transparent text-5xl font-semibold 
          bg-clip-text bg-text-effect-gradient 
          bg-2x bg-[100%] ${className}`}
      >
        {children}
      </motion.h2>
    </div>
  )
}
export default TextBGColorChangeAnimation
