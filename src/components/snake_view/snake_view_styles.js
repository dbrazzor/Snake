import {
	flexUtils,
	getBorder,
	materialDesignCards
} from '../../utils/styles_utils';

const { card2 } = materialDesignCards;
const { center } = flexUtils;

export default ({
	container: {
		height: 'calc(100vh - 70px)',
		width: '100%',
		...center
	},
	gameContainer: {
		display: 'inline-block',
		backgroundColor: '#FFF',
		borderRadius: 3,
		border: getBorder(),
		...card2
	}
});
