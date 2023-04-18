import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { ListDateMaker, type ListDateMakerProps } from './list-date-maker'
import { makeArrayMock } from '@/presentation/test/test-utils'
import { faker } from '@faker-js/faker'
import { type Step } from '@/domain/models/goal'

type SutParams = ListDateMakerProps

const makeSut = (props: SutParams) => {
  return render(<ListDateMaker {...props} />)
}

const makeAditionTests = () => {
  const lettersAndWhiteSpace = /^[a-zA-Z\s]+$/
  const itemValidation = {
    regex: lettersAndWhiteSpace,
    errorMessage: 'Algo está errado',
  }
  const handleUpdate = jest.fn()

  const { getByTestId, queryByTestId } = makeSut({
    list: [],
    handleUpdate,
    itemValidation,
  })

  return {
    getByTestId,
    queryByTestId,
    itemValidation,
    handleUpdate,
  }
}

const checkHandleCall = (handler: typeof jest.fn) => {
  expect(handler).toHaveBeenCalled()
  expect(handler).toHaveBeenCalledTimes(1)
}

describe('ListMaker', () => {
  test('should render component correctlly with no list items', () => {
    const { getByTestId, queryAllByTestId } = makeSut({ list: [] })
    expect(getByTestId('item-name-input')).toBeTruthy()
    expect(getByTestId('item-add-button')).toBeTruthy()
    expect(queryAllByTestId('item-remove-button')).toHaveLength(0)
    expect(getByTestId('list-placeholder')).toBeTruthy()
  })

  test('should render component correctlly with list items', () => {
    // const list = makeArrayMock<Step>(3, () => ({
    //   name: faker.random.words(),
    //   isComplete: false,
    // }))
    // const { queryByTestId, queryAllByTestId } = makeSut({
    //   list,
    // })
    // expect(queryAllByTestId('item')).toHaveLength(list.length)
    // expect(queryByTestId('list-placeholder')).toBeFalsy()
  })

  // test('should render component correctlly with checklist list items if isCheckList prop ', () => {
  //   const list = makeArrayMock<Step>(3, () => ({
  //     name: faker.random.words(),
  //     isComplete: false,
  //   }))

  //   const { queryByTestId, queryAllByTestId } = makeSut({
  //     list,
  //     isCheckList: true,
  //   })
  //   expect(queryAllByTestId('item')).toHaveLength(list.length)
  //   expect(queryAllByTestId('checkbox-component')).toHaveLength(list.length)
  //   expect(queryByTestId('list-placeholder')).toBeFalsy()
  // })

  // test('should block add list item on button click, if not name', async () => {
  //   const { getByTestId, queryByTestId } = makeSut({ list: [] })
  //   fireEvent.click(getByTestId('item-add-button'))
  //   await waitFor(() => {
  //     expect(queryByTestId('item')).toBeFalsy()
  //     expect(getByTestId('list-placeholder')).toBeTruthy()
  //   })
  // })

  // test('should block add list item on enter key press, if not name', async () => {
  //   const { getByTestId, queryByTestId } = makeSut({ list: [] })
  //   fireEvent.keyDown(getByTestId('item-name-input'), { key: 'Enter' })
  //   await waitFor(() => {
  //     expect(queryByTestId('item')).toBeFalsy()
  //     expect(getByTestId('list-placeholder')).toBeTruthy()
  //   })
  // })

  // test('should block add list item on button click, if name not valid', async () => {
  //   const { getByTestId, queryByTestId, itemValidation } = makeAditionTests()

  //   fireEvent.change(getByTestId('item-name-input'), {
  //     target: { value: 'Pl3anejar Viag3em!' },
  //   })

  //   fireEvent.click(getByTestId('item-add-button'))

  //   await waitFor(() => {
  //     expect(queryByTestId('item')).toBeFalsy()
  //     expect(getByTestId('list-placeholder')).toBeTruthy()
  //     expect(getByTestId('input-error-message')).toBeTruthy()
  //     expect(getByTestId('input-error-message')).toHaveTextContent(
  //       itemValidation.errorMessage
  //     )
  //   })
  // })

  // test('should block add list item on enter keypress, if name not valid', async () => {
  //   //   const { getByTestId, queryByTestId, itemValidation } = makeAditionTests()

  //   //   fireEvent.change(getByTestId('item-name-input'), {
  //   //     target: { value: '#@# Ler Artigo! Dev Media' },
  //   //   })

  //   //   fireEvent.keyDown(getByTestId('item-name-input'), { key: 'Enter' })

  //   //   await waitFor(() => {
  //   //     expect(queryByTestId('item')).toBeFalsy()
  //   //     expect(getByTestId('list-placeholder')).toBeTruthy()
  //   //     expect(getByTestId('input-error-message')).toBeTruthy()
  //   //     expect(getByTestId('input-error-message')).toHaveTextContent(
  //   //       itemValidation.errorMessage
  //   //     )
  //   //   })
  //   // })

  //   // test('should add list item on button click, if name is valid', async () => {
  //   //   const { getByTestId, queryByTestId, handleUpdate } = makeAditionTests()

  //   //   fireEvent.change(getByTestId('item-name-input'), {
  //   //     target: { value: 'Planejar viagem a New York' },
  //   //   })
  //   //   fireEvent.click(getByTestId('item-add-button'))

  //   //   await waitFor(() => {
  //   //     expect(getByTestId('item-name-input')).toHaveAttribute(
  //   //       'value',
  //   //       'Planejar viagem a New York'
  //   //     )
  //   //     expect(queryByTestId('input-error-message')).toBeFalsy()
  //   //     checkHandleCall(handleUpdate)
  //   //   })
  //   // })

  //   // test('should add list item on enter keydown, if name is valid', async () => {
  //   //   const { getByTestId, queryByTestId, handleUpdate } = makeAditionTests()

  //   //   fireEvent.change(getByTestId('item-name-input'), {
  //   //     target: { value: 'Planejar viagem a New York' },
  //   //   })
  //   //   fireEvent.keyDown(getByTestId('item-name-input'), { key: 'Enter' })

  //   //   await waitFor(() => {
  //   //     expect(getByTestId('item-name-input')).toHaveAttribute(
  //   //       'value',
  //   //       'Planejar viagem a New York'
  //   //     )
  //   //     expect(queryByTestId('input-error-message')).toBeFalsy()
  //   //     checkHandleCall(handleUpdate)
  //   //   })
  //   // })

  //   // test('should add list item on button click, if name length is bigger than 4, and no validation as prop', () => {
  //   //   const handleUpdate = jest.fn()
  //   //   const { getByTestId } = makeSut({ list: [], handleUpdate })
  //   //   fireEvent.change(getByTestId('item-name-input'), {
  //   //     target: { value: 'Planejar viagem a New York' },
  //   //   })
  //   //   fireEvent.click(getByTestId('item-add-button'))
  //   //   checkHandleCall(handleUpdate)
  //   // })

  //   // test('should add list item on enter keypress, if name length is bigger than 4, and no validation as prop', () => {
  //   //   const handleUpdate = jest.fn()
  //   //   const { getByTestId } = makeSut({ list: [], handleUpdate })
  //   //   fireEvent.change(getByTestId('item-name-input'), {
  //   //     target: { value: 'Planejar viagem a New York' },
  //   //   })
  //   //   fireEvent.keyDown(getByTestId('item-name-input'), { key: 'Enter' })
  //   //   checkHandleCall(handleUpdate)
  //   // })
})
