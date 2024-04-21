// action - state management


//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const cart = {

}

const accountReducer = (state=cart, action) => {
    switch (action.type) {
        case 'Add': {
            const { isLoggedIn, user } = action.payload;
            return {
                ...state,
            };
        }
        case "REMOVE": {
            const { user } = action.payload;
            return {
                ...state,
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default accountReducer;
