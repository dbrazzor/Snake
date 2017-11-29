import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { JssProvider } from 'react-jss';
import injectSheet from 'react-jss';

import Snackbar from 'material-ui/Snackbar';

import Routes from '../../routes/routes';
import TopBar from '../top_bar/top_bar';

import { getScoreboard as getScoreboardAction } from '../../actions/game_actions';

import styles from './app_styles';

class App extends Component {
	componentDidMount() {
		this.props.getScoreboard();
	}

	render() {
		const { classes, isSaved } = this.props;
		return (
			<Router>
				<JssProvider classNamePrefix="Snake-">
					<div className={classes.root}>
						<TopBar />
						<Routes />
						<Snackbars isSaved={isSaved} />
					</div>
				</JssProvider>
			</Router>
		);
	}
}

const Snackbars = ({ isSaved }) => [
	(
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			open={isSaved}
			autoHideDuration={4000}
			message={<span>Score sauvegardé !</span>}
			key="isSaved_snackbar"
		/>
	)
];

const mapStateToProps = state => ({
	isSaved: state.game.isSaved
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getScoreboard: getScoreboardAction
}, dispatch);

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
