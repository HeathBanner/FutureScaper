import React, { useState, useEffect } from "react";
import "./search.css";

import Navigation from '../../components/Navigation/Navigation';
import PlantSearch from '../../components/plantSearch/plantSearch';
import PageButtons from '../../components/plantSearch/PageButtons';
import { common } from "@material-ui/core/colors";
import { textAlign } from "@material-ui/system";

function Search() {


  const [plotSearch, setPlotSearch] = useState('')
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [commAvail, setCommAvail] = useState(true)
  const [flower, setFlower] = useState(false)
  const [tree, setTree] = useState(false)
  const [nextPage, setNextPage] = useState(false)
  const [pageNum, setPageNum] = useState(0);


  function handleInputChange(event) {
    console.log(items)
    const { name, value } = event.target;
    setPlotSearch(value)
    fetch('/api/plants/plantSearch', {
      method: 'POST',
      body: JSON.stringify({ data: value }),
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((result) => {
        setItems(result) 
        setIsLoaded(true)
      });
  }

  useEffect(() => {
    console.log('MOUNTED')
    if (items < 1) {
      console.log('BEFORE FIRE')
      fetch('/api/plants/getPlants')
      .then(res => res.json())
        .then((result) => {
          console.log(result);
          setItems(result);
          setIsLoaded(true);
        }
      )
    }
  });

  function toggleSwitch(toggleSwitch){
    if (toggleSwitch === 'setCommAvail') {setCommAvail(!commAvail)}
    else if(toggleSwitch === 'setFlower') {setFlower(!flower)}
    else if (toggleSwitch === 'setTree') {setTree(!tree)}
  }

  function handlePageChange(page) {
    var queryNumber = ''
    if (page === 'next') {queryNumber = pageNum + 5; setPageNum(pageNum+5);}
    else if (page='back') {queryNumber = pageNum-5; setPageNum(pageNum-5);}
    console.log(plotSearch)
    fetch('/api/plants/getNewByName', {
      method: 'POST',
      body: JSON.stringify({page: queryNumber, search: plotSearch}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
      .then((result) => {
        console.log(result);
        setItems(result);
        setIsLoaded(true);
      }
    )
  }


  var plants = items
  if (commAvail) {
    plants = plants.filter(item => {return item.Commercial_Availability && item.Commercial_Availability !== 'No Known Source'})
  }
  if (flower) {
    plants = plants.filter(item => {return item.Flower_Color && item.Height_Mature_feet < 4})
  }
  if (tree) {
    plants = plants.filter(item => {return item.Height_Mature_feet > 8})
  }


  return (
    <div className="thing">
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-12 search-bar">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback" />
              <input
                type="text"
                className="form-control form-control-lg search"
                placeholder="Search"
                name="setPlotSearch"
                value={plotSearch}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row switches">
          <div className="col-4">
          <label className="switch-labels">Commercial Availability</label>
            <div className="material-switch pad center">
              <input
                id="someSwitchOptionSuccess"
                name="someSwitchOption001"
                type="checkbox"
                checked={!commAvail}
                onClick={() => toggleSwitch('setCommAvail')}
              />
              <label for="someSwitchOptionSuccess" className="label-success" />
            </div>
          </div>
          <div className="col-4 center">
            <label className="switch-labels">Flowers</label>
            <div className="material-switch pad ">
              <input
                id="someSwitchOptionSuccess2"
                name="someSwitchOption002"
                type="checkbox"
                checked={!flower}
                onClick={() => toggleSwitch('setFlower')}
              />
              <label for="someSwitchOptionSuccess2" className="label-success center" />
            </div>
          </div>
          <div className="col-4 ">
            <label className="switch-labels">Trees</label>
            <div className="material-switch pad center">
              <input
                id="someSwitchOptionSuccess3"
                name="someSwitchOption003"
                type="checkbox"
                checked={!tree}
                onClick={() => toggleSwitch('setTree')}
              />
              <label for="someSwitchOptionSuccess3" className="label-success" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            { 
              plants.map(item => {
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
