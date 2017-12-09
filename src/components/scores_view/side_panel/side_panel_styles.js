import { flexUtils, getBorder } from '../../../../utils/styles_utils';

const { center } = flexUtils;

export default ({
	container: {
		height: 'calc(100vh - 70px)',
		width: 300,
		padding: [20, 15],
		backgroundColor: '#FFF',
		borderRight: getBorder(),
		boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
		overflow: 'auto',
		fontFamily: ['Roboto', 'open sans', 'sans serif'],
		color: '#7F7F7F',
		fontStyle: 'italic',
		...center,
		flexWrap: 'wrap'
	}
});
