import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

type Props = {
  title: string
  status: string
  endDate: string
  percentage: number
}

export const CardProgress = ({ title, percentage, status, endDate }: Props) => {
  return (
    <div className="flex items-start rounded-xl bg-white p-4 border border-gray-300 shadow-lg max-w-md">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#3e98c7',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent',
          })}
        />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">{status}</p>
        <p className="mt-2 text-sm text-gray-500"> Termina em {endDate}</p>
      </div>
    </div>
  )
}
