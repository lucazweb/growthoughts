import { type FieldValidation } from '@/validation/protocols'
import { EmailError } from '@/validation/errors'

export class EmailValidation implements FieldValidation {
  constructor(readonly name: string) {
    this.name = name
  }

  validation(value: string) {
    const regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/
    return regex.test(value) ? null : new EmailError()
  }
}
