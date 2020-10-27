import * as React from 'react';
import QuoteText from '~components/atoms/typo/quote-text/quote-text';
import styles from './quote.module.scss';
import QuoteInfo from '~components/atoms/typo/quote-info/quote-info';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogActions } from '@material-ui/core';
import EmailCTA from '~components/atoms/inputs/email-cta/email-cta';
import { Colors } from '~models/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

interface SimpleDialogProps {
    open: boolean;
    content: string;
    name: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
    const { onClose, name, open } = props;

    const handleClose = () => {
        onClose(name);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="Testimonial" open={open}>
            <DialogTitle id="Testimonial Title">
                <span style={{ fontFamily: `Indie Flower`, fontWeight: 'bold', fontSize: '2rem' }}>
                    {`${name}'s testimonial`}
                </span></DialogTitle>
            <DialogContent>
                <DialogContentText id="Testimonial Description">
                    <div style={{ color: `#${Colors.dark}`,fontFamily: 'Quicksand' }}>
                        <ReactMarkdown source={props.content} />
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <div className={styles.quoteActions}>
                <h2>Convinced?</h2>
                    <div style={{flexGrow: 2}}></div>
                    <EmailCTA />
                </div>
            </DialogActions>
        </Dialog>
    );
}


export interface QuoteProps {
    text: string;
    name: string;
    intro: string;
}

const Quote = ({ text, name, intro }: QuoteProps) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };

    return <div className={styles.container}>
        <QuoteText text={intro} onClick={handleClickOpen} />
        <SimpleDialog name={name} open={open} content={text} onClose={handleClose} />
        <QuoteInfo name={name} />
    </div>

};
export default Quote
