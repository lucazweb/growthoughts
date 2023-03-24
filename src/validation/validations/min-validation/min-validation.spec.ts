import { faker } from '@faker-js/faker'
import { MinLengthValidation } from './min-validation'
import { MinLengthError } from '@/validation/errors/min-length-error'

const makeSut = () => new MinLengthValidation(faker.random.word(), 3)

describe('Required Validation tests', () => {
  test('should return an error if field dont have min length', () => {
    const sut = makeSut()
    expect(sut.validation('hi')).toEqual(new MinLengthError())
  })

  test('should return null if field is valid', () => {
    const sut = makeSut()
    expect(sut.validation('beer')).toEqual(null)
  })

  test('should return correct error message', () => {
    const sut = makeSut()
    const error = sut.validation('')
    expect(error.message).toEqual('Campo inválido')
  })
})
