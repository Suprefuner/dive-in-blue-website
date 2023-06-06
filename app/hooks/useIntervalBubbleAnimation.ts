import { useState, useEffect } from "react"
import { genRandom } from "@/utils/helpers"

interface Bubble {
  size?: string | undefined
  y?: string | undefined
  x?: string | undefined
  time?: number | undefined
}

const useIntervalBubbleAnimation = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    if (showBubble) return
    let random = genRandom({ min: 4000, max: 8000 }) as number

    const interval = setInterval(() => {
      let numberOfBubble = Math.ceil(Math.random() * 3)
      let newBubbles: Bubble[] = []
      for (let i = 0; i < numberOfBubble; i++) {
        newBubbles.push({
          size: genRandom({ min: 2, max: 4, unit: "rem" }) as string,
          y: genRandom({ min: -200, max: -500, unit: "px" }) as string,
          x: genRandom({ min: -50, max: -100, unit: "px" }) as string,
          time: +genRandom({ min: 3, max: 6 }),
        })
      }
      setBubbles(newBubbles)
      setShowBubble(true)
    }, random)

    return () => clearInterval(interval)
  }, [bubbles, showBubble])

  return { bubbles, setBubbles, showBubble, setShowBubble }
}
export default useIntervalBubbleAnimation
