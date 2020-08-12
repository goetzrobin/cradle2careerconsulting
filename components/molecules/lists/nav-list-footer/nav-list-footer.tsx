import NavLink, {NavLinkProps} from '~components/atoms/typo/nav-link/nav-link';
import * as React from 'react';
import styles from './nav-list-footer.module.scss';


export interface NavListProps {
    navItems: NavLinkProps[]
    onItemClicked: (href: string) => void;
}

const NavListFooter = ({onItemClicked, navItems = []}: NavListProps) => {
    return <>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {navItems
                    .map(({href, linkText, underlineColor}, index) => <NavLink key={index}
                                                                               href={href}
                                                                               onItemClicked={onItemClicked}
                                                                                    linkText={linkText}
                                                                                    underlineColor={underlineColor}/>)}
            </ul>
        </nav>
    </>
};

export default NavListFooter;
