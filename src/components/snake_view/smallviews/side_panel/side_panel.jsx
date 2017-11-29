import React, { Component } from 'react';
import { connect } from 'react-redux';

import injectSheet from 'react-jss';

import { CircularProgress } from 'material-ui/Progress';

import SmallGameCard from '../../../smallviews/small_game_card/small_game_card';

import styles from './side_panel_styles';

class SidePanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: null,
			filterMode: 'sort-by-date'
		}
	}

	componentWillMount = () => {
		const { scoreboard } = this.props;
		this.filterScoreboard(scoreboard, this.state.filterMode);
	}

	componentWillReceiveProps(nextProps) {
		const { scoreboard } = this.props;
		if (scoreboard !== nextProps.scoreboard) {
			this.filterScoreboard(nextProps.scoreboard, this.state.filterMode);
		}
	}

	filterScoreboard = (scoreboard, filter) => {
		if (!scoreboard || Object.keys(scoreboard).length < 1) {
			this.setState({ filtered: {} })
			return false;
		}
		switch (filter) {
		default: {
			this.setState({
				filtered: Object.keys(scoreboard).sort((a, b) => scoreboard[b].date - scoreboard[a].date)
			});
		}
		}
		return true;
	}

	shouldCenter = (hasReceivedScoreboard, scoreboard) => {
		if (!hasReceivedScoreboard
			|| !scoreboard
			|| (hasReceivedScoreboard && (!scoreboard || Object.keys(scoreboard).length < 1))) {
			return true;
		}
		return false;
	}

	render() {
		const { classes, hasReceivedScoreboard, scoreboard } = this.props;
		const { filtered } = this.state;
		return (
			<div
				className={classes.container}
				style={{
					display: this.shouldCenter(hasReceivedScoreboard, scoreboard) ? 'flex' : 'block'
				}}
			>
				<Content
					hasReceivedScoreboard={hasReceivedScoreboard}
					scoreboard={scoreboard}
					filtered={filtered}
				/>
			</div>
		);
	}
}

const Content = ({ hasReceivedScoreboard, filtered, scoreboard }) => {
	if (!hasReceivedScoreboard) {
		return <CircularProgress />
	}
	if (hasReceivedScoreboard && (!scoreboard || Object.keys(scoreboard).length < 1)) {
		return "Il n'y a pas de scores disponibles !"
	}
	return filtered.map(gameId => (
		<SmallGameCard
			smallGame={scoreboard[gameId]}
			key={`small_game_${gameId}`}
		/>
	));
}

const mapStateToProps = state => ({
	hasReceivedScoreboard: state.game.hasReceivedScoreboard,
	scoreboard: state.game.scoreboard
});

export default injectSheet(styles, { link: true, inject: ['sheet', 'classes'] })(connect(mapStateToProps)(SidePanel));
