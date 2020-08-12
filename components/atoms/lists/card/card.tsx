import * as React from 'react';
import styles from './card.module.scss';
import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import {Colors} from '~models/colors';

export interface CardProps {
    iconBackgroundColor?: Colors;
    headline: string;
    text: string;
}
const Card = ({iconBackgroundColor = Colors.secondary, headline, text}: CardProps) => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <FullCircle height="150px" width="150px" color={iconBackgroundColor} />
        </div>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.text}>{text}</p>
    </div>
};

export default Card;
