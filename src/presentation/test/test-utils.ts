import { faker } from '@faker-js/faker'
import { type Step } from '../components/steps/steps'

export const makeStepsMock = (stepsLength: number): Step[] => {
  const steps = []
  for (let i = 0; i < stepsLength; i++) {
    steps.push({
      title: faker.random.word(),
      order: i + 1,
      isComplete: !i,
      isCurrent: !i,
    })
  }
  return steps
}

export const makeArrayMock = <T>(
  stepsLength: number,
  callback: (i?: number) => T
): T[] => {
  const steps = []
  for (let i = 0; i < stepsLength; i++) {
    steps.push(callback())
  }
  return steps
}

// makeArrayMock<Step>(3, (i: number) => ({
//   title: faker.random.word(),
//   order: i + 1,
//   isComplete: !i,
//   isCurrent: !i,
// }))
