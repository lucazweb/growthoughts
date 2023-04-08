import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export type Step = {
  title: string
  order: number
  isComplete?: boolean
  isCurrent?: boolean
}

type StepperProps = {
  steps: Step[]
  onClick?: (step: Step, steps: Step[]) => void
}

export const Stepper = (props: StepperProps) => {
  return (
    <ol className="flex items-center mx-auto pb-3 border-b-2 mb-12 border-blue-500  text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {props.steps.map((s) => (
        <li
          data-testid="step-item"
          key={s.order}
          className={`flex md:w-full items-center ${
            s.isCurrent && 'text-blue-600 dark:text-blue-500'
          }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
        >
          <div className="flex items-center flex-nowrap after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">
              {s.isComplete ? (
                <FaCheckCircle data-testid="check-icon" />
              ) : (
                s.order
              )}
            </span>

            <span
              data-testid="step-title"
              className="flex cursor-pointer"
              onClick={() => {
                if (props.onClick) {
                  props.onClick(s, props.steps)
                }
              }}
              style={{ width: 'max-content' }}
            >
              {s.title}
            </span>
          </div>
        </li>
      ))}
    </ol>
  )
}
