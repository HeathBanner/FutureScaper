import React from 'react';
import { Parallax } from 'react-parallax';

import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    jumbotron: {
        height: '65vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typo: {
        color: 'white',
    },
}));

const Jumbotron2 = () => {

    const classes = useStyles();
    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const getVariant = () => {
        if(xs) { return 'h3' }
        if(sm) { return 'h2' }
        else { return 'h1' }
    };

    return (
        <Grid item xs={12}>
            
            <Parallax 
                bgImage={require('../../images/biel-morro.jpg')}
                bgImageAlt="Jumbtron"
                strength={300}
            >

                <div className={classes.jumbotron}>
                    <Typography className={classes.typo} variant={getVariant()} align="center">
                        About Future Scaper
                    </Typography>
                </div>

            </Parallax>
        </Grid>
    )
}

export default Jumbotron2;