import { faker } from '@faker-js/faker'
import { RequiredError } from '@/validation/errors'
import { RequiredValidation } from './required-validation'

const makeSut = () => new RequiredValidation(faker.random.word())

describe('Required Validation tests', () => {
  test('should return an error if field is empty', () => {
    const sut = makeSut()
    expect(sut.validation('')).toEqual(new RequiredError())
  })

  test('should return null if field is valid', () => {
    const sut = makeSut()
    expect(sut.validation(faker.random.word())).toEqual(null)
  })

  test('should return correct error message', () => {
    const sut = makeSut()
    const error = sut.validation('')
    expect(error.message).toEqual('Campo obrigatório')
  })
})
