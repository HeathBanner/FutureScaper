import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Switch, FormControlLabel } from '@material-ui/core';

import Navigation from '../../components/Navigation/Navigation';
import PlantSearch from '../../components/plantSearch/plantSearch';
import PageButtons from '../../components/plantSearch/PageButtons';

const useStyles = makeStyles((theme) => ({
  containers: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  search: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
      marginTop: 80,
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      marginTop: 80,
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: 60,
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      marginTop: 40,
    },      
  },
  formControls: {
    marginTop: 40,
    textAlign: 'center',
  },
}));

const Search = () => {

  const [plotSearch, setPlotSearch] = useState('');
  const [items, setItems] = useState([]);
  const [commAvail, setCommAvail] = useState(true);
  const [flower, setFlower] = useState(false);
  const [tree, setTree] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const classes = useStyles();

  const handleInputChange = (event) => {
    const data = event.target.value;
    setPlotSearch(data);
    fetch('/api/plants/plantSearch', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((result) => { setItems(result); })
      .catch(() => { console.log('Something went wrong :('); });
  };

  useEffect(() => {
    fetch('/api/plants/getPlants')
      .then(res => res.json())
      .then((result) => { setItems(result); })
      .catch(() => { console.log('Something went wrong :('); })
  }, []);

  const handlePageChange = (page) => {
    let queryNumber = ''
    if (page === 'next') { queryNumber = pageNum + 5; setPageNum(pageNum+5); }
    else if (page === 'back') { queryNumber = pageNum - 5; setPageNum(pageNum-5); }
    fetch('/api/plants/getNewByName', {
      method: 'POST',
      body: JSON.stringify({ page: queryNumber, search: plotSearch }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then((result) => { setItems(result); })
      .catch(() => { console.log('Something went wrong :('); });
  };

  let plants = items;
  if (commAvail) {
    plants = plants.filter((item) => {
      return item.Commercial_Availability && item.Commercial_Availability !== 'No Known Source';
    });
  }
  if (flower) {
    plants = plants.filter((item) => {
      return item.Flower_Color && item.Height_Mature_feet < 4;
    });
  }
  if (tree) {
    plants = plants.filter((item) => {
      return item.Height_Mature_feet > 8
    });
  }

  return (
    <Grid container>
      
      <Navigation />

        <Grid className={classes.containers} item xs={12}>

          <TextField
            className={classes.search}
            variant="outlined"
            label="Search the USDA Database!"
            value={plotSearch}
            onChange={handleInputChange}
          />

        </Grid>
        <Grid className={classes.containers} item xs={4}>

          <FormControlLabel 
            className={classes.formControls} 
            control={
              <Switch 
                checked={commAvail}
                value={commAvail}
                onChange={() => setCommAvail(!commAvail)}
                color="primary"
              />
            }
            label="Commercially Available"
            labelPlacement="top"
          />

        </Grid>
        <Grid className={classes.containers} item xs={4}>

          <FormControlLabel 
            className={classes.formControls} 
            control={
              <Switch 
                checked={flower}
                value={flower}
                onChange={() => setFlower(!flower)}
                color="primary"
              />  
            }
            label="Flowers"
            labelPlacement="top"
          />

        </Grid>
        <Grid className={classes.containers} item xs={4}>

          <FormControlLabel
            className={classes.formControls} 
            control={
              <Switch 
                checked={tree}
                value={tree}
                onChange={() => setTree(!tree)}
                color="primary"
              />
            }
            label="Trees"
            labelPlacement="top"
          />

        </Grid>
        <Grid item xs={12}>

            { 
              plants.map((item) => {
                return (
                  <PlantSearch  
                    images={item.Image}
                    Common_Name={item.Common_Name}
                    Scientific_Name={item.Scientific_Name}
                    Active_Growth_Period={item.Active_Growth_Period}
                    Flower_Color={item.Flower_Color}
                    Foliage_Color={item.Foliage_Color}
                    Fruit_Color={item.Fruit_Color}
                    Growth_Rate={item.Growth_Rate}
                    Height_at_Base_Age_Maximum_feet={item.Height_at_Base_Age_Maximum_feet}
                    Height_Mature_feet={item.Height_Mature_feet}
                    Commercial_Availability={item.Commercial_Availability}
                    key={item._id}
                  />
                )
              })
            }

            <PageButtons onClick={handlePageChange} page={pageNum} />

        </Grid>
    </Grid>
  );
};

export default Search;
