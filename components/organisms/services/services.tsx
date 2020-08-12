import styles from './services.module.scss';
import * as React from 'react';
import CardList from '~components/molecules/lists/card-list/card-list';
import TextSectionCenter from '~components/molecules/texts/section-center/TextSectionCenter';
import {UnderlineContent} from '~models/UnderlineContent';
import {CardProps} from '~components/atoms/lists/card/card';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import Dots from '~components/atoms/geometry/other/Dots';
import Triangles from '~components/atoms/geometry/other/Triangles';
import {Colors} from '~models/colors';

export interface ServicesProps {
    sectionContent: UnderlineContent[];
    cardList: CardProps[]
}

const Services = ({cardList, sectionContent}) => {
    return <div className={styles.container}>
        <TextSectionCenter sectionContent={sectionContent}/>
        <div className={styles.list}>
            <CardList cardList={cardList}/>
        </div>

        <div className={styles.stripes}>
            <RectAngleStripes width="100px" height="100px" color={Colors.accent}/>
        </div>
        <div className={styles.dots}>
            <Dots width="200px" height="200px"/>
        </div>
        <div className={styles.triangles}>
            <Triangles width="60px" height="60px"/>
        </div>
    </div>
};
export default Services;
