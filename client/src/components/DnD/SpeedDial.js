



import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';
import Logo from "../../images/logo.png";
import Icon  from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
root: {
    marginTop: '20px',
    height: 100,
    width: 380 + theme.spacing(4),
    display: 'inline-block'
},
wrapper: {
    display: 'flex',
    alignItems: 'center',
    width: 280 + theme.spacing(4),
    height: 50,
},
paper: {
    zIndex: 555,
    position: 'relative',
    // margin: theme.spacing(2),
    background: 'rgb(0, 0, 0, 0.3)',
    color: '#1dc42b',
},
svg: {
    display: 'inline-block',
    width: 200,
    zIndex: 600,
},
button: {
    padding: '10px 10px',
    marginLeft: '10px',
    background: 'linear-gradient(45deg, #a4e22f 30%, #1dc42b 90%)',
}
});

class SimpleSlide extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button size="medium" className={classes.paper} checked={checked} onClick={this.handleChange}>
            <Icon fontSize="large">menu</Icon>
          </Button>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
                <div className={classes.svg}>
                    <Link className='search-link' to="/">
                        <Tilt className="title-create" options={{ max : 25 }} >
                            <img className="Tilt-inner logo" src={Logo} alt="logo"/>
                        </Tilt>
                    </Link>
                    <Link className='search-link' to="/search">
                    <Tilt className="title-create" options={{ max : 15 }} >
                        <Button className={classes.button}>
                            <h6>Search</h6>
                        </Button>
                        </Tilt>
                    </Link>
                </div>
          
          </Slide>
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);