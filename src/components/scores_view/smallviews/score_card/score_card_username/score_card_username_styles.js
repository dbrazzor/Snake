import { flexUtils } from '../../../../../utils/styles_utils';

const { center } = flexUtils;

export default ({
	container: {
		fontSize: 14,
		whiteSpace: 'nowrap',
		textTransform: 'uppercase',
		color: '#7F7F7F',
		letterSpacing: 2,
		willChange: 'transform',
		...center
	}
});
