import React from "react";
import {Link} from "react-router-dom";
import "./css/jumbotron.css";
import Plan from "../Home/css/imgs/planicon.png";
import Search from "../Home/css/imgs/searchicon.png";
import Tilt from "react-tilt";


class Homeinfo extends React.Component {
  render() {
    return (
<div className="row homepageinfo">
        <div className="col-md-6 col-sm-12 sides">
          <div className="row">
            <div className="col-12">
            <Link to="/create" onClick={this.toggleCollapse}>

              <Tilt>
                <img src={Plan} className="icon" alt="plan icon" />
              </Tilt>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>Plan out your Garden</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-12 pad">
              <Link to="/create" onClick={this.toggleCollapse}>
              <button type="button" class="btn btn-success shadow" data-toggle="modal" data-target=".bd-example-modal-xl">
                Create Garden
              </button>
              </Link>
          </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-12">
            <Link to="/search" onClick={this.toggleCollapse}>

              <Tilt>
                <img src={Search} className="icon" alt="plan icon" />
              </Tilt>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 class="pad">Search Plant Database</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link to="/search" onClick={this.toggleCollapse}>
              <button type="submit" class="btn btn-success shadow" href="/search">
                Search Database
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeinfo;
