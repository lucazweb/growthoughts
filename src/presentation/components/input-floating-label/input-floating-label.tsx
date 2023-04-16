import React, { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFloatingLabel = ({ errorMessage, ...props }: InputProps) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <input
        {...props}
        name="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor="floating_email"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.label}
      </label>
    </div>
  )
}
