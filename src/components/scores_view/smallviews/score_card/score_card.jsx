import React, { Component } from 'react';

import injectSheet from 'react-jss';

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
		return (
			<div className={classes.container}>
				<div className={classes.score}>
					{smallGame.score}
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(ScoreCard);
