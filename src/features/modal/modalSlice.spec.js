import modalReducer, {
    showModal,
    hideModal
} from './modalSlice';
    
describe('modal reducer', () => {
    const initialState = {
        show: true,
        type: "intro"
    };
    it('should handle initial state', () => {
        expect(modalReducer(undefined, { type: 'unknown' })).toEqual({
            modal: true,
            type: "intro"
        });
    });
    it('should handle show modal', () => {
        const actual = modalReducer(initialState, showModal("unlock-box"));
        expect(actual.show).toEqual(true);
        expect(actual.type).toEqual("unlock-box");
    });
    it('should handle hide modal', () => {
        const actual = modalReducer(initialState, hideModal());
        expect(actual.show).toEqual(false);
        expect(actual.type).toEqual(null);
    });
});
    