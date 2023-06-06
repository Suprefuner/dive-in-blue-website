interface genRandomProps {
  min: number
  max: number
  unit?: string
}

export const genRandom = ({ min, max, unit }: genRandomProps) => {
  const random = Math.ceil(Math.random() * (max - min)) + min
  return !unit ? random : `${random}${unit}`
}
