"use client"

import Modal from "./Modal"
import useGalleryModal from "@/app/hooks/useGalleryModal"
import Image from "next/image"
import clsx from "clsx"

const GalleryModal = () => {
  const { isOpen, onOpen, onClose, currentPhoto } = useGalleryModal()

  const bodyContent = (
    <div
      className={clsx(
        `
        relative after:bg-white after:rounded-xl
        after:absolute after:inset-0 after:-z-10 
        after:h-full after:w-full transition duration-300
        after:translate-x-3 after:translate-y-3
        `
      )}
    >
      <Image
        src={currentPhoto}
        alt="photo"
        width={1000}
        height={100}
        className="object-cover rounded-lg"
      />
    </div>
  )

  return (
    <Modal type="image" isOpen={isOpen} body={bodyContent} onClose={onClose} />
  )
}
export default GalleryModal
