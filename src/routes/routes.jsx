import React from 'react';

import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import SnakeView from '../components/snake_view/snake_view';
import ScoresView from '../components/scores_view/scores_view';

const Routes = () => (
	<Switch>
		<Route
			exact
			path="/"
			component={SnakeView}
		/>
		<Route
			path="/scores"
			component={ScoresView}
		/>
		<Redirect
			from="*"
			to="/"
		/>
	</Switch>
);

export default Routes;
