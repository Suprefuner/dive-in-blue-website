"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"

import { HiMenu } from "react-icons/hi"
import { FaUserCircle } from "react-icons/fa"

import { menuContainer, fadeIn } from "@/app/animation/motion"
import useGeneral from "@/app/hooks/useGeneral"
import useAuthModal from "@/app/hooks/useAuthModal"
import useAuth from "@/app/hooks/useAuth"
import { navAuthLinks } from "@/utils/constants"

const NavAuthMenu = () => {
  const [showAuthSubmenu, setShowAuthSubmenu] = useState(false)
  const { windowWidth } = useGeneral()
  const { onOpen, setVariant } = useAuthModal()
  const { user } = useAuth()
  const router = useRouter()

  const handleOpenModal = (variant: Variant) => {
    setVariant(variant)
    onOpen()
  }

  const handleRedirect = (link: string) =>
    link === "logout" ? signOut() : router.push(`/${link}`)

  const handleClick = (props: any) =>
    user ? handleRedirect(props) : handleOpenModal(props)

  return (
    <div
      className="bg-slate-200 text-gray-400 rounded-full cursor-pointer"
      onClick={() => setShowAuthSubmenu((prev) => !prev)}
      style={{ filter: "url(#gooey-sm)" }}
    >
      <div className="flex items-center gap-3 px-3 py-1.5">
        <HiMenu size={20} className="hidden lg:block" />
        {user?.image ? (
          <div className="w-8 rounded-full overflow-hidden border-2 border-green-500">
            <Image
              src={user?.image!}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        ) : (
          <FaUserCircle size={30} className="w-8 h-8" />
        )}
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
              w-max py-2 bg-slate-200 text-center rounded-xl shadow-lg"
          >
            {navAuthLinks[user ? "auth" : "unauth"].map((link) => (
              <motion.div
                key={link}
                variants={fadeIn(0.5)}
                className=" px-6 py-2 capitalize hover:text-primary transition"
                onClick={() => {
                  user
                    ? handleClick(link)
                    : handleClick(link.toUpperCase() as Variant)
                }}
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
