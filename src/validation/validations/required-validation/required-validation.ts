import { RequiredError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'

export class RequiredValidation implements FieldValidation {
  constructor(readonly field: string) {
    this.field = field
  }

  validation(value: string) {
    return value ? null : new RequiredError()
  }
}
