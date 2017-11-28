import {
	SET_USERNAME
} from '../actions/types';

const initialState = {
	username: 'Username'
}

export default (state = initialState, action) => {
	switch (action.type) {
	case SET_USERNAME: return Object.assign({}, state, { username: action.username });

	default: return state;
	}
};
