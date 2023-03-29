import React, { type PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-testid="card-component"
      className="box-content bg-white rounded-lg border border-gray-400 mt-3 mb-3 h-auto w-96 p-4 border-1 shadow-lg  hover:shadow-md mx-auto"
    >
      {children}
    </div>
  )
}
