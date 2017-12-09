export default ({
	'@global': {
		body: {
			height: '100%',
			width: '100%',
			margin: 0,
			padding: 0,
			backgroundColor: 'rgba(0, 0, 0, .1)',
			'&, & *': {
				boxSizing: 'border-box'
			},
			fontSize: '16px'
		},
		a: {
			textDecoration: 'none !important'
		}
	},
	snackbarIconButton: {
		height: 30,
		width: 30
	},
	userPlayedSnackbarText: {
		margin: [0, 10],
		color: 'blue'
	}
})
