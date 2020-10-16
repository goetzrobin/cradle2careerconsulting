import * as React from 'react';
import styles from './header.module.scss';
import NavList from '~components/molecules/lists/nav-list/nav-list';
import { Logo } from '~components/atoms/icons/Logo';
import { Link } from '@material-ui/core';

const Header = ({ navItems, onItemClicked }) => {
    return <div className={styles.container}>
        <div className={styles.logo}>
            <Link href="/">
                <Logo />
            </Link>
        </div>
        <NavList onItemClicked={onItemClicked} navItems={navItems} />
    </div>
}

export default Header
