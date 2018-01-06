import React from 'react';

import injectSheet from 'react-jss';

import Check from 'material-ui-icons/Check';

import styles from './filter_styles';

const Filter = ({
	label = '?',
	checked,
	onClick,
	classes
}) => (
	<div
		className={classes.container}
		onClick={onClick}
	>
		<span>
			{label}
		</span>
		<Box
			checked={checked}
			classes={classes}
		/>
	</div>
);

const Box = ({ checked, classes }) =>
	(checked ? <Check style={{ fill: '#7F7F7F' }} />
		: <div className={classes.checkContainer} />);

export default injectSheet(styles)(Filter);
