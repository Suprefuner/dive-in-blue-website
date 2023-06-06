"use client"

import { FC } from "react"
import { RiArrowRightLine } from "react-icons/ri"
import { motion, useAnimate } from "framer-motion"

interface CourseCardProps {
  heading: string
  content: string
}

const CourseCard: FC<CourseCardProps> = ({ heading, content }) => {
  const [scope, animate] = useAnimate()

  const handleMouseOver = () => {
    animate("p", {
      opacity: 1,
      transform: "translateY(0px)",
    })
    animate(".overlay", {
      transform: "translateX(0)",
    })
    animate(".arrow-icon", { scale: 1 })
  }

  const handleMouseLeave = () => {
    animate("p", {
      opacity: 0,
      transform: "translateY(50px)",
    })
    animate(".overlay", {
      transform: "translateX(101%)",
    })
    animate(".arrow-icon", { scale: 0 })
  }

  return (
    <motion.div
      ref={scope}
      className=" bg-white cursor-pointer relative overflow-hidden border-t border-black"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative p-8">
        <h3 className="text-4xl font-semibold mb-[40px]">{heading}</h3>
        <div className="arrow-icon bg-black p-2 rounded-full w-max text-white scale-0">
          <RiArrowRightLine size={24} />
        </div>
        <p className="mt-[60px] opacity-0 translate-y-[50px] text-black pointer-events-none">
          {content}
        </p>
      </div>
      {/* 
      =========================================
      BLACK OVERLAY
      =========================================
      */}
      <motion.div className="overlay absolute inset-0 z-40 pointer-events-none translate-x-[101%] bg-white mix-blend-difference" />
    </motion.div>
  )
}
export default CourseCard
