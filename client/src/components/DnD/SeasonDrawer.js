import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  function sendSeason(text) {
      props.sendData(text)
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log("DRAWER")
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['March', 'April', 'May'].map((text, index) => (
          <ListItem  button key={text}>
            <Icon>label_outline{index % 2 === 0 ? <Icon>mail</Icon> : <Icon>mail</Icon>}</Icon>
            <ListItemText onClick={() => sendSeason(text)} primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['June', 'July', 'August'].map((text, index) => (
          <ListItem onClick={() => sendSeason(text)} button key={text}>
            <Icon>label_outline{index % 2 === 0 ? <Icon>mail</Icon> : <Icon>mail</Icon>}</Icon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['September', 'October', 'November'].map((text, index) => (
          <ListItem onClick={() => sendSeason(text)} button key={text}>
            <Icon>label_outline{index % 2 === 0 ? <Icon>mail</Icon> : <Icon>mail</Icon>}</Icon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['December', 'January', 'February'].map((text, index) => (
          <ListItem onClick={() => sendSeason(text)} button key={text}>
            <Icon>label_outline{index % 2 === 0 ? <Icon>mail</Icon> : <Icon>mail</Icon>}</Icon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={() => toggleDrawer(side, false)}
      onKeyDown={() => toggleDrawer(side, false)}
    >
    </div>
  );

  return (
    <div>
      <Button style={{position: 'absolute', bottom: '30%'}} onClick={toggleDrawer('left', true)}><Icon style={{fontSize: 50, color: '#e5ce22'}}>brightness_low_outline</Icon></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;