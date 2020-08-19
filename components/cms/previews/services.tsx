import React from 'react';
import ServicePreview from '~components/cms/templates/service/ServicePreview';

const ServicesPagePreview = (props: { entry: any }) => {
    const frontmatter = props.entry.getIn(['data']).toJS();

    if (frontmatter) {
        return <ServicePreview name={frontmatter.name} color={frontmatter.color}
                               description={frontmatter.description}/>;
    } else {
        return <div>Loading...</div>
    }
};

export default ServicesPagePreview;
