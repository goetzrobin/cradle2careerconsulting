import {default as React} from 'react';
import ReactMarkdown from 'react-markdown';

export interface ServiceProps {
    name: string;
    text: string;
    role: string;
    contact: { phone: number, email: string }
    color: string
}

const EducatorsPreview = ({
                              name,
                              text,
                              role,
                              contact,
                              color
                          }: ServiceProps) => {
    return <div>
        <div className={`preview__service__heading bg--${color}`}>
            <h1>{name}</h1>
            <h3>{role}</h3>
        </div>
        <div>
            <h2>Contact</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
        <p>
            <ReactMarkdown source={text}/>
        </p>
    </div>;
};

export default EducatorsPreview;
