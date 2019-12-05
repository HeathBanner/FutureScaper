import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
}));

export default (props) => {
    
    const theme = useTheme();

    const styles = {
        classes: useStyles(),
        xs: useMediaQuery(theme.breakpoints.down('xs')),
        sm: useMediaQuery(theme.breakpoints.down('sm')),
        md: useMediaQuery(theme.breakpoints.down('md')),
        lg: useMediaQuery(theme.breakpoints.down('lg')),
        getJumboVariant: function() {
            if(this.xs) return 'h4';
            if(this.sm) return 'h3';
            return 'h2';
        }
    };

    return props.render(styles);
};
