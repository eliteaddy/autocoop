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

const INIT_STATE = {
	loading: false,
	message: null,
	data: {},
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case DELETE_ROLE:
			return { ...state, loading: true };
		case DELETE_ROLE_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case EDIT_ROLE:
			return { ...state, loading: true };
		case EDIT_ROLE_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case ADD_ROLE:
			return { ...state, loading: true };
		case ADD_ROLE_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case GET_ROLE:
			return { ...state, loading: true };
		case GET_ROLE_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		default:
			return { ...state };
	}
};
