import * as React from 'react';
import {GetStaticProps} from 'next';
import matter from 'gray-matter'
import IndexTemplate from '~components/templates';
import {CardProps} from '~components/atoms/lists/card/card';
import {ColorArray} from '~models/colors';

const Home = ({title, description, frontmatter, ...props}) => {

    const serviceCards: CardProps[] = (frontmatter.services || [])
        .map(service => ({
            headline: service.name,
            text: service.description,
            iconBackgroundColor: ColorArray[Math.floor(Math.random() * ColorArray.length)]
        }));

    return <IndexTemplate
        missionValues={frontmatter.values}
        missionText={frontmatter.intro}
        serviceCards={serviceCards}
        testimonials={frontmatter.testimonials}
        ctaText={frontmatter.cta}
    />;
};

export default Home

export const getStaticProps: GetStaticProps = async function getStaticProps() {
    // @ts-ignore
    const content = await import(`../content/home.md`);
    const configData = await import(`../siteconfig.json`);
    const data = matter(content.default);

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
};


