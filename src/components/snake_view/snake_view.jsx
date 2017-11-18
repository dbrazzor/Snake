import React, { Component } from 'react';

import injectSheet from 'react-jss';

import {Layer, Rect, Stage } from 'react-konva';

import Snake from './smallviews/snake/snake';

import styles from './snake_view_styles';

const gameDimensions = { width: 400, height: 400 };

class SnakeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			snakePosition: {
				x: 0,
				y: 10
			},
			direction: 'ltr',
			speed: 50
		}
	}

	componentWillMount() {
		setInterval(this.stepForward, this.state.speed);
	}

	componentDidMount() {
		window.addEventListener('keydown', (event) => this.handleKeyDown(event.key))
	}

	handleKeyDown = (key) => {
		let { direction } = this.state;
		const oldDirection = direction;
		switch(key) {
			case 'ArrowUp': direction = 'dtt';
			case 'ArrowRight': direction = 'ltr';
			case 'ArrowDown': direction = 'ttd';
			case 'ArrowLeft': direction = 'rtl';
		}
		if (direction === oldDirection) return null;
		this.setState({ direction });
	}

	stepForward = () => {
		const { snake } = this.snake.refs;
		let { x } = snake.attrs;
		if (x >= gameDimensions.width) {
			this.setState({
				snakePosition: { x: 0, y: 10 }
			});
			x = 0;
		}
		snake.to({ x: x + 10, duration: this.state.speed / 1000 });
	}

	render() {
		const { classes } = this.props;
		const {
			snakePosition
		} = this.state;
		return (
			<div className={classes.container}>
				<div className={classes.gameContainer}>
					<Stage width={gameDimensions.width} height={gameDimensions.height}>
        		<Layer>
							<Snake
								ref={(snake) => { this.snake = snake }}
								x={this.state.snakePosition.x}
								y={this.state.snakePosition.y}
							/>
      		  </Layer>
    		  </Stage>
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(SnakeView);
