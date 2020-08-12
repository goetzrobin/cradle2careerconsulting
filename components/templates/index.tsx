import * as React from 'react';
import Hero from '~components/organisms/hero/hero';
import Mission from '~components/organisms/mission/mission';
import Services from '~components/organisms/services/services';
import LayoutComponent from '~components/templates/layout/layout-component';
import {td} from '~models/testdata';
import Layout from '~components/templates/layout/layout';
import {CardProps} from '~components/atoms/lists/card/card';
import Testiomnials, {TestimonialProps} from '~components/organisms/testimonials/testimonials';
import CTA from '~components/organisms/cta/cta';
import Team from '~components/organisms/team/team';
import EmailCTA from '~components/atoms/inputs/email-cta/email-cta';
import {useRef} from 'react';
import {NavLinkProps} from '~components/atoms/typo/nav-link/nav-link';
import {ColorNames} from '~models/colors';


export interface IndexTemplateProps {
    missionText: string;
    missionValues: string[];
    serviceCards: CardProps[];
    testimonials: TestimonialProps[];
    ctaText: string
}

const scrollToRef = (referenceArray, key) => {
    setTimeout(function () {
        window.scrollTo({left: 0, top: referenceArray[key].current.offsetTop, behavior: 'smooth'});
    }, 2);
};
const executeScroll = (href, refs) => scrollToRef(refs, href);

const IndexTemplate = ({
                           missionText,
                           missionValues,
                           serviceCards,
                           testimonials,
                           ctaText
                       }: IndexTemplateProps) => {
    const heroRef = useRef(null);
    const missionRef = useRef(null);
    const serviceRef = useRef(null);
    const testRef = useRef(null);
    const teamRef = useRef(null);
    const ctaRef = useRef(null);

    let sectionRefs = {
        'hero': heroRef,
        'mission': missionRef,
        'service': serviceRef,
        'test': teamRef,
        'cta': ctaRef
    };

    const navItems: NavLinkProps[] = [
        {href: 'hero', linkText: 'Home', underlineColor: ColorNames.secondary},
        {href: 'mission', linkText: 'Mission & Values', underlineColor: ColorNames.primary},
        {href: 'service', linkText: 'Services', underlineColor: ColorNames.accent},
        {href: 'test', linkText: 'Testimonials', underlineColor: ColorNames.secondary},
        {href: 'cta', linkText: 'Start today', underlineColor: ColorNames.primary}
    ];

    return <Layout navItems={navItems} onItemClicked={(ref) => executeScroll(ref, sectionRefs)}>
        <LayoutComponent ref={heroRef} style={{marginRight: 0, marginLeft: 0}} fullWidth={true}>
            <Hero headingContent={td.hero.headingContent} buttonText={td.hero.buttonText}/>
        </LayoutComponent>
        <LayoutComponent ref={missionRef}>
            <Mission listItems={missionValues} sectionContent={td.mission.sectionContent}
                     text={missionText}/>
        </LayoutComponent>
        <LayoutComponent ref={serviceRef}>
            <Services sectionContent={td.services.sectionContent} cardList={serviceCards}/>
        </LayoutComponent>
        <LayoutComponent ref={testRef}>
            <Testiomnials sectionContent={td.tm.sectionContent} testimonials={testimonials}/>
        </LayoutComponent>
        <LayoutComponent ref={teamRef}>
            <Team sectionContent={td.team.sectionContent} text={td.team.text} team={td.team.team}/>
        </LayoutComponent>
        <LayoutComponent ref={ctaRef}>
            <CTA sectionContent={td.cta.sectionContent} text={ctaText}>
                <div style={{maxWidth: 500}}>
                    <EmailCTA/>
                </div>
            </CTA>
        </LayoutComponent>
    </Layout>
};

export default IndexTemplate;

