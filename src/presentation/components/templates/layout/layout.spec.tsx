import React, { type ComponentType } from 'react'
import { render, screen } from '@testing-library/react'
import { Layout } from './layout'
import { Dashboard } from '@/presentation/pages/dashboard/dashboard'

type SutProps = {
  page: ComponentType
}

const makeSut = ({ page: Component }: SutProps) => {
  render(
    <Layout>
      <Component />
    </Layout>
  )
}

describe('Layout', () => {
  test('should render dashboard page in layout structure correctlly', () => {
    makeSut({ page: Dashboard })
    expect(screen.getByTestId('dashboard-page')).toBeTruthy()
  })
})
