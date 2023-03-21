import { faker } from '@faker-js/faker'
import { EmailValidation } from './email-validation'
import { EmailError } from '../errors/email-error'

const makeSut = () => new EmailValidation(faker.random.word())

describe('E-mail Validation tests', () => {
  test('Should return an Error if email is invalid', () => {
    const sut = makeSut()
    expect(sut.validation(faker.random.word())).toEqual(new EmailError())
  })

  test('Should return an null if email is valid', () => {
    const sut = makeSut()
    expect(sut.validation(faker.internet.email())).toEqual(null)
  })

  test('Should return correct error message', () => {
    const sut = makeSut()
    const error = sut.validation(faker.animal.bear())
    expect(error.message).toBe('Insira um E-mail válido')
  })
})
