import { create } from "zustand"
interface GeneralStore {
  navbarBgColor: string
  setNavbarBgColor: (color: string) => void
  windowWidth: number
  setWindowWidth: (innerWidth: number) => void
  showSidebar: boolean
  setShowSidebar: (isShow: boolean) => void
}

const useGeneral = create<GeneralStore>((set) => ({
  navbarBgColor: "transparent",
  setNavbarBgColor: (color: string) => set({ navbarBgColor: color }),
  windowWidth: window.innerWidth,
  setWindowWidth: (innerWidth) => set({ windowWidth: innerWidth }),
  showSidebar: false,
  setShowSidebar: (isShow) => set({ showSidebar: isShow }),
}))

export default useGeneral
