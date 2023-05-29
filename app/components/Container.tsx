import { ReactNode, FC } from "react"
interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-[1160px] mx-auto h-full ${className}`}>
      {children}
    </div>
  )
}
export default Container
