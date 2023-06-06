import { create } from "zustand"

interface authModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  variant: Variant
  setVariant: (variantType: Variant) => void
}

const useAuthModal = create<authModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  variant: "LOGIN",
  setVariant: (variantType) => set({ variant: variantType }),
}))
export default useAuthModal
