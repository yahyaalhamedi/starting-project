import { ChangeEvent } from 'react'

interface InputFieldProps {
  title: string
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ title, value, onChange }: InputFieldProps) => {
  return (
    // Using htmlFor and id for better accessibility
    // and to link the label with the input field
    <div id="container">
      <label htmlFor={`input-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</label>
      <input
        id={`input-${title.toLowerCase().replace(/\s+/g, '-')}`}
        type="number"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputField
