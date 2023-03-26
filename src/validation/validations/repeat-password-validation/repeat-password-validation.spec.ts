import { faker } from '@faker-js/faker'
import { RepeatPasswordValidation } from './repeat-password-validation'

const makeSut = (password: string, repeated: string) =>
  new RepeatPasswordValidation(faker.random.word(), password)

describe('RepeatPasswordValidation', () => {
  test('should return error if password dont match', () => {
    const password = faker.internet.password()
    const repeated = faker.random.word()
    const sut = makeSut(password, repeated)
    expect(sut.validation(faker.random.word())).toEqual(new Error())
  })
})
