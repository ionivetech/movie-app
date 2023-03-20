import { configureStore } from '@reduxjs/toolkit'
import movieReducer from 'stores/MovieSlice'

export const store = configureStore({
  reducer: {
    counter: movieReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
