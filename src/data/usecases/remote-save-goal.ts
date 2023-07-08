import { Goal, SaveGoal } from '@/domain'
import { HttpPostClient, HttpResponse } from '@/data/protocols'

export class RemoteSaveGoal implements SaveGoal {
  constructor(
    private readonly httpClient: HttpPostClient<Partial<Goal>, void>
  ) {}

  async save(params: Partial<Goal>): Promise<HttpResponse<any>> {
    try {
      const response = await this.httpClient.post({
        url: `${process.env.API_BASE}/save`,
        body: params,
      })

      return {
        statusCode: response.statusCode,
        body: response.body,
      }
    } catch (error) {
      console.log(error)
    }
  }
}
