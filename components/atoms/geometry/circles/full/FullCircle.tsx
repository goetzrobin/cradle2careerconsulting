import * as React from 'react';
import {CircleProps} from '~components/atoms/geometry/circles/CircleProps';
import {Colors} from '~models/colors';

const FullCircle = ({color = Colors.primary, height = '100%', width = '100%'}: CircleProps) => {
    return <svg width={width} height={height} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill={ `#${color}`}/>
    </svg>;
};

export default FullCircle
