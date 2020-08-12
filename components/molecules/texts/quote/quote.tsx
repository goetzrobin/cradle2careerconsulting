import * as React from 'react';
import QuoteText from '~components/atoms/typo/quote-text/quote-text';
import styles from './quote.module.scss';
import QuoteInfo from '~components/atoms/typo/quote-info/quote-info';

export interface QuoteProps {
    text: string;
    name: string;
    info: string;
}

const Quote = ({text, name, info}: QuoteProps) => {
    return <div className={styles.container}>
        <QuoteText text={text}/>
        <QuoteInfo name={name} info={info}/>
    </div>

};
export default Quote
