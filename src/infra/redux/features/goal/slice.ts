import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Goal } from '@/domain'
// import {
//   fetchGoalsList
// } from './thunks'

export interface GoalState {
  list: Array<Partial<Goal>>
  isLoading: boolean
  selected?: Partial<Goal>
  errorMessage?: string
  shouldRedirect?: string
}

const initialState: GoalState = {
  list: [{
    name: "Desenvolver plataforma Growthoughts",
    start: {
      date: "2023-07-10T03:00:00.000Z",
      description: "App ainda em desenvolvimento",
    },
    end: {
      date: "2023-07-20T03:00:00.000Z",
      description: "Primeira versão da plataforma Growthoughs",
    },
    decisions: [
      {
        name: "Acreditar ser possível",
        isComplete: false,
      },
      {
        name: "Acreditar em si mesmo",
        isComplete: false,
      },
      {
        name: "Focar no seu melhor",
        isComplete: false,
      },
    ],
    actions: [
      {
        name: "Desenvolver um pouco todos os dias por 1 hora no mínimo",
        isComplete: false,
      },
      {
        name: "Criar backlog",
        isComplete: false,
      },
      {
        name: "Motivar-se todo dia para alcançar a sua meta",
        isComplete: false,
      },
    ],
    successMetrics: [
      {
        name: "Decisão de finalizar a app",
        date: "2023-07-10T03:00:00.000Z",
        isComplete: false,
      },
      {
        name: "Prova de conceito",
        date: "2023-07-12T03:00:00.000Z",
        isComplete: false,
      },
      {
        name: "Deploy da v 1.0",
        date: "2023-07-14T03:00:00.000Z",
        isComplete: false,
      },
    ],
  }],
  isLoading: false,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    createGoal: (state, action: PayloadAction<Partial<Goal>>) => {
      return { ...state, list: [...state.list, action.payload]}
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoading: action.payload }
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      return { ...state, errorMessage: action.payload }
    },
    setShouldRedirect: (state, action: PayloadAction<string>) => {
      return { ...state, shouldRedirect: action.payload }
    },
  },
  extraReducers: (builder) => {
    
  },
})

export const { reducer, actions } = querySlice
export const { setIsLoading, setErrorMessage, setShouldRedirect } = actions
export default reducer
