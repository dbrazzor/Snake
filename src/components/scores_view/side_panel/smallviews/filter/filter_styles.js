import {
	materialDesignCards,
	flexUtils,
	getBorder,
	pixelsToRem
} from '../../../../../utils/styles_utils';

const { center } = flexUtils;
const { card1to2 } = materialDesignCards;

export default theme => ({
	container: {
		height: 45,
		width: '100%',
		border: getBorder(1, '#E2E2E2'),
		marginBottom: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: [0, 10],
		fontSize: pixelsToRem(14),
		color: '#7F7F7F',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		...card1to2
	},
	checkContainer: {
		height: 20,
		width: 20,
		borderRadius: 100,
		border: getBorder(),
		...center
	}
});
