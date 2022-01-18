import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import clueReducer from '../features/clue/clueSlice';
import dialogReducer from '../features/dialog/dialogSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clue: clueReducer,
    dialog: dialogReducer
  },
});