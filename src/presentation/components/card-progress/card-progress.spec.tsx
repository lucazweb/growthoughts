import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { CardProgress, GoalStatus } from './card-progress'
import { parseISO } from 'date-fns'
import '@testing-library/jest-dom/extend-expect'

type SutProps = {
  title: string
  endDate: Date
  percentage: number
}

const makeSut = (
  props: SutProps = {
    title: 'Perder 4kg em 2 meses',
    endDate: parseISO('2023-05-28 16:00:00'),
    percentage: 0,
  }
) => {
  const { getByTestId } = render(<CardProgress {...props} />)
  return {
    getByTestId,
    sut: render,
  }
}

const goal = {
  title: 'Perder 4kg em 2 meses',
  endDate: parseISO('2023-05-28 16:00:00'),
  percentage: 55,
}

describe('CardProgress', () => {
  test('should render Card progress correctlly', () => {
    const props = {
      title: '3 meses de academia',
      endDate: parseISO('2023-05-28 16:00:00'),
      percentage: 10,
    }

    const { getByTestId } = makeSut(props)

    expect(getByTestId('card-progress-title')).toHaveTextContent(props.title)
    expect(screen.getByText(`${props.percentage}%`)).toBeTruthy()
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.started
    )
    expect(getByTestId('card-progress-endDate')).toHaveTextContent(
      'Termina em 28 de maio de 2023'
    )
  })

  test('should render correctly status if goal is not started', () => {
    const props = {
      ...goal,
      percentage: 0,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.aboutStart
    )
  })

  test('should render correctly status if goal have started', () => {
    const props = {
      ...goal,
      percentage: 10,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.started
    )
  })

  test('should render correctly status if goal have in half way', () => {
    const props = {
      ...goal,
      percentage: 50,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.half
    )
  })

  test('should render correctly status if goal have in over half', () => {
    const props = {
      ...goal,
      percentage: 55,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.overHalf
    )
  })

  test('should render correctly status if goal have in almost finish', () => {
    const props = {
      ...goal,
      percentage: 71,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.almost
    )
  })

  test('should render correctly status if goal is about to finish', () => {
    const props = {
      ...goal,
      percentage: 80,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.aboutFinish
    )
  })

  test('should render correctly status if goal have finished', () => {
    const props = {
      ...goal,
      percentage: 100,
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('card-progress-status')).toHaveTextContent(
      GoalStatus.winner
    )
  })

  test('should call onClick function, on user click', async () => {
    const props = {
      ...goal,
      percentage: 100,
      onClick: jest.fn(),
    }
    const { getByTestId } = makeSut(props)
    const card = getByTestId('card-progress')
    fireEvent.click(card)

    await waitFor(() => {
      expect(props.onClick).toHaveBeenCalled()
      expect(props.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
