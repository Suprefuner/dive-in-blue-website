import { motion } from "framer-motion"
import clsx from "clsx"

import { GrFormClose } from "react-icons/gr"
import { staggerContainer } from "@/app/animation/motion"

import useGeneral from "@/app/store"
import { navLinks } from "@/utils/constants"

const navLinkVar = {
  hide: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.75,
    },
  },
}

interface NavLinksProps {
  height: number
}

const NavLinks: React.FC<NavLinksProps> = ({ height }) => {
  const { showSidebar, setShowSidebar, windowWidth } = useGeneral()

  return (
    <motion.ul
      variants={staggerContainer(8, 0.1)}
      initial={windowWidth >= 768 ? "hide" : ""}
      animate={windowWidth >= 768 ? "show" : ""}
      className={clsx(
        `
          text-center text-xl md:text-[16px]
          h-screen w-full bg-black/90
          pt-[150px] md:pt-0
          md:h-auto md:w-auto md:bg-transparent
          md:flex md:items-center 
          absolute inset-0 z-[999]
          md:top-1/2 md:left-1/2 md:right-auto md:bottom-auto
          md:-translate-x-1/2 md:-translate-y-1/2
          transition duration-500 ease-in-out
          `,
        showSidebar ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <motion.div
        className="absolute left-8 top-8 md:hidden bg-white rounded-full text-white p-1"
        onClick={() => {
          document.documentElement.style.overflow = "auto"
          setShowSidebar(false)
        }}
      >
        <GrFormClose size={30} />
      </motion.div>
      {navLinks.map((link, i) => (
        <motion.li
          key={i}
          className="capitalize hover:text-secondary transition md:overflow-hidden"
        >
          <motion.a
            href="#"
            variants={windowWidth >= 768 ? navLinkVar : undefined}
            className="inline-block px-5"
            style={{
              height: height + "px",
              lineHeight: height + "px",
            }}
          >
            {link}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  )
}
export default NavLinks
