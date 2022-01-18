import dialogReducer, {
  add,
  hide
} from './dialogSlice';
  
describe('dialog reducer', () => {
  const initialState = {
    value: null
  };
  it('should handle initial state', () => {
    expect(dialogReducer(undefined, { type: 'unknown' })).toEqual({
      value: null
    });
  });
  it('should handle add', () => {
    const actual = dialogReducer(initialState, add("test dialogue"));
    
    expect(actual.value).toEqual("test dialogue");
  });
  it('should handle hide', () => {
    const actual = dialogReducer(initialState, hide());
    
    expect(actual.value).toEqual(null);
  });
});
  