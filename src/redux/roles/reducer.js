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

const INIT_STATE = {
	loading: false,
	message: null,
	data: {},
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case DELETE_BRANCH:
			return { ...state, loading: true };
		case DELETE_BRANCH_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case EDIT_BRANCH:
			return { ...state, loading: true };
		case EDIT_BRANCH_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case ADD_BRANCH:
			return { ...state, loading: true };
		case ADD_BRANCH_SUCCESS:
			return { ...state, loading: false, message: action.payload };
		case GET_BRANCH:
			return { ...state, loading: true };
		case GET_BRANCH_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		default:
			return { ...state };
	}
};
