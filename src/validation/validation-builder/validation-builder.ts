import { type FieldValidation } from '../protocols'
import {
  EmailValidation,
  MinLengthValidation,
  RequiredValidation,
} from '@/validation/validations'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  email() {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  required() {
    this.validations.push(new RequiredValidation(this.fieldName))
    return this
  }

  min(minLength: number) {
    this.validations.push(new MinLengthValidation(this.fieldName, minLength))
    return this
  }

  build() {
    return this.validations
  }
}
