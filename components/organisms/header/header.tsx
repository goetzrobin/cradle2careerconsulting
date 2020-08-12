import * as React from 'react';
import styles from './header.module.scss';
import NavList from '~components/molecules/lists/nav-list/nav-list';
import {Logo} from '~components/atoms/icons/Logo';

const Header = ({navItems, onItemClicked}) => {
    return <div className={styles.container}>
        <div className={styles.logo}>
            <Logo/>
        </div>
        <NavList onItemClicked={onItemClicked} navItems={navItems}/>
    </div>
}

export default Header
