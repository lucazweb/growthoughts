/* eslint-disable quotes */
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

type Props = {
  title: string
  endDate: Date
  percentage: number
  onClick?: () => void
}

export const GoalStatus = {
  aboutStart: 'Não iniciada',
  started: 'Iniciada',
  half: 'Na metade',
  overHalf: 'Está indo bem',
  almost: 'Falta pouco, não desista agora',
  aboutFinish: 'Você está quase lá, foco total',
  winner: 'Meta concluída',
}

export const CardProgress = ({
  title,
  percentage,
  endDate,
  onClick,
}: Props) => {
  const handleStatus = (percentage: number) => {
    if (percentage === 0) return GoalStatus.aboutStart // gray
    if (percentage < 50) return GoalStatus.started // blue
    if (percentage === 50) return GoalStatus.half // yellow
    if (percentage > 50 && percentage < 70) return GoalStatus.overHalf // orange
    if (percentage >= 70 && percentage < 80) return GoalStatus.almost // grenn
    if (percentage >= 80 && percentage <= 99) return GoalStatus.aboutFinish // stronger green
    if (percentage === 100) return GoalStatus.winner // stronger green
  }

  return (
    <div
      data-testid="card-progress"
      onClick={onClick}
      className="flex items-start rounded-xl bg-white p-4 border border-gray-300 shadow-lg max-w-md"
    >
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
        <h2 className="font-semibold" data-testid="card-progress-title">
          {title}
        </h2>
        <p
          className="mt-2 text-sm text-gray-500"
          data-testid="card-progress-status"
        >
          {handleStatus(percentage)}
        </p>
        <p
          className="mt-2 text-sm text-gray-500"
          data-testid="card-progress-endDate"
        >
          Termina em
          {format(endDate, " dd 'de' MMMM 'de' yyyy", {
            locale: pt,
          })}
        </p>
      </div>
    </div>
  )
}
