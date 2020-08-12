import SectionHeading from '~components/atoms/typo/section-heading/section-heading';
import styles from './TextSectionCenter.module.scss';
import * as React from 'react';
import {UnderlineContent} from '~models/UnderlineContent';

export interface TextSectionLeftProps {
    className?: string;
    sectionContent: UnderlineContent[];
    text?: string;
}

const TextSectionCenter = ({className, sectionContent, text}: TextSectionLeftProps) => {
    return <div className={className}>
        <div className={styles.container}>
            <SectionHeading content={sectionContent}/>
            {text && <p className={styles.text}>{text}</p>}
        </div>
    </div>
};

export default TextSectionCenter
