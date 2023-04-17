import React, { type InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  isChecked?: boolean
}

export const Checkbox = ({
  label,
  checked,
  isChecked,
  ...rest
}: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        {...rest}
        data-testid="checkbox-component"
        aria-describedby="checkbox-1"
        type="checkbox"
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        defaultChecked={isChecked}
      />
      <label
        data-testid="checkbox-label"
        htmlFor="checkbox-1"
        className="text-sm ml-3 font-medium text-gray-900"
      >
        {label}
      </label>
    </div>
  )
}
