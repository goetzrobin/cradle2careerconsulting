import {default as React} from 'react';
import ReactMarkdown from 'react-markdown';

export interface ServiceProps {
    name: string;
    description: string;
    color: string
}

const ServicePreview = ({
                            name,
                            description,
                            color
                        }: ServiceProps) => {
    return <div>
        <div className={`preview__service__heading bg--${color}`}>
            <h1>{name}</h1>
        </div>
        <p>
            <ReactMarkdown source={description}/>
        </p>
    </div>;
};

export default ServicePreview;
