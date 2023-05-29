import { FC } from "react"

interface VideoProps {
  source: string
}

const Video: FC<VideoProps> = ({ source }) => {
  return (
    <video
      autoPlay
      muted
      loop
      preload="auto"
      className="absolute inset-0 -z-10 w-full h-full object-cover"
    >
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

Video.displayName = "Video"
export default Video
