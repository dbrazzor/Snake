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
		transform: `translateY(${35 / 3}px)`,
		willChange: 'transform',
		transition: 'transform .3s',
		fontSize: 50,
		fontWeight: 'bolder',
		...center
	},
	scoreContainerTranslated: {
		transform: 'translateY(0)'
	},
	actionsContainer: {
		height: 'auto',
		width: '100%',
		padding: [0, 15],
		marginBottom: 15,
		display: 'flex',
		transform: 'translateY(40px)',
		willChange: 'transform',
		justifyContent: 'space-between',
		transition: 'transform .3s',
		alignItems: 'center',
		'& > svg:hover': {
			cursor: 'pointer'
		}
	},
	actionsContainerTranslated: {
		transform: 'translateY(0)'
	}
});
