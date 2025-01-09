const initialState = {
    items: []
}

const assortment = (state = initialState, action) => {
    if (action.type === 'SET_ASSORTMENT') {
        return {
            ...state,
            items: action.payload,
        };
    };
    return state;
};

export default assortment;