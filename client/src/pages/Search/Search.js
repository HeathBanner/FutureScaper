import React from "react";
import "./search.css";

import PlantSearch from '../../components/plantSearch/plantSearch';

class Search extends React.Component {

  constructor() {
    super(...arguments)
    this.state = {
      plotSearch: '',
      items: [],
      isLoaded: false,
      comAvail: true,
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
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((result) => {
        this.setState({
          items: result,
          isLoaded: true,
        });
        this.forceUpdate();
      })
  }

  componentWillMount() {
    console.log('MOUNTED')
    if (this.state.items < 1) {
      console.log('BEFORE FIRE')
      fetch('/api/plants/getPlants')
      .then(res => res.json())
        .then(
        (result) => {
          console.log(result)
          this.setState({
            items: result,
            isLoaded: true,
          });
        }
      )
    }
  }

 toggleSwitch() {
   this.setState({comAvail: !this.state.comAvail});
   console.log(this.state.comAvail)
 }

  // componentDidUpdate(newProps, newState) {
  //   this.state.isLoaded ? this.populateResults() : console.log('NOPE')
  // }

  render() {

    return (
      <div className="thing">
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
                  onClick={() => this.toggleSwitch('one')}
                />
                <label for="someSwitchOptionSuccess" className="label-success" />
              </div>
            </div>
            <div className="col-4 center">
              <div className="material-switch pad ">
                <input
                  id="someSwitchOptionSuccess2"
                  name="someSwitchOption002"
                  type="checkbox"
                />
                <label for="someSwitchOptionSuccess2" className="label-success center" />
              </div>
            </div>
            <div className="col-4 ">
              <div className="material-switch pad center">
                <input
                  id="someSwitchOptionSuccess3"
                  name="someSwitchOption003"
                  type="checkbox"
                />
                <label for="someSwitchOptionSuccess3" className="label-success" />
              </div>
            </div>




          </div>
          <div className="row">
            <div className="col-12">
              { 
                this.state.comAvail ?     
                  this.state.items.map(item => {
                    console.log(item.Commercial_Availability)
                    if ((item.Commercial_Availability) && (item.Commercial_Availability !== 'No Known Source')) {
                      console.log('COMM')
                      return (
                        <PlantSearch  
                          Image={item.Image[0]}
                          Common_Name={item.Common_Name}
                          Scientific_Name={item.Scientific_Name}
                          Active_Growth_Period={item.Active_Growth_Period}
                          Flower_Color={item.Flower_Color}
                          Foliage_Color={item.Foliage_Color}
                          Fruit_Color={item.Fruit_Color}
                          Growth_Rate={item.Growth_Rate}
                          Height_at_Base_Age_Maximum_feet={item.Height_at_Base_Age_Maximum_feet}
                          Height_Mature_feet={item.Height_Mature_feet}
                          key={item._id}
                        />
                      )
                    }
                  }) 
                  : this.state.items.map(item => {
                  console.log('NOT COM')
                  return (
                    <PlantSearch  
                      Image={item.Image[0]}
                      Common_Name={item.Common_Name}
                      Scientific_Name={item.Scientific_Name}
                      Active_Growth_Period={item.Active_Growth_Period}
                      Flower_Color={item.Flower_Color}
                      Foliage_Color={item.Foliage_Color}
                      Fruit_Color={item.Fruit_Color}
                      Growth_Rate={item.Growth_Rate}
                      Height_at_Base_Age_Maximum_feet={item.Height_at_Base_Age_Maximum_feet}
                      Height_Mature_feet={item.Height_Mature_feet}
                    />
                  );
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
