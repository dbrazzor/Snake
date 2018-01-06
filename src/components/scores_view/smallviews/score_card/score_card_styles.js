import {
	flexUtils,
	getBorder,
	materialDesignCards
} from '../../../../utils/styles_utils';

const { center } = flexUtils;
const { card2 } = materialDesignCards;

export default theme => ({
	container: {
		height: 230,
		width: 180,
		borderRadius: 3,
		margin: 20,
		float: 'left',
		overflow: 'hidden',
		backgroundColor: '#FFF',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		color: '#AAA',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		...card2
	},
	usernameContainer: {
		marginTop: 30,
		height: 15
	},
	scoreContainer: {
		height: 'calc(100% - 50px)',
		backgroundColor: '#FFF',
		fontSize: 50,
		fontWeight: 'bolder',
		...center
	},
	actionsContainer: {
		height: 50,
		width: '100%'
	}
});
