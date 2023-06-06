import { create } from "zustand"
import { galleryPhotos } from "@/utils/constants"

interface galleryModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  currentPhoto: string
  setCurrentPhoto: (photo: string) => void
}

const useGalleryModal = create<galleryModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentPhoto: galleryPhotos[0],
  setCurrentPhoto: (photo) => set({ currentPhoto: photo }),
}))

export default useGalleryModal
