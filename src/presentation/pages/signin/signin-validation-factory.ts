import { ValidationBuilder } from '@/validation/validation-builder/validation-builder'
import { ValidationComposite } from '@/validation/validations'

export const signInValidation = ValidationComposite.build([
  ...ValidationBuilder.field('email').required().email().build(),
  ...ValidationBuilder.field('password').required().build(),
])
