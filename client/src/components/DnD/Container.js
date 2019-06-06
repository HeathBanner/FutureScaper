import React from 'react'
import { DropTarget } from 'react-dnd'
import update from 'immutability-helper'

import ItemTypes from './ItemTypes'
import Box from './Box'
import Seasons from './seasons';
import PageButtons from './PageButtons';
import PlotSearch from './PlotSearch';

import './CSS/container.css'

const plotCol = {
  width: "100%",
  height: "100vh",
  border: '1px solid black',
  position: 'relative',
}

const months = {
  mid_winter: 'Jan', 
  late_winer: 'Feb', 
  early_winter: 'Mar', 
  mid_spring: 'Apr', 
  late_spring: 'May', 
  early_summer: 'June', 
  mid_summer: 'July', 
  late_summer: 'Aug', 
  early_fall: 'Sep', 
  mid_fall: 'Oct', 
  late_fall: 'Nov', 
  early_winter: 'Dec'
};
const seasons = {
  jan: 'mid_winter', 
  feb: 'late_winter', 
  mar: 'early_spring', 
  apr: 'mid_spring',
  may: 'late_spring',
  june: 'early_summer',
  july: 'mid_summer',
  aug: 'late_summer',
  sep: 'early_fall',
  oct: 'mid_fall',
  nov: 'late_fall',
  dec: 'early_winter'
}

class Container extends React.Component {
  constructor() {
    super(...arguments)
    this.ref = React.createRef();
    
    this.state = {
      error: null,
      items: null,
      season: '',
      xtraSeason: 'Late Spring',
      boxes: [],
      plotted: [],
      pageNumber: 0,
      isLoaded: false,
      nextPage: true,
      plotSearch: "",
    }
  }

  seasonStyle(props, style) {
    const leafRetention = ['Early Fall', 'Mid Fall', 'Late Fall', 'Early Winter', 'Mid Winter', 'Late Winter'];
    if ((this.state.xtraSeason === props.Bloom_Period) && (props.Flower_Color)) {
<<<<<<< HEAD
        style.textShadow = `0px 0px 20px ${props.Flower_Color}`
        console.log('bloom')
    } else if (this.state.xtraSeason === props.FruitSeed_Period_Begin) {
        style.textShadow = `0px 0px 20px ${props.Fruit_Color}`
        console.log('fruit')
    } else if (leafRetention.includes(this.state.xtraSeason)) {
        if (props.Leaf_Retention === 'Yes') {
            style.textShadow = `0px 0px 20px ${props.Foliage_Color}`
            console.log('retention')
        } else {
            console.log('problem')
            style.textShadow = `0px 0px 20px brown`
        }
=======
      style.boxShadow = `0px 0px 20px ${props.Flower_Color}`
      console.log('bloom')
    } else if (this.state.xtraSeason === props.FruitSeed_Period_Begin) {
      style.boxShadow = `0px 0px 20px ${props.Fruit_Color}`
      console.log('fruit')
    } else if (leafRetention.includes(this.state.xtraSeason)) {
      if (props.Leaf_Retention === 'Yes') {
        style.boxShadow = `0px 0px 20px ${props.Foliage_Color}`
        console.log('retention')
      } else {
        console.log('problem')
        style.boxShadow = `0px 0px 20px brown`
      }
>>>>>>> 28e2350e3c29aea94bc18112c95d967b151ce0a5
    }
  }

  whatAmI = (plant, style) => {

    console.log(plant, style);

    let isTree = false;
    let isShrub = false;
    let isFlower = false;
    let isBunch = false;

    let treeImg = Math.floor(Math.random() * 4) + 1;
    let shrubImg = Math.floor(Math.random() * 4) + 1;
    

    if (plant.Christmas_Tree_Product)
      if (plant.Christmas_Tree_Product === "Yes")  {
        isTree = true;
        treeImg = 2;
      }
        
    if (plant.Height_Mature_feet) {
      let plantHeight = plant.Height_Mature_feet;
      if (plantHeight >= 8) {
         isTree = true;
         if (plant.Christmas_Tree_Product === "Yes")  {
          treeImg = 2;
        } else if (plantHeight > 15) treeImg = 3;
          else if (plantHeight < 15) treeImg = 1;
      }
    }
  
    if (isTree === false)
      if (plant.Shape_And_Orientation === "Rounded")
        isShrub = true;
      if (plant.Flower_Color) {
        isFlower = true;
        var flowerColor = plant.Flower_Color;
        if (plant.Growth_Form)
          if (plant.Growth_Form === "Bunch")
            isBunch = true;
      }
      
      style.borderRadius = '1px'; 
      style.backgroundRepeat = 'no-repeat';
      style.backgroundPosition = 'center';
      style.backgroundSize = 'contain';
      style.minHeight = '150px';
      style.minWidth = 'auto';
      style.fontSize = '1.2rem';
      style.textShadow = '1px 1px 1px white';
      style.zIndex = '100';

      if (isTree) {
        console.log("it's a tree."); 
        style.backgroundImage = 'url(./images/Trees/Tree' + treeImg + '.png)';

        return "tree";
      }

      if (isShrub) {
        console.log("it's a shrub."); 
        shrubImg = 3;
        style.backgroundImage = 'url(./images/Bushes/Bush' + shrubImg + '.png)';
        style.minHeight = '125px';
        style.maxHeight = '150px';

        return "shrub";
      }
      
      if (isFlower) {
        console.log("it's a flower. \ncolor:", flowerColor); 

        flowerColor = flowerColor.charAt(0).toUpperCase() + flowerColor.slice(1);
        style.backgroundImage = 'url(./images/Flowers/' + flowerColor + 'Flower.png)';
        style.minHeight = '100px';
        if (isBunch) {
          console.log("actually, it's a bunch of flowers.");
        }

        return "bunchflower";
      }
  }
  
  populateResults() {
    const plants = this.state.items.map((plant, index) => {
      return (
        plant.top = 100,
        plant.left = ((index+1)*15) - (plant.Common_Name.length/4) + '%',
        plant.index = index,
        plant.moved = false,
        plant.isOrigin = true,
        plant
<<<<<<< HEAD
        )
      })
      if (this.state.nextPage) {
        console.log('NEXT')
        this.setState({
          boxes: plants,
          isLoaded: false,
          pageNumber: this.state.pageNumber + 5,
          nextPage: false
        })
        this.forceUpdate();
      } else if (!this.state.nextPage) {
        console.log('BACK')
=======
      )
    });
    if (this.state.nextPage) {
      this.setState({
        boxes: plants,
        isLoaded: false,
        // pageNumber: this.state.pageNumber + 5,
        nextPage: false
      });
      this.forceUpdate();
    } else if (!this.state.nextPage) {
>>>>>>> 28e2350e3c29aea94bc18112c95d967b151ce0a5
        this.setState({
          boxes: plants,
          isLoaded: false,
          pageNumber: this.state.pageNumber - 5,
          nextPage: true,
        });
        this.forceUpdate();
    }
  }

  changeSeason = (season) => {
    this.setState({xtraSeason: season});
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    fetch('/api/plants/plotSearch', {
      method: 'POST',
      body: JSON.stringify({data: value}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
      .then((result) => {
        this.setState({
          items: result,
          isLoaded: true,
        });
        this.forceUpdate();
      })
  }

  pageChange = (page) => {
    if (page === 'next') {
      fetch('/api/plants/getNew', {
        method: 'POST',
        body: JSON.stringify({data: this.state.pageNumber}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
        .then((result) => {
          this.setState({
            items: result,
            isLoaded: true,
            nextPage: true,
            pageNumber: this.state.pageNumber + 5
          });
          this.forceUpdate();
        })
    } else if (page === 'back') {
      fetch('/api/plants/getNew', {
        method: 'POST',
        body: JSON.stringify({data: (this.state.pageNumber)}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
        .then((result) => {
          this.setState({
            items: result,
            isLoaded: true,
            nextPage: false,
            pageNumber: this.state.pageNumber - 5
          });
          this.forceUpdate();
        })
    }
  }
  
  componentDidUpdate(newProps, newState) {
    this.state.isLoaded ? this.populateResults() : console.log('NOPE')
  }

  componentDidMount() {
    if (!this.state.items) {
      fetch('/api/plants/getPlants')
      .then(res => res.json())
        .then(
        (result) => {
          this.setState({
            items: result,
            isLoaded: true,
          });
        }
      )
    }
  }

  render() {

    const { hideSourceOnDrag, connectDropTarget } = this.props
    
    return connectDropTarget(
      <div>
        <div className="row main-col">
<<<<<<< HEAD
                  <div className="col-lg-12 item-col">
                      <div id="loaded-dnd">
                        {this.state.boxes.map(object => {
                          console.log(object)
                            var style = {
                              textShadow: `0px 0px 20px brown`
                            }
                            this.seasonStyle(object, style)
                            this.whatAmI(object, style);
                          const { left, top, id, Common_Name } = object
                          return (
                            <Box
                              key={id}
                              index={object.index}
                              id={id}
                              left={left}
                              top={top}
                              hideSourceOnDrag={hideSourceOnDrag}
                              isOrigin='true'
                              seasonStyle={style}
                              plant={object}
                            >{Common_Name}</Box>
                          )
                        })}
                        <PlotSearch name="plotSearch" value={this.state.plotSearch} onChange={this.handleInputChange} />
                        <PageButtons onClick={this.pageChange}/>
                      </div>
                    </div>
        
        <div className="row">
=======
          <div className="col-lg-12 item-col">
            <div id="loaded-dnd">
                <PlotSearch onChange={this.handleInputChange} />
                  {this.state.boxes.map(object => {
                    console.log(object)
                      var style = {
                        boxShadow: `0px 0px 20px brown`
                      }
                      this.seasonStyle(object, style)
                      this.whatAmI(object, style);
                    const { left, top, id, Common_Name } = object
                    return (
                      <Box
                        key={id}
                        index={object.index}
                        id={id}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                        isOrigin='true'
                        seasonStyle={style}
                        plant={object}
                      >{Common_Name}</Box>
                    )
                  })}
                {/* <PlotSearch name="plotSearch" value={this.state.plotSearch} onChange={this.handleInputChange} />
                <PageButtons onClick={this.pageChange}/> */}
              </div>
          </div>
>>>>>>> 28e2350e3c29aea94bc18112c95d967b151ce0a5

        <div className="row">
          <div className="col-lg-12 plot-col" style={plotCol}>
              {/* <Seasons 
              onClick={this.changeSeason} /> */}

              {this.state.plotted.map(object => {
                  var style = {
                    textShadow: '0px 0px 20px brown'
                  }
                  this.seasonStyle(object, style)
                  this.whatAmI(object, style)
                  const { left, top, id, Common_Name, isOrigin, index } = object
                  return (
                    <Box   
                      key={index}
                      index={object.index}
                      id={id}
                      left={left}
                      top={top}
                      hideSourceOnDrag={hideSourceOnDrag}
                      onClick={this.getElement}
                      isOrigin={isOrigin}
                      seasonStyle={style}
                      plant={object}
                    >{Common_Name}</Box>
            )
          })}

          </div>
        </div>
        </div>            
      </div>
    )
  }
  moveBox(id, left, top, index, items) {
    if ((!this.state.boxes[items.index].moved) && (items.isOrigin)) {
      const plotted = this.state.boxes[index]
      let entries = []
      if (plotted) {
        entries = Object.entries(plotted)
        for (var i in entries) {
          let key = entries[i][0]
          key === 'top' ? items[key] = top: 
          key === 'left' ? items[key] = left:
          items[key] = entries[i][1]
        }
        items.moved = true;
        items.isOrigin = false;
        items.index = this.state.plotted.length
        items.position = 'absolute'
      }
        return (
          this.setState(
            update(this.state,
              {plotted: {
                  $push: [items]
                }
              }
            )
          )
        );
    } else if (!items.isOrigin) {
      this.setState(
        update(this.state,
          {plotted:
          {[items.index]:
            {$merge: { left, top }} 
          }} 
        )
      )
    }
  }
}
export default DropTarget(
  ItemTypes.BOX,
  {
    drop(props, monitor, component) {
      if (!component) {
        return
      } 
      const item = monitor.getItem()
      const delta = monitor.getDifferenceFromInitialOffset()
      const leftOffset = monitor.getInitialSourceClientOffset().x - monitor.getInitialClientOffset().x 
      const left = monitor.getClientOffset().x + leftOffset
      const topOffset = monitor.getInitialSourceClientOffset().y - monitor.getInitialClientOffset().y - 200
      const top = monitor.getClientOffset().y + topOffset
      component.moveBox(item.id, left, top, item.index, item)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(Container)
