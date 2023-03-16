import React from 'react'
import { Input } from '@/presentation/components'

export const SignInForm = () => {
  return (
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
        className="w-full hover:shadow-form rounded-md bg-green-800 py-3 px-8 text-base font-semibold text-white outline-none mt-3 mb-3"
        disabled
      >
        Entrar
      </button>
    </form>
  )
}
