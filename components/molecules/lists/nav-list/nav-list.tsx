import NavLink, {NavLinkProps} from '~components/atoms/typo/nav-link/nav-link';
import * as React from 'react';
import styles from './nav-list.module.scss';
import {Button, Menu, useMediaQuery} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavListFooter from '~components/molecules/lists/nav-list-footer/nav-list-footer';

export interface NavListProps {
    navItems: NavLinkProps[];
    onItemClicked: (href: string) => void;
}

const NavList = ({navItems = [], onItemClicked}: NavListProps) => {
    const matches = useMediaQuery('(min-width:960px)');

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (href, onItemClicked) => {
        setAnchorEl(null);
        onItemClicked(href);
    };

    return !matches ? <div>
        <Button size="large" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon/>
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >
            {navItems.map(({href, linkText, underlineColor},
                           index) => <MenuItem key={index}
                                               onClick={() => handleClose(href, onItemClicked)}>{linkText}</MenuItem>)}
        </Menu>
    </div> : <NavListFooter navItems={navItems} onItemClicked={onItemClicked}/>
};

export default NavList;
