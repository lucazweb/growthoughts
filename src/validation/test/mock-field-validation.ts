import { type FieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null
  constructor(readonly field: string) {}
  
  validation(value: string) {
    return this.error
  }
}
