import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import injectSheet from 'react-jss';

import PersonIcon from 'material-ui-icons/Person';

import styles from './username_input_styles';

import { setUsername as setUsernameAction } from '../../../actions/user_actions';

const UsernameInput = ({ username, setUsername, classes }) => (
	<div className={classes.container}>
		<input
			className={classes.input}
			type="text"
			value={username === null ? 'Username' : username}
			onBlur={() => {
				if (!username) setUsername('Username');
			}}
			onChange={e => setUsername(e.currentTarget.value)}
		/>
		<IconContainer classes={classes} />
	</div>
);

const IconContainer = ({ classes }) => (
	<div className={classes.iconContainer}>
		<PersonIcon color="#7F7F7F" />
	</div>
);

const mapStateToProps = state => ({
	username: state.user.username
});

const mapDispatchToProps = dispatch => bindActionCreators({
	setUsername: setUsernameAction
}, dispatch);

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(UsernameInput));
