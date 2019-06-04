import React from "react";
import "./search.css";

const Search = () => (
  <div className="thing">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback" />
            <input
              type="text"
              class="form-control form-control-lg search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/75" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Plant Name</h5>
                  <p class="card-text">
                    <small class="text-muted">Scientific Name</small>
                  </p>
                  <p class="card-text">
                    Info about the plant lorem
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Search;
