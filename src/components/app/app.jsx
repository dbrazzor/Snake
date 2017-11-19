import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { JssProvider } from 'react-jss';
import injectSheet from 'react-jss';

import Routes from '../../routes/routes';
import TopBar from '../top_bar/top_bar';

import styles from './app_styles';

const App = ({ classes }) => (
	<Router>
		<JssProvider classNamePrefix="Snake-">
			<div className={classes.root}>
				<TopBar />
				<Routes />
			</div>
		</JssProvider>
	</Router>
)

export default injectSheet(styles)(App);
