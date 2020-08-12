import * as React from 'react';
import {Colors} from '~models/colors';
import {CircleProps} from '~components/atoms/geometry/circles/CircleProps';

const OneCornerCircle = ({color = Colors.primary, rotationInDegrees = 0, width = '100%', height = '100%'}: CircleProps) => {
    const styleTransformPath = {transform: `rotate(${rotationInDegrees}deg)`, transformOrigin: 'center'};
    return (
        <svg width={width} height={height} viewBox="0 0 203 203" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                style={styleTransformPath}
                d="M202.154 101.594C202.154 157.362 156.945 202.571 101.177 202.571C45.4086 202.571 0.199707 157.362 0.199707 101.594C0.199707 53.2372 0.199707 0.617233 0.199707 0.617233C0.199707 0.617233 48.5567 0.617233 101.177 0.617233C156.945 0.617233 202.154 45.8261 202.154 101.594Z"
                fill={`#${color}`}/>
        </svg>);
}

export default  OneCornerCircle;
