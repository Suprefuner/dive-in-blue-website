"use client"

import { FC, useState, useEffect, useCallback } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import WaveEdge from "../WaveEdge"
import { IoIosClose } from "react-icons/io"

interface ModalProps {
  type?: string
  isOpen: boolean
  onClose?: () => void
  title?: string
  body: React.ReactNode
}

const Modal: FC<ModalProps> = ({
  type = "modal",
  isOpen,
  onClose,
  title,
  body,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // ALLOW THE FADE OUT ANIMATION FINISH
      // @ts-ignore
      const targetClassList = [...e.target.closest("div").classList]
      if (
        !targetClassList.includes("overlay") &&
        !targetClassList.includes("btn-close")
      )
        return

      setShowModal(false)

      // delay for animation finish
      if (onClose) {
        setTimeout(() => {
          onClose()
        }, 500)
      }
    },
    [onClose]
  )

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx(
        `overlay fixed inset-0 z-50 
        flex justify-center items-center 
        transition duration-100`,
        showModal
          ? "bg-black/80 backdrop-blur-lg"
          : "bg-black/0 backdrop-blur-none"
      )}
      onClick={handleClose}
    >
      <div
        className={clsx(
          `relative rounded-xl transition duration-500`,
          showModal ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0",
          type === "image"
            ? "max-w-[800px] w-[90vw] aspect-video"
            : "max-w-[400px] w-[33vw]"
        )}
      >
        {/* 
        =======================================
        CLOSE BUTTON
        =======================================
        */}
        <div
          className="btn-close absolute top-3 right-3 z-10 text-white cursor-pointer"
          onClick={handleClose}
        >
          <IoIosClose size={40} />
        </div>
        {/* 
        =======================================
        HEADER
        =======================================
        */}
        {title ? (
          <header
            className="
        w-full bg-primary text-white text-5xl font-medium pt-10 pl-8 uppercase relative rounded-t-xl "
          >
            <div className="absolute left-0 bottom-0 translate-y-full">
              <WaveEdge src="/modal_wave.svg" />
            </div>
            {title}
          </header>
        ) : null}
        {/* 
        =======================================
        BODY
        =======================================
        */}
        <div
          className={clsx(
            `bg-white`,
            title ? "pt-[5rem] pb-10 rounded-b-xl" : "rounded-xl"
          )}
        >
          {body}
        </div>
      </div>
    </motion.div>
  )
}
export default Modal
