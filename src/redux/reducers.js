import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import rootReducer from './auth/reducers/';
import todoApp from './todo/reducer';
import chatApp from './chat/reducer';
import surveyListApp from './surveyList/reducer';
import surveyDetailApp from './surveyDetail/reducer';
import domainDetail from './domain/reducer';
import authUser from './onboarding/reducer';

const reducers = combineReducers({
	menu,
	authUser,
	settings,
	rootReducer,
	todoApp,
	chatApp,
	surveyListApp,
	surveyDetailApp,
	domainDetail,
});

export default reducers;
