import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { JssProvider } from 'react-jss';
import injectSheet from 'react-jss';

import Routes from '../../routes/routes';
import TopBar from '../top_bar/top_bar';

import styles from './app_styles';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null
		}
	}

	render() {
		const { classes } = this.props;
		const { username } = this.state;

		return (
			<Router>
				<JssProvider classNamePrefix="Snake-">
					<div className={classes.root}>
						<TopBar />
						<Routes />
					</div>
				</JssProvider>
			</Router>
		);
	}
}

export default injectSheet(styles)(App);
