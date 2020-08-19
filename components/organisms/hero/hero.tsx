import CircleGraphic from '~components/molecules/circle-graphic/CircleGraphic';
import HeroText from '~components/molecules/texts/hero-text/HeroText';
import * as React from 'react';
import styles from './hero.module.scss';
import {UnderlineContent} from '~models/UnderlineContent';

export interface HeroProps {
    above?: string;
    onButtonClick?: () => void;
    buttonText: string;
    headingContent: UnderlineContent[];
    image1?: string;
    image2?: string;
}

const Hero = ({above, onButtonClick = () => alert('Clicked'), image1, image2, buttonText, headingContent}: HeroProps) => {
    return <div className={styles.container}>
        <HeroText above={above} onButtonClick={onButtonClick} className={styles.text} buttonText={buttonText}
                  headingContent={headingContent}/>
        <div className={styles.graphic}>
            <CircleGraphic image1={image1} image2={image2}/>
        </div>
    </div>
};

export default Hero;
