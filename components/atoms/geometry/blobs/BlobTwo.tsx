import {Colors} from '~models/colors';
import * as React from 'react';

const BlobTwo = ({color = Colors.primary, width = '100%', height = '100%'}) =>
    <svg width={width} height={height} viewBox="0 0 374 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M141.495 14.3197C204.687 -8.58658 260.446 -2.70523 303.503 22.6775C346.561 48.3697 376.609 93.5632 373.821 134.114C371.033 174.664 335.1 210.262 285.537 247.407C235.664 284.552 172.162 323.245 111.757 305.601C51.3521 287.648 -6.26481 213.357 0.550089 150.829C7.05522 87.9914 77.9922 36.9165 141.495 14.3197Z" fill={`#${color}`}/>
    </svg>;

export default BlobTwo;
