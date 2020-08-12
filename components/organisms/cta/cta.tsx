import * as React from 'react';
import {PropsWithChildren} from 'react';
import styles from './cta.module.scss';
import TextSectionCta from '~components/molecules/texts/section-cta/TextSectionCta';
import {UnderlineContent} from '~models/UnderlineContent';
import Rocket from '~components/atoms/geometry/other/Rocket';
import Triangles from '~components/atoms/geometry/other/Triangles';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import OneCornerCircle from '~components/atoms/geometry/circles/onecorner/OneCornerCircle';
import {Colors} from '~models/colors';

export interface CTAProps {
    sectionContent: UnderlineContent[];
    text: string;
}

const CTA = ({sectionContent, text, children}: PropsWithChildren<CTAProps>) => {
    return <div className={styles.container}>
        <TextSectionCta sectionContent={sectionContent} text={text}>
            {children}
        </TextSectionCta>
        <div className={styles.rocket}>
            <Rocket/>
        </div>

        <div className={styles.triangle}>
            <Triangles rotationInDegrees={45}/>
        </div>
        <div className={styles.oneCorner}>
            <OneCornerCircle color={Colors.accent} rotationInDegrees={90}/>
        </div>
        <div className={styles.stripes}>
            <RectAngleStripes color={Colors.secondary} />
        </div>
    </div>
};
export default CTA;
