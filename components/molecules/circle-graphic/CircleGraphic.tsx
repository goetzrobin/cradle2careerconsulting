import * as React from 'react';
import TwoCornerDiagonalCircle from '~components/atoms/geometry/circles/twocorner-diagonal/TwoCornerDiagonalCircle';
import {Colors} from '~models/colors';
import styles from './CircleGraphic.module.scss';
import HalfCircle from '~components/atoms/geometry/circles/half/HalfCircle';
import OneCornerCircle from '~components/atoms/geometry/circles/onecorner/OneCornerCircle';
import TwoCornerCircle from '~components/atoms/geometry/circles/twocorner/TwoCornerCircle';
import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import ImageCircle from '~components/atoms/geometry/circles/full/ImageCircle';

export interface CircleGraphicProps {
    className?: string;
    image1?: string;
    image2?: string;
}

const CircleGraphic = ({className, image1 = '', image2 = ''}: CircleGraphicProps) => {
    return <div className={className}>
        <div className={styles.container}>
            <div/>
            <div/>
            <div className={styles.item}>
                <TwoCornerDiagonalCircle color={Colors.accent}/>
            </div>
            <div className={styles.item}>
                <HalfCircle/>
            </div>
            <div className={styles.item}>
                <ImageCircle image={image1}/>
            </div>
            <div className={styles.item}>
                <TwoCornerDiagonalCircle color={Colors.secondary} rotationInDegrees={180}/>
            </div>
            <div className={styles.item}>
                <TwoCornerCircle color={Colors.secondary}/>
            </div>
            <div className={styles.item}>
                <OneCornerCircle rotationInDegrees={180} color={Colors.grey}/>
            </div>
            <div className={styles.item}>
                <TwoCornerCircle rotationInDegrees={180} color={Colors.accent}/>
            </div>
            <div className={styles.item}>
                <OneCornerCircle rotationInDegrees={180} color={Colors.grey}/>
            </div>
            <div className={styles.item}>
                <ImageCircle image={image2}/>
            </div>
            <div className={styles.item}>
                <TwoCornerCircle color={Colors.primary}/>
            </div>
        </div>
    </div>
};

export default CircleGraphic
