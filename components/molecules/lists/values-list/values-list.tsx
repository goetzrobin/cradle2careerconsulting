import styles from './values-list.module.scss'
import BlobList from '~components/molecules/lists/blob-list/blob-list';
import * as React from 'react';
import BlobOne from '~components/atoms/geometry/blobs/BlobOne';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import Dots from '~components/atoms/geometry/other/Dots';
import {Colors} from '~models/colors';

const ValuesList = ({listItems = [], image}: { listItems?: string[], image?: string }) => {
    return <div className={styles.container}>
        <BlobList className={styles.values} listItems={listItems}/>
        <div className={styles.image}>
            <BlobOne image={image} hasImage={true}/>
        </div>
        <div className={styles.stripes}>
            <RectAngleStripes color={Colors.secondary}/>
        </div>
        <div className={styles.dots}>
            <Dots width="200px" />
        </div>
    </div>
};

export default ValuesList
