import { put, takeEvery, call, all, fork } from 'redux-saga/effects';
import API from '../../util/API';

import {
	DOMAIN_GET_DETAIL,
	DOMAIN_GET_DETAIL_SUCCESS,
	DOMAIN_GET_DETAIL_ERROR,
	DOMAIN_SAVE,
} from '../../constants/actionTypes';

import { getDomainDetailError, getDomainDetailSuccess, getDomainDetail, saveDomain } from './actions';

const getDomainDetailRequest = async (domain) => {
	domain = API.get('findCompany/' + domain);
	return await new Promise((success, fail) => {
		success(domain);
	})
		.then((response) => response)
		.catch((error) => error);
};

function* getDomainDetailItem({ payload }){
	try {
		const { domain } = payload;
		const response = yield call(getDomainDetailRequest, domain);
		yield put(saveDomain(response.data));
	} catch (error) {
		yield put(getDomainDetailError(error));
	}
}

export function* watchGetDetail(){
	yield takeEvery(DOMAIN_GET_DETAIL, getDomainDetailItem);
}

export default function* rootSaga(){
	yield all([ fork(watchGetDetail) ]);
}
