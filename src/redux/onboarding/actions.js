import {
	CREATE_DOMAIN,
	CREATE_DOMAIN_SUCCESS,
	VERIFY_EMAIL,
	VERIFY_EMAIL_SUCCESS,
	RESEND_CODE,
	RESEND_CODE_SUCCESS,
	FIND_COMPANY,
	FIND_COMPANY_SUCCESS,
	LOGIN_USER,
	LOGOUT_USER,
	LOGIN_USER_SUCCESS,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
} from '../../constants/actionTypes';

export const createDomain = (user, history) => ({
	type: CREATE_DOMAIN,
	payload: { user, history },
});

export const createDomainSuccess = (user) => ({
	type: CREATE_DOMAIN_SUCCESS,
	payload: user,
});

export const verifyEmail = (data, history) => ({
	type: VERIFY_EMAIL,
	payload: { data, history },
});

export const verifyEmailSuccess = (data) => ({
	type: VERIFY_EMAIL_SUCCESS,
	payload: data,
});

export const resendCode = (data, history) => ({
	type: RESEND_CODE,
	payload: { data, history },
});

export const resendCodeSuccess = (data) => ({
	type: RESEND_CODE_SUCCESS,
	payload: data,
});

export const findCompany = (data, history) => ({
	type: FIND_COMPANY,
	payload: { data, history },
});

export const findCompanySuccess = (data) => ({
	type: FIND_COMPANY_SUCCESS,
	payload: data,
});

export const loginUser = (user, history) => ({
	type: LOGIN_USER,
	payload: { user, history },
});

export const loginUserSuccess = (user) => ({
	type: LOGIN_USER_SUCCESS,
	payload: user,
});

export const registerUser = (user, history) => ({
	type: REGISTER_USER,
	payload: { user, history },
});
export const registerUserSuccess = (user) => ({
	type: REGISTER_USER_SUCCESS,
	payload: user,
});

export const logoutUser = (history) => ({
	type: LOGOUT_USER,
	payload: { history },
});
