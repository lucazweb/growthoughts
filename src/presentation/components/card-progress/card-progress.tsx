import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

const percentage = 66
export const CardProgress = () => {
  return (
    <div className="flex items-start rounded-xl bg-white p-4 border border-gray-300 shadow-lg">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">3 meses de academia</h2>
        <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
      </div>
    </div>
  )
}
