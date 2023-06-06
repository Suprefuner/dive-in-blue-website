import Image from "next/image"

interface LogoProps {
  width: string
  priority?: boolean
}

const Logo: React.FC<LogoProps> = ({ width, priority }) => {
  return (
    <div style={{ width }} className="h-[70px] relative">
      <Image
        className="align-middle brightness-100 invert "
        src="/dib_logo.svg"
        alt="logo"
        fill
        priority={priority}
      />
    </div>
  )
}
export default Logo
