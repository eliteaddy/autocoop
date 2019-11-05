import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import rootReducer from './auth/reducers/';
import todoApp from './todo/reducer';
import chatApp from './chat/reducer';
import surveyListApp from './surveyList/reducer';
import surveyDetailApp from './surveyDetail/reducer';
import domainDetail from './domain/reducer';
import onBoarding from './onboarding/reducer';
import staffs from './staffs/reducer';
import roles from './roles/reducer';
import branch from './branch/reducer';

const reducers = combineReducers({
	menu,
	onBoarding,
	settings,
	rootReducer,
	todoApp,
	chatApp,
	surveyListApp,
	surveyDetailApp,
	domainDetail,
	staffs,
	roles,
	branch,
});

export default reducers;
