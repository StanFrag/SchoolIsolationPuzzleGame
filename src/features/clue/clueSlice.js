import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: 0, value: null},
  {id: 1, value: null},
  {id: 2, value: null}
];

export const clueSlice = createSlice({
  name: 'clue',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    complete: (state, action) => {
      const { id, value } = action.payload;
      const existingClue = state.find(clue => clue.id === id);
      if (existingClue) {
          existingClue.value = value;
      }
    }
  }
});

export const getClues = state => state.clue;

export const { complete } = clueSlice.actions;

export default clueSlice.reducer;
