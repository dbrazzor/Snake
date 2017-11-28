import {
	GET_SCOREBOARD_STARTED,
	GET_SCOREBOARD_RECEIVED_DATA
} from '../actions/types';

const initialState = {
	hasReceivedScoreboard: false,
	scoreboard: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
	case GET_SCOREBOARD_STARTED:
		return Object.assign({}, state, { hasReceivedScoreboard: null });

	case GET_SCOREBOARD_RECEIVED_DATA:
		return Object.assign({}, state, {
			hasReceivedScoreboard: true,
			scoreboard: action.scoreboard
		});

	default: return state;
	}
};
