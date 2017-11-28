import { firebaseDb, firebaseSdk } from '../firebase';

import {
	SAVE_GAME,
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
		username, score, gameData, date
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
