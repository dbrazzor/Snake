import React, { Component } from 'react';

import injectSheet from 'react-jss';
import ScoreCardUsername from './score_card_username/score_card_username';

import styles from './score_card_styles';

class ScoreCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExtended: false
		}
	}

	render() {
		const { isExtended } = this.state;
		const { classes, smallGame, id } = this.props;
		const {
			score = '?',
			username = '?'
		} = smallGame;
		return (
			<div className={classes.container}>
				<div className={classes.usernameContainer}>
					<ScoreCardUsername
						username={username}
						id={id}
					/>
				</div>
				<div className={classes.scoreContainer}>
					{score}
				</div>
				<div className={classes.actionsContainer}>

				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(ScoreCard);
