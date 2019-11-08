import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTooltip,
	VictoryLine,
	VictoryGroup,
} from 'victory';
import themes from './themes';

const chart = (props) => {
	const data = Object.values(props.data);
	console.log(data);

	return (
		<>
			<VictoryChart theme={themes.wincTheme} domainPadding={10}>
				<VictoryGroup offset={25}>
					<VictoryBar
						labelComponent={<VictoryTooltip />}
						data={data}
						x='data.index'
						y='hard'
					/>
					<VictoryBar
						labelComponent={<VictoryTooltip />}
						data={data}
						x='data.index'
						y='fun'
					/>
				</VictoryGroup>
				<VictoryAxis
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					tickValues={[9, 18, 27, 36, 45, 54]}
					tickFormat={[
						'Week 1',
						'Week 2',
						'Week 3',
						'Week 4',
						'Week 5',
						'Week 6',
					]}
				/>
				<VictoryAxis
					dependentAxis
					// tickFormat specifies how ticks should be displayed
					tickValues={[1, 2, 3, 4, 5]}
				/>
			</VictoryChart>
		</>
	);
};

export default chart;
