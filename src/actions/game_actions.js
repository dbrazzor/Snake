import { firebaseDb, firebaseSdk } from '../firebase';

import {
	SAVE_GAME,
	SAVE_GAME_SUCCESS,
	GET_SCOREBOARD_STARTED,
	GET_SCOREBOARD_RECEIVED_DATA
} from './types';

export const saveGame = (username = 'Username', score, gameData) => (dispatch) => {
	dispatch({
		type: SAVE_GAME
	});
	const { key } = firebaseDb.ref().push();
	const date = firebaseSdk.database.ServerValue.TIMESTAMP;
	firebaseDb.ref(`/games/${key}`).set({
		id: key,
		username,
		score,
		gameData,
		date
	}).then(() => {
		dispatch({
			type: SAVE_GAME_SUCCESS,
			gameId: key
		});
	});
}

export const getScoreboard = () => (dispatch) => {
	dispatch({
		type: GET_SCOREBOARD_STARTED
	});
	firebaseDb.ref('/small_games/').on('value', (snapshot) => {
		if (snapshot) {
			dispatch({
				type: GET_SCOREBOARD_RECEIVED_DATA,
				scoreboard: snapshot.val()
			})
		}
	});
}
