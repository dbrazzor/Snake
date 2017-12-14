import {
	SAVE_GAME,
	SAVE_GAME_SUCCESS,
	GET_SCOREBOARD_STARTED,
	GET_SCOREBOARD_RECEIVED_DATA
} from '../actions/types';

const initialState = {
	isSaved: false,
	gamesPlayed: [],

	hasReceivedScoreboard: false,
	scoreboard: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
	case SAVE_GAME:
		return Object.assign({}, state, { isSaved: null });

	case SAVE_GAME_SUCCESS: {
		const newGamesPlayed = state.gamesPlayed;
		newGamesPlayed.push(action.gameId);
		return Object.assign({}, state, {
			isSaved: action.gameId,
			gamesPlayed: newGamesPlayed
		})
	}

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
