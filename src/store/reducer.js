import { combineReducers } from 'redux';

// reducer import
import accountReducer from './cardReducer';

//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
  cart : accountReducer
});

export default reducer;
