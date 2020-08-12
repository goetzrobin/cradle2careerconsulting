import * as React from 'react';
import styles from './quote-text.module.scss';
import ReactMarkdown from 'react-markdown';

export interface QuoteTextProps {
    text: string;
}

const QuoteText = ({text}: QuoteTextProps) => {
    return <div className={`${styles.container}`}>
        <span className={styles.mark}>"</span>
        <div className={styles.text}>
            <ReactMarkdown source={text}/>
        </div>
    </div>
}
export default QuoteText
