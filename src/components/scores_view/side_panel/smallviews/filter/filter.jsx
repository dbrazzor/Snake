import React from 'react';

import injectSheet from 'react-jss';

import styles from './filter_styles';

const Filter = ({
	label = '?',
	checked,
	onClick,
	classes
}) => (
	<div className={classes.container}>
		<span>
			{label}
		</span>
		<div className={classes.checkContainer} />
	</div>
);

export default injectSheet(styles)(Filter);
