import { type HttpResponse } from '@/data/protocols/http-response'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (): HttpResponse<any> => {
  return {
    statusCode: faker.internet.httpStatusCode(),
    body: {
      data: faker.company.name(),
      id: faker.database.mongodbObjectId,
    },
  }
}
