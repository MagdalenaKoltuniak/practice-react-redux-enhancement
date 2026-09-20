import React from 'react';
import Timer from '../components/Timer';

class TimerContainer extends React.Component {
	state = {
		time: 0,
	};

	getHours = () => Math.floor(this.state.time / 3600);
	getMinutes = () => Math.floor((this.state.time % 3600) / 60);
	getSeconds = () => this.state.time % 60;

	render() {
		return <Timer getHours={this.getHours} getMinutes={this.getMinutes} getSeconds={this.getSeconds} />;
	}

	componentDidMount() {
		this.id = setInterval(() => {
			this.setState(state => {
				return { time: state.time + 1 };
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.id);
	}
}

export default TimerContainer;
