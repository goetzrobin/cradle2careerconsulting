import Activities from "pages/activities"
import Layout from "./layout/layout"

import * as React from 'react';
import { NavLinkProps } from "~components/atoms/typo/nav-link/nav-link";
import { ColorNames } from "~models/colors";
import LayoutComponent from './layout/layout-component'
const ActivitiesTemplate = () => {
    const navItems: NavLinkProps[] = [
        {href: 'hero', linkText: 'Home', underlineColor: ColorNames.secondary},
        {href: 'mission', linkText: 'Mission & Values', underlineColor: ColorNames.primary},
        {href: 'service', linkText: 'Services', underlineColor: ColorNames.accent},
        {href: 'test', linkText: 'Testimonials', underlineColor: ColorNames.secondary},
        {href: 'team', linkText: 'Team', underlineColor: ColorNames.accent},
        {href: 'cta', linkText: 'Start today', underlineColor: ColorNames.primary}
    ];
    
    return <Layout navItems={navItems}>
        <LayoutComponent>
            <p>Hello World</p>
        </LayoutComponent>
    </Layout>
}

export default ActivitiesTemplate