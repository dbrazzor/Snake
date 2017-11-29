import { flexUtils, getBorder } from '../../../../../../utils/styles_utils';

const { center } = flexUtils;

export default ({
	container: {
		height: 50,
		width: '100%',
		paddingBottom: 20,
		margin: [10, 0, 20, 0],
		borderBottom: getBorder(1, '#E2E2E2'),
		...center
	},
	button: {
		backgroundColor: '#FFF'
	},
	icon: {
		marginLeft: 15
	}
});
