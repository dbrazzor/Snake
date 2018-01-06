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
				date: false,
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
		this.filterScoreboard();
	}

	filterScoreboard = (scoreboard = this.props.scoreboard) => {
		if (!scoreboard || Object.keys(scoreboard).length < 1) {
			return null;
		}
		const { searchUsername } = this.state;
		let filteredKeys = null;
		let newScoreboard = scoreboard;
		if (searchUsername) {
			filteredKeys = Object.keys(scoreboard).filter(id =>
				scoreboard[id].username.toLowerCase().includes(searchUsername.toLowerCase()));
		}
		if (filteredKeys) {
			newScoreboard = [];
			filteredKeys.forEach((scoreId) => {
				newScoreboard[scoreId] = scoreboard[scoreId];
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
		const { filteredScoreboard } = this.state;
		if (hasReceivedScoreboard === null) {
			return <Loading classes={classes} />
		} else if (hasReceivedScoreboard && !scoreboard) {
			return <NoScore classes={classes} />
		}
		return (
			<Fragment>
				<SidePanel setUsername={this.setUsername} />
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
	return Object.keys(filteredScoreboard).map(scoreId => (
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
