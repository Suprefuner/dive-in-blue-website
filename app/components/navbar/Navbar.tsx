"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

import { HiMenu } from "react-icons/hi"

import Container from "../Container"
import NavLinks from "./NavLinks"
import Logo from "../Logo"

import { slideIn } from "../../animation/motion"
import useGeneral from "../../store"
import NavAuthMenu from "./NavAuthMenu"

const HEIGHT = 80

const Navbar = () => {
  const { setShowSidebar, navbarBgColor, windowWidth } = useGeneral()

  const openSidebar = () => {
    document.documentElement.style.overflow = "hidden"
    setShowSidebar(true)
  }

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
      className={clsx(
        `fixed top-0 z-[99] w-screen text-white backdrop-blur-sm px-8 transition duration-500`,
        navbarBgColor === "transparent" ? "bg-transparent" : "bg-black/50"
      )}
      style={{ height: HEIGHT + "px" }}
    >
      <Container className="flex items-center justify-between py-3">
        <div
          className="w-[40px] h-[50px] relative flex items-center justify-center md:hidden"
          onClick={openSidebar}
        >
          <HiMenu size={26} />
        </div>
        <Logo width="150px" priority={true} />
        <NavLinks height={HEIGHT} />
        <NavAuthMenu />
      </Container>
    </motion.nav>
  )
}

Navbar.displayName = "Navbar"
export default Navbar
