// @ts-nocheck
import {
    Button,
    OutlinedInputProps,
    TextField,
    TextFieldProps,
    useMediaQuery,
    withStyles
} from '@material-ui/core';
import * as React from 'react';
import {ColorNames} from '~models/colors';
import styles from './email-cta.module.scss';
import {getButtonStyles, getFieldStyle, useStylesCTA} from '~components/atoms/inputs/email-cta/email-cta-styles';
import {useEffect, useState} from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};


const createTextField = (color) => (props: TextFieldProps) => {
    const classes = useStylesCTA(color)();
    return (
        <TextField
            InputProps={{classes, disableUnderline: true} as Partial<OutlinedInputProps>}
            {...props}
        />
    );
};

const buildComponents = (matches: boolean, color: ColorNames) => {
    const fieldStyle = getFieldStyle(matches) as any;
    let CTATextField = withStyles(fieldStyle)(createTextField(color));
    const buttonStyles = getButtonStyles(matches) as any;
    let CSSButton = withStyles(buttonStyles)(Button);
    return [CTATextField, CSSButton];
};
const EmailCTA = ({label = 'Your E-Mail', cta = 'Reach out today', color = ColorNames.secondary, onClick = (event) => alert()}) => {
    const matches = useMediaQuery('(min-width:960px)');
    let [CTATextField, CSSButton] = buildComponents(matches, color);
    const [email, setEmail] = useState();
    const [messageToDisplay, setMessage] = useState(cta);

    useEffect(() => {
        const [updatedCTATextField, updatedCSSButton] = buildComponents(matches, color);
        CTATextField = updatedCTATextField;
        CSSButton = updatedCSSButton;
    }, [matches]);

    const handleSubmit = e => {
        setMessage('Submitting...');
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'form-name': 'contact', email})
        })
            .then(() => setMessage('Success!'))
            .catch(error => setMessage('Oops... Please try again!'));

        e.preventDefault();
    };

    return <form className={styles.container} name="contact" method="post" data-netlify="true"
                 data-netlify-honeypot="bot-field">
        <CTATextField
            variant="filled"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={label}
            color={(color as 'primary' | 'secondary')}/>
        <CSSButton
            onClick={handleSubmit}
            size="large" variant="contained" color={color as 'primary' | 'secondary'} disableElevation>
            {messageToDisplay}
        </CSSButton>
    </form>
};

export default EmailCTA
