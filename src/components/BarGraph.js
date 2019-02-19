import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import Bars from './Bars'
import { data, margins, svgDimensions } from '../libs/data'



class BarChart extends Component {
    constructor() {
        super()
        this.yScale = scaleBand()
        this.xScale = scaleLinear()
    }

    render() {
        const { width, height } = svgDimensions;
        const maxValue = Math.max(...data.map(d => d.amount))

        // scaleLinear type
        const xScale = this.xScale
            .domain([0, maxValue])
            .range([margins.left, width - margins.right])

        // scaleBand type
        const yScale = this.yScale
            .domain(data.map(d => d.price, 2))
            .range([margins.bottom, height - margins.top])

        return (
            <svg width={width} height={height}>
                <Axes
                    scales={{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions}
                />
                <Bars
                    scales={{ xScale, yScale }}
                    margins={margins}
                    data={data}
                    maxValue={maxValue}
                    svgDimensions={svgDimensions}
                />
            </svg>
        )
    }
}

export default BarChart;
