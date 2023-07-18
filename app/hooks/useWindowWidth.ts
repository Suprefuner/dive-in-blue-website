import { useEffect } from "react"
import useGeneral from "./useGeneral"

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

    const handleSetInitialSize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [setWindowWidth])
}
export default useWindowWidth
