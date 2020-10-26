import * as React from 'react';
import styles from './quote-text.module.scss';
import ReactMarkdown from 'react-markdown';
import Button from '@material-ui/core/Button';

export interface QuoteTextProps {
    text: string;
    onClick: () => void
}

const QuoteText = ({ text, onClick }: QuoteTextProps) => {
    return <div className={`${styles.container}`}>
        <span className={styles.mark}>"</span>
        <div className={styles.text}>
            <ReactMarkdown source={text} />
            <Button variant="outlined" color="primary" onClick={onClick}>
                Read More
            </Button>
        </div>
    </div>
}
export default QuoteText
