import * as React from 'react';
import styles from './footer.module.scss';
import {NavLinkProps} from '~components/atoms/typo/nav-link/nav-link';
import {ColorNames} from '~models/colors';
import {Logo} from '~components/atoms/icons/Logo';
import SocialMediaList from '~components/atoms/lists/social-media/social-media-list';
import EmailCTA from '~components/atoms/inputs/email-cta/email-cta';
import NavListFooter from '~components/molecules/lists/nav-list-footer/nav-list-footer';


const Footer = ({onItemClicked, navItems}) => {
    return <div className={styles.container}>
        <div className={styles.logo}>
            <Logo/>
        </div>
        <h1 className={styles.consulting}>Gradle To Carrer Consulting</h1>
        <div className={styles.row}>
            <div className={styles.nav}>
            <NavListFooter onItemClicked={onItemClicked} navItems={navItems}/>
            </div>
            <div className={styles.cta}>
                <EmailCTA color={ColorNames.primary}/>
            </div>
        </div>
        <div className={styles.row}>
            <SocialMediaList className={styles.social}/>
            <div className={styles.legal}>
                &copy; {(new Date()).getFullYear()} &nbsp; Gradle To Career Consulting LLC.
            </div>
        </div>
    </div>
}

export default Footer
