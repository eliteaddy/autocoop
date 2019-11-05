import {
	CREATE_DOMAIN,
	CREATE_DOMAIN_SUCCESS,
	VERIFY_EMAIL_SUCCESS,
	VERIFY_EMAIL,
	RESEND_CODE,
	RESEND_CODE_SUCCESS,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	FIND_COMPANY,
	FIND_COMPANY_SUCCESS,
} from 'Constants/actionTypes';

const INIT_STATE = {
	user: {},
	domain: null,
	company: {},
	loading: false,
	authed: false,
	data: {},
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case CREATE_DOMAIN:
			return { ...state, loading: true };
		case CREATE_DOMAIN_SUCCESS:
			return { ...state, loading: false, domain: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true };
		case LOGIN_USER_SUCCESS:
			return { ...state, loading: false, authed: true, user: action.payload };
		case VERIFY_EMAIL:
			return { ...state, loading: true };
		case VERIFY_EMAIL_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case RESEND_CODE:
			return { ...state, loading: true };
		case RESEND_CODE_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case FIND_COMPANY:
			return { ...state, loading: true };
		case FIND_COMPANY_SUCCESS:
			return { ...state, loading: false, company: action.payload };
		default:
			return { ...state };
	}
};
