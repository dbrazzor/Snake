import { combineReducers } from 'redux';

import UserReducer from './user_reducer';
import GameReducer from './game_reducer';

export default combineReducers({
	user: UserReducer,
	game: GameReducer
});
