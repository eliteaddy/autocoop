import API from '../../../util/API';
import qs from 'qs';

export const loginUserService = (request) => {
	console.log(request);
	return API.post('login', qs.stringify(request), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
};
