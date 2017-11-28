import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CircularProgress } from 'material-ui/Progress';

import { getScoreboard as getScoreboardAction } from '../../actions/game_actions';

class ScoresView extends Component {
	componentDidMount() {
		this.props.getScoreboard();
	}

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

const mapDispatchToProps = dispatch => bindActionCreators({
	getScoreboard: getScoreboardAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScoresView);
