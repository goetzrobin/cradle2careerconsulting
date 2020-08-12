import SectionHeading from '~components/atoms/typo/section-heading/section-heading';
import styles from './TextSectionCta.module.scss';
import * as React from 'react';
import {UnderlineContent} from '~models/UnderlineContent';
import {PropsWithChildren} from 'react';
import ReactMarkdown from 'react-markdown';

export interface TextSectionLeftProps {
    className?: string;
    sectionContent: UnderlineContent[];
    text: string;
}

const TextSectionCta = ({className, sectionContent, text, children}: PropsWithChildren<TextSectionLeftProps>) => {
    return <div className={className}>
        <SectionHeading content={sectionContent}/>
        {text && <div className={styles.text}><ReactMarkdown source={text}/></div>}
        {children}
    </div>
};

export default TextSectionCta
