import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { JssProvider } from 'react-jss';
import injectSheet from 'react-jss';

import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui-icons/Done';
import CloseIcon from 'material-ui-icons/Close';

import Routes from '../../routes/routes';
import TopBar from '../top_bar/top_bar';

import { getScoreboard as getScoreboardAction } from '../../actions/game_actions';

import styles from './app_styles';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saveSnackbar: {
				open: false,
				isSaved: false
			},
			userPlayedSnackbar: {
				open: false,
				user: null,
				score: null
			}
		}
	}
	componentDidMount() {
		this.props.getScoreboard();
	}

	componentWillReceiveProps(nextProps) {
		this.checkSaveState(nextProps.isSaved);
		this.checkUserPlayed(nextProps.scoreboard);
	}

	checkSaveState = (isSaved) => {
		if (isSaved !== this.props.isSaved) {
			if (isSaved || isSaved === null) {
				this.setState({
					saveSnackbar: {
						open: true,
						isSaved
					}
				});
			}
		}
	}

	checkUserPlayed = (scoreboard) => {
		const oldScoreboard = this.props.scoreboard;
		if (!oldScoreboard || Object.keys(oldScoreboard).length < 1) return false;
		if (scoreboard !== oldScoreboard) {
			const scoreboardKeys = Object.keys(scoreboard);
			if (scoreboardKeys.length > Object.keys(oldScoreboard).length) {
				const sortedScoreboard = scoreboardKeys.sort((a, b) => a.date - b.date);
				const lastScoreId = sortedScoreboard[1];
				const lastScore = scoreboard[lastScoreId];
				if (this.checkInGamePlayed(lastScoreId)) return false;
				this.setState({
					userPlayedSnackbar: {
						open: true,
						user: lastScore.username,
						score: lastScore.score
					}
				});
			}
		}
		return true;
	}

	checkInGamePlayed = (id) => {
		const { gamesPlayed } = this.props;
		if (!gamesPlayed) return false;
		return gamesPlayed.some(gameId => gameId === id);
	}

	closeSaveSnackbar = () => {
		const { saveSnackbar } = this.state;
		this.setState({
			saveSnackbar: Object.assign({}, saveSnackbar, { open: false })
		});
	}

	closeUserPlayedSnackbar = () => {
		const { userPlayedSnakbar } = this.state;
		this.setState({
			userPlayedSnackbar: Object.assign({}, userPlayedSnakbar, { open: false })
		})
	}

	render() {
		const { classes } = this.props;
		const { saveSnackbar, userPlayedSnackbar } = this.state;
		return (
			<Router>
				<JssProvider classNamePrefix="Snake-">
					<div className={classes.root}>
						<TopBar />
						<Routes />
						<SaveSnackbar
							open={saveSnackbar.open}
							isSaved={saveSnackbar.isSaved}
							closeSnackbar={this.closeSaveSnackbar}
							classes={classes}
						/>
						<UserPlayedSnackbar
							open={userPlayedSnackbar.open}
							user={userPlayedSnackbar.user}
							score={userPlayedSnackbar.score}
							closeSnackbar={this.closeUserPlayedSnackbar}
							classes={classes}
						/>
					</div>
				</JssProvider>
			</Router>
		);
	}
}

const SaveSnackbar = ({
	open,
	isSaved,
	closeSnackbar,
	classes
}) => (
	<Snackbar
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right'
		}}
		open={open}
		autoHideDuration={4000}
		onRequestClose={closeSnackbar}
		message={
			isSaved
				? <SaveDone />
				: <SaveInProgress />
		}
		action={isSaved && [
			<IconButton
				key="save_snackbar_done_icon"
				color="inherit"
				className={classes.snackbarIconButton}
				onClick={closeSnackbar}
			>
				<DoneIcon />
			</IconButton>
		]}
		key="save_state_snackbar"
	/>
);

const SaveInProgress = () => 'Sauvegarde en cours...';

const SaveDone = () => 'Score sauvegardé !';

const UserPlayedSnackbar = ({
	open,
	user = "Quelqu'un",
	score = '?',
	closeSnackbar,
	classes
}) => (
	<Snackbar
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left'
		}}
		open={open}
		autoHideDuration={4000}
		onRequestClose={closeSnackbar}
		message={
			<span>
				<b>
					{user}
				</b>
				<span className={classes.userPlayedSnacknarText}>
					{' a joué et a obtenu un score de '}
				</span>
				<b>
					{score}
				</b>
			</span>
		}
		action={[
			<IconButton
				key="user_played_snackbar_close_icon"
				color="inherit"
				className={classes.snackbarIconButton}
				onClick={closeSnackbar}
			>
				<CloseIcon />
			</IconButton>
		]}
		key="user_played_snackbar"
	/>
);

const mapStateToProps = state => ({
	isSaved: state.game.isSaved,
	gamesPlayed: state.game.gamesPlayed,
	scoreboard: state.game.scoreboard
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getScoreboard: getScoreboardAction
}, dispatch);

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
