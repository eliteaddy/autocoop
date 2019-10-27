import * as types from './index';

export const loginUserAction = (user, history) => {
	return {
		type: types.LOGIN_USER,
		payload: { user, history },
	};
};

export const loginUserSuccessAction = (authUser) => {
	return {
		type: types.LOGIN_USER_SUCCESS,
		payload: { authUser },
	};
};
