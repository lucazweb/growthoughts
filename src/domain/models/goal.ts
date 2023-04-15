export type Goal = {
  _id?: string
  name: string
  start: {
    date: string
    description?: string
  }
  end: {
    date: string
    description?: string
  }
  description: string
  percentage: number
  successMetrics: Step[]
  actions: Step[]
  risks: Risk[]
  decisions: Step[]
  review?: string
}

export type Risk = {
  name: string
  level: RiskLevel
}

export type RiskLevel = 'low' | 'moderate' | 'high'

export type Step = {
  name: string
  isComplete: boolean
}
