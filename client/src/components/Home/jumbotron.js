import React from 'react';

import { Parallax } from 'react-parallax';

import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    jumbotron: {
        height: '55vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 -3px 10px 3px rgba(0, 0, 0, 0.2)',
    },
    typo: {
        color: 'white',
    },
}));

const Jumbotron = () => {

    const classes = useStyles();
    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const getVariant = () => {
        if(xs) { return 'h4' }
        else if(sm) { return 'h3' }
        else { return 'h2' }
    };

    return (
        <Grid item xs={12} className={classes.jumbotron}>

        <Parallax 
            bgImage={require('../../images/flower1.png')}
            bgImageAlt="Jumbtron"
            strength={300}
        >
            <div className={classes.jumbotron}>
                <Typography className={classes.typo} align="center" variant={getVariant()}>
                    Garden planner for your every need
                </Typography>
            </div>

        </Parallax>
            </Grid>
    )
}

export default Jumbotron;