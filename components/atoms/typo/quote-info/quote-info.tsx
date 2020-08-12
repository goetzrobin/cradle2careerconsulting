import * as React from 'react';
import styles from './quote-info.module.scss';

export interface QuoteInfoProps {
    name: string;
    info: string;
}

const QuoteInfo = ({name, info}: QuoteInfoProps) => {
    return <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{info}</p>
    </div>
}
export default QuoteInfo
