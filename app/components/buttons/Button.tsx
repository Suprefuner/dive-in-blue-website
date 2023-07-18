import clsx from "clsx"
import { IconType } from "react-icons/lib"

interface ButtonProps {
  label: string
  variant?:
    | "secondary"
    | "primary"
    | "neutral"
    | "outline-primary"
    | "outline-secondary"
    | "outline-neutral"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className?: string
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "secondary",
  onClick,
  disabled,
  className,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `w-full p-2 capitalize rounded-lg transition relative ${className}`,
        // prettier-ignore
        variant === "secondary" 
          && "bg-secondary hover:bg-secondary-dark text-white",
        // prettier-ignore
        variant === "primary" 
          && "bg-primary hover:bg-primary-light text-white",
        // prettier-ignore
        variant === "secondary" 
          && "bg-secondary hover:bg-secondary-dark text-white",
        variant === "neutral" &&
          "bg-neutral hover:bg-neutral-dark-1 text-black",
        variant === "outline-secondary" &&
          "bg-white border border-secondary hover:bg-secondary text-secondary hover:text-white",
        variant === "outline-primary" &&
          "bg-white border border-primary hover:bg-primary text-primary hover:text-white",
        variant === "outline-neutral" &&
          "bg-white border border-neutral-dark-2 hover:bg-neutral text-neutral-dark-1 hover:text-black"
      )}
    >
      {Icon ? (
        <div className="flex items-center justify-center gap-2">
          <div>
            <Icon size={18} />
          </div>
          <span>{label}</span>
        </div>
      ) : (
        <span>{label}</span>
      )}
    </button>
  )
}
export default Button
