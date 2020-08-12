import styles from './nav-link.module.scss';
import * as React from 'react';
import Link from 'next/link';
import {ColorNames} from '~models/colors';

export interface NavLinkProps {
    underlineColor?: ColorNames;
    href: string;
    linkText: string;
    onItemClicked?: (href: string) => void;
}
const NavLink = ({underlineColor = ColorNames.primary, href, linkText, onItemClicked}: NavLinkProps) => {
    return  <li className={styles.navItem}><a onClick={() => onItemClicked(href)} className={`${styles.navLink} ${styles[underlineColor]}`}>{linkText}</a></li>
};

export default NavLink
