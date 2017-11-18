import React, { Component } from 'react';

import { Rect } from 'react-konva';

class Snake extends Component {
	render() {
		const {
			x,
			y,
			width = 10,
			height = 10,
			color = '#7F7F7F'
		} = this.props;
		return (
			<Rect
				ref="snake"
				x={x}
				y={y}
				width={width}
				height={height}
				fill={color}
			/>
		);
	}
}

export default Snake;
