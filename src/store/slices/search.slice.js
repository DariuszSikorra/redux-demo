import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload.toString()
    },
  },
});

export const { updateQuery, searchGames } = searchSlice.actions;
export const selectQuery = (state) => state.search.query;

export default searchSlice.reducer;