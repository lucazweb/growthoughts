import React, { type InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
  errorMessage?: string
}

export const Input = ({ isInvalid, errorMessage, ...rest }: InputProps) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input
        {...rest}
        data-testid="input-component"
        className={`w-full rounded-md border ${
          isInvalid ? 'border-red-700' : 'border-[#e0e0e0]'
        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-3`}
        onChange={handleChange}
        value={value}
      />
      {isInvalid && (
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
