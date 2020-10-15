import MainHeading from '~components/atoms/typo/main-heading/main-heading';
import * as React from 'react';
import styles from './HeroText.module.scss';
import {UnderlineContent} from '~models/UnderlineContent';
import {Button} from '@material-ui/core';

export interface HeroTextProps {
    above?: string;
    className?: string;
    onButtonClick?: () => void;
    headingContent: UnderlineContent[];
    buttonText: string;
}
const HeroText = ({above, className, onButtonClick, headingContent, buttonText}: HeroTextProps) => {
    return <div className={className}>
        {above && <h1 className={styles.top}>{above}</h1>}
        <MainHeading className={styles.main} content={headingContent}/>
        <Button size="large" variant="contained" onClick={onButtonClick}  color="primary" disableElevation>{buttonText}</Button>
    </div>
};
export  default HeroText
