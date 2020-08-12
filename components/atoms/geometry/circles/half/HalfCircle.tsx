import * as React from 'react';
import {CircleProps} from '~components/atoms/geometry/circles/CircleProps';
import {Colors} from '~models/colors';

const HalfCircle = ({color = Colors.primary, width = '100%', height = '100%'}: CircleProps) => {
    return <svg width={width} height={height} viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 100.977C100 156.745 145.406 201.954 201.418 201.954C201.418 201.954 201.418 129.32 201.418 100.977C201.418 52.6199 201.418 0 201.418 0C145.406 4.89669e-06 100 45.2089 100 100.977Z"
            fill={`#${color}`}/>
    </svg>
};

export default HalfCircle
