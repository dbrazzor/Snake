import React from 'react';

import {
	Route
} from 'react-router-dom';

import SnakeView from '../components/snake_view/snake_view';
import ScoresView from '../components/scores_view/scores_view';

const Routes = () => (
	<div id="routes-container">
		<Route
			exact
			path="/"
			component={SnakeView}
		/>
		<Route
			path="/scores"
			component={ScoresView}
		/>
	</div>
);

export default Routes;
