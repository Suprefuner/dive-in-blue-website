import { FC } from "react"

interface AboutSectionTopWaveProp {
  className: string
}

const AboutSectionTopWave: FC<AboutSectionTopWaveProp> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        version="1.1"
      >
        <path
          d="M0 550L25 536.7C50 523.3 100 496.7 150 490.8C200 485 250 500 300 511.5C350 523 400 531 450 524.2C500 517.3 550 495.7 600 483.7C650 471.7 700 469.3 750 475.8C800 482.3 850 497.7 875 505.3L900 513L900 601L875 601C850 601 800 601 750 601C700 601 650 601 600 601C550 601 500 601 450 601C400 601 350 601 300 601C250 601 200 601 150 601C100 601 50 601 25 601L0 601Z"
          fill="#fff"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>
  )
}
export default AboutSectionTopWave
