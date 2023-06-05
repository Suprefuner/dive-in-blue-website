"use client"

import { useEffect, useRef } from "react"

let mouse: DOMPoint | undefined
let requestId: number | null = null
let leftEye:
  | {
      element: SVGGraphicsElement
      rotateTo: (point: { x: number; y: number }) => void
    }
  | undefined
let rightEye:
  | {
      element: SVGGraphicsElement
      rotateTo: (point: { x: number; y: number }) => void
    }
  | undefined

const EyeAnimate = () => {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    mouse = ref.current?.createSVGPoint()
  }, [ref])

  useEffect(() => {
    leftEye = createEye("#left-eye")
    rightEye = createEye("#right-eye")
    const onMouseMove = (e: MouseEvent) => {
      if (!mouse) return
      mouse.x = e.clientX
      mouse.y = e.clientY

      if (!requestId) {
        requestId = requestAnimationFrame(onFrame)
      }
    }

    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  const onFrame = () => {
    if (!ref.current || !mouse) return
    // @ts-ignore
    let point = mouse.matrixTransform(ref.current.getScreenCTM().inverse())
    leftEye?.rotateTo({ x: point?.x, y: point?.y })
    rightEye?.rotateTo({ x: point?.x, y: point?.y })

    requestId = null
  }

  const createEye = (selector: string) => {
    const element: SVGGraphicsElement = document.querySelector(selector)!
    let bbox = element?.getBBox()

    if (!bbox) return
    let centerX = bbox.x + bbox.width / 2
    let centerY = bbox.y + bbox.height / 2

    const rotateTo = (point: { x: number; y: number }) => {
      if (!point) return

      let dx = point.x - centerX
      let dy = point.y - centerY

      let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 180

      element.style.transform = `rotate(${angle}deg)`
      element.style.transformOrigin =
        selector === "#left-eye" ? "250px 500px" : "750px 500px"
    }

    return {
      element,
      rotateTo,
    }
  }

  return (
    <div>
      <svg ref={ref} width="75px" height="75px" viewBox="0 0 1000 1000">
        <g id="left-eye">
          <circle
            id="eye"
            cx="250"
            cy="500"
            r="230"
            stroke="#000000"
            strokeWidth="40"
            fill="#fff"
          />
          <circle id="pupil" cx="125" cy="500" r="125" fill="#000" />
        </g>
        <g id="right-eye">
          <circle
            id="eye"
            cx="750"
            cy="500"
            r="230"
            stroke="#000000"
            strokeWidth="40"
            fill="#fff"
          />
          <circle id="pupil" cx="625" cy="500" r="125" fill="#000" />
        </g>
      </svg>
    </div>
  )
}

export default EyeAnimate
