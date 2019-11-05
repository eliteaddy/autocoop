import {
	DELETE_BRANCH,
	DELETE_BRANCH_SUCCESS,
	EDIT_BRANCH,
	EDIT_BRANCH_SUCCESS,
	ADD_BRANCH,
	ADD_BRANCH_SUCCESS,
	GET_BRANCH,
	GET_BRANCH_SUCCESS,
} from '../../constants/actionTypes';

export const deleteBranch = (data, history) => ({
	type: DELETE_BRANCH,
	payload: { data, history },
});

export const deleteBranchSuccess = (data) => ({
	type: DELETE_BRANCH_SUCCESS,
	payload: data,
});

export const editBranch = (data, history) => ({
	type: EDIT_BRANCH,
	payload: { data, history },
});

export const editBranchSuccess = (data) => ({
	type: EDIT_BRANCH_SUCCESS,
	payload: data,
});

export const addBranch = (data, history) => ({
	type: ADD_BRANCH,
	payload: { data, history },
});

export const addBranchSuccess = (data) => ({
	type: ADD_BRANCH_SUCCESS,
	payload: data,
});

export const getBranch = (data, history) => ({
	type: GET_BRANCH,
	payload: { data, history },
});

export const getBranchSuccess = (data) => ({
	type: GET_BRANCH_SUCCESS,
	payload: data,
});
