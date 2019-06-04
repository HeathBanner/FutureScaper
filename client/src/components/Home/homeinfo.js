import React from "react";
import "./css/jumbotron.css";
<<<<<<< HEAD
import Search from "../../images/Search.png";
import Create from "../../images/planicon.png";
import Tilt from 'react-tilt';


=======
import Plan from "../Home/css/imgs/planicon.png";
import Search from "../Home/css/imgs/searchicon.png";
import Tilt from "react-tilt";
>>>>>>> dc389227d55cd97833aab0174672fde7466c2da5

class Homeinfo extends React.Component {
  render() {
    return (
<<<<<<< HEAD
<div className="row homepageinfo">
=======
      <div className="row homepageinfo">
>>>>>>> dc389227d55cd97833aab0174672fde7466c2da5
        <div className="col-md-6 col-sm-12 sides">
          <div className="row">
            <div className="col-12">
              <Tilt>
<<<<<<< HEAD
                <img src={Create} className="icon" alt="plan icon" />
=======
                <img src={Plan} className="icon" alt="plan icon" />
>>>>>>> dc389227d55cd97833aab0174672fde7466c2da5
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
<<<<<<< HEAD
                <img src={Search} className="icon" alt="plan icon" />
=======
                <img src={Search} className="icon2" alt="plan icon" />
>>>>>>> dc389227d55cd97833aab0174672fde7466c2da5
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
