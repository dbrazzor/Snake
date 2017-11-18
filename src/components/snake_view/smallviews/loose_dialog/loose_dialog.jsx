import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';

import Dialog, {
  DialogActions,
  DialogContent,
	DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import Button from 'material-ui/Button';

import UsernameInput from '../../../smallviews/username_input/username_input';

import styles from './loose_dialog_styles';

class LooseDialog extends Component {
	handleRequestClose = () => {
		const { setLooseDialogOpenState } = this.props;
		setLooseDialogOpenState(false);
	}

	render() {
		const { classes, open, username, score } = this.props;
		return (
			<Dialog
				open={open}
				onRequestClose={this.handleRequestClose}
			>
				<DialogTitle>
					{'Votre score : '}<b>{score}</b>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{"Merci d'avoir joué ! Votre score va être sauvegardé."}
					</DialogContentText>
					<div className={classes.usernameContainer}>
						<UsernameInput username={username} />
					</div>
				</DialogContent>
				<DialogActions>
					<Link to="/scores">
						<Button>
							{'Voir les scores'}
						</Button>
					</Link>
					<Button
						color="primary"
						onClick={this.handleRequestClose}
					>
						{'Continuer'}
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default injectSheet(styles)(LooseDialog);
