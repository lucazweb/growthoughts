import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import type axios from 'axios'
import { mockAxios } from '@/infra/test'
import { type HttpPostParams } from '@/data/protocols/http-post-client'
import { mockHttpResponse } from '@/infra/test/mock-http-response'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    data: faker.internet.exampleEmail,
  },
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL', async () => {
    const { sut, mockedAxios } = makeSut()
    await sut.post({ url: 'any_url' })
    expect(mockedAxios.post).toHaveBeenCalledWith('any_url', undefined)
  })

  test('should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('should return correct statusCode and body on failure', async () => {
    const { sut, mockedAxios } = makeSut()

    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse(),
    })

    const promise = sut.post(mockPostRequest())

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
