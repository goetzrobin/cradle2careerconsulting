import * as React from 'react';
import styles from './adventure.module.scss';
import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import { Colors } from '~models/colors';
import MouseOverPopover from '~components/atoms/popovers/mouseover-popover/MouseOverPopOver';
import Image from '~components/atoms/image/Image';
import { TeamMemberProps } from '../team-member/team-member';
import ReactMarkdown from 'react-markdown';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BlobPicture from '~components/molecules/blob-picture/blob-picture';
import BlobOne from '~components/atoms/geometry/blobs/BlobOne';

export interface CardProps {
    iconBackgroundColor?: Colors;
    headline: string;
    time: string;
    instructor: TeamMemberProps
    icon: string;
    text?: string;
    day?: string;
}


const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function SimpleDialog(props: React.PropsWithChildren<SimpleDialogProps>) {
    const classes = useStyles();
    const { onClose, open } = props;

    const handleClose = () => {
        onClose(name);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="About the Adventure" open={open}>
            <DialogContent>
                {props.children}
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    );
}

const Adventure = ({ iconBackgroundColor = Colors.secondary, headline, day, time, text, icon, instructor }: CardProps) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };
    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.dot}>
                <i aria-hidden className={`fas fa-${icon} ${styles.icon}`}></i>
                <FullCircle height="50px" width="50px" color={iconBackgroundColor} />
            </div>
            <h2 className={styles.headline}>{headline}</h2>
        </div>
        <div>
            {instructor?.name && <p className={styles.text}>with <span style={{ fontSize: '1.25rem' }}>{instructor.name}</span></p>}
            {(instructor?.name || text) && <>
                <Button onClick={handleClickOpen}>
                    <span style={{ fontFamily: 'Indie Flower', fontWeight: 'bold', fontSize: '1.5rem' }}>Learn More</span>
                </Button>
                <SimpleDialog open={open} onClose={handleClose}>
                    <div className={styles.header}>
                        <div className={styles.dot}>
                            <i aria-hidden className={`fas fa-${icon} ${styles.icon}`}></i>
                            <FullCircle height="50px" width="50px" color={iconBackgroundColor} />
                        </div>
                        <div>
                            <h1 style={{ marginLeft: '10px', marginBottom: '5px' }}>{headline}</h1>
                            <p style={{ marginLeft: '10px', marginTop: '-10px'}}>{day}s at {time}</p>
                        </div>
                    </div>
                    <div>
                        <ReactMarkdown source={text || ''} />
                    </div>
                    {(instructor?.name && instructor?.text) && <>
                    <div className={styles.popover}>
                        <div className={styles.popoverText}>
                            <h3>with {instructor.name}</h3>
                            <ReactMarkdown source={instructor.text || ''} />
                        </div>
                        <div className={styles.popoverImage}>
                            <BlobOne hasImage={true} image={instructor.image} />
                        </div>
                    </div>
                    </>}
                </SimpleDialog>
            </>
            }
        </div>
    </div>
};

export default Adventure;
