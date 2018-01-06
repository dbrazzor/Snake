import {
	flexUtils,
	materialDesignCards,
	getBorder,
	createBackground
} from '../../utils/styles_utils';

const { center } = flexUtils;
const { card2 } = materialDesignCards;

export default ({
	centerContentContainer: {
		height: '100%',
		width: '100%',
		...center
	},
	scoresContainer: {
		height: '100%',
		width: 'calc(100% - 250px)',
		overflow: 'auto',
		padding: 20,
		flexWrap: 'wrap',
		...center
	},
	noScoreContainer: {
		height: 400,
		width: 300,
		backgroundColor: '#FFF',
		borderRadius: 3,
		...card2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	snakePicture: {
		height: 150,
		width: 150,
		borderRadius: 100,
		border: getBorder(),
		...createBackground(),
		...card2
	}
});
