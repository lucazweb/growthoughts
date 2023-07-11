import { configureStore } from '@reduxjs/toolkit'
import goalSlice from '@/infra/redux/features/goal/slice'

export const store = configureStore({
  reducer: {
    goalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
