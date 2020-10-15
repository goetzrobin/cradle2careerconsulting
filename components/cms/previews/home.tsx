import React from 'react';
import HomePreview from '../templates/home/HomePreview';
import {CardProps} from '~components/atoms/lists/card/card';
import {TeamMemberProps} from '~components/atoms/lists/team-member/team-member';
import {Colors} from '~models/colors';

const HomePagePreview = (props: { entry: any }) => {
    const frontmatter = props.entry.getIn(['data']).toJS();
    const cards: CardProps[] = [{
        headline: 'I am an example Service',
        text: 'This will be replaced by your service entities',
        icon: 'baby'
    }];
    const teamMembers: TeamMemberProps[] = [{
        name: 'Place Holder Teammember',
        color: Colors.primary,
        image: '',
        position: 'CEO',
        text: 'This will be replaced with your educators entities',
        contact: {
            phone: 344344334,
            email: 'email email email',
        }
    }];
    console.log(frontmatter);

    if (frontmatter) {
        return <HomePreview
            title={frontmatter.title}
            hero={frontmatter.hero}
            mission={frontmatter.mission}
            services={{cards, ...frontmatter.services}}
            testimonials={frontmatter.testimonials}
            team={{educators: teamMembers, ...frontmatter.team}}
            cta={frontmatter.cta}
        />;
    } else {
        return <div>Loading...</div>
    }
};

export default HomePagePreview;
