import {
	getBorder,
	materialDesignCards,
	flexUtils
} from '../../../../utils/styles_utils';

const { card2 } = materialDesignCards;
const { center } = flexUtils;

export default ({
	container: {
		height: 45,
		width: 300,
		overflow: 'hidden',
		border: getBorder(),
		borderRadius: 5,
		...card2,
		'& > div': {
			float: 'right'
		}
	},
	input: {
		height: '100%',
		width: '80%',
		padding: [0, 10, 0, 20],
		border: 'none !important',
		boxShadow: 'none !important',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		color: '#7F7F7F'
	},
	iconContainer: {
		height: '100%',
		width: '20%',
		...center
	}
});
