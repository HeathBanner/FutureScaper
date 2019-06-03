import React from "react";
import "./css/jumbotron.css";

class Homeinfo extends React.Component {
  render() {
    return (
      <div className="row homepageinfo">
        <div className="col-md-4 col-sm-12">
          <div className="row">
            <div className="col-12">
                <h3>Plan out your Garden</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" class="btn btn-success">
                Create Garden
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 sides"><h3>Search Plant Database</h3></div>
        <div className="col-md-4 col-sm-12"><h3>Something later</h3></div>
      </div>
    );
  }
}

export default Homeinfo;
