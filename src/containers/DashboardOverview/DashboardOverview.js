import React, { Component } from 'react';
import Charts from '../../components/Charts/Charts';
import Menu from '../../components/Menu/Menu';
const data = require('../../data');

class DashboardOverview extends Component {
	state = {};

	averageScore = (filter, divideBy, score) => {
		return (
			Object.values(this.state)
				.filter((entry) => entry.task === filter)
				.map((task) => task[score])
				.reduce((prev, curr) => curr + prev, 0) / divideBy
		);
	};

	averageScores = (filter) =>
		[...new Set(Object.values(this.state).map((entry) => entry[filter]))].map(
			(name) =>
				filter === 'name'
					? Object.values(this.state).filter((entry) => entry.name === name)
					: {
							name: name,
							hard: +this.averageScore(name, filter.length, 'hard'),
							fun: +this.averageScore(name, filter.length, 'fun'),
					  }
		);

	componentDidMount() {
		this.setState(data);
		//console.log(this.state);
	}

	render() {
		return (
			<>
				<div>
					<Menu></Menu>
					<Charts data={this.averageScores('name')} />
				</div>
			</>
		);
	}
}

export default DashboardOverview;
