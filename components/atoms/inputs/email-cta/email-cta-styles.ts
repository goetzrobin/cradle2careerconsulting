import {Colors} from '~models/colors';
import {makeStyles} from '@material-ui/styles';
import {createStyles, Theme} from '@material-ui/core';

export const getButtonStyles = (matches) => matches ? {
    root: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        display: 'block',
        textTransform: 'uppercase'
    }
} : {
    root: {
        display: 'block',
        textTransform: 'uppercase'
    }
};

export const getFieldStyle = (matches) => matches ? {
    root: {
        backgroundColor: `#${Colors.light}`,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        overflow: 'hidden'
    }

} : {
    root: {
        backgroundColor: `#${Colors.light}`,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10
    }
};

export const useStylesCTA = (color) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // border: `1px solid #${Colors[color]}`,
            overflow: 'hidden',
            borderRadius: 4,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            '&:hover': {
                backgroundColor: `#${Colors.light}`,
            },
        },
        focused: {},
    }),
);
