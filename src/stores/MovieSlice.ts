import { createSlice } from '@reduxjs/toolkit'
// Interfaces
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IMovieStore } from '@/interfaces/IMovieStore'
import type { RootState } from '@/stores/Store'

// Initial State
const initialState: IMovieStore = {
  tabActive: 'movie',
}

export const MovieSlice = createSlice({
  name: 'movie',

  initialState,

  reducers: {
    setTabActive: (state, action: PayloadAction<string>) => {
      state.tabActive = action.payload
    },
  },
})

// Export actions
export const { setTabActive } = MovieSlice.actions

// Export state
export const getTabActive = (state: RootState) => state.counter.tabActive

export default MovieSlice.reducer
