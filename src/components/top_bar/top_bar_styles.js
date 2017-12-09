import {
	getBorder,
	materialDesignCards,
	flexUtils
} from '../../utils/styles_utils';

const { card2 } = materialDesignCards;
const { center } = flexUtils;

export default ({
	container: {
		minHeight: 70,
		width: '100%',
		backgroundColor: '#FFF',
		padding: [0, 50],
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		borderBottom: getBorder(),
		...card2,
		zIndex: 1,
		position: 'relative'
	},
	buttonsContainer: {
		'& > *': {
			marginLeft: 20
		}
	},
	button: {
		height: 45,
		width: 45,
		'& svg, & img': {
			height: 22,
			width: 22
		}
	},
	seeCodeButton: {
		backgroundColor: '#FFF'
	},
	githubIcon: {
		height: '25px !important',
		width: '25px !important'
	},
	tooltip: {
		fontSize: 20
	},
	'@media (max-width: 950px)': {
		container: {
			padding: [0, 10],
			...center,
			'& > div': {
				margin: [10, 0]
			}
		},
		buttonsContainer: {
			...center,
			flexWrap: 'wrap',
			'& > *': {
				margin: 5
			}
		}
	},
	'@media (max-width: 415px)': {
		buttonsContainer: {
			'& > *': {
				width: '90%',
				'& > button': {
					width: '100%'
				}
			}
		}
	}
});
