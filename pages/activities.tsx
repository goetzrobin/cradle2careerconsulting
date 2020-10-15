import * as React from 'react';
import {GetStaticProps} from 'next';
import matter from 'gray-matter'
import ActivitiesTemplate from '~components/templates/activities';
import CollectionLoader from '../services/collection/collection-loader';

const Activities = () => {
    return <ActivitiesTemplate/>
};

export default Activities

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


