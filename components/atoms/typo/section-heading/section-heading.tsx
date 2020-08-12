import styles from './section-heading.module.scss';
import * as React from 'react';
import {ColorNames} from '~models/colors';
import {UnderlineContent} from '~models/UnderlineContent';

export interface SectionHeadingProps {
    className?: string;
    content: UnderlineContent[]
}
const SectionHeading = ({className = '', content = [{text: 'I am a heading', underlineColor: ColorNames.primary, lineBreak: false}]}: SectionHeadingProps) => {
    return <h2 className={className}>
        {content.map((item, index) =>
            <span key={index}>
            <span className={`${styles.heading} ${styles[item.underlineColor]}`}>{item.text} </span>
            {item.lineBreak && <br/>}
            </span>
        )}
    </h2>
}
export default SectionHeading
