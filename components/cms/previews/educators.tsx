import React from 'react';
import EducatorsPreview from '~components/cms/templates/educator/EducatorPreview';

const EducatorsPagePreview = (props: { entry: any }) => {
    const frontmatter = props.entry.getIn(['data']).toJS();
    console.log(frontmatter);

    if (frontmatter) {
        return <EducatorsPreview
            name={frontmatter.name}
            color={frontmatter.color}
            role={frontmatter.role}
            text={frontmatter.text}
            contact={frontmatter.contact}/>;
    } else {
        return <div>Loading...</div>
    }
};

export default EducatorsPagePreview;
