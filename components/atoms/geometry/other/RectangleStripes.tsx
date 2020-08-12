import * as React from 'react';
import {Colors} from '~models/colors';

const RectAngleStripes = ({color = Colors.primary, width = '100%', height = '100%'}) =>
    <svg width={width} height={height} viewBox="0 0 100 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 90H100V97H1V90Z" fill={`#${color}`}/>
        <path d="M1 80H100V87H1V80Z" fill={`#${color}`}/>
        <path d="M1 70H100V77H1V70Z" fill={`#${color}`}/>
        <path d="M0 60H99V67H0V60Z" fill={`#${color}`}/>
        <path d="M0 50H99V57H0V50Z" fill={`#${color}`}/>
        <path d="M0 40H99V47H0V40Z" fill={`#${color}`}/>
        <path d="M0 30H99V37H0V30Z" fill={`#${color}`}/>
        <path d="M0 20H99V27H0V20Z" fill={`#${color}`}/>
        <path d="M0 10H99V17H0V10Z" fill={`#${color}`}/>
        <path d="M0 0H99V7H0V0Z" fill={`#${color}`}/>
    </svg>;

export default RectAngleStripes;
