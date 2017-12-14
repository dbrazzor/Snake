import {
	flexUtils,
	getBorder,
	materialDesignCards
} from '../../../../utils/styles_utils';

const { center } = flexUtils;
const { card2 } = materialDesignCards;

export default ({
	container: {
		height: 230,
		width: 180,
		margin: 20,
		float: 'left',
		backgroundColor: '#FFF',
		...card2,
		...center
	},
	score: {
		fontSize: 50,
		fontWeight: 'bolder',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		color: '#AAA'
	}
});
