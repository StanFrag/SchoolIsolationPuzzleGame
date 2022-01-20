import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import clueReducer from '../features/clue/clueSlice';
import dialogReducer from '../features/dialog/dialogSlice';
import modalReducer from '../features/modal/modalSlice';
import unlockReducer from '../features/unlock-box/unlockSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clue: clueReducer,
    dialog: dialogReducer,
    modal: modalReducer,
    unlock: unlockReducer
  },
});