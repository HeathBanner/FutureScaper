import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Plants extends Component {
  // Setting our component's initial state
  state = {
    plants: [],
    slug: "",
    commonName: "",
    scientificName: ""
  };

  // When the component mounts, load all plants and save them to this.state.plants
  componentDidMount() {
    this.loadPlants();
  }

  // Loads all plants  and sets them to this.state.plants
  loadPlants = () => {
    API.getPlants()
      .then(res =>
        this.setState({ plants: res.data, slug: "", commonName: "", scientificName: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a plant from the database with a given id, then reloads plants from the db
  deletePlant = id => {
    API.deletePlant(id)
      .then(res => this.loadPlants())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.savePlant method to save the plant data
  // Then reload plants from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.slug && this.state.commonName) {
      API.savePlant({
        slug: this.state.slug,
        commonName: this.state.commonName,
        scientificName: this.state.scientificName
      })
        .then(res => this.loadPlants())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Plants Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.slug}
                onChange={this.handleInputChange}
                name="slug"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.commonName}
                onChange={this.handleInputChange}
                name="commonName"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.scientificName}
                onChange={this.handleInputChange}
                name="scientificName"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.commonName && this.state.slug)}
                onClick={this.handleFormSubmit}
              >
                Submit Plant
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Plants On My List</h1>
            </Jumbotron>
            {this.state.plants.length ? (
              <List>
                {this.state.plants.map(plant => {
                  return (
                    <ListItem key={plant._id}>
                      <a href={"/plants/" + plant._id}>
                        <strong>
                          {plant.slug} by {plant.commonName}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deletePlant(plant._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plants;
