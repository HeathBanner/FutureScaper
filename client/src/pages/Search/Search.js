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
                  <h5 class="card-title">Common Name</h5>
                  <p class="card-text">
                    <small class="text-muted">Scientific Name</small>
                  </p>
                  <p class="card-text">
                    Info about the plant Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non purus non turpis volutpat vulputate. Aenean egestas, neque quis sodales mollis, risus ligula rhoncus lectus, sed faucibus arcu velit vel magna. Suspendisse potenti. Sed eget dapibus velit, quis consequat elit. Cras molestie ut elit at porttitor. Nulla sapien arcu, dapibus et neque at, elementum mollis massa. Proin vel ultricies augue. Pellentesque sed sem sit amet felis convallis rhoncus a ac ipsum. Suspendisse consectetur varius mauris, eu mattis lectus placerat vitae. Mauris consectetur erat ultricies, tempus enim at, dignissim orci.
                  </p><p>
                    Quisque commodo tempus maximus. Nunc in gravida velit. Aenean at lorem ligula. Vestibulum non varius dolor. Nullam pretium ante diam, tempus ultricies diam cursus eget. Sed ante odio, finibus a nunc ac, semper vulputate felis. Nam bibendum sapien mi, vitae luctus quam blandit sed. Morbi vulputate orci turpis, a dapibus sem aliquet in. Fusce lorem felis, ornare vitae hendrerit in, dapibus vel nulla. Suspendisse tincidunt facilisis massa nec accumsan. In quis semper nibh, eu mattis erat. Sed scelerisque porta libero, eu pellentesque turpis ultricies eu. Nulla ac dictum ligula. Proin nec finibus magna, sed feugiat mi.
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
