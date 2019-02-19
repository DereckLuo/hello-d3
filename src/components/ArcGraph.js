import React, { Component } from 'react'
import { pie } from 'd3-shape'
import { scaleOrdinal } from 'd3-scale'
import { schemeCategory10 } from 'd3-scale-chromatic'
import Arc from './Arc'
import { data, svgDimensions } from '../libs/data';

class ArcGraph extends Component {
    constructor(props) {
        super(props);
        this.colorScale = scaleOrdinal(schemeCategory10);
    }

    //Generate pi slice
    renderSlice(entry, i) {
        const { data } = entry;
        const innerRadius = 86;
        const outerRadius = 200;
        const cornerRadius = 7;
        const padAngle = 0.02;

        return (
            <Arc key={i}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                cornerRadius={cornerRadius}
                padAngle={padAngle}
                value={entry}
                label={data}
                fill={this.colorScale(i)} />
        )
    }

    render() {
        const values = data.map(d => d.amount);

        const { width, height } = svgDimensions;

        return (
            <div>
                <svg width={width} height={height}>
                    <g transform={`translate(${width / 2}, ${height / 2})`}>
                        {pie()(values).map((entry, i) => this.renderSlice(entry, i))}
                    </g>
                </svg>
            </div>
        )
    }
}

export default ArcGraph;