import * as React from 'react';
import {Colors} from '~models/colors';
import {CircleProps} from '~components/atoms/geometry/circles/CircleProps';

const TwoCornerCircle = ({color = Colors.primary, rotationInDegrees = 0, width = '100%', height = '100%'}: CircleProps) => {
    const styleTransformPath = {transform: `rotate(${rotationInDegrees}deg)`, transformOrigin: 'center'};
    return (<svg width={width} height={height} viewBox="0 0 203 203" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            style={styleTransformPath}
            d="M0.0987396 101.515C0.0987396 129.642 0.0987396 202.492 0.0987396 202.492C0.0987396 202.492 73.4339 202.492 101.076 202.492C126.333 202.492 202.052 202.492 202.052 202.492C202.052 202.492 202.052 132.026 202.052 101.515C202.052 53.1584 202.052 0.538513 202.052 0.538513C202.052 0.538513 153.696 0.538513 101.076 0.538513C45.3076 0.538513 0.0987396 45.7474 0.0987396 101.515Z"
            fill={`#${color}`}/>
    </svg>);
};

export default TwoCornerCircle
