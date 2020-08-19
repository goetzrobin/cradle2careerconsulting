import styles from './main-heading.module.scss';
import * as React from 'react';
import {ColorNames} from '~models/colors';
import {UnderlineContent} from '~models/UnderlineContent';

export interface MainHeadingProps {
    className?: string;
    content: UnderlineContent[]
}

const MainHeading = ({
                         className = '',
                         content = [{
                             text: 'I am a heading',
                             underlineColor: ColorNames.primary,
                             lineBreak: false
                         }]
                     }: MainHeadingProps) => {
    return <h1 className={className}>
        {content.map((item, index) =>
            <span className={styles.borderContainer} key={index}>
                <span className={`${styles.heading} ${styles[item.underlineColor]}`}>{item.text} </span>
                {item.lineBreak && <br/>}
                </span>
        )}
    </h1>
}
export default MainHeading
