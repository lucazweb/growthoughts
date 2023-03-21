export interface FieldValidation {
  name: string
  validation: (value: string) => Error
}