import * as React from 'react';
import {CircleProps} from '~components/atoms/geometry/circles/CircleProps';
import {Colors} from '~models/colors';

export interface ImageProps {
    image: string;
    alt?: string;
    height?: string;
    width?: string;
}
const ImageCircle = ({image='', alt= '', height = '99%', width = '100%'}: ImageProps) => {
    return <img style={{height, width, display: 'block', borderRadius: '50%', objectFit: 'cover'}} alt={alt} src={image}/>;
};

export default ImageCircle
