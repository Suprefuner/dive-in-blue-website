import { useEffect } from "react"
import useGeneral from "../store"

const useWindowWidth = () => {
  const setWindowWidth = useGeneral((store) => store.setWindowWidth)

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
  }, [setWindowWidth])
}
export default useWindowWidth
