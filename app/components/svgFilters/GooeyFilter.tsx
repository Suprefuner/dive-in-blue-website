const GooeyFilter = async () => {
  return (
    <svg className="hidden">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            // values={"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"}
            values={"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"}
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>

        <filter id="gooey-sm">
          <feGaussianBlur in="SourceGraphic" stdDeviation={3} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values={"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 10 -5"}
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}
export default GooeyFilter
