import clsx from "clsx"

interface BubbleProps {
  size: string
  x?: string
  y?: string
  time?: number
  showBubble: boolean
  setShowBubble: (arg0: boolean) => void
}

const Bubble: React.FC<BubbleProps> = ({
  size,
  x,
  y,
  time,
  showBubble,
  setShowBubble,
}) => {
  return (
    <div
      style={{
        // @ts-ignore
        "--y": y,
        "--time": time ? time : 3,
      }}
      // showBubble
      className={clsx(
        `h-screen opacity-0`,
        showBubble && " animate-bubble-vertical"
      )}
      onAnimationEnd={() => setShowBubble(false)}
    >
      <div
        style={{
          // @ts-ignore
          "--size": size,
          "--x": x,
          "--time": time ? time / 2 : 1.5,
        }}
        className={clsx(
          `w-[var(--size)] aspect-square border-2 border-black rounded-full bg-white `,
          showBubble && "animate-bubble-horizontal"
        )}
      />
    </div>
  )
}
export default Bubble
