import React from 'react'
import Axis from './Axis'

export default ({ scales, margins, svgDimensions, }) => {
    const { height, width } = svgDimensions

    const xPropsRight = {
        orient: 'Bottom',
        scale: scales.xScale,
        translate: `translate(0, ${height - margins.top})`,
        tickSize: height - margins.top - margins.bottom,
    }

    const yPropsRight = {
        orient: 'Left',
        scale: scales.yScale,
        translate: `translate(${margins.left - 1}, 0)`,
        tickSize: width - margins.left - margins.right,
    }

    return (
        <g>
            <Axis {...xPropsRight} />
            <Axis {...yPropsRight} />
        </g>
    )
}
