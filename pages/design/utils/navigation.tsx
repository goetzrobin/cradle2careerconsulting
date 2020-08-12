import Link from 'next/dist/client/link';
import * as React from 'react';
import styles from './utils.module.scss';

const Navigation = ({siteName}: {siteName: string}) => {
    return (<>
        <h1>{siteName}</h1>
        <Link href="/design/atoms"><a className={styles.link}>Atoms</a></Link>
        <Link href="/design/molecules"><a className={styles.link}>Molecules</a></Link>
        <Link href="/design/organisms"><a className={styles.link}>Organisms</a></Link>
    </>)
};

export default Navigation
