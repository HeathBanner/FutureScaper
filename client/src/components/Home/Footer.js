import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: 45,
        marginTop: 40,
        borderTop: '4px solid #3f51b5',
        background: 'linear-gradient(45deg, #15b32c 30%, #009e17 90%)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typo: {
        color: 'white',
    },
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.container}>

            <Typography className={classes.typo} variant="h6" align="center">
                Future Scaper
            </Typography>

            <Icon className={classes.typo}>
                copyright
            </Icon>

        </Grid>
    );
};

export default Footer;
