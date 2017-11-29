import React, { Component } from 'react';

import injectSheet from 'react-jss';

import Button from 'material-ui/Button';
import FilterList from 'material-ui-icons/FilterList';

import styles from './filter_section_styles';

class FilterSection extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { setFilterMode, filterMode, classes } = this.props;
		return (
			<div className={classes.container}>
				<Button
					raised
					classes={{
						root: classes.button
					}}
				>
					{'Filtrer les scores'}
					<FilterList
						color="#7F7F7F"
						className={classes.icon}
					/>
				</Button>
			</div>
		);
	}
}

export default injectSheet(styles)(FilterSection);
