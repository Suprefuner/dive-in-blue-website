import { delay } from "framer-motion"
export const staggerContainer = (delayChildren?: number, stagger?: number) => {
  return {
    show: {
      transition: {
        delayChildren: delayChildren || 0,
        staggerChildren: stagger || 0,
      },
    },
  }
}

interface slideInProps {
  direction: "left" | "right" | "up" | "down"
  type?: "tween" | "spring"
  ease?: string
  duration?: number
  delay?: number
}

export const slideIn = ({
  direction,
  type,
  ease,
  duration,
  delay,
}: slideInProps) => {
  return {
    hide: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "down" ? "-100%" : direction === "up" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type || "tween",
        ease: ease || "easeInOut",
        delay: delay || 0,
        duration: duration || 0.2,
      },
    },
  }
}

export const menuContainer = (windowWidth: number) => {
  return {
    hide: {
      y: "70%",
      clipPath:
        windowWidth < 768
          ? "circle(10% at 81.5% 15px)"
          : "circle(10% at 68% 15px)",
      // clipPath: "circle(10% at 68% 15px)",
    },
    show: {
      y: "120%",
      clipPath: "circle(100%)",
      transition: {
        y: { ease: "easeInOut", duration: 0.5 },
        clipPath: { delay: 0.3, duration: 0.5 },
      },
    },
    leave: {
      y: "70%",
      clipPath:
        windowWidth < 768
          ? "circle(10% at 81.5% 15px)"
          : "circle(10% at 68% 15px)",
      // clipPath: "circle(10% at 68% 15px)",
      transition: {
        clipPath: { duration: 0.3 },
        y: { ease: "easeInOut", delay: 0.1, duration: 0.5 },
      },
    },
  }
}

export const fadeIn = (delay: number) => {
  return {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay },
    },
    leave: {
      opacity: 0,
    },
  }
}
