"use client"

import {
  Container,
  EyeAnimate,
  GooeyFilter,
  TextBGColorChangeAnimation,
} from "../components"
import { briefList } from "@/utils/constants"

const BriefSection = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-cover bg-[center_bottom_-7rem] w-full"
      style={{ backgroundImage: "url(/shark-section-wave.svg)" }}
    >
      <Container className="px-[200px] flex items-center justify-center">
        <div className="flex flex-col justify-center items-start gap-10 relative">
          <TextBGColorChangeAnimation>
            Not just the perfect holiday... <br />
            DIVE IN BLUE have your back
          </TextBGColorChangeAnimation>
          <ul className="w-3/5 space-y-2">
            {briefList.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer group relative"
                style={{ filter: "url(#gooey-sm)" }}
              >
                {/* indicator */}
                <div className="w-3.5 h-3.5 rounded-full bg-black absolute top-1.5 left-0 z-10" />
                <span
                  className="inline-block relative z-20 bg-white
                group-hover:bg-black group-hover:text-white hover:translate-x-5 duration-700 transition-all group-hover:px-3 py-1"
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 justify-center right-0 bg-red-500 border-8 border-black">
            <EyeAnimate />
          </div>
        </div>
        <GooeyFilter />
      </Container>
    </section>
  )
}
export default BriefSection
