import React, { type ChangeEvent, useContext } from 'react'
import { Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form-context'

export const SignUpForm = ({ onSubmit }: Props) => {
  const { credentials, setCredentials } = useContext(Context)

  const handleInputValues = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={onSubmit} data-testid="signup-form">
      <fieldset>
        <label hidden>E-mail</label>
        <Input
          type="email"
          name="email"
          autoComplete="off"
          errorMessage={credentials.errors.email}
          placeholder="E-mail"
          onChange={handleInputValues}
          value={credentials.email}
        />
      </fieldset>

      <fieldset>
        <label hidden>Senha</label>
        <Input
          autoComplete="off"
          name="password"
          type="password"
          errorMessage={credentials.errors.password}
          onChange={handleInputValues}
          value={credentials.password}
          placeholder="Senha"
        />
      </fieldset>
      <fieldset>
        <label hidden>Repita a senha</label>
        <Input
          autoComplete="off"
          name="repeat-password"
          type="password"
          errorMessage={credentials.errors.repeatPassord}
          onChange={handleInputValues}
          value={credentials.repeatPassord}
          placeholder="Repita a senha"
        />
      </fieldset>
      <button
        data-testid="signup-button"
        className="w-full disabled:bg-gray-400 hover:shadow-form rounded-md bg-green-700 py-3 px-8 text-base font-semibold text-white outline-none mt-16 mb-3"
        disabled={
          !credentials.email ||
          !credentials.password ||
          !credentials.repeatPassword
        }
      >
        Cadastrar
      </button>
    </form>
  )
}

type Props = {
  onSubmit: (values: unknown) => void
}
