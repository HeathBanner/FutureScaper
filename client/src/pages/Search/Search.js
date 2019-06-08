import React from "react";
import "./search.css";

import Navigation from '../../components/Navigation/Navigation';
import PlantSearch from '../../components/plantSearch/plantSearch';


class Search extends React.Component {

  constructor() {
    super(...arguments)
    this.state = {
      plotSearch: '',
      items: [],
      isLoaded: false,
      comAvail: true,
      flower: false,
      tree: false,
      card: '',
      nextPage: '',
    }
  }  

  handleInputChange = event => {
    console.log(this.state.items)
    const { name, value } = event.target;
    this.setState({ [name]: value });
    fetch('/api/plants/plantSearch', {
      method: 'POST',
      body: JSON.stringify({ data: value }),
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((result) => {
        this.setState({items: result, isLoaded: true});
      })
  }

  componentWillMount() {
    console.log('MOUNTED')
    if (this.state.items < 1) {
      console.log('BEFORE FIRE')
      fetch('/api/plants/getPlants')
      .then(res => res.json())
        .then((result) => {
          console.log(result)
          this.setState({items: result, isLoaded: true});
        }
      )
    }
  }

 toggleSwitch = (toggleSwitch) => {this.setState({[toggleSwitch]: !this.state[toggleSwitch]})}

  render() {

    var plants = this.state.items
    if (this.state.comAvail) {
      plants = plants.filter(item => {return item.Commercial_Availability && item.Commercial_Availability !== 'No Known Source'})
    }
    if (this.state.flower) {
      plants = plants.filter(item => {return item.Flower_Color})
    }
    if (this.state.tree) {
      plants = plants.filter(item => {return item.Height_Mature_feet > 8})
    }
    return (
      <div className="thing">
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback" />
                <input
                  type="text"
                  className="form-control form-control-lg search"
                  placeholder="Search"
                  name="plotSearch"
                  value={this.state.plotSearch}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row switches">
            <div className="col-4">
            <label>Commercial Availability</label>
              <div className="material-switch pad center">
                <input
                  id="someSwitchOptionSuccess"
                  name="someSwitchOption001"
                  type="checkbox"
                  onClick={() => this.toggleSwitch('comAvail')}
                />
                <label for="someSwitchOptionSuccess" className="label-success" />
              </div>
            </div>
            <div className="col-4 center">
              <label>Flowers</label>
              <div className="material-switch pad ">
                <input
                  id="someSwitchOptionSuccess2"
                  name="someSwitchOption002"
                  type="checkbox"
                  checked={!this.state.flower}
                  onClick={() => this.toggleSwitch('flower')}
                />
                <label for="someSwitchOptionSuccess2" className="label-success center" />
              </div>
            </div>
            <div className="col-4 ">
              <label>Trees</label>
              <div className="material-switch pad center">
                <input
                  id="someSwitchOptionSuccess3"
                  name="someSwitchOption003"
                  type="checkbox"
                  checked={!this.state.tree}
                  onClick={() => this.toggleSwitch('tree')}
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
