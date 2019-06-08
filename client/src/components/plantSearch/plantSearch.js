import React from 'react';

import Stepper from './Stepper';

class PlantSearch extends React.Component {

    render() {
        return (
            <div className="card mb-3 sitem">
            <div className="row no-gutters">
              <div className="col-md-4">
                <Stepper imgPath={this.props.images}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{this.props.Common_Name}</h5>
                    <p className="card-text">
                        <small className="text-muted">{this.props.Scientific_Name}</small>
                    </p>
                    <p className="card-text">
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
                    <p>
                        Commercial Availability: {this.props.Commercial_Availability}
                    </p>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default PlantSearch;