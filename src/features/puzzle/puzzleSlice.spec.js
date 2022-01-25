import puzzleReducer, {
    dropPiece
  } from './puzzleSlice';
  
  describe('puzzle reducer', () => {
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
    it('should handle initial state', () => {
      expect(puzzleReducer(undefined, { type: 'unknown' })).toEqual({
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
        });
    });
    it('should handle drop piece', () => {
      const actual = puzzleReducer(initialState, dropPiece({id: 2, ref: "1"}));
      expect(actual.dropped[3].id).toEqual(2);
      expect(actual.dropped[3].ref).toEqual("1");

      const second = puzzleReducer(actual, dropPiece({id: 1, ref: "1"}));
      expect(second.dropped[3].id).toEqual(2);
      expect(second.dropped[3].ref).toEqual(null);
      expect(second.dropped[2].id).toEqual(1);
      expect(second.dropped[2].ref).toEqual("1");
    });
  });
  