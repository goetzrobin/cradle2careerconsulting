import CircleGraphic from '~components/molecules/circle-graphic/CircleGraphic';
import HeroText from '~components/molecules/texts/hero-text/HeroText';
import * as React from 'react';
import styles from './hero.module.scss';
import {UnderlineContent} from '~models/UnderlineContent';

export interface HeroProps {
    onButtonClick?: () => void;
    buttonText: string;
    headingContent: UnderlineContent[];
}

const Hero = ({onButtonClick = () => alert('Clicked'), buttonText, headingContent}: HeroProps) => {
    return <div className={styles.container}>
        <HeroText onButtonClick={onButtonClick} className={styles.text} buttonText={buttonText}
                  headingContent={headingContent}/>
        <div className={styles.graphic}>
            <CircleGraphic/>
        </div>
    </div>
};

export default Hero;
