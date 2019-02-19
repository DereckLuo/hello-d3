import React, { Component } from 'react'
import { arc } from 'd3-shape'

class Arc extends Component {


    render() {
        const { value, label, fill, innerRadius, outerRadius, cornerRadius, padAngle } = this.props;

        const arcGenerator = arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(cornerRadius)
            .padAngle(padAngle)

        console.log(arcGenerator.centroid(value));

        return (
            <g>
                <path d={arcGenerator(value)} fill={fill} />}
                <text transform={`translate(${arcGenerator.centroid(value)})`} dy='0.35em'>{label}</text>
            </g >
        )
    }
}

export default Arc;
