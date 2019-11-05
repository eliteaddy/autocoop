import { all } from 'redux-saga/effects';
import loginSaga from './auth/saga/authSaga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';
import surveyListSagas from './surveyList/saga';
import surveyDetailSagas from './surveyDetail/saga';
import domainDetailSagas from './domain/saga';
import onBoardingSagas from './onboarding/saga';
import staffsSagas from './staffs/saga';
import rolesSagas from './roles/saga';
import branchSagas from './branch/saga';

export default function* rootSaga(getState){
	yield all([
		loginSaga(),
		todoSagas(),
		chatSagas(),
		onBoardingSagas(),
		surveyListSagas(),
		surveyDetailSagas(),
		domainDetailSagas(),
		staffsSagas(),
		branchSagas(),
		rolesSagas(),
	]);
}
