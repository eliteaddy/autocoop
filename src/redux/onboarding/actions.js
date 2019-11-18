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
} from '../../constants/actionTypes';

export const createDomain = (domain, history) => ({
	type: CREATE_DOMAIN,
	payload: { domain, history },
});

export const createDomainSuccess = (domain) => ({
	type: CREATE_DOMAIN_SUCCESS,
	payload: domain,
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

export const findCompany = (company, history) => ({
	type: FIND_COMPANY,
	payload: { company, history },
});

export const findCompanySuccess = (company) => ({
	type: FIND_COMPANY_SUCCESS,
	payload: company,
});

export const loginUser = (user, history) => ({
	type: LOGIN_USER,
	payload: { user, history },
});

export const loginUserSuccess = (user) => ({
	type: LOGIN_USER_SUCCESS,
	payload: user,
});

export const logoutUser = (history) => {
	localStorage.removeItem('user-item');
	return {
		type: LOGOUT_USER,
		payload: { history },
	};
};
