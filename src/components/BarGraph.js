import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import Bars from './Bars'

const data = [
    { price: 10, amount: 100 },
    { price: 20, amount: 200 },
    { price: 30, amount: 300 },
    { price: 40, amount: 250 },
    { price: 50, amount: 80 },
]

class BarChart extends Component {
    constructor() {
        super()
        this.yScale = scaleBand()
        this.xScale = scaleLinear()
    }

    render() {
        const margins = { top: 50, right: 30, bottom: 100, left: 20 };

        const svgDimensions = {
            width: 500,
            height: 500
        }

        const maxValue = Math.max(...data.map(d => d.amount))

        // scaleBand type
        const xScale = this.xScale
            .domain([0, maxValue])
            .range([margins.left, svgDimensions.width - margins.right])

        // scaleLinear type
        const yScale = this.yScale
            .domain(data.map(d => d.price, 2))
            .range([svgDimensions.height - margins.bottom, margins.top])

        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
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
