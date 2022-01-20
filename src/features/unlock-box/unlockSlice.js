import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: ""
};

export const unlockSlice = createSlice({
  name: 'unlock',
  initialState,
  reducers: {
    addNumberToLock: (state, action) => {
      state.code += action.payload;
    },
    reinitLock: (state) => {
        return {
            ...state,
            code: ""
        }
    }
  }
});

export const getLockCode = (state) => state.unlock.code;

export const { addNumberToLock, reinitLock } = unlockSlice.actions;

export default unlockSlice.reducer;
