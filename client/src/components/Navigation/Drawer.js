import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { MediaContext } from '../../contexts/MediaContext';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Typography, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

const navList = [
    {
        text: 'Home',
        icon: 'home',
        link: '/',
    },
    {
        text: 'Search',
        icon: 'search',
        link: '/search',
    },
];

const useStyles = makeStyles((theme) => ({
    drawerButton: {
        [theme.breakpoints.down('xs')]: {
            left: 10,
        },
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translate(0%, -50%)',
    },
    listContainer: {
        [theme.breakpoints.down('xs')]: {
            width: 170,
        },
        width: 250,
    },
    list: {
        marginTop: 40,
    },
    links: {
        marginTop: 20,
        textDecoration: 'none',
        color: 'inherit',
    },
    listButtons: {
        transition: 'transform 0.4s ease',
        '&:hover': {
            transform: 'scale(1.03)',
        },
    },
}));

const NavDrawer = () => {

    const classes = useStyles();
    const auth = useContext(AuthContext);
    const media = useContext(MediaContext);

    const [open, setOpen] = useState(false);
    const [toLogin ,setToLogin] = useState(false);

    const closeDrawer = () => { setOpen(false); };

    if (toLogin) { return <Redirect to={'/login'} />; }
    return (
        <div>

            <Button
                className={classes.drawerButton}
                onClick={() => setOpen(!open)}
            >
                <Icon fontSize={media.xs ? 'medium' : 'large'}>
                    menu
                </Icon>
            </Button>

            <Drawer
                anchor="left"
                open={open}
                onClose={closeDrawer}
            >
                <div
                    className={classes.listContainer}
                    role="presentation"
                    onClick={() => setOpen(!open)}
                >
                    <List className={classes.list}>
                    {
                        navList.map((item) => (
                            <Link
                                className={classes.links}
                                to={item.link}
                            >
                                <ListItem
                                    className={classes.listButtons}
                                    button
                                    key={item.text}
                                >
                                        <ListItemIcon>
                                            <Icon>{item.icon}</Icon>
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={
                                                <Typography variant={media.xs ? 'body1' : 'h6'}>
                                                    {item.text}
                                                </Typography>
                                            }
                                        />
                                </ListItem>
                            </Link>
                        ))
                    }
                        <ListItem
                            className={classes.listButtons}
                            button
                            onClick={
                                auth.loggedIn
                                    ?
                                auth.handleLogout
                                    :
                                () => setToLogin(true)
                            }
                        >
                            <ListItemIcon>
                                <Icon>power_settings_new</Icon>
                            </ListItemIcon>

                            <ListItemText
                                primary={
                                    <Typography variant={media.xs ? 'body1' : 'h6'}>
                                        {auth.loggedIn ? 'Logout' : 'Login'}
                                    </Typography>
                                }
                            />
                        </ListItem>

                    </List>
                </div>

            </Drawer>

        </div>
    );
};

export default NavDrawer;
