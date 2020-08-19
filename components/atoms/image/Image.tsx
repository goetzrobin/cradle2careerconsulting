import * as React from 'react';
import styles from './image.module.scss';
import {useEffect, useRef, useState} from 'react';

export interface ImageProps {
    style?: any;
    className?: string;
    src: string;
    alt?: string;
}



const Image = ({style,className, src = 'images/friends.jpg', alt=''}: ImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const imageRef = useRef();
    const handleLoadedImage = () => {
        setLoaded(true);
    }
    // @ts-ignore
    useEffect(() => {imageRef && imageRef.current && imageRef.current.complete && handleLoadedImage()});
    return (
        <div style={style} className={`${className} ${styles.imageContainer}`}>
            <img style={loaded ? {opacity: 0, transition: 'opacity 300ms ease-in-out'} : {}} className={styles.blurImage} src={require(`../../../content/${src}?lqip`)} alt={alt}/>
            <img ref={imageRef} className={styles.image} src={require(`../../../content/${src}`)} alt={alt} onLoad={() => handleLoadedImage()}/>
        </div>
    );
};

export default Image;
