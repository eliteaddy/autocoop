import { combineReducers } from 'redux';
import authUser from './loginReducer';

const rootReducer = combineReducers({
	authUser,
});

export default rootReducer;
