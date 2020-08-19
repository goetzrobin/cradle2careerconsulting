import * as React from 'react';
import CMS from 'netlify-cms-app';
import {useEffect} from 'react';

import configuration from './config.json';
import HomePagePreview from '~components/cms/previews/home';
import ServicesPagePreview from '~components/cms/previews/services';
import EducatorsPagePreview from '~components/cms/previews/educators';

const CMSWrapper = () => {
    const config = configuration as any;
    useEffect(() => {
            CMS.registerPreviewStyle('/cms-styles.css');
            CMS.registerPreviewTemplate('home', HomePagePreview);
            CMS.registerPreviewTemplate('services', ServicesPagePreview);
            CMS.registerPreviewTemplate('educators', EducatorsPagePreview);
            CMS.init({config});
        }
    );
    return <div/>;
};
export default CMSWrapper;
