import React from "react";
import SearchCard from "../../components/SearchCard/SearchCard"
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
          <h2>Popular Searches</h2>
          <hr></hr>
        </div>
      </div>
      {/* <div className="row switches">
        <div className="col-4">
          <div class="material-switch pad center">
            <input
              id="someSwitchOptionSuccess"
              name="someSwitchOption001"
              type="checkbox"
            />
            <label for="someSwitchOptionSuccess" class="label-success" />
          </div>
          </div>
          <div className="col-4 center">
          <div class="material-switch pad ">
            <input
              id="someSwitchOptionSuccess2"
              name="someSwitchOption002"
              type="checkbox"
            />
                <label for="someSwitchOptionSuccess2" class="label-success center" />
            </div>
          </div>
          <div className="col-4 ">
          <div class="material-switch pad center">
            <input
              id="someSwitchOptionSuccess3"
              name="someSwitchOption003"
              type="checkbox"
            />
                <label for="someSwitchOptionSuccess3" class="label-success" />
            </div>
          </div>
          

          

      </div> */}
      <SearchCard />
      
      
    </div>
  </div>
);
export default Search;
