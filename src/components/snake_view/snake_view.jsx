import React, { Component } from 'react';

import injectSheet from 'react-jss';

import {Layer, Stage } from 'react-konva';

import Snake from './smallviews/snake/snake';
import Apple from './smallviews/apple/apple';
import LooseDialog from './smallviews/loose_dialog/loose_dialog';

import styles from './snake_view_styles';

const gameDimensions = { width: 400, height: 400 };
let interval = null;
let requestedDirection = null;

let lastSavedScore = 0;

class SnakeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			snakePosition: {
				x: 0,
				y: 10
			},
			snakeTail: null,
			direction: 'ltr',
			applePosition: this.getRandomPosition(),
			score: 0,
			speed: 50,
			openLooseDialog: false
		}
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
		this.initNewGame();
	}

	componentWillUnmount() {
		clearInterval(interval);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	initNewGame = () => {
		this.setState({
			snakePosition: { x: 10, y: 10 },
			snakeTail: null,
			direction: 'ltr',
			score: 0,
			speed: 50
		});
		this.changeSpeed(50);
		this.addSnakeTail(5);
	};

	handleLoose = () => {
		lastSavedScore = this.state.score;
		this.setLooseDialogOpenState(true);
		this.initNewGame();
	}

	changeSpeed = (speed) => {
		clearInterval(interval);
		interval = setInterval(this.stepForward, speed);
	}

	comparePositions = (a, b) => a.x === b.x && a.y === b.y;

	getRandomPosition = () => {
		const { height, width } = gameDimensions;
		return {
			x: Math.floor(Math.random() * (width / 10)) * 10,
			y: Math.floor(Math.random() * (height / 10)) * 10
		}
	}

	isSnakeInPosition = (position) => {
		const { snakePosition, snakeTail } = this.state;
		if (this.comparePositions(snakePosition, position)) {
			return true;
		}
		if (!snakeTail) return false;
		if (snakeTail.some(tailPosition => this.comparePositions(tailPosition, position))) {
			return true;
		}
	}

	addSnakeTail = (number) => {
		const { snakePosition, snakeTail } = this.state;
		const newTail = snakeTail || [];
		const position = snakeTail && snakeTail.length >= 1
											? snakeTail[snakeTail.length - 1]
											: snakePosition;
		for (let i = 0; i < number; i++) {
			newTail.push(position);
		}
		this.setState({ snakeTail: newTail });
	}

	handleAppleCollision = () => {
		const { score } = this.state;
		let { speed } = this.state;
		let applePosition = null;
		do {
			applePosition = this.getRandomPosition()
		} while (!applePosition || this.isSnakeInPosition(applePosition));
		if (score % 3 === 0 && speed > 25) {
			speed -= 1;
			this.changeSpeed(speed);
		}
		this.setState({
			applePosition,
			score: score + 1,
			speed
		});
		this.addSnakeTail(5);
	}

	changeDirection = (oldDirection, direction) => {
		if (
			(direction === 'dtt' && oldDirection === 'ttd')
			|| (direction === 'ttd' && oldDirection === 'dtt')
			|| (direction === 'ltr' && oldDirection === 'rtl')
			|| (direction === 'rtl' && oldDirection === 'ltr')
		) {
			return false;
		}
		this.setState({ direction });
		requestedDirection = null;
	}

	handleKeyDown = (event) => {
		switch(event.key) {
			case 'ArrowUp': requestedDirection = 'dtt'; break;
			case 'ArrowRight': requestedDirection = 'ltr'; break;
			case 'ArrowDown': requestedDirection = 'ttd'; break;
			case 'ArrowLeft': requestedDirection = 'rtl'; break;
			default: requestedDirection = 'ltr';
		}
	}

	stepForward = () => {
		if (requestedDirection) {
			this.changeDirection(this.state.direction, requestedDirection);
		}
		const {
			snakePosition,
			applePosition
		} = this.state;
		let { snakeTail } = this.state;
		const x = snakePosition.x | 0;
		const y = snakePosition.y | 0;
		const nextPosition = { x, y };
		switch (this.state.direction) {
			case 'dtt': nextPosition.y = y - 10; break;
			case 'ltr': nextPosition.x = x + 10; break;
			case 'ttd': nextPosition.y = y + 10; break;
			case 'rtl': nextPosition.x = x - 10; break;
			default: nextPosition.x = x + 10;
		}
		if (nextPosition.x >= gameDimensions.width) {
			nextPosition.x = 0;
		} else if (nextPosition.x < 0) {
			nextPosition.x = gameDimensions.width - 10;
		} else if (nextPosition.y >= gameDimensions.height) {
			nextPosition.y = 0;
		} else if (nextPosition.y < 0) {
			nextPosition.y = gameDimensions.width - 10;
		}
		if (snakeTail) {
			if (snakeTail.length > 1) {
				snakeTail.forEach((tail, index) => snakeTail[index] = snakeTail[index + 1]);
			}
			snakeTail[snakeTail.length - 1] = snakePosition;
		}
		if (this.comparePositions(nextPosition, applePosition)) {
			this.handleAppleCollision();
			snakeTail = this.state.snakeTail;
		} if (this.isSnakeInPosition(nextPosition)) {
			this.handleLoose();
			return null;
		}
		this.setState({
			snakePosition: nextPosition,
			snakeTail
		})
	}

	setLooseDialogOpenState = (state) => this.setState({ openLooseDialog: state });

	render() {
		const { classes } = this.props;
		const {
			snakePosition,
			snakeTail,
			applePosition,
			openLooseDialog,
			score
		} = this.state;
		return (
			<div className={classes.container}>
				<div className={classes.gameContainer}>
					<Stage width={gameDimensions.width} height={gameDimensions.height}>
        		<Layer>
							<Snake
								key="snake_head"
								x={snakePosition.x}
								y={snakePosition.y}
								color='cyan'
							/>
							<Tails snakeTail={snakeTail} />
							<Apple
								x={applePosition.x}
								y={applePosition.y}
								color="red"
							/>
      		  </Layer>
    		  </Stage>
				</div>
				<LooseDialog
					open={openLooseDialog}
					setLooseDialogOpenState={this.setLooseDialogOpenState}
					score={lastSavedScore}
				/>
			</div>
		);
	}
}

const Tails = ({ snakeTail }) =>
	!snakeTail ? null : snakeTail.map((tail, index) => (
		<Snake
			key={`snake_tail_${index}`}
			x={tail.x}
			y={tail.y}
		/>
	));

export default injectSheet(styles)(SnakeView);
