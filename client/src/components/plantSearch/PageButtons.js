import React from "react";
import Icon  from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    next: {
        float: 'right',
        marginBottom: '10px',
        background: 'linear-gradient(45deg, #1dc42b 30%, #a4e22f 90%)',
    },
    back: {
        float: 'left',
        marginBottom: '10px',
        background: 'linear-gradient(45deg, #a4e22f 30%, #1dc42b 90%)',
    },
    page: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '0px 20px 10px 20px',
    },
  }));
  

function PageButtons(props) {

    const classes = useStyles();

    return(
        <div className={classes.div}>
            <Button className={classes.back} disabled={props.page === 0}>
                <Icon fontSize="large" onClick={() => props.onClick('back')}>navigate_before</Icon>
            </Button>
            <p className={classes.page}>{props.page}/{props.page+5}</p>
            <Button className={classes.next} >
                <Icon fontSize="large" onClick={() => props.onClick('next')}>navigate_next</Icon>
            </Button>
        </div>
    );
}

export default PageButtons;