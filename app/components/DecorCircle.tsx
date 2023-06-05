interface DecorCircleProps {
  size?: string
  left?: string
  bottom?: string
  right?: string
  top?: string
}

const DecorCircle = ({ size, left, bottom, right, top }: DecorCircleProps) => {
  return (
    <div
      className="
          w-[15rem] h-[15rem]
          md:w-[30vw] md:h-[30vw]
          absolute -left-[3rem] md:-left-[4rem] -bottom-[20vh] -z-10
          border border-slate-300 
          aspect-square rounded-full

          before:w-full before:h-full
          before:absolute before:top-2/3 before:border before:border-slate-300  before:rounded-full

          after:w-full after:h-full 
          after:absolute after:-top-2/3 after:border after:border-slate-300 after:rounded-full
        "
      style={{
        width: size,
        height: size,
        left,
        bottom,
        right,
        top,
      }}
    />
  )
}
export default DecorCircle
