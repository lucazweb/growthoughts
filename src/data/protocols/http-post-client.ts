import { type HttpResponse } from './http-response'

type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
