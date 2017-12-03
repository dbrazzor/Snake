import {
	flexUtils,
	getBorder,
	materialDesignCards,
	pixelsToRem
} from '../../../utils/styles_utils';

const { center } = flexUtils;
const { card2 } = materialDesignCards;

export default ({
	container: {
		height: 80,
		width: 'calc(100% - 30px)',
		marginBottom: 10,
		borderRadius: 3,
		borderTop: getBorder(1, '#E2E2E2'),
		backgroundColor: '#FFF',
		position: 'relative',
		float: 'right',
		fontStyle: 'normal',
		padding: [0, 40, 0, 50],
		display: 'flex',
		alignItems: 'center',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		fontWeight: 'bolder',
		fontSize: pixelsToRem(16),
		...card2
	},
	score: {
		height: 50,
		width: 60,
		position: 'absolute',
		top: 25 / 2,
		left: -30,
		backgroundColor: ({ highlighted }) =>
			(highlighted ? '#E53935' : '#FFF'),
		border: ({ highlighted }) =>
			(highlighted ? 'none' : '1px solid lightgray'),
		borderRadius: 100,
		color: ({ highlighted }) =>
			(highlighted ? 'rgba(255, 255, 255, .85)' : 'rgba(0, 0, 0, .4)'),
		textTransform: 'uppercase',
		boxShadow: '0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.17)',
		...center
	},
	usernameContainer: {
		height: '80%',
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	username: {
		width: '100%',
		textAlign: 'center',
		color: 'rgba(0, 0, 0, .35)'
	}
});
