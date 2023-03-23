export interface FieldValidation {
  field: string
  validation: (value: string) => Error
}
