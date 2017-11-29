import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CircularProgress } from 'material-ui/Progress';


class ScoresView extends Component {
	render() {
		const { hasReceivedScoreboard, scoreboard } = this.props;
		if (hasReceivedScoreboard === null) {
			return <CircularProgress />
		}
		return Object.keys(scoreboard).map(score => (
			<span>{score}</span>
		))
	}
}

const mapStateToProps = state => ({
	hasReceivedScoreboard: state.game.hasReceivedScoreboard,
	scoreboard: state.game.scoreboard
});

export default connect(mapStateToProps)(ScoresView);
