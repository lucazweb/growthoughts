import React from 'react'
import { Card, Input } from '@/presentation/components'

export const SignIn = () => {
  // should have page title
  // should have signin form
  // should have link to signup page

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
        <form data-testid="signin-form">
          <fieldset>
            <label hidden>E-mail</label>
            <Input
              type="email"
              errorMessage="Insira um E-mail válido"
              placeholder="E-mail"
              isInvalid
            />
          </fieldset>

          <fieldset>
            <label hidden>Senha</label>
            <Input autoComplete="off" type="password" placeholder="Senha" />
          </fieldset>
          <button
            data-testid="signin-button"
            className="w-full hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mt-3 mb-3"
            disabled
          >
            Entrar
          </button>
        </form>
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
