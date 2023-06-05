import Image from "next/image"
import EyeAnimate from "./animation/EyeAnimate"

const SeaSnakeMobileDecor = () => {
  return (
    <div className="relative">
      <div className="absolute top-1 -left-3">
        <EyeAnimate />
      </div>
      <div className="">
        <Image
          src="/sea_snake_mobile.svg"
          alt="illustration of sea snake"
          width={50}
          height={150}
        />
      </div>
    </div>
  )
}
export default SeaSnakeMobileDecor
