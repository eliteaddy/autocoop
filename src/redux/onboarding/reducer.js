import {
	CREATE_DOMAIN,
	CREATE_DOMAIN_SUCCESS,
	VERIFY_EMAIL_SUCCESS,
	VERIFY_EMAIL,
	RESEND_CODE,
	RESEND_CODE_SUCCESS,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
} from 'Constants/actionTypes';

const INIT_STATE = {
	user: {},
	loading: false,
	authed: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case CREATE_DOMAIN:
			return { ...state, loading: true };
		case CREATE_DOMAIN_SUCCESS:
			return { ...state, loading: false, authed: true, user: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true };
		case LOGIN_USER_SUCCESS:
			return { ...state, loading: false, authed: true, user: action.payload };
		case VERIFY_EMAIL:
			return { ...state, loading: true };
		case VERIFY_EMAIL_SUCCESS:
			return { ...state, loading: false };
		case RESEND_CODE:
			return { ...state, loading: true };
		case RESEND_CODE_SUCCESS:
			return { ...state, loading: false };
		default:
			return { ...state };
	}
};
