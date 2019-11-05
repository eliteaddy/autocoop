import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
import {
	CHANGE_DEFAULT_PASSWORD,
	REGISTER_STAFF,
	VERIFY_USER_TOKEN,
	TOGGLE_ACTIVATE_STAFF,
	GET_STAFF,
	UPDATE_STAFF_PROFILE,
	CHANGE_PASSWORD,
} from '../../constants/actionTypes';

import {
	registerStaffSuccess,
	changeDefaultPasswordSuccess,
	verifyUserTokenSuccess,
	toggleActivateStaffSuccess,
	getStaffSuccess,
	updateStaffProfileSuccess,
	changePasswordSuccess,
} from './actions';

const BASE_API_URL = 'https://api.uniquecoop.com';
// Connect to register staff api
const registerStaffAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/registerStaff`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to Change Default Password api
const changeDefaultPasswordAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/changeDefaultPassword`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

//Connect to Verify user token api
const verifyUserTokenAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/verifyusertoken`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to toggle activate staff
const toggleActivateStaffAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/toggleactivateStaff`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to get staff api
const getStaffAsync = async (data) =>
	await axios.get(`${BASE_API_URL}/getstaff/${data}`).then((res) => res.data).catch((err) => err);

// Connect to update staff profile api
const updateStaffProfileAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/updateStaffProfile`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to Change Password api
const changePasswordAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/changepassword`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

function* registerStaff({ payload }){
	const {
		firstname,
		lastname,
		middlename,
		mobile,
		gender,
		dob,
		role_id,
		country,
		state,
		picture,
		outlet,
		address,
		send_Sms,
		email,
		companykey,
	} = payload.staff;
	const { history } = payload;
	const data = {
		firstname,
		lastname,
		middlename,
		mobile,
		gender,
		dob,
		role_id,
		country,
		state,
		picture,
		outlet,
		address,
		send_Sms,
		email,
		companykey,
	};
	let query = qs.stringify(data);
	// console.log(query);
	try {
		const response = yield call(registerStaffAsync, query);
		// console.log(registerDomain);
		if (response.status === true) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(registerStaffSuccess(response));
			history.push('/');
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* changeDefaultPassword({ payload }){
	const { token, password, confirmpassword, companykey } = payload.data;
	// const { history } = payload;
	const data = {
		token,
		password,
		confirmpassword,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(changeDefaultPasswordAsync, query);
		console.log(response);
		if (response.status === true) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(changeDefaultPasswordSuccess(response.message));
			alert('Password changed successfully');
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* verifyUserToken({ payload }){
	const { token, method, companykey } = payload.data;
	// const { history } = payload;
	const data = {
		token,
		method,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(verifyUserTokenAsync, query);
		console.log(response);
		if (response.status === true) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(verifyUserTokenSuccess(response.message));
			alert(response.message);
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* toggleActivateStaff({ payload }){
	const { companykey, staff_mail, action, user_id } = payload.data;
	// const { history } = payload;
	const data = {
		companykey,
		staff_mail,
		action,
		user_id,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(toggleActivateStaffAsync, query);
		console.log(response);
		if (response.status === true) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(toggleActivateStaffSuccess(response.message));
			alert(response.message);
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* getStaff({ payload }){
	const { companykey } = payload.staff;
	const { history } = payload;
	const data = companykey;
	// console.log(query);
	try {
		const response = yield call(getStaffAsync, data);
		if (response.status === true) {
			yield put(getStaffSuccess(response));
			history.push('/');
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* updateStaffProfile({ payload }){
	const {
		firstname,
		lastname,
		middlename,
		mobile,
		gender,
		dob,
		role_id,
		country,
		state,
		picture,
		address,
		send_Sms,
		companykey,
	} = payload.data;
	// const { history } = payload;
	const data = {
		firstname,
		lastname,
		middlename,
		mobile,
		gender,
		dob,
		role_id,
		country,
		state,
		picture,
		address,
		send_Sms,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(updateStaffProfileAsync, query);
		console.log(response);
		if (response.status === true) {
			// localStorage.setItem('user_id', loginUser.user.uid);
			yield put(updateStaffProfileSuccess(response.message));
			alert(response.message);
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

function* changePassword({ payload }){
	const { password, confirmpassword, previouspassword, companykey, user_id } = payload.data;
	// const { history } = payload;
	const data = {
		password,
		confirmpassword,
		previouspassword,
		companykey,
		user_id,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(changePasswordAsync, query);
		console.log(response);
		if (response.status === true) {
			yield put(changePasswordSuccess(response.message));
			alert('Password changed successfully');
		} else {
			// catch throw
			alert(response.message);
			console.log('create failed :', response.message);
		}
	} catch (error) {
		// catch throw
		alert(error);
		console.log('create error : ', error);
	}
}

export function* watchRegisterStaff(){
	yield takeEvery(REGISTER_STAFF, registerStaff);
}

export function* watchChangeDefaultPassword(){
	yield takeEvery(CHANGE_DEFAULT_PASSWORD, changeDefaultPassword);
}

export function* watchVerifyUserToken(){
	yield takeEvery(VERIFY_USER_TOKEN, verifyUserToken);
}

export function* watchToggleActivateStaff(){
	yield takeEvery(TOGGLE_ACTIVATE_STAFF, toggleActivateStaff);
}

export function* watchGetStaff(){
	yield takeEvery(GET_STAFF, getStaff);
}

export function* watchUpdateStaffProfile(){
	yield takeEvery(UPDATE_STAFF_PROFILE, updateStaffProfile);
}

export function* watchChangePassword(){
	yield takeEvery(CHANGE_PASSWORD, changePassword);
}

export default function* rootSaga(){
	yield all([
		fork(watchRegisterStaff),
		fork(watchChangeDefaultPassword),
		fork(watchVerifyUserToken),
		fork(watchToggleActivateStaff),
		fork(watchGetStaff),
		fork(watchUpdateStaffProfile),
		fork(watchChangePassword),
	]);
}
