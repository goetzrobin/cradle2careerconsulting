import * as React from 'react';
import styles from './adventure.module.scss';
import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import { Colors } from '~models/colors';
import MouseOverPopover from '~components/atoms/popovers/mouseover-popover/MouseOverPopOver';
import Image from '~components/atoms/image/Image';
import { TeamMemberProps } from '../team-member/team-member';
import ReactMarkdown from 'react-markdown';

export interface CardProps {
    iconBackgroundColor?: Colors;
    headline: string;
    time: string;
    instructor: TeamMemberProps
    icon: string;
}
const Adventure = ({ iconBackgroundColor = Colors.secondary, headline, time, icon, instructor }: CardProps) => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.dot}>
                <i aria-hidden className={`fas fa-${icon} ${styles.icon}`}></i>
                <FullCircle height="50px" width="50px" color={iconBackgroundColor} />
            </div>
            <h2 className={styles.headline}>{headline}</h2>
        </div>
        <div>
            {time && <p className={styles.text}>at <span style={{ fontSize: '1.4rem', color: `#${Colors.primary}` }}>{time}</span></p>}
            {instructor?.name && <MouseOverPopover text={
                <span>
                    with <span style={{fontSize: '1.4rem',fontFamily: `'Indie Flower', cursive`}}>{instructor.name}</span>
                </span>
            }>
                <div className={styles.popover}>
                    <img className={styles.popoverImage} src={require(`../../../../content/${instructor.image}`)} alt={instructor.name} />
                    <div className={styles.popoverText}>
                        <h3>{instructor.name}</h3>
                        <ReactMarkdown source={instructor.text || ''} />
                    </div>
                </div>
            </MouseOverPopover>}
        </div>
    </div>
};

export default Adventure;
