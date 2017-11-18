import {
	getBorder,
	materialDesignCards
} from '../../utils/styles_utils';

const { card2 } = materialDesignCards;

export default ({
	container: {
		height: 70,
		width: '100%',
		backgroundColor: '#FFF',
		padding: [0, 50],
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottom: getBorder(),
		...card2
	},
	buttonsContainer: {
		'& > *:first-child': {
			margin: 0
		},
		'& > *': {
			marginLeft: 10
		}
	},
	seeCodeButton: {
		backgroundColor: '#FFF'
	},
	githubIcon: {
		height: 20,
		width: 20,
		marginLeft: 10
	}
});
