import React from 'react'
import { InitialGoalData } from './initial-goal-data'
import { Decisions } from './decisions'

import personSVG from './person.svg'
import personDecisions from './person_decisions.svg'
import fitnessPerson from './fitness_stats.svg'
import compass from './result.svg'

import { Actions } from './actions'
import { Metrics } from './metrics'

type StepData = {
  title: string
  image: string
  hint: JSX.Element
  form: JSX.Element
}

const stepData: Record<number, StepData> = {
  1: {
    form: <InitialGoalData />,
    image: personSVG,
    title:
      'Se não sabe aonde quer chegar, qualquer caminho serve.. mas não é o caso!',
    hint: (
      <span>
        Comece detalhando a situação atual e o objetivo a ser alcançado.
      </span>
    ),
  },
  2: {
    form: <Decisions />,
    image: personDecisions,
    title:
      'São as decisões que nos dão força para alcançar um objetivo, sem desculpas.',
    hint: (
      <>
        <span>
          Digite no campo ao lado as <strong>decisões</strong>, que tornarão os
          seus objetivos reais..
        </span>
        <p className="mt-4">
          <em>
            Exemplo.. <strong>Parar de beber.</strong>
          </em>
        </p>
      </>
    ),
  },
  3: {
    form: <Actions />,
    image: fitnessPerson,
    title: 'Quais ações táticas irá realizar para completar seu objetivo?',
    hint: (
      <>
        <span>
          Se deseja emagrecer, um bom exemplo de <strong>ação tática</strong> é
          <strong>
            <em> planejar as refeições diariamente</em>
          </strong>
        </span>
      </>
    ),
  },
  4: {
    form: <Metrics />,
    image: compass,
    title: 'Métricas são as bússola que nos guia para o sucesso.',
    hint: (
      <>
        <span>
          Crie <strong>métricas</strong> para a realização dos seus objetivos,
          com isso será possível acompanhar o seu progresso
        </span>
      </>
    ),
  },
}

export const INITIAL_STEPS = [
  {
    order: 1,
    title: 'Informações iniciais',
    isComplete: true,
    isCurrent: true,
  },
  {
    order: 2,
    title: 'Decisões',
    isComplete: false,
    isCurrent: false,
  },
  {
    order: 3,
    title: 'Ações táticas',
    isComplete: false,
  },
  {
    order: 4,
    title: 'Métricas',
    isComplete: false,
  },
]

export { InitialGoalData, Decisions }

export default stepData
