import {
	flexUtils,
	getBorder
} from '../../../utils/styles_utils';

const { center } = flexUtils;

export default theme => ({
	container: {
		height: '100%',
		width: 300,
		backgroundColor: '#FFF',
		borderRight: getBorder(),
		boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
		overflow: 'auto'
	},
	usernameSectionContainer: {
		height: 100,
		width: '100%',
		borderBottom: getBorder(),
		...center
	},
	usernameInputContainer: {
		height: 40,
		width: 250,
		borderRadius: 3,
		border: getBorder(),
		overflow: 'hidden',
		'& > *': {
			float: 'left'
		},
		'& > input': {
			height: '100%',
			width: '200px',
			border: 'none',
			padding: [0, 20],
			color: '#7F7F7F',
			fontFamily: ['Roboto', 'open sans', 'sans serif']
		}
	},
	searchIconContainer: {
		height: '100%',
		width: 48,
		...center
	},
	menuItem: {
		'&:focus': {
			background: theme.palette.primary[500],
			'& $menuText, & menuIcon': {
				color: '#FFF'
			}
		}
	},
	menuText: {},
	menuIcon: {}
});
