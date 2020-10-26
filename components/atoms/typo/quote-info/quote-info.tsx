import * as React from 'react';
import styles from './quote-info.module.scss';

export interface QuoteInfoProps {
    name: string;
}

const QuoteInfo = ({name}: QuoteInfoProps) => {
    return <div className={styles.info}>
        <p className={styles.name}>{name}</p>
    </div>
}
export default QuoteInfo
