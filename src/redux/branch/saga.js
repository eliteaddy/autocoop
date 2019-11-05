import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';

import { deleteRoleSuccess, editRoleSuccess, addRoleSuccess, getRoleSuccess } from './actions';
import { DELETE_ROLE, EDIT_ROLE, ADD_ROLE, GET_ROLE } from '../../constants/actionTypes';

const BASE_API_URL = 'https://api.uniquecoop.com';
// Connect to delete role api
const deleteRoleAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/deleterole`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to edit role api
const editRoleAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/editrole`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to add role api
const addRoleAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/addrole`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to get role api
const getRoleAsync = async (data) =>
	await axios.get(`${BASE_API_URL}/getrole/${data}`).then((res) => res.data).catch((err) => err);

function* deleteRole({ payload }){
	const { user_id, permissions, role_id, companykey, rolename } = payload.data;
	// const { history } = payload;
	const data = {
		user_id,
		permissions,
		role_id,
		companykey,
		rolename,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(deleteRoleAsync, query);
		if (response.status === true) {
			yield put(deleteRoleSuccess(response.message));
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

function* editRole({ payload }){
	const { user_id, permissions, role_id, companykey, rolename } = payload.data;
	// const { history } = payload;
	const data = {
		user_id,
		permissions,
		role_id,
		companykey,
		rolename,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(editRoleAsync, query);
		if (response.status === true) {
			yield put(editRoleSuccess(response.message));
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

function* addRole({ payload }){
	const { user_id, permissions, role_id, companykey, rolename } = payload.data;
	// const { history } = payload;
	const data = {
		user_id,
		permissions,
		role_id,
		companykey,
		rolename,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(addRoleAsync, query);
		if (response.status === true) {
			yield put(addRoleSuccess(response.message));
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

function* getRole({ payload }){
	const { companykey } = payload.data;
	// const { history } = payload;
	const data = {
		companykey,
	};
	try {
		const response = yield call(getRoleAsync, data.companykey);
		if (response.status === true) {
			yield put(getRoleSuccess(response));
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

export function* watchDeleteRole(){
	yield takeEvery(DELETE_ROLE, deleteRole);
}

export function* watchEditRole(){
	yield takeEvery(EDIT_ROLE, editRole);
}

export function* watchAddRole(){
	yield takeEvery(ADD_ROLE, addRole);
}

export function* watchGetRole(){
	yield takeEvery(GET_ROLE, getRole);
}

export default function* rootSaga(){
	yield all([ fork(watchDeleteRole), fork(watchEditRole), fork(watchAddRole), fork(watchGetRole) ]);
}
