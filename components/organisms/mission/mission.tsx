import * as React from 'react';
import styles from './mission.module.scss';
import TextSectionLeft from '~components/molecules/texts/section-left/TextSectionLeft';
import {ColorNames, Colors} from '~models/colors';
import ValuesList from '~components/molecules/lists/values-list/values-list';
import {UnderlineContent} from '~models/UnderlineContent';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import Dots from '~components/atoms/geometry/other/Dots';
import Triangles from '~components/atoms/geometry/other/Triangles';
import OneCornerCircle from '~components/atoms/geometry/circles/onecorner/OneCornerCircle';
import TwoCornerDiagonalCircle from '~components/atoms/geometry/circles/twocorner-diagonal/TwoCornerDiagonalCircle';

export interface MissionProps {
    onButtonClick?: () => void;
    listItems: any[];
    sectionContent: UnderlineContent[];
    text: string;
    image?: string;
}

const Mission = ({listItems, sectionContent, text, image}: MissionProps) => {
    return <div className={styles.container}>
        <TextSectionLeft sectionContent={sectionContent} text={text}/>
        <div className={styles.values}>
            <ValuesList image={image} listItems={listItems}/>
        </div>
        <div className={styles.stripes}>
            <OneCornerCircle rotationInDegrees={90} width="50px" height="50px" color={Colors.accent}/>
        </div>
        <div className={styles.onecorner}>
            <OneCornerCircle width="50px" height="50px"/>
        </div>
        <div className={styles.triangles}>
            <Triangles width="60px" height="60px"/>
        </div>
    </div>
};

export default Mission;
