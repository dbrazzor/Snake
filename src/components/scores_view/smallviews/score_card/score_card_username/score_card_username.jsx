/* eslint react/no-string-refs: 0 */
import React, { Component } from 'react';

import injectSheet from 'react-jss';

import classnames from 'classnames';

import styles from './score_card_username_styles';

let interval = null;

class ScoreCardUsername extends Component {
	constructor(props) {
		super(props);
		this.state = {
			styleToApply: null
		};
	}

	componentDidMount() {
		const { id } = this.props;
		if (this.refs[`score_card_username_${id}`]) {
			const { offsetWidth } = this.refs[`score_card_username_${id}`];
			if (offsetWidth > 180) this.startInterval(offsetWidth);
		}
	}

	componentWillUnmount() {
		if (interval) {
			clearInterval(interval);
			this.isUnmounted = true;
		}
	}

	updateStyle = (textWidth, time) => {
		if (this.isUnmounted) return false;
		const styleToApply = {
			transform: (this.state.styleToApply || {}).transform === `translateX(-${95 + (textWidth / 2)}px)`
				? `translateX(+${95 + (textWidth / 2)}px)`
				: `translateX(-${95 + (textWidth / 2)}px)`,
			transition: `transform linear ${time}s`
		};
		return this.setState({ styleToApply });
	}

	startInterval = (textWidth) => {
		let time = 10 * (textWidth / 1200);
		if (time < 5) time = 5;
		this.updateStyle(textWidth, time)
		interval = setInterval(() => this.updateStyle(textWidth, time), time * 1000);
	}

	render() {
		const { styleToApply } = this.state;
		const { id, username, classes } = this.props;
		return (
			<div
				className={classes.container}
				ref={`score_card_username_${id}`}
				style={styleToApply}
			>
				{username}
			</div>
		);
	}
}

export default injectSheet(styles)(ScoreCardUsername);
