import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    apiKey: '',
  },
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
    },
  },
});

export const { setApiKey } = apiSlice.actions;
export const selectApiKey = (state) => state.api.apiKey;

export default apiSlice.reducer;