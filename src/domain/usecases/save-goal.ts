import { HttpResponse } from '@/data/protocols/http-response'
import { Goal } from '@/domain'

export interface SaveGoal {
  save: (params: Partial<Goal>) => Promise<HttpResponse<any>>
}
