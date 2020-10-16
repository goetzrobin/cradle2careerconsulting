import * as React from 'react';
import styles from './team-member.module.scss';
import BlobFour from '~components/atoms/geometry/blobs/BlobFour';
import ReactMarkdown from 'react-markdown';
import Mail from '~components/atoms/icons/Mail';
import Phone from '~components/atoms/icons/Phone';
import {Colors} from '~models/colors';
import Image from '~components/atoms/image/Image';

export interface TeamMemberProps {
    name: string;
    color?: Colors;
    image: string;
    position: string;
    text: string;
    contact?: {
        phone: number;
        email: string;
    }
}

const formatPhoneNumber = (number: number = 0) => {
    const firstThree = number.toString().substr(0, 3);
    const middleThree = number.toString().substr(3, 3);
    const lastFour = number.toString().substr(6);
    return `${firstThree}-${middleThree}-${lastFour}`
};

const TeamMember = ({color = Colors.primary, name, image, position, text, contact}: TeamMemberProps) => {
    return <div className={styles.container}>
        <div className={styles.blob}>
            <BlobFour color={color}/>
        </div>
        <Image className={styles.image} src={image} alt={`Image of ${name}`}/>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.position}>{position}</h3>
        <div className={styles.text}><ReactMarkdown source={text}/></div>
        {contact &&<div className={styles.contact}>
            <div className={styles.contactItem}>
                <span className={styles.icon}><Mail/></span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className={styles.contactItem}>
                <span className={styles.icon}><Phone/></span>
                <span>{formatPhoneNumber(contact.phone)}</span>
            </div>
        </div>}
    </div>
};
export default TeamMember
