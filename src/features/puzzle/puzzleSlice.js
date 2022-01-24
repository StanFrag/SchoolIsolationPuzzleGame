import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dropped: [
        {id: 0, ref: null},
        {id: 1, ref: null},
        {id: 2, ref: null},
        {id: 3, ref: null},
        {id: 4, ref: null},
        {id: 5, ref: null},
        {id: 6, ref: null},
        {id: 7, ref: null},
        {id: 8, ref: null},
    ]
};

export const puzzleSlice = createSlice({
  name: 'puzzle',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    dropPiece: (state, action) => {
        const { id, ref } = action.payload;
        return {
            ...state,
            dropped: state.dropped.map( (dropElement) => {
                if(dropElement.id === id) {
                    return { ...dropElement, ref: ref };
                }else if(dropElement.ref === ref) {
                    return { ...dropElement, ref: null };
                } else {
                    return dropElement;
                }
            })
        }
    }
  }
});

export const getDropped = state => state.puzzle.dropped;

export const { dropPiece } = puzzleSlice.actions;

export default puzzleSlice.reducer;