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
import {useEffect} from 'react';

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

    useEffect(() => {
        const [updatedCTATextField, updatedCSSButton] =  buildComponents(matches, color);
        CTATextField = updatedCTATextField;
        CSSButton = updatedCSSButton;
    }, [matches]);

    return <div className={styles.container}>
        <CTATextField
            variant="outlined"
            label={label}
            color={(color as 'primary' | 'secondary')}/>
        <CSSButton
            size="medium" variant="outlined" color={color as 'primary' | 'secondary'} disableElevation>
            {cta}
        </CSSButton>

    </div>
};

export default EmailCTA
