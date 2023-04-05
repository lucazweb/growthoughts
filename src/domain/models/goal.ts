export type Goal = {
  _id?: string
  name: string
  start: {
    date: string
    description: string
  }
  end: {
    date: string
    description: string
  }
  description: string
  percentage: number
  successMetrics: Step[]
  actions: Step[]
  risks: Risk[]
  decisions: Step[]
  review?: string
}

type Risk = {
  name: string
  level: RiskLevel
}

type RiskLevel = 'low' | 'moderate' | 'high'

type Step = {
  name: string
  isComplete: boolean
}
