import { MinLengthError } from '@/validation/errors/min-length-error'
import { type FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  minLength: number
  constructor(readonly field: string, minLength: number) {
    this.field = field
    this.minLength = minLength
  }

  validation(value: string) {
    return value.length < this.minLength ? new MinLengthError() : null
  }
}
