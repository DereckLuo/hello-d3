import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { line } from 'd3-shape'
import Axes from './Axes'
import { data, margins, svgDimensions } from '../libs/data'


class LineGraph extends Component {
    render() {
        const { width, height } = svgDimensions;

        //sort data according x axies 
        data.sort((a, b) => {
            return a.price > b.price ? 1 : -1;
        });

        //find max values for both axies 
        const amountMax = Math.max(...data.map(d => d.amount));
        const priceMax = Math.max(...data.map(d => d.price));

        //setup x and y scales 
        const xScale = scaleLinear()
            .domain([0, priceMax])
            .range([margins.left, width - margins.right]);
        const yScale = scaleLinear()
            .domain([0, amountMax])
            .range([height - margins.top, margins.bottom]);

        //generate line
        const lineGenerator = line();
        lineGenerator.x(d => xScale(d.price));
        lineGenerator.y(d => yScale(d.amount));
        const highs = lineGenerator(data);

        return (
            <div>
                <svg width={width} height={height}>
                    <Axes
                        scales={{ xScale, yScale }}
                        margins={margins}
                        svgDimensions={svgDimensions}
                    />
                    <path className='line' d={highs} fill='none' stroke='#eb6a5b'></path>
                </svg>
            </div >
        )
    }
}

export default LineGraph;
