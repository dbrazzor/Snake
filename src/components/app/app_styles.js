export default ({
	'@global': {
		'html, body': {
			height: '100%',
			width: '100%'
		},
		body: {
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
		},
		'*:focus': {
			outline: 'none'
		}
	},
	content: {
		minHeight: 'calc(100vh - 70px)',
		height: 1, // Hacky way to let us use height: 100% on content's children. see : https://stackoverflow.com/a/21836870
		width: '100%',
		'& > *': {
			float: 'left'
		}
	},
	snackbarIconButton: {
		height: 30,
		width: 30
	},
	userPlayedSnackbarText: {
		margin: [0, 10]
	}
})
