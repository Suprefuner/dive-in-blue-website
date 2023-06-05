import { FC } from "react"
import clsx from "clsx"
import { RiArrowRightLine } from "react-icons/ri"

interface GooeyButtonProps {
  children: React.ReactNode
  color?: string
}

const GooeyButton: FC<GooeyButtonProps> = ({ children, color = "primary" }) => {
  return (
    <div
      className="
      cursor-pointer group 
      relative w-max md:overflow-hidden 
      text-white text-2xl rounded-full 
      hover:px-[65px] md:hover:pl-0 md:hover:pr-[80px] 
      transition-all duration-500"
    >
      <div
        className={clsx(
          `
            w-max rounded-full
            pl-6 pr-[50px] py-2
            bg-secondary
            transition-all duration-500 ease-in-out
            group-hover:px-6
          `,
          color && `bg-${color}`,
          color === "primary" && "bg-primary",
          color === "secondary" && "bg-secondary"
        )}
        style={{ filter: "url(#gooey)" }}
      >
        {children}
        {/* 
        ======================================
        ARROW BUTTON
        ======================================
        */}
        <div
          className={clsx(
            `
              absolute -right-0 top-1/2 -translate-y-1/2
              p-[0.4rem] rounded-full text-center
              transition-all duration-500 ease-in-out
              group-hover:-right-[63px]
            `,
            color && `bg-${color}`,
            color === "primary" && "bg-primary",
            color === "secondary" && "bg-secondary"
          )}
        >
          <RiArrowRightLine size={32} />
        </div>
      </div>
    </div>
  )
}
export default GooeyButton
