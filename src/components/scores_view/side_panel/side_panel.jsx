import React, { Component } from 'react';
import { connect } from 'react-redux';

import injectSheet from 'react-jss';

import { CircularProgress } from 'material-ui/Progress';

import styles from './side_panel_styles';

class SidePanel extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Content />
			</div>
		);
	}
}

const Content = () => {
	return 'Pas encore de messages';
}

const mapStateToProps = state => ({
	hasReceivedScoreboard: state.game.hasReceivedScoreboard,
	scoreboard: state.game.scoreboard
});

export default injectSheet(styles, { link: true, inject: ['sheet', 'classes'] })(connect(mapStateToProps)(SidePanel));
