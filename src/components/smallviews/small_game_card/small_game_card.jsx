import React, { Component } from 'react';

import injectSheet from 'react-jss';

import { CircularProgress } from 'material-ui/Progress';

import { Textfit } from 'react-textfit';

import styles from './small_game_card_styles';

class SmallGameCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExtended: false
		}
	}

	render() {
		const { smallGame, classes } = this.props;
		return (
			<div className={classes.container}>
				<Content
					smallGame={smallGame}
					id={smallGame.id}
					classes={classes}
				/>
			</div>
		);
	}
}

const Content = ({ smallGame, classes }) => {
	if (!smallGame) {
		return <CircularProgress />
	}
	const {
		id,
		username = 'Inconnu',
		score = -1
	} = smallGame;
	return [
		<Score
			score={score}
			classes={classes}
			key={`small_game_${id}_score`}
		/>,
		<Username
			username={username}
			classes={classes}
			key={`small_game_${id}_username`}
		/>
	];
}

const Score = ({ score = '?', classes }) => (
	<div className={classes.score}>
		{score}
	</div>
);

const Username = ({ username, classes }) => (
	<div className={classes.usernameContainer}>
		<div className={classes.username}>
			<Textfit
				mode="single"
				max={24}
			>
				{username}
			</Textfit>
		</div>
	</div>
);

export default injectSheet(styles)(SmallGameCard);
