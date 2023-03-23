import { type FieldValidation } from '@/validation/protocols'
import { EmailError } from '@/validation/errors'

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {
    this.field = field
  }

  validation(value: string) {
    const regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/
    return regex.test(value) ? null : new EmailError()
  }
}
