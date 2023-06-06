import { useState, useEffect } from "react"
import { genRandom } from "@/utils/helpers"

const useIntervalFishAnimation = () => {
  const [fishPosition, setFishPosition] = useState(0)
  const [fishShow, setFishShow] = useState(true)

  useEffect(() => {
    if (fishShow) return
    let random = genRandom({ min: 4000, max: 8000 }) as number
    const interval = setInterval(() => {
      // @ts-ignore
      setFishPosition(() => genRandom({ min: -66, max: -99 }))
      setFishShow(true)
    }, random)

    return () => clearInterval(interval)
  }, [fishShow])

  return { fishShow, setFishShow, fishPosition, setFishPosition }
}
export default useIntervalFishAnimation
