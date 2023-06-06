"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { HiMenu } from "react-icons/hi"
import { FaUserCircle } from "react-icons/fa"

import { menuContainer, fadeIn } from "@/app/animation/motion"
import useGeneral from "@/app/store"
import useAuthModal from "@/app/hooks/useAuthModal"

const navAuthLinks = ["login", "register"]

const NavAuthMenu = () => {
  const [showAuthSubmenu, setShowAuthSubmenu] = useState(false)
  const { windowWidth } = useGeneral()
  const { onOpen, setVariant } = useAuthModal()

  const handleOpenModal = (variant: Variant) => {
    setVariant(variant)
    onOpen()
  }

  return (
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
            {navAuthLinks.map((link) => (
              <motion.div
                key={link}
                variants={fadeIn(0.5)}
                className=" px-6 py-2 hover:text-primary transition"
                onClick={() => handleOpenModal(link.toUpperCase() as Variant)}
              >
                {link}
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
export default NavAuthMenu
