import { createAsyncThunk } from '@reduxjs/toolkit'
import { Goal } from '@/domain'

import {
  GoalState,
  setErrorMessage,
  setIsLoading,
  setShouldRedirect,
} from './slice'



export const fetchGoalsList = createAsyncThunk<
  Array<Partial<Goal>>,
  Array<Partial<Goal>>
>(
  'query/fetchGoalList',
  async (list: Array<Partial<Goal>>, { dispatch }) => {
    try {
      dispatch(setIsLoading(true))
      // if (list.length > 0) {
      //   const data = await remoteUpdateQueryList(list)
      //   if (data) return handleListUpdate(list, data)
      // }
      return []
    } catch (err) {
      console.log(err)
    }
  }
)


export const selectGoalList = (state: GoalState) => state.list
