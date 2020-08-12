import SectionHeading from '~components/atoms/typo/section-heading/section-heading';
import styles from './TextSectionLeft.module.scss';
import * as React from 'react';
import {UnderlineContent} from '~models/UnderlineContent';
import ReactMarkdown from 'react-markdown';

export interface TextSectionLeftProps {
    className?: string;
    sectionContent: UnderlineContent[];
    text: string;
}

const TextSectionLeft = ({className, sectionContent, text}: TextSectionLeftProps) => {
    return <div className={className}>
        <SectionHeading content={sectionContent}/>
        {text && <div className={styles.text}>
            <ReactMarkdown source={text}/></div>}
    </div>
};

export default TextSectionLeft
