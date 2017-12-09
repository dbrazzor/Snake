import {
	flexUtils,
	getBorder,
	materialDesignCards,
	pixelsToRem
} from '../../utils/styles_utils';

const { card2 } = materialDesignCards;
const { center } = flexUtils;

export default ({
	container: {
		height: 'calc(100vh - 70px)',
		width: '100%',
		'& > *': {
			float: 'left'
		}
	},
	contentContainer: {
		height: '100%',
		width: '100%',
		...center
	},
	gameContainer: {
		height: ({ gameDimensions }) =>
			(gameDimensions ? gameDimensions.height : 400) + 50,
		width: ({ gameDimensions }) =>
			(gameDimensions ? gameDimensions.width : 400),
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundColor: '#FFF',
		borderRadius: 3,
		border: getBorder(1, '#E2E2E2'),
		...card2
	},
	stage: {
		borderTop: getBorder()
	},
	scoreContainer: {
		position: 'absolute',
		top: -30,
		left: ({ gameDimensions }) =>
			(gameDimensions ? ((gameDimensions.width / 2) - 60) : 0),
		height: 60,
		width: 120,
		backgroundColor: '#FFF',
		border: getBorder(1, '#E2E2E2'),
		borderRadius: 100,
		fontFamily: ['Roboto', 'open sans', 'Raleway'],
		fontWeight: 'bolder',
		fontSize: pixelsToRem(30),
		color: '#7F7F7F',
		...card2,
		...center
	}
});
