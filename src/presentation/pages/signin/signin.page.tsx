import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/presentation/components'
import { SignInForm } from './form'
import Context from '@/presentation/contexts/form-context'
import { signInValidation as validation } from './signin-validation-factory'
import { Col, Grid, Row } from 'react-flexbox-grid'

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

  const navigate = useNavigate()

  useEffect(() => {
    setCredentials({
      ...credentials,
      errors: {
        email: !credentials.email
          ? null
          : validation.validate('email', credentials.email),
        password: !credentials.password
          ? null
          : validation.validate('password', credentials.password),
      },
    })
  }, [credentials.email, credentials.password])

  return (
    <Grid>
      <Row>
        <Col md={12}>
          <h1
            data-testid="app-title"
            className="text-6xl text-center mt-6 mb-6"
          >
            GrowThoughts
          </h1>
          <h3 className="text-center w-6/12 mx-auto text-2xl mb-12">
            Organize e conclua suas metas
          </h3>
        </Col>
      </Row>

      <Row center="md">
        <Col md={4}>
          <Card>
            <Context.Provider value={{ credentials, setCredentials }}>
              <SignInForm />
            </Context.Provider>
            <div className="mt-3 mb-3 mx-auto">
              <button
                className="flex justify-end mt-2 text-md text-gray-600 hover:underline mx-auto"
                data-testid="signup-button"
                onClick={() => {
                  navigate('/signup')
                }}
              >
                Criar uma conta
              </button>
            </div>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}
