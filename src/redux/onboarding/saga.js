import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
import { CREATE_DOMAIN, VERIFY_EMAIL, RESEND_CODE, FIND_COMPANY, LOGIN_USER } from 'Constants/actionTypes';

import { createDomainSuccess, verifyEmailSuccess, resendCodeSuccess, loginUserSuccess } from './actions';

const BASE_API_URL = 'https://api.uniquecoop.com';
// Connect to create domain api
const createDomainAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/createDomain`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to verify email api
const verifyEmailAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/verifyEmail`, data, {
			headers: {
				'Content-Type': 'text/plain',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to resend code api
const resendCodeAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/resendCode`, data, {
			headers: {
				'Content-Type': 'text/plain',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to find company api
const findCompanyAsync = async (data) =>
	await axios.get(`${BASE_API_URL}/find/${data}`).then((res) => res.data).catch((err) => err);

// Connect to login user api
const loginUserAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/login`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

function* createDomain({ payload }){
	const { domainName, organisationName, address, mobile, email, password, logo } = payload.user;
	const { history } = payload;
	const data = {
		domainName,
		organisationName,
		address,
		mobile,
		email,
		password,
		logo,
	};
	let query = qs.stringify(data);
	// console.log(query);
	try {
		const registerDomain = yield call(createDomainAsync, query);
		// console.log(registerDomain);
		if (registerDomain.status == true) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(createDomainSuccess(registerDomain));
			history.push('/');
		} else {
			// catch throw
			alert(registerDomain.message);
			console.log('create failed :', registerDomain.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* verifyEmail({ payload }){
	const { method, param } = payload.user;
	const { history } = payload;
	const data = {
		method,
		param,
	};
	try {
		const response = yield call(verifyEmailAsync, data);
		console.log(response);
		if (!response.message) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(verifyEmailSuccess(response));
			history.push('/');
		} else {
			// catch throw
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		console.log('create error : ', error);
	}
}

function* resendCode({ payload }){
	const { domain } = payload.user;
	const { history } = payload;
	const data = domain;
	try {
		const response = yield call(resendCodeAsync, data);
		console.log(response);
		if (!response.message) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(resendCodeSuccess(response));
			history.push('/');
		} else {
			// catch throw
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		console.log('create error : ', error);
	}
}

function* findCompany({ payload }){
	const { method, param } = payload.user;
	const { history } = payload;
	const data = {
		method,
		param,
	};
	try {
		const response = yield call(findCompanyAsync, data);
		console.log(response);
		if (!response.message) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(findCompanySuccess(response));
			history.push('/');
		} else {
			// catch throw
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		console.log('create error : ', error);
	}
}

function* loginUser({ payload }){
	const { email, password, companykey } = payload.user;
	const { history } = payload;
	const data = {
		email,
		password,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(loginUserAsync, query);
		// console.log(response);
		if (response.status) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(loginUserSuccess(response.data));
			history.push('/');
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(errors);
		console.log('create error : ', error);
	}
}

export function* watchCreateDomain(){
	yield takeEvery(CREATE_DOMAIN, createDomain);
}

export function* watchVerifyEmail(){
	yield takeEvery(VERIFY_EMAIL, verifyEmail);
}

export function* watchResendCode(){
	yield takeEvery(RESEND_CODE, resendCode);
}

export function* watchFindCompany(){
	yield takeEvery(FIND_COMPANY, findCompany);
}

export function* watchLoginUser(){
	yield takeEvery(LOGIN_USER, loginUser);
}

export default function* rootSaga(){
	yield all([
		fork(watchCreateDomain),
		fork(watchVerifyEmail),
		fork(watchResendCode),
		fork(watchFindCompany),
		fork(watchLoginUser),
	]);
}
