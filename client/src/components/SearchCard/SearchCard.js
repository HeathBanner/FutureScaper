import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "../../pages/Search/search.css";

class SearchCard extends Component {
    render(){
        return (
            <div className="row">
        <div className="col-12">
          <div className="card mb-3 sitem">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://via.placeholder.com/250"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Rose</h5>
                  <p className="card-text">
                    <small className="text-muted">Scientific Name</small>
                  </p>
                  <p className="card-text">
                    Info about the plant Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non purus non turpis volutpat vulputate. Aenean egestas, neque quis sodales mollis, risus ligula rhoncus lectus, sed faucibus arcu velit vel magna. Suspendisse potenti. Sed eget dapibus velit, quis consequat elit. Cras molestie ut elit at porttitor. Nulla sapien arcu, dapibus et neque at, elementum mollis massa. Proin vel ultricies augue. Pellentesque sed sem sit amet felis convallis rhoncus a ac ipsum. Suspendisse consectetur varius mauris, eu mattis lectus placerat vitae. Mauris consectetur erat ultricies, tempus enim at, dignissim orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
    
}

export default SearchCard;