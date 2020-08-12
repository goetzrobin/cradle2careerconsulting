import * as React from 'react';
import styles from './testimonials.module.scss';
import {QuoteProps} from '~components/molecules/texts/quote/quote';
import BlobPicture from '~components/molecules/blob-picture/blob-picture';
import QuoteSlider from '~components/molecules/sliders/quote-slider/quote-slider';
import {useState} from 'react';
import TextSectionCenter from '~components/molecules/texts/section-center/TextSectionCenter';
import {UnderlineContent} from '~models/UnderlineContent';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import {Colors} from '~models/colors';
import Dots from '~components/atoms/geometry/other/Dots';
import Triangles from '~components/atoms/geometry/other/Triangles';

export interface TestimonialsProps {
    testimonials: TestimonialProps[];
    sectionContent: UnderlineContent[];
}

export interface TestimonialProps extends QuoteProps {
    image: string;
}

const Testiomnials = ({testimonials = [], sectionContent}: TestimonialsProps) => {
    const [currentlyShowingQuote, setCurrentlyShowingQuote] = useState(0);
    const onSlideChanged = (newIndex: number) => setCurrentlyShowingQuote(newIndex)
    return <div className={styles.container}>
        <TextSectionCenter sectionContent={sectionContent}/>
        <div className={styles.testimonials}>
            <BlobPicture src={testimonials[currentlyShowingQuote] && testimonials[currentlyShowingQuote].image}/>
            <div className={styles.quotes}>
                <QuoteSlider onSlideChanged={onSlideChanged} quotes={testimonials}/>
            </div>
        </div>

        <div className={styles.stripes}>
            <RectAngleStripes width="60px" height="60px" color={Colors.primary}/>
        </div>
        <div className={styles.dots}>
            <Dots color={Colors.secondary} width="150px" height="150px"/>
        </div>
        <div className={styles.triangles}>
            <Triangles width="60px" height="60px" rotationInDegrees={45}/>
        </div>
    </div>
};

export default Testiomnials
