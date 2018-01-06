import React, { Component } from 'react';

import classnames from 'classnames';

import injectSheet from 'react-jss';

import Replay from 'material-ui-icons/Replay';
import Share from 'material-ui-icons/Share';

import ScoreCardUsername from './score_card_username/score_card_username';

import styles from './score_card_styles';

class ScoreCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExtended: false,
			isHovering: false
		}
	}

	render() {
		const { isExtended, isHovering } = this.state;
		const { classes, smallGame, id } = this.props;
		const {
			score = '?',
			username = '?'
		} = smallGame;
		return (
			<div
				className={classes.container}
				onMouseEnter={() => this.setState({ isHovering: true })}
				onMouseLeave={() => this.setState({ isHovering: false })}
			>
				<div className={classes.usernameContainer}>
					<ScoreCardUsername
						username={username}
						id={id}
					/>
				</div>
				<div className={
					classnames(
						classes.scoreContainer,
						{ [classes.scoreContainerTranslated]: isHovering }
					)
				}
				>
					{score}
				</div>
				<Actions
					show={isHovering}
					classes={classes}
				/>
			</div>
		);
	}
}

const Actions = ({ show, classes }) => (
	<div className={
		classnames(
			classes.actionsContainer,
			{ [classes.actionsContainerTranslated]: show }
		)
	}
	>
		<Replay style={{ fill: '#AAA' }} />
		<Share style={{ fill: '#AAA' }} />
	</div>
)

export default injectSheet(styles)(ScoreCard);
