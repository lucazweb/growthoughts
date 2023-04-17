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
  successMetrics: Metric[]
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

export type Metric = {
  date: string
  isComplete: boolean
  name: string
}
