import * as React from 'react';
import {Colors} from '~models/colors';

const Triangles = ({primaryColor = Colors.primary, secondaryColor = Colors.secondary, rotationInDegrees = 0, width = '100%', height = '100%'}) => {
    const transform = {transform: `rotate(${rotationInDegrees}deg)`, transformOrigin: 'center'};
    return <svg
        style={transform}
        width={width} height={height} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.842346 0.842346L50.0126 1.78828L1.78828 50.0126L0.842346 0.842346Z"
              fill={`#${primaryColor}`}/>
        <path d="M16.929 16.929L66.0993 17.875L17.875 66.0993L16.929 16.929Z" fill={`#${secondaryColor}`}/>
    </svg>;
}

export default Triangles;
