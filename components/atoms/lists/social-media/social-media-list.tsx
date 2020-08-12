import styles from './social-media.module.scss';
import * as React from 'react';

const SocialMediaList = ({className = ''}: {className?: string}) => {
    return <div className={className}>
        <div className={styles.socialMedia}>
        <a target="_blank" href="https://facebook.com">facebook</a>
        <a target="_blank" href="https://facebook.com">instagram</a>
        <a target="_blank" href="https://facebook.com">twitter</a>
        </div>
    </div>
};

export default SocialMediaList
