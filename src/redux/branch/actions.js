import {
	DELETE_ROLE,
	DELETE_ROLE_SUCCESS,
	EDIT_ROLE,
	EDIT_ROLE_SUCCESS,
	ADD_ROLE,
	ADD_ROLE_SUCCESS,
	GET_ROLE,
	GET_ROLE_SUCCESS,
} from '../../constants/actionTypes';

export const deleteRole = (data, history) => ({
	type: DELETE_ROLE,
	payload: { data, history },
});

export const deleteRoleSuccess = (data) => ({
	type: DELETE_ROLE_SUCCESS,
	payload: data,
});

export const editRole = (data, history) => ({
	type: EDIT_ROLE,
	payload: { data, history },
});

export const editRoleSuccess = (data) => ({
	type: EDIT_ROLE_SUCCESS,
	payload: data,
});

export const addRole = (data, history) => ({
	type: ADD_ROLE,
	payload: { data, history },
});

export const addRoleSuccess = (data) => ({
	type: ADD_ROLE_SUCCESS,
	payload: data,
});

export const getRole = (data, history) => ({
	type: GET_ROLE,
	payload: { data, history },
});

export const getRoleSuccess = (data) => ({
	type: GET_ROLE_SUCCESS,
	payload: data,
});
