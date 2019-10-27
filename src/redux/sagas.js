import { all } from 'redux-saga/effects';
import loginSaga from './auth/saga/authSaga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';
import surveyListSagas from './surveyList/saga';
import surveyDetailSagas from './surveyDetail/saga';
import domainDetailSagas from './domain/saga';
import onBoarding from './onboarding/saga';

export default function* rootSaga(getState){
	yield all([
		loginSaga(),
		todoSagas(),
		chatSagas(),
		onBoarding(),
		surveyListSagas(),
		surveyDetailSagas(),
		domainDetailSagas(),
	]);
}
