import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
  id: string
  label?: string
  type: string
  disabled?: boolean
  required?: boolean
  placeholder?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="[&>*]:block">
      <label htmlFor={id} className="pl-2 mb-1 capitalize">
        {label || id}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border-2 w-full rounded-lg px-2 py-1 placeholder:capitalize"
        disabled={disabled}
        required={required}
        {...register(id)}
      />
    </div>
  )
}
export default Input
