import React from 'react';
import classes from './Circle.module.scss';

const circle = (props) => {
    const INITIAL_OFFSET = 25;
    const circleConfig = {
        viewBox: '0 0 38 38',
        x: '19',
        y: '19',
        radio: '15.91549430918954'
      };
    
 return   (
    <figure>
        <svg viewBox={circleConfig.viewBox}>
            <circle
            className="ring"
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke={props.trailStrokeColor}
            stroke-width="4"
            />

            <circle
            className="path"
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke={props.strokeColor}
            stroke-width="4"
            strokeDasharray={`${props.percentage} ${100 - props.percentage}`}
            strokeDashoffset={INITIAL_OFFSET}
            />
            <g className={classes.circleLabel}>
                <text x="50%" y="50%" className={classes.circlePercentage}>
                    {props.text}
                </text>
            </g>
        </svg>
    </figure>
)

}

export default circle;





