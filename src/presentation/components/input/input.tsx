import React, { type InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ errorMessage, onChange, ...rest }: InputProps) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e)
  }

  return (
    <div>
      <input
        {...rest}
        data-testid="input-component"
        className={`w-full rounded-md border ${
          errorMessage ? 'border-red-700' : 'border-[#e0e0e0]'
        } bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#138353] focus:shadow-md mt-3`}
        onChange={handleChange}
        value={value}
      />
      {errorMessage && (
        <p
          data-testid="input-error-message"
          className="text-red-700 mt-1 text-sm"
        >
          {errorMessage || 'Algo deu errado'}
        </p>
      )}
    </div>
  )
}
