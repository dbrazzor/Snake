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
		borderTop: getBorder(1, '#E2E2E2'),
		position: 'relative',
		float: 'right',
		fontStyle: 'normal',
		padding: [0, 20, 0, 50],
		display: 'flex',
		alignItems: 'center',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		fontSize: pixelsToRem(16),
		fontWeight: 'bolder',
		...card2
	},
	score: {
		height: 50,
		width: 60,
		position: 'absolute',
		top: 25 / 2,
		left: -30,
		backgroundColor: '#FFF',
		border: getBorder(1, '#E2E2E2'),
		borderRadius: 100,
		textTransform: 'uppercase',
		color: 'rgba(0, 0, 0, .4)',
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
		color: 'rgba(0, 0, 0, .4)'
	}
});
