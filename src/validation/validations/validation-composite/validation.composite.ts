import { type FieldValidation } from '@/validation/protocols'

interface Validation {
  validate: (fieldName: string, fieldValue: string) => string
}

export class ValidationComposite implements Validation {
  constructor(readonly validations: FieldValidation[]) {
    this.validations = validations
  }

  static build(validations: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validations)
  }

  validate(fieldName: string, fieldValue: string) {
    const validators = this.validations.filter((v) => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validation(fieldValue)
      if (error) return error.message
    }
    return null
  }
}
