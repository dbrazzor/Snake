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
		...card2
	},
	buttonsContainer: {
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
