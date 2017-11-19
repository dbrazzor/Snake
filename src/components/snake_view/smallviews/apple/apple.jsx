import React from 'react';

import { Rect } from 'react-konva';

const Apple = ({
	x,
	y,
	width = 10,
	height = 10,
	color = '#7F7F7F'
}) => (
	<Rect
		x={x}
		y={y}
		width={width}
		height={height}
		fill={color}
	/>
);

export default Apple;
