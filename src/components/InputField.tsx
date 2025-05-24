import { ChangeEvent } from 'react'

interface InputFieldProps {
  title: string
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ title, value, onChange }: InputFieldProps) => {
  return (
    <p>
      <label>{title}</label>
      <input
        type="number"
        required
        value={value}
        onChange={onChange}
      />
    </p>
  )
}

export default InputField
