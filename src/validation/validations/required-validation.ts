import { RequiredError } from '../errors'
import { type FieldValidation } from '../protocols'

export class RequiredValidation implements FieldValidation {
  constructor(readonly name: string) {
    this.name = name
  }

  validation(value: string) {
    return value ? null : new RequiredError()
  }
}
