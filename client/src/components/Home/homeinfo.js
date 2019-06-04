import React from "react";
import "./css/jumbotron.css";
import Search from "../../images/Search.png";
import Create from "../../images/planicon.png";
import Tilt from 'react-tilt';



class Homeinfo extends React.Component {
  render() {
    return (
<div className="row homepageinfo">
        <div className="col-md-6 col-sm-12 sides">
          <div className="row">
            <div className="col-12">
              <Tilt>
                <img src={Create} className="icon" alt="plan icon" />
              </Tilt>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>Plan out your Garden</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-12 pad">
              <button type="button" class="btn btn-success shadow">
                Create Garden
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-12">
              <Tilt>
                <img src={Search} className="icon" alt="plan icon" />
              </Tilt>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 class="pad">Search Plant Database</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" class="btn btn-success shadow">
                Search Database
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeinfo;
