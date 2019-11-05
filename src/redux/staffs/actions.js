import {
	REGISTER_STAFF,
	REGISTER_STAFF_SUCCESS,
	CHANGE_DEFAULT_PASSWORD,
	CHANGE_DEFAULT_PASSWORD_SUCCESS,
	VERIFY_USER_TOKEN,
	VERIFY_USER_TOKEN_SUCCESS,
	TOGGLE_ACTIVATE_STAFF,
	TOGGLE_ACTIVATE_STAFF_SUCCESS,
	GET_STAFF,
	GET_STAFF_SUCCESS,
	UPDATE_STAFF_PROFILE,
	UPDATE_STAFF_PROFILE_SUCCESS,
	CHANGE_PASSWORD,
	CHANGE_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';

export const registerStaff = (staff, history) => ({
	type: REGISTER_STAFF,
	payload: { staff, history },
});

export const registerStaffSuccess = (staff) => ({
	type: REGISTER_STAFF_SUCCESS,
	payload: staff,
});

export const changeDefaultPassword = (data, history) => ({
	type: CHANGE_DEFAULT_PASSWORD,
	payload: { data, history },
});

export const changeDefaultPasswordSuccess = (data) => ({
	type: CHANGE_DEFAULT_PASSWORD_SUCCESS,
	payload: data,
});

export const verifyUserToken = (data) => ({
	type: VERIFY_USER_TOKEN,
	payload: { data },
});

export const verifyUserTokenSuccess = (data) => ({
	type: VERIFY_USER_TOKEN_SUCCESS,
	payload: data,
});

export const toggleActivateStaff = (data) => ({
	type: TOGGLE_ACTIVATE_STAFF,
	payload: { data },
});

export const toggleActivateStaffSuccess = (data) => ({
	type: TOGGLE_ACTIVATE_STAFF_SUCCESS,
	payload: data,
});

export const getStaff = (staff, history) => ({
	type: GET_STAFF,
	payload: { staff, history },
});

export const getStaffSuccess = (staff) => ({
	type: GET_STAFF_SUCCESS,
	payload: staff,
});

export const updateStaffProfile = (data) => ({
	type: UPDATE_STAFF_PROFILE,
	payload: { data },
});

export const updateStaffProfileSuccess = (data) => ({
	type: UPDATE_STAFF_PROFILE_SUCCESS,
	payload: data,
});

export const changePassword = (data) => ({
	type: CHANGE_PASSWORD,
	payload: { data },
});

export const changePasswordSuccess = (data) => ({
	type: CHANGE_PASSWORD_SUCCESS,
	payload: data,
});
