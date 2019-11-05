import {
	REGISTER_STAFF,
	REGISTER_STAFF_SUCCESS,
	CHANGE_DEFAULT_PASSWORD,
	CHANGE_DEFAULT_PASSWORD_SUCCESS,
	VERIFY_USER_TOKEN,
	VERIFY_USER_TOKEN_SUCCESS,
	TOGGLE_ACTIVATE_STAFF_SUCCESS,
	TOGGLE_ACTIVATE_STAFF,
	GET_STAFF,
	GET_STAFF_SUCCESS,
	UPDATE_STAFF_PROFILE,
	UPDATE_STAFF_PROFILE_SUCCESS,
	CHANGE_PASSWORD,
	CHANGE_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';

const INIT_STATE = {
	staff: {},
	message: null,
	loading: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case REGISTER_STAFF:
			return { ...state, loading: true };
		case REGISTER_STAFF_SUCCESS:
			return { ...state, loading: false, staff: action.payload };
		case CHANGE_DEFAULT_PASSWORD:
			return { ...state, loading: true };
		case CHANGE_DEFAULT_PASSWORD_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case VERIFY_USER_TOKEN:
			return { ...state, loading: true };
		case VERIFY_USER_TOKEN_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case TOGGLE_ACTIVATE_STAFF:
			return { ...state, loading: true };
		case TOGGLE_ACTIVATE_STAFF_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case GET_STAFF:
			return { ...state, loading: true };
		case GET_STAFF_SUCCESS:
			return { ...state, loading: false, staff: action.payload };
		case UPDATE_STAFF_PROFILE:
			return { ...state, loading: true };
		case UPDATE_STAFF_PROFILE_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case CHANGE_PASSWORD:
			return { ...state, loading: true };
		case CHANGE_PASSWORD_SUCCESS:
			return { ...state, loading: false, massage: action.payload };
		default:
			return { ...state };
	}
};
