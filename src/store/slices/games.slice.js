import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesData: null,
  },
  reducers: {
    setGamesData: (state, action) => {
      state.gamesData = action.payload;
    },
  },
});

export const { setGamesData } = gamesSlice.actions;
export const selectGamesData = (state) => state.games.gamesData;

export default gamesSlice.reducer;