import { useEffect } from "react"
import useGeneral from "../store"

const useNavbarBgColor = () => {
  const setNavbarBgColor = useGeneral((store) => store.setNavbarBgColor)

  useEffect(() => {
    let requestId: number | null = null

    const handleScroll = () => {
      if (requestId) return
      requestId = requestAnimationFrame(() => {
        const isNavbarShouldChangeColor =
          document.documentElement.scrollTop >= window.innerHeight - 200
        setNavbarBgColor(isNavbarShouldChangeColor ? "black" : "transparent")
        requestId = null
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [setNavbarBgColor])
}
export default useNavbarBgColor
