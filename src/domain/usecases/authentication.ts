import { type Account } from '../models/account'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (credentials: AuthenticationParams) => Promise<Account>
}
