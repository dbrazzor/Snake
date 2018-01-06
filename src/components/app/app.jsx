import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { JssProvider } from 'react-jss';
import injectSheet from 'react-jss';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui-icons/Done';
import CloseIcon from 'material-ui-icons/Close';

import Routes from '../../routes/routes';
import TopBar from '../top_bar/top_bar';

import { getScoreboard as getScoreboardAction } from '../../actions/game_actions';

import styles from './app_styles';

const theme = createMuiTheme({
	palette: {
		primary: blue
	}
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saveSnackbar: {
				open: false,
				saveState: 'not-saved'
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
		this.checkSaveState(nextProps);
		this.checkUserPlayed(nextProps.scoreboard);
	}

	checkSaveState = (newProps) => {
		const { isSaved } = newProps;
		const { saveSnackbar, saveSnackbar: { saveState } } = this.state;
		const oldScoreboard = this.props.scoreboard;
		const { scoreboard } = newProps;
		let newSaveState = null;
		switch (isSaved) {
		case null: newSaveState = 'saving'; break;
		case false: newSaveState = 'not-saved'; break;
		default: newSaveState = isSaved;
		}
		if (saveState === newSaveState && scoreboard === oldScoreboard) {
			return null;
		}
		if (isSaved && !scoreboard[newSaveState]) {
			newSaveState = 'verifying';
		} else if (isSaved && scoreboard[newSaveState]) {
			newSaveState = 'saved';
		}
		saveSnackbar.saveState = newSaveState;
		if (newSaveState !== 'not-saved') {
			saveSnackbar.open = true;
		}
		this.setState({ saveSnackbar });
		return true;
	}

	checkUserPlayed = (scoreboard) => {
		const oldScoreboard = this.props.scoreboard;
		if (!oldScoreboard || Object.keys(oldScoreboard).length < 1) return false;
		if (scoreboard !== oldScoreboard) {
			const scoreboardKeys = Object.keys(scoreboard);
			if (scoreboardKeys.length > Object.keys(oldScoreboard).length) {
				let lastScoreId = null;
				if (scoreboardKeys.length === 1) lastScoreId = scoreboardKeys[0];
				else {
					const sortedScoreboard = scoreboardKeys.sort((a, b) => a.date - b.date);
					lastScoreId = sortedScoreboard[1];
				}
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
		const { userPlayedSnackbar } = this.state;
		this.setState({
			userPlayedSnackbar: Object.assign({}, userPlayedSnackbar, { open: false })
		})
	}

	render() {
		const { classes } = this.props;
		const { saveSnackbar, userPlayedSnackbar } = this.state;
		return (
			<Router>
				<JssProvider classNamePrefix="Snake-">
					<MuiThemeProvider theme={theme}>
						<TopBar />
						<div className={classes.content}>
							<Routes />
						</div>
						<SaveSnackbar
							open={saveSnackbar.open}
							state={saveSnackbar.saveState}
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
					</MuiThemeProvider>
				</JssProvider>
			</Router>
		);
	}
}

const SaveSnackbar = ({
	open,
	state,
	closeSnackbar,
	classes
}) => {
	let message = null;
	switch (state) {
	case 'saving':
		message = <SaveInProgress />
		break;
	case 'saved':
		message = <SaveDone />
		break;
	default:
		message = <VerificationInProgress />
		break;
	}
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			open={open}
			autoHideDuration={4000}
			onClose={closeSnackbar}
			message={message}
			action={state === 'saved' && [
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
};

const SaveInProgress = () => 'Sauvegarde en cours...';

const SaveDone = () => 'Score sauvegardé !';

const VerificationInProgress = () => 'Vérification en cours...';

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
		autoHideDuration={5000}
		onxClose={closeSnackbar}
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
