import { type HttpPostParams } from '@/data/protocols/http-post-client'
import axios, { type AxiosResponse } from 'axios'

export class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<any> {
    let httpResponse: AxiosResponse<any>

    try {
      httpResponse = await axios.post(params.url, params.body)
    } catch (error) {
      httpResponse = error.response
    }

    return {
      data: httpResponse,
      statusCode: httpResponse.status,
    }
  }
}
