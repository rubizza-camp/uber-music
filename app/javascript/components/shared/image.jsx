import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { width } from '@material-ui/system';

export default function MyImage(props) {
    const useStyles = makeStyles(theme => ({
        imgRaised: {
            boxShadow:
                "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        },
        imgRounded: {
            borderRadius: "6px !important"
        },
        imgFluid: {
            width: props.width,
            height: props.height
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img
                src={props.src}
                alt="..."
                className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid 
                }
            />
        </div>
    );
}
