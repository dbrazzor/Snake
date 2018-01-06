import React, { Component } from 'react';
import { connect } from 'react-redux';

import injectSheet from 'react-jss';

import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Search from 'material-ui-icons/Search';
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp';

import TrophyIcon from '../../../medias/assets/trophy_grey.svg';

import Filter from './smallviews/filter/filter';

import styles from './side_panel_styles';

const SidePanel = ({ setUsername, classes }) => (
	<div className={classes.container}>
		<UsernameSection
			setUsername={setUsername}
			classes={classes}
		/>
		<Filters classes={classes} />
	</div>
);

const UsernameSection = ({ setUsername, classes }) => (
	<div className={classes.usernameSectionContainer}>
		<div className={classes.usernameInputContainer}>
			<div className={classes.searchIconContainer}>
				<Search style={{ fill: '#7F7F7F' }} />
			</div>
			<input
				type="text"
				placeholder="Chercher un joueur"
				onChange={event => setUsername(event.target.value)}
			/>
		</div>
	</div>
);

const Filters = ({ setFilter, classes }) => (
	<div className={classes.filtersContainer}>
		<Filter label="Filtrer par date" />
		<Filter label="Filtrer par nom" />
		<Filter label="Filtrer par score" />
	</div>
);

const mapStateToProps = state => ({
	hasReceivedScoreboard: state.game.hasReceivedScoreboard,
	scoreboard: state.game.scoreboard
});

export default injectSheet(styles, { link: true, inject: ['sheet', 'classes'] })(connect(mapStateToProps)(SidePanel));
