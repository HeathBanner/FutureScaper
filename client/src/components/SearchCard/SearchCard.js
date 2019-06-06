import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "../../pages/Search/search.css";

class SearchCard extends Component {
    render(){
        return (
            <div className="row">
        <div className="col-12">
          <div class="card mb-3 sitem">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://via.placeholder.com/250"
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Rose</h5>
                  <p class="card-text">
                    <small class="text-muted">Scientific Name</small>
                  </p>
                  <p class="card-text">
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