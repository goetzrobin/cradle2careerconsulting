import * as React from 'react';
import styles from './blob-picture.module.scss';
import {Colors} from '~models/colors';
import BlobThree from '~components/atoms/geometry/blobs/BlobThree';
import Image from '~components/atoms/image/Image';

const BlobPicture = ({src = '/img/friends.jpeg'}) => {
    return <div className={styles.container} >
        <BlobThree color={Colors.secondary}/>
        <Image className={styles.image} src={src}/>
    </div>
};

export default BlobPicture
