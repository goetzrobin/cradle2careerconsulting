import * as React from 'react';
import {GetStaticProps} from 'next';
import matter from 'gray-matter'
import IndexTemplate from '~components/templates';
import {CardProps} from '~components/atoms/lists/card/card';
import CollectionLoader from '../services/collection/collection-loader';
import {Colors} from '~models/colors';
import {TeamMemberProps} from '~components/atoms/lists/team-member/team-member';

const Home = ({title, description, frontmatter, services, educators, ...props}) => {
    const cards: CardProps[] = (services || [])
        .map(({frontmatter: service}) => ({
            headline: service.name,
            text: service.description,
            iconBackgroundColor: Colors[service.color]
        }));

    const teamMembers: TeamMemberProps[] = (educators || [])
        .map(({frontmatter: member}) => ({
            name: member.name,
            color: Colors[member.color] || Colors.secondary,
            image: member.image,
            position: member.position,
            text: member.text,
            contact: {
                phone: member.contact.phone,
                email: member.contact.email
            }
        }));
    return <IndexTemplate
        title={frontmatter.title}
        hero={frontmatter.hero}
        mission={frontmatter.mission}
        services={{cards, ...frontmatter.services}}
        testimonials={frontmatter.testimonials}
        team={{educators: teamMembers, ...frontmatter.team}}
        cta={frontmatter.cta}
    />;
};

export default Home

export const getStaticProps: GetStaticProps = async function getStaticProps() {
    // @ts-ignore
    const content = await import(`../content/pages/home.md`);
    const configData = await import(`../siteconfig.json`);
    const data = matter(content.default);

    // @ts-ignore
    const services = CollectionLoader.loadMarkdownOfCollection(require.context('../content/services', true, /\.md$/));
    // @ts-ignore
    const educators = CollectionLoader.loadMarkdownOfCollection(require.context('../content/educators', true, /\.md$/));

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description,
            frontmatter: data.data,
            markdownBody: data.content,
            services,
            educators
        },
    }
};


