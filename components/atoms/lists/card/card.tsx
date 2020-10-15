import * as React from 'react';
import styles from './card.module.scss';
import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import {Colors} from '~models/colors';

export interface CardProps {
    iconBackgroundColor?: Colors;
    headline: string;
    text: string;
    icon: string;
}
const Card = ({iconBackgroundColor = Colors.secondary, headline, text, icon}: CardProps) => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <i aria-hidden className={`fas fa-${icon} ${styles.icon}`}></i>
            <FullCircle height="150px" width="150px" color={iconBackgroundColor} />
        </div>
        <h2 className={styles.headline}>{headline}</h2>
        {text && <p className={styles.text}>{text}</p>}
    </div>
};

export default Card;
