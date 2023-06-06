import { briefList } from "@/utils/constants"
import { staggerContainer } from "@/app/animation/motion"
import { motion } from "framer-motion"

const itemVar = {
  hide: {
    opacity: 0,
    y: "100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
}

const BriefSectionList = () => {
  return (
    <motion.ul
      variants={staggerContainer(0, 0.1)}
      initial="hide"
      whileInView="show"
      className="md:w-3/5 space-y-2"
    >
      {briefList.map((item, i) => (
        <motion.li
          key={i}
          variants={itemVar}
          className="w-[65vw] relative cursor-pointer group"
        >
          {/* LIST MARKER */}
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
                  decoration-wavy"
          >
            {item}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
export default BriefSectionList
