import React from 'react';

class PlantSearch extends React.Component {

    render() {
        return (
            <div class="card mb-3 sitem">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={this.props.Image}
                  class="card-img"
                  alt={this.props.Common_Name}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{this.props.Common_Name}</h5>
                    <p class="card-text">
                        <small class="text-muted">{this.props.Scientific_Name}</small>
                    </p>
                    <p class="card-text">
                        Active Growth Period: {this.props.Active_Growth_Period}
                    </p>
                    <p>
                        Flower Color: {this.props.Flower_Color}
                    </p>
                    <p>
                        Foliage Color: {this.props.Foliage_Color}
                    </p>
                    <p>
                        Fruit Color: {this.props.Fruit_Color}
                    </p>
                    <p>
                        Growth Rate: {this.props.Growth_Rate}
                    </p>
                    <p>
                        Height at base age: {this.props.Height_at_Base_Age_Maximum_feet} Height when mature: {this.props.Height_Mature_feet}
                    </p>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default PlantSearch;