import {
	SET_USERNAME
} from './types';

export const setUsername = (username) => dispatch => dispatch({
	type: SET_USERNAME,
	username
});
