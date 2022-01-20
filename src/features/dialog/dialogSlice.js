import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        value: action.payload
      }
    },
    hide: (state) => {
      return {
        ...state,
        value: null
      }
    }
  }
});

export const { add, hide } = dialogSlice.actions;

export default dialogSlice.reducer;
