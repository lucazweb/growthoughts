import { FieldValidationSpy } from '@/validation/test/mock-field-validation'
import { faker } from '@faker-js/faker'
import { ValidationComposite } from './validation.composite'

const makeSut = (fieldName: string) => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName),
  ]

  const validationComposite = ValidationComposite.build(fieldValidationSpy)

  return {
    fieldValidationSpy,
    validationComposite,
  }
}

describe('Validaton Composite tests', () => {
  test('should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { fieldValidationSpy, validationComposite: sut } = makeSut(fieldName)
    fieldValidationSpy[0].error = new Error('first_error_message')
    fieldValidationSpy[1].error = new Error('second_error_message')
    const error = sut.validate(fieldName, 'any_value')
    expect(error).toBeTruthy()
  })

  test('should not return error if any validation pass', () => {
    const fieldName = faker.database.column()
    const { validationComposite: sut } = makeSut(fieldName)

    const error = sut.validate(fieldName, 'any_value')
    expect(error).toBeFalsy()
  })
})
