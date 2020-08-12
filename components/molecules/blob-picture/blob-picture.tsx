import * as React from 'react';
import styles from './blob-picture.module.scss';
import {Colors} from '~models/colors';
import BlobThree from '~components/atoms/geometry/blobs/BlobThree';

const BlobPicture = ({src = ''}) => {
    return <div className={styles.container} >
        <BlobThree color={Colors.secondary}/>
        <img className={styles.image} src={src}/>
    </div>
};

export default BlobPicture
