import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { UserCard } from './user-card'
import { faker } from '@faker-js/faker'
import '@testing-library/jest-dom/extend-expect'

type SutProps = {
  user: {
    image: string
    name: string
    role?: string
  }
  onClick?: () => void
}

const makeSut = (
  props: SutProps = {
    user: {
      image: faker.internet.url(),
      name: faker.random.word(),
    },
  }
) => {
  const { getByTestId, queryByTestId } = render(
    <UserCard user={props.user} onClick={props.onClick} />
  )
  return {
    getByTestId,
    queryByTestId,
  }
}

describe('UserCard', () => {
  test('should render UserCard correctlly', () => {
    const props = {
      user: {
        image: faker.internet.url(),
        name: faker.random.word(),
      },
      onClick: jest.fn(),
    }
    const { getByTestId } = makeSut(props)
    expect(getByTestId('user-card')).toBeTruthy()
    expect(getByTestId('user-card-name')).toHaveTextContent(props.user.name)
  })

  test('should not render user role if not in props', () => {
    const { queryByTestId } = makeSut()
    expect(queryByTestId('user-card-role')).toBeFalsy()
  })
  test('should render UserCard call onClick on user click', () => {
    const props = {
      user: {
        image: faker.internet.url(),
        name: faker.random.word(),
      },
      onClick: jest.fn(),
    }
    const { getByTestId } = makeSut(props)

    fireEvent.click(getByTestId('user-card'))
    expect(props.onClick).toBeCalledTimes(1)
  })
})
