import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: true,
    type: "intro"
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    showModal: (state, action) => {
      return {
        ...state,
        show: true,
        type: action.payload
      }
    },
    hideModal: (state) => {
      return {
        ...state,
        show: false,
        type: null
      }
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
