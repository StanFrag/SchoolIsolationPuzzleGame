import clueReducer, {
    complete
  } from './clueSlice';
  
  describe('clue reducer', () => {
    const initialState = [
      {id: 0, value: null},
      {id: 1, value: null},
      {id: 2, value: null}
    ];
    it('should handle initial state', () => {
      expect(clueReducer(undefined, { type: 'unknown' })).toEqual([
        {id: 0, value: null},
        {id: 1, value: null},
        {id: 2, value: null}
      ]);
    });
    it('should handle complete', () => {
      const actual = clueReducer(initialState, complete({ id: 0, value: 42 }));
      
      expect(actual[0].value).toEqual(42);
      expect(actual[1].value).toEqual(null);
    });
  });
  