import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Typography, Button } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 440,
    flexGrow: 1,
    padding: 20,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: 'white',
  },
  imgContainer: {
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  paper: {
    padding: '20px 0px',
    background: 'none',
  },
  buttons: {
    background: 'linear-gradient(45deg, #ffe330 30%, #fcdb0d 90%)',
    boxShadow: '0px 2px 5px rgb(0, 0, 0, 0.3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #ffd678 30%, #ffcd59 90%)',
    },
  },
}));

const SwipeableTextMobileStepper = (props) => {

  const [activeStep, setActiveStep] = useState(0);
  
  const classes = useStyles();
  const theme = useTheme();
  
  const maxSteps = props.imgPath.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleError = (event) => {
    return (event.target.src="https://www.greenseasonsnursery.com/wp-content/plugins/woocommerce/assets/images/placeholder.png");
  };

  return (
    <div className={classes.root}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        className={classes.imgContainer}
        enableMouseEvents
      >
        {
          props.imgPath.map((step, index) => (
            <div key={step}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step}
                  alt={step}
                  onError={handleError}
                />
              ) : null}
            </div>
          ))
        }
      </AutoPlaySwipeableViews>

      <MobileStepper
        classes={{root: classes.paper}}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={

          <Button className={classes.buttons} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            <Typography variant="h6" align="center" color="primary">
              Next
            </Typography>
          </Button>

        }
        backButton={

          <Button className={classes.buttons} size="small" onClick={handleBack} disabled={activeStep === 0}>
            <Typography variant="h6" align="center" color="primary"> 
              Back
            </Typography>
          </Button>

        }
      />

    </div>
  );
};

export default SwipeableTextMobileStepper;