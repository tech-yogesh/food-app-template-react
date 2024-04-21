

const cart = [

]

const accountReducer = (state=cart, action) => {
    switch (action.type) {
        case 'ADD': {
            return [
                action.data,
                ...state,
            ];
        }
        case "REMOVE": {
            const arr = state.filter(item=>item.id !== action.data.id)
            return [
                ...arr,
                ...state,
            ];
        }
        default: {
            return [ ...state ];
        }
    }
};

export default accountReducer;
