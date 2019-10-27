import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/authService';

import * as types from '../actions';
import { loginUserSuccessAction } from '../actions/authActions';

export default function* loginSaga(payload){
	try {
		const response = yield call(loginUserService, payload.user);
		console.log(response);
		yield [ put(loginUserSuccessAction(response.data)) ];
	} catch (error) {
		yield put({ type: types.LOGIN_USER_ERROR, error });
	}
}
