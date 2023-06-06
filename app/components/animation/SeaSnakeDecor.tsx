import Image from "next/image"
import EyeAnimate from "./EyeAnimate"

const SeaSnakeDecor = () => {
  return (
    <div className="relative">
      <div className="absolute top-1 -left-3">
        <EyeAnimate />
      </div>
      <div className="hidden md:block">
        <Image
          src="/sea_snake.svg"
          alt="illustration of sea snake"
          width={200}
          height={150}
        />
      </div>
      <div className="block md:hidden">
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
export default SeaSnakeDecor
