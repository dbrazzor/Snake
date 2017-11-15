import React from 'react';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';

import Button from 'material-ui/Button';

import UsernameInput from './smallviews/username_input/username_input';

import styles from './top_bar_styles';

const TopBar = ({
	classes,
	changeUsername,
	username = "Username"
}) => (
	<div className={classes.container}>
		<UsernameInput
			username={username}
			changeUsername={changeUsername}
		/>
		<Buttons classes={classes} />
	</div>
);

const Buttons = ({ classes }) => (
	<div className={classes.buttonsContainer}>
		<Link to="/scores">
			<Button
				raised
				color="primary"
			>
				{'Voir les scores'}
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

export default injectSheet(styles)(TopBar);
