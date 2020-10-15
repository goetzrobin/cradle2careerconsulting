import * as React from 'react';
import { useRouter } from 'next/router'

import Hero from '~components/organisms/hero/hero';
import Mission from '~components/organisms/mission/mission';
import Services from '~components/organisms/services/services';
import LayoutComponent from '~components/templates/layout/layout-component';
import Layout from '~components/templates/layout/layout';
import {CardProps} from '~components/atoms/lists/card/card';
import Testiomnials, {TestimonialProps} from '~components/organisms/testimonials/testimonials';
import CTA from '~components/organisms/cta/cta';
import Team from '~components/organisms/team/team';
import EmailCTA from '~components/atoms/inputs/email-cta/email-cta';
import {useRef} from 'react';
import {NavLinkProps} from '~components/atoms/typo/nav-link/nav-link';
import {ColorNames} from '~models/colors';
import {UnderlineContent} from '~models/UnderlineContent';
import {TeamMemberProps} from '~components/atoms/lists/team-member/team-member';


export interface IndexTemplateProps {
    title: string;
    hero: {
        heading: UnderlineContent[];
        buttonText: string;
        image1?: string;
        image2?: string;
    }
    mission: {
        text: string;
        values: string[];
        heading: UnderlineContent[];
        image: string;
    }
    services: {
        cards: CardProps[];
        heading: UnderlineContent[];
        text: string;
    }
    team: {
        heading: UnderlineContent[];
        text: string;
        educators: TeamMemberProps[];
    }
    testimonials: {
        heading: UnderlineContent[];
        testimonials: TestimonialProps[];
    }
    cta: {
        heading: UnderlineContent[];
        text: string
    }
}

const scrollToRef = (referenceArray, key) => {
    setTimeout(function () {
        window.scrollTo({left: 0, top: referenceArray[key].current.offsetTop - 60, behavior: 'smooth'});
    }, 2);
};
const executeScroll = (href, refs) => scrollToRef(refs, href);

const IndexTemplate = ({
                           title,
                           hero,
                           mission,
                           services,
                           testimonials,
                           team,
                           cta
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
        'test': testRef,
        'team': teamRef,
        'cta': ctaRef
    };

    const navItems: NavLinkProps[] = [
        {href: 'hero', linkText: 'Home', underlineColor: ColorNames.secondary},
        {href: 'mission', linkText: 'Mission & Values', underlineColor: ColorNames.primary},
        {href: 'service', linkText: 'Services', underlineColor: ColorNames.accent},
        {href: 'test', linkText: 'Testimonials', underlineColor: ColorNames.secondary},
        {href: 'team', linkText: 'Team', underlineColor: ColorNames.accent},
        {href: 'cta', linkText: 'Start today', underlineColor: ColorNames.primary}
    ];

    let router = useRouter()

    return <Layout navItems={navItems} onItemClicked={(ref) => executeScroll(ref, sectionRefs)}>
        <LayoutComponent ref={heroRef} style={{paddingLeft: 0, paddingRight: 0, marginRight: 0, marginLeft: 0}}
                         fullWidth={true}>
            <Hero above={title} onButtonClick={() => router.push('/activities')}
                  headingContent={hero.heading} buttonText={hero.buttonText} image1={hero.image1} image2={hero.image2}/>
        </LayoutComponent>
        <LayoutComponent ref={missionRef}>
            <Mission listItems={mission.values} sectionContent={mission.heading}
                     text={mission.text} image={mission.image}/>
        </LayoutComponent>
        <LayoutComponent ref={serviceRef}>
            <Services sectionContent={services.heading} text={services.text} cardList={services.cards}/>
        </LayoutComponent>
        <LayoutComponent ref={testRef}>
            <Testiomnials sectionContent={testimonials.heading} testimonials={testimonials.testimonials}/>
        </LayoutComponent>
        <LayoutComponent ref={teamRef}>
            <Team sectionContent={team.heading} text={team.text} team={team.educators}/>
        </LayoutComponent>
        <LayoutComponent ref={ctaRef}>
            <CTA sectionContent={cta.heading} text={cta.text}>
                <div style={{maxWidth: 500}}>
                    <EmailCTA/>
                </div>
            </CTA>
        </LayoutComponent>
    </Layout>
};

export default IndexTemplate;

