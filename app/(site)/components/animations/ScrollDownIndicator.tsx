import Image from "next/image"

const ScrollDownIndicator = () => {
  return (
    <div
      className="
          absolute right-1/2 md:right-[120px] 
          bottom-[50px] md:bottom-[120px] z-50
          translate-x-1/2 md:translate-x-0 px-3 
          border-[3px] border-black rounded-full 
          brightness-0 invert opacity-75"
    >
      <Image
        src="/arrow.svg"
        alt="arrow pointing down"
        width={20}
        height={150}
        className="animate-pointing-down"
      />
    </div>
  )
}
export default ScrollDownIndicator
