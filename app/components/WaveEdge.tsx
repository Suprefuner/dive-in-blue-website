import Image from "next/image"

interface WaveEdgeProp {
  src: string
}

const WaveEdge: React.FC<WaveEdgeProp> = ({ src }) => {
  return (
    <Image
      src={src}
      alt="wave"
      width={1500}
      height={200}
      className="w-screen"
    />
  )
}
export default WaveEdge
