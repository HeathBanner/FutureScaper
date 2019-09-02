import React from 'react';

import { Parallax } from 'react-parallax';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        width: '80%',
        background: 'linear-gradient(45deg, #ffe330 30%, #fcdb0d 90%)',
    },
    body: {
        [theme.breakpoints.up('md')]: {
            margin: '20px 80px 40px 80px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '20px 80px 40px 80px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '20px 60px 30px 60px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '20px 20px 20px 20px',
        },      
    },
    parallax: {
        [theme.breakpoints.up('md')]: {
            height: 400,
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            height: 400,
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            height: 400,
            width: '100%',    
        },
        [theme.breakpoints.down('xs')]: {
            height: 300,
            width: '100%',    
        },      
    },
    typo: {
        [theme.breakpoints.up('md')]: {
            margin: '20px 60px 20px 60px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '20px 60px 20px 60px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '20px 30px 20px 30px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '20px 20px 20px 20px',
        },      
    },
    divider: {
        margin: '0px 40px',
        borderTop: '1px solid rgba(0,0,0,.1)',
    },
}));

const Intro = () => {

    const classes = useStyles();
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const headerVariant = () => {
        if(xs) { return 'h4' }
        else { return 'h2' }
    };

    return (
        <Grid className={classes.container} item xs={12}>

            <Paper className={classes.paper}>

                <Typography className={classes.typo} color="primary" variant={headerVariant()} align="center">
                    Welcome to our landscape planner!
                </Typography>

                <Divider className={classes.divider} />

                <Typography className={classes.body} variant="body1" align="center">
                    When planning a garden, being able to quickly try 
                    out different planting styles can save a huge amount 
                    of time and ultimately help you grow healthier 
                    plants which produce more food. Whether you use 
                    traditional rows, containers, raised beds or square 
                    foot gardening, the Garden Planner gives you the 
                    flexibility to create the best design for your garden.
                </Typography>

                <Parallax
                    bgImage={require('../../images/leonard-cotte.jpg')}
                    bgImageAlt="Jumbtron"
                    strength={300}                    
                >
                    <div className={classes.parallax}></div>

                </Parallax>

                <Typography className={classes.typo} color="primary" variant={headerVariant()} align="center">
                    Search the USDA database!
                </Typography>

                <Divider className={classes.divider} />

                <Typography className={classes.body} variant="body1" align="center">
                    The USDA database provides standardized information about the 
                    vascular plants, mosses, liverworts, hornworts, and lichens of 
                    the U.S. and its territories. It includes names, plant symbols, 
                    checklists, distributional data, species abstracts, 
                    characteristics, images, crop information, automated tools, 
                    onward Web links, and references. This information primarily 
                    promotes land conservation in the United States and its 
                    territories, but academic, educational, and general use is 
                    encouraged. 
                </Typography>

            </Paper>

        </Grid>
    );
};

export default Intro;
