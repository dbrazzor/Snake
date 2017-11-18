import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import injectSheet from 'react-jss';

import Button from 'material-ui/Button';

import UsernameInput from '../smallviews/username_input/username_input';

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
				raised
				color="primary"
			>
				{pathname === '/scores' ? 'Retour au jeu' : 'Voir les scores'}
			</Button>
		</Link>
		<Button
			raised
			color="accent"
		>
			{'Modifier les paramètres'}
		</Button>
		<a href="https://github.com/dbrazzor/Snake">
			<Button
				raised
				classes={{ root: classes.seeCodeButton }}
			>
				{'Voir le code'}
				<img
					src={GithubIcon}
					alt=""
					className={classes.githubIcon}
				/>
			</Button>
		</a>
	</div>
);

const mapStateToProps = state => ({
	username: state.user.username
});

export default withRouter(injectSheet(styles)(connect(mapStateToProps)(TopBar)));
