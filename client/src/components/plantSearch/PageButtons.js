import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Icon, Button, Typography }  from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    next: {
        float: 'right',
        marginBottom: '10px',
        background: 'linear-gradient(45deg, #1fbf24 30%, #00a806 90%)',
        '&:hover': {
            background: 'linear-gradient(45deg, #47d64b 30%, #1fbf24 90%)',  
        },
    },
    back: {
        float: 'left',
        marginBottom: '10px',
        background: 'linear-gradient(45deg, #00a806 30%, #1fbf24 90%)',
        '&:hover': {
            background: 'linear-gradient(45deg, #1fbf24 30%, #47d64b 90%)',     
        },
    },
    page: {
        margin: '0px 20px 10px 20px',
    },
    icons: {
        color: '#3f51b5',
    }
  }));
  
const PageButtons = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Button className={classes.back} disabled={props.page === 0}>
                <Icon className={classes.icons} fontSize="large" onClick={() => props.onClick('back')}>navigate_before</Icon>
            </Button>
            <Typography className={classes.page} color="primary" variant="h6">{props.page}/{props.page+5}</Typography>
            <Button className={classes.next} >
                <Icon className={classes.icons} fontSize="large" onClick={() => props.onClick('next')}>navigate_next</Icon>
            </Button>
        </div>
    );
}

export default PageButtons;