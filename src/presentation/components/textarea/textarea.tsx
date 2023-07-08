import React, { useState, type TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextArea = ({
  errorMessage,
  onChange,
  ...rest
}: TextareaProps) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    onChange?.(e)
  }

  return (
    <div>
      <textarea
        {...rest}
        className={`w-full rounded-md border bg-white ${
          errorMessage ? 'border-red-700' : 'border-[#e0e0e0]'
        } bg-transparent py-2 px-3 text-base font-normal text-[#6B7280] outline-none focus:border-[#138353] focus:shadow-md mt-3`}
        onChange={handleChange}
        value={value}
      />
      {errorMessage && (
        <p
          data-testid="textarea-error-message"
          className="text-red-700 mt-1 text-sm"
        >
          {errorMessage || 'Algo deu errado'}
        </p>
      )}
    </div>
  )
}
