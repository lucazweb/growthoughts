import React, { useEffect, useState } from 'react'
import { Card } from '@/presentation/components'
import { SignInForm } from './form'
import Context from '@/presentation/contexts/form-context'
import { signInValidation as validation } from './signin-validation-factory'

export const SignIn = () => {
  const [credentials, setCredentials] = useState<{
    email: string
    password: string
    errors: Record<string, string | null>
  }>({
    email: '',
    password: '',
    errors: {},
  })

  useEffect(() => {
    const email = validation.validate('email', credentials.email) || null
    const password =
      validation.validate('password', credentials.password) || null

    setCredentials({
      ...credentials,
      errors: {
        email,
        password,
      },
    })
  }, [credentials.email, credentials.password])

  return (
    <div className="container mx-auto">
      <div>
        <h1 data-testid="app-title" className="text-6xl text-center mt-6 mb-6">
          GrowThoughts
        </h1>
        <h3 className="text-center w-6/12 mx-auto text-2xl mb-12">
          Organize e conclua suas metas
        </h3>
      </div>

      <Card>
        <Context.Provider value={{ credentials, setCredentials }}>
          <SignInForm />
        </Context.Provider>
        <div className="mt-3 mb-3 mx-auto">
          <button
            className="flex justify-end mt-2 text-md text-gray-600 hover:underline mx-auto"
            data-testid="signup-button"
          >
            Criar uma conta
          </button>
        </div>
      </Card>
    </div>
  )
}
