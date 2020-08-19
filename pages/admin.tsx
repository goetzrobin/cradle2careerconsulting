import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import * as React from 'react';

let CMSWrapper: React.ComponentType<{}> = (props: any) => <div>loading</div>;
const Admin = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!window) return;
        CMSWrapper = dynamic(() => import('../components/cms/cms'));
        setLoaded(true)
    }, [loaded]);

    return <div><CMSWrapper/></div>;
};

export default Admin
