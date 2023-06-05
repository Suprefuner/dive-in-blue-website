"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

import { FaUserCircle } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { GrFormClose } from "react-icons/gr"

import Container from "./Container"
import {
  staggerContainer,
  slideIn,
  fadeIn,
  menuContainer,
} from "../animation/motion"
import { navLinks } from "@/utils/constants"

const HEIGHT = 80

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

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showAuthSubmenu, setShowAuthSubmenu] = useState(false)

  useEffect(() => {
    let requestId: number | null = null

    const handleResize = () => {
      if (requestId) return

      requestId = requestAnimationFrame(() => {
        setWindowWidth(window.innerWidth)
        requestId = null
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.nav
      variants={
        windowWidth >= 768
          ? slideIn({
              direction: "down",
              delay: 7.5,
              duration: 0.5,
              ease: "easeOut",
            })
          : undefined
      }
      initial={windowWidth >= 768 ? "hide" : ""}
      animate={windowWidth >= 768 ? "show" : ""}
      className="fixed top-0 z-[99] w-screen text-white backdrop-blur-sm px-8"
      style={{ height: HEIGHT + "px" }}
    >
      <Container className="flex items-center justify-between py-3">
        <div
          className="w-[40px] h-[50px] relative flex items-center justify-center md:hidden"
          onClick={() => {
            document.documentElement.style.overflow = "hidden"
            setShowSidebar(true)
          }}
        >
          <HiMenu size={26} />
        </div>
        <div className="w-[150px] h-[70px] relative">
          <Image
            className="align-middle brightness-100 invert "
            src="/dib_logo.svg"
            alt="logo"
            fill
            priority={true}
          />
        </div>
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
                  height: HEIGHT + "px",
                  lineHeight: HEIGHT + "px",
                }}
              >
                {link}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
        <div
          className="bg-slate-200 text-gray-400 rounded-full cursor-pointer"
          onClick={() => setShowAuthSubmenu((prev) => !prev)}
          style={{ filter: "url(#gooey-sm)" }}
        >
          <div className="flex items-center gap-3 px-2 py-2">
            <HiMenu size={20} className="hidden lg:block" />
            <FaUserCircle size={24} />
          </div>
          <AnimatePresence>
            {showAuthSubmenu ? (
              <motion.div
                variants={menuContainer(windowWidth)}
                initial="hide"
                animate="show"
                exit="leave"
                className="
                absolute right-0 bottom-0 -z-10 translate-y-full
                bg-slate-200 py-2 rounded-xl shadow-lg"
              >
                <motion.div
                  variants={fadeIn(0.5)}
                  className=" px-6 py-2 hover:text-primary transition"
                >
                  Login
                </motion.div>
                <motion.div
                  variants={fadeIn(0.5)}
                  className=" px-6 py-2 hover:text-primary transition"
                >
                  Register
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </motion.nav>
  )
}
Navbar.displayName = "Navbar"
export default Navbar
