import { type FieldValidation } from '../protocols'
import { EmailValidation } from '../validations/email-validation'
import { RequiredValidation } from '../validations/required-validation'

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

  build() {
    return this.validations
  }
}
