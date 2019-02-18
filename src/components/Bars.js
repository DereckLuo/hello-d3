import React from 'react';
import Bar from './Bar';

const Bars = ({ scales, data, margins, svgDimensions, }) => {
    const { xScale, yScale } = scales
    const barsHorizontal = (data.map(datum => {
        const { price, amount } = datum;
        const y = yScale(price);
        const height = yScale.bandwidth() * 0.8;
        const x = margins.left;
        const barWidth = xScale(amount) - margins.left;
        return (
            <Bar
                key={`${price}-${amount}-bar`}
                x={x}
                y={y}
                barWidth={barWidth}
                height={height}
                price={price}
                amount={amount}
            />
        )
    }));
    return (
        <g>{barsHorizontal}</g>
    );
}

export default Bars;
