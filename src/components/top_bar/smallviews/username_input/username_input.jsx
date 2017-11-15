import React from 'react';

import injectSheet from 'react-jss';

import PersonIcon from 'material-ui-icons/Person';

import styles from './username_input_styles';

const UsernameInput = ({ username, changeUsername, classes }) => (
	<div className={classes.container}>
		<input
			className={classes.input}
			type="text"
			placeholder={username}
		/>
		<IconContainer classes={classes} />
	</div>
);

const IconContainer = ({ classes }) => (
	<div className={classes.iconContainer}>
		<PersonIcon color="#7F7F7F" />
	</div>
);

export default injectSheet(styles)(UsernameInput);
