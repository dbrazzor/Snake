import React from 'react';

import { JssProvider } from 'react-jss';
import injectSheet from 'react-jss';

import styles from './app_styles';

const App = ({ classes }) => (
	<JssProvider classNamePrefix="Snake-">
		<div className={classes.root}>
			{'hey'}
		</div>
	</JssProvider>
);

export default injectSheet(styles)(App);
