import React, { Component } from 'react'

const TEXT_PADDING = 5;

const initialState = {
    barColor: 'lightpink',
}

class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    render() {
        const { x, y, barWidth, height, amount } = this.props;
        const textSettings = {
            x: x + barWidth - TEXT_PADDING,
            textAnchor: 'end',
            y: y,
            dy: '1rem',
        };
        const bar = (<rect
            x={x}
            y={y}
            width={barWidth}
            height={height}
            fill={this.state.barColor}
        />);
        const text = <text {...textSettings}>{amount}</text>
        return <g>
            {bar}
            {text}
        </g>;
    }
}

export default Bar;
