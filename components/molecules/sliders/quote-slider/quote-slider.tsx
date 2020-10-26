import styles from './quote-slider.module.scss';
import Quote, {QuoteProps} from '~components/molecules/texts/quote/quote';
import * as React from 'react';
import DefaultSlider from '~components/molecules/sliders/default-slider/default-slider';

export interface QuoteSliderProps {
    quotes: QuoteProps[]
    onSlideChanged?: (newIndex: number) => void
}

const QuoteSlider = ({quotes, onSlideChanged = (newIndex: number) => { console.log(newIndex)} }: QuoteSliderProps) => {
    const quoteComponents = quotes.map(({text, name, intro}, index) => <Quote key={index} text={text} name={name}
                                                                             intro={intro}/>);
    return <div className={styles.container}>
        <DefaultSlider onSlideChanged={onSlideChanged}>
            {quoteComponents}
        </DefaultSlider>
    </div>
};

export default QuoteSlider
