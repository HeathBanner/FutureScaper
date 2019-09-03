import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

import Stepper from './Stepper';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '85%',
        paddingTop: 30,
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    info: {
        padding: '0px 20px',
    },
    name: {
        textTransform: 'capitalize',
    },
    typo: {
        marginBottom: 10,
    }
}));

const PlantSearch = (props) => {

    const classes = useStyles();

    return (
        <Grid alignItems="flex-start" justify="center" container>
            <Paper className={classes.paper}>

                <Grid item sm={4} xs={12}>

                    <Stepper imgPath={props.images}/>

                </Grid>
                <Grid className={classes.info} item sm={8} xs={12}>

                    <Typography className={classes.name} align="center" color="primary" variant="h5">
                        {props.Common_Name}
                    </Typography>

                    <Typography className={classes.typo} variant="body2" align="center" color="textSecondary">
                        {props.Scientific_Name}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Active Growth Period: {props.Active_Growth_Period}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Flower Color: {props.Flower_Color}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Foliage Color: {props.Foliage_Color}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Fruit Color: {props.Fruit_Color}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Growth Rate: {props.Growth_Rate}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Height at base age: {props.Height_at_Base_Age_Maximum_feet} Height when mature: {props.Height_Mature_feet}
                    </Typography>

                    <Typography className={classes.typo} variant="body1" align="center">
                        Commercial Availability: {props.Commercial_Availability}
                    </Typography>

                </Grid>

            </Paper>
        </Grid>
    );
};

export default PlantSearch;
