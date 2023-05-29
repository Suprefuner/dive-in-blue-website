import { FC } from "react"
import { RiArrowRightLine } from "react-icons/ri"
import { GooeyFilter } from "./"

interface GooeyButtonProps {
  children: React.ReactNode
  color?: string
}

const GooeyButton: FC<GooeyButtonProps> = ({ children, color = "primary" }) => {
  return (
    <>
      <div className="relative rounded-full overflow-hidden w-max  pr-[80px] cursor-pointer group text-white text-2xl">
        <div
          className={`
            w-max rounded-full
            pl-6 pr-[50px] py-2
            bg-${color}
            transition-all duration-500 ease-in-out
            group-hover:px-6
          `}
          // from GooeyFilter
          style={{ filter: "url(#gooey)" }}
        >
          {children}
          <div
            className={`
            absolute -right-0 top-1/2 -translate-y-1/2
            p-[0.4rem] bg-${color} rounded-full
            text-center
            transition-all duration-500 ease-in-out
            group-hover:-right-[63px]
            `}
          >
            <RiArrowRightLine size={32} />
          </div>
        </div>
      </div>
      {/* create the filter for the button */}
      <GooeyFilter />
    </>
  )
}
export default GooeyButton
