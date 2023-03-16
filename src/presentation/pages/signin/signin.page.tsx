import React, { useState } from 'react'
import { Card } from '@/presentation/components'
import { SignInForm } from './form'
import Context from '@/presentation/contexts/form-context'

export const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    errors: [],
  })

  return (
    <div className="container mx-auto">
      <div>
        <h1 data-testid="app-title" className="text-6xl text-center mt-6 mb-6">
          GrowThoughts
        </h1>
        <p className="text-center w-6/12 mx-auto">
          Organize e conclua suas metas
        </p>
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
