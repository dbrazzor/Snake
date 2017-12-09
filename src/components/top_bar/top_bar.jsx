import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import injectSheet from 'react-jss';
import classnames from 'classnames';

import Button from 'material-ui/Button';
import GamepadIcon from 'material-ui-icons/Gamepad';

import UsernameInput from '../smallviews/username_input/username_input';

// Credits goes to Doug C. Hardester (@r3volution11) for the Trophy icon.
import TrophyIcon from '../../medias/assets/trophy.svg';
import GithubIcon from '../../medias/assets/github.svg';
import styles from './top_bar_styles';

const TopBar = ({
	location,
	classes
}) => (
	<div className={classes.container}>
		<UsernameInput />
		<Buttons
			classes={classes}
			pathname={location.pathname.toLowerCase()}
		/>
	</div>
);

const Buttons = ({ classes, pathname }) => (
	<div className={classes.buttonsContainer}>
		<Link to={pathname === '/scores' ? '/' : '/scores'}>
			<Button
				fab
				color="primary"
				classes={{
					root: classes.button
				}}
			>
				{pathname === '/scores'
					? <GamepadIcon color="#FFF" />
					: <img src={TrophyIcon} alt="See scoreboard" />}
			</Button>
		</Link>
		<a href="https://github.com/dbrazzor/Snake">
			<Button
				fab
				classes={{
					root: classnames(
						classes.button,
						classes.seeCodeButton
					)
				}}
			>
				<img
					className={classes.githubIcon}
					src={GithubIcon}
					alt="See code"
				/>
			</Button>
		</a>
	</div>
);

const mapStateToProps = state => ({
	username: state.user.username
});

export default withRouter(injectSheet(styles)(connect(mapStateToProps)(TopBar)));
