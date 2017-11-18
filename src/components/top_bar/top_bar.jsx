import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import injectSheet from 'react-jss';

import Button from 'material-ui/Button';

import UsernameInput from './smallviews/username_input/username_input';

import styles from './top_bar_styles';

const TopBar = ({
	location,
	classes,
	changeUsername,
	username = "Username"
}) => (
	<div className={classes.container}>
		<UsernameInput
			username={username}
			changeUsername={changeUsername}
		/>
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
	</div>
);

export default withRouter(injectSheet(styles)(TopBar));
