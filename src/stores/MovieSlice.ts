import { createSlice } from '@reduxjs/toolkit'
// Interfaces
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IMovieStore } from 'interfaces/IMovieStore'
import type { RootState } from 'stores/Store'

// Initial State
const initialState: IMovieStore = {
  menuActive: '/',
}

export const MovieSlice = createSlice({
  name: 'movie',

  initialState,

  reducers: {
    setMenuActive: (state, action: PayloadAction<string>) => {
      state.menuActive = action.payload
    },
  },
})

// Export actions
export const { setMenuActive } = MovieSlice.actions

// Export state
export const getMenuActive = (state: RootState) => state.counter.menuActive

export default MovieSlice.reducer
