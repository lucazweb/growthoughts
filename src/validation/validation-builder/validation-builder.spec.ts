import { faker } from '@faker-js/faker'
import { RequiredValidation } from '@/validation/validations'
import { ValidationBuilder as sut } from './validation-builder'
import { EmailValidation } from '@/validation//validations'

describe('Validation Builder tests', () => {
  test('should return an array of required validation on build', () => {
    const field = faker.random.word()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredValidation(field)])
  })

  test('should return an array of email validation on build', () => {
    const field = faker.random.word()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('should return an array of email and required validations on build', () => {
    const field = faker.random.word()
    const validations = sut.field(field).email().required().build()
    expect(validations).toEqual([
      new EmailValidation(field),
      new RequiredValidation(field),
    ])
  })
})
