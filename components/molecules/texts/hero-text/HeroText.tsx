import MainHeading from '~components/atoms/typo/main-heading/main-heading';
import * as React from 'react';
import styles from './HeroText.module.scss';
import {UnderlineContent} from '~models/UnderlineContent';
import {Button} from '@material-ui/core';

export interface HeroTextProps {
    className?: string;
    onButtonClick?: () => void;
    headingContent: UnderlineContent[];
    buttonText: string;
}
const HeroText = ({className, onButtonClick, headingContent, buttonText}: HeroTextProps) => {
    return <div className={className}>
        <h2 className={styles.top}>Cradle 2 Career Consulting</h2>
        <MainHeading className={styles.main} content={headingContent}/>
        <Button size="large" variant="contained" onClick={onButtonClick}  color="primary" disableElevation>{buttonText}</Button>
    </div>
};
export  default HeroText
