import unlockReducer, {
    addNumberToLock,
    reinitLock
  } from './unlockSlice';
  
  describe('unlock reducer', () => {
    const initialState = {
        code: ""
    };
    it('should handle initial state', () => {
      expect(unlockReducer(undefined, { type: 'unknown' })).toEqual({
        code: ""
      });
    });
    it('should handle add number to lock', () => {
      const actual = unlockReducer(initialState, addNumberToLock("2"));
      expect(actual.code).toEqual("2");
      const second = unlockReducer(actual, addNumberToLock("4"));
      expect(second.code).toEqual("24");
    });
    it('should handle reinit lock', () => {
        const actual = counterReducer(initialState, reinitLock());
        expect(actual.code).toEqual("");
      });
  });
  