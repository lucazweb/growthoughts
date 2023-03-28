import { type FieldValidation } from '@/validation/protocols'

export class RepeatPasswordValidation implements FieldValidation {
  constructor(readonly field: string, readonly password: string) {
    this.field = field
    this.password = password
  }

  validation(value: string) {
    return this.password !== value ? new Error() : null
  }
}
