import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';

import { deleteBranchSuccess, editBranchSuccess, addBranchSuccess, getBranchSuccess } from './actions';
import { DELETE_BRANCH, EDIT_BRANCH, ADD_BRANCH, GET_BRANCH } from '../../constants/actionTypes';

const BASE_API_URL = 'https://api.uniquecoop.com';
// Connect to delete branch api
const deleteBranchAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/deletebranch`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to edit branch api
const editBranchAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/editbranch`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to add branch api
const addBranchAsync = async (data) =>
	await axios
		.post(`${BASE_API_URL}/addbranch`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((err) => err);

// Connect to get branch api
const getBranchAsync = async (data) =>
	await axios.get(`${BASE_API_URL}/getbranch/${data}`).then((res) => res.data).catch((err) => err);

function* deleteBranch({ payload }){
	const { user_id, branch_id, companykey } = payload.data;
	// const { history } = payload;
	const data = {
		user_id,
		branch_id,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(deleteBranchAsync, query);
		if (response.status === true) {
			yield put(deleteBranchSuccess(response.message));
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

function* editBranch({ payload }){
	const { user_id, id, companykey } = payload.data;
	// const { history } = payload;
	const data = {
		user_id,
		id,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(editBranchAsync, query);
		if (response.status === true) {
			yield put(editBranchSuccess(response.message));
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

function* addBranch({ payload }){
	const { branchname, address, mobile, companykey } = payload.data;
	// const { history } = payload;
	const data = {
		branchname,
		address,
		mobile,
		companykey,
	};
	let query = qs.stringify(data);
	try {
		const response = yield call(addBranchAsync, query);
		if (response.status === true) {
			yield put(addBranchSuccess(response.message));
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

function* getBranch({ payload }){
	const { companykey } = payload.data;
	// const { history } = payload;
	const data = {
		companykey,
	};
	try {
		const response = yield call(getBranchAsync, data.companykey);
		if (response.status === true) {
			yield put(getBranchSuccess(response));
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

export function* watchDeleteBranch(){
	yield takeEvery(DELETE_BRANCH, deleteBranch);
}

export function* watchEditBranch(){
	yield takeEvery(EDIT_BRANCH, editBranch);
}

export function* watchAddBranch(){
	yield takeEvery(ADD_BRANCH, addBranch);
}

export function* watchGetBranch(){
	yield takeEvery(GET_BRANCH, getBranch);
}

export default function* rootSaga(){
	yield all([ fork(watchDeleteBranch), fork(watchEditBranch), fork(watchAddBranch), fork(watchGetBranch) ]);
}
