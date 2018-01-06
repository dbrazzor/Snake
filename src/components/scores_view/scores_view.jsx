import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import injectSheet from 'react-jss';

import { CircularProgress } from 'material-ui/Progress';

import SidePanel from './side_panel/side_panel';
import ScoreCard from './smallviews/score_card/score_card';

import SadSnake from '../../medias/assets/sad_snake.png';
import styles from './scores_view_styles';

class ScoresView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredScoreboard: null,
			searchUsername: null,
			filters: {
				date: true,
				username: false,
				score: false
			}
		}
	}

	componentWillMount() {
		this.filterScoreboard();
	}

	componentWillReceiveProps(nextProps) {
		const oldScoreboard = this.props;
		const { scoreboard } = nextProps;
		if (scoreboard !== oldScoreboard) {
			this.filterScoreboard(scoreboard);
		}
	}

	setUsername = (username) => {
		this.setState({ searchUsername: username });
		this.filterScoreboard(undefined, undefined, username);
	}

	setFilter = (filter) => {
		const filters = Object.assign({}, this.state.filters, filter);
		this.setState({ filters });
		this.filterScoreboard(undefined, filters);
	}

	filterScoreboard = (
		scoreboard = this.props.scoreboard,
		filters = this.state.filters,
		searchUsername = this.state.searchUsername
	) => {
		if (!scoreboard || Object.keys(scoreboard).length < 1) {
			return null;
		}
		let filteredKeys = null;
		let newScoreboard = scoreboard;
		const scoreboardKeys = Object.keys(scoreboard);
		if (searchUsername) {
			filteredKeys = scoreboardKeys.filter(id =>
				scoreboard[id].username.toLowerCase().includes(searchUsername.toLowerCase()));
		}
		Object.keys(filters).forEach((key) => {
			const shouldFilter = filters[key];
			if (!shouldFilter) return false;
			switch (key) {
			case 'date':
				filteredKeys = (filteredKeys || scoreboardKeys)
					.sort((a, b) => scoreboard[a].date - scoreboard[b].date);
				break;
			case 'username':
				filteredKeys = (filteredKeys || scoreboardKeys).sort((a, b) => {
					const sa = scoreboard[a];
					const sb = scoreboard[b];
					if (sa.username < sb.username) return -1;
					if (sa.username > sb.username) return 1;
					return 0;
				});
				break;
			default: filteredKeys = (filteredKeys || scoreboardKeys)
				.sort((a, b) => scoreboard[a].score - scoreboard[b].score);
			}
			return true;
		})
		if (filteredKeys) {
			newScoreboard = {};
			filteredKeys.forEach((scoreId, index) => {
				newScoreboard[scoreId] = Object.assign({}, scoreboard[scoreId], { index })
			});
		}
		this.setState({ filteredScoreboard: newScoreboard });
		return true;
	}

	render() {
		const {
			hasReceivedScoreboard,
			scoreboard,
			classes
		} = this.props;
		const { filteredScoreboard, filters } = this.state;
		if (hasReceivedScoreboard === null) {
			return <Loading classes={classes} />
		} else if (hasReceivedScoreboard && !scoreboard) {
			return <NoScore classes={classes} />
		}
		return (
			<Fragment>
				<SidePanel
					setUsername={this.setUsername}
					filters={filters}
					setFilter={this.setFilter}
					resultsNumber={Object.keys(filteredScoreboard || {}).length}
				/>
				<div className={classes.scoresContainer}>
					<Scores
						filteredScoreboard={filteredScoreboard}
						classes={classes}
					/>
				</div>
			</Fragment>
		);
	}
}

const Loading = ({ classes }) => (
	<div className={classes.centerContentContainer}>
		<CircularProgress />
	</div>
);

const NoScore = ({ classes }) => (
	<div className={classes.centerContentContainer}>
		<div className={classes.noScoreContainer}>
			<div
				className={classes.snakePicture}
				style={{
					backgroundImage: `url('${SadSnake}')`
				}}
			/>
		</div>
	</div>
);

const Scores = ({ filteredScoreboard, classes }) => {
	if (!filteredScoreboard || Object.keys(filteredScoreboard).length < 1) {
		return <NoScore classes={classes} />
	}
	return Object.keys(filteredScoreboard)
		.sort((a, b) => filteredScoreboard[b].index - filteredScoreboard[a].index).map(scoreId => (
			<ScoreCard
				id={scoreId}
				smallGame={filteredScoreboard[scoreId]}
				key={`small_score_card_${scoreId}`}
			/>
		));
}

const mapStateToProps = state => ({
	hasReceivedScoreboard: state.game.hasReceivedScoreboard,
	scoreboard: state.game.scoreboard
});

export default injectSheet(styles)(connect(mapStateToProps)(ScoresView));
