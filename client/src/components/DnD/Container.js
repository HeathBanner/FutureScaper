import React from 'react'
import ReactDOM from 'react-dom'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom';
import update from 'immutability-helper'

import ItemTypes from './ItemTypes'
import Box from './Box'
import Seasons from './seasons';

import results from './1000'
import './CSS/container.css'

const plotCol = {
  width: "70vw",
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
      isLoaded: false,
      items: results,
      season: '',
      xtraSeason: 'Late Spring',
      boxes: [],
      plotted: [],
    }
  }

  seasonStyle(props, style) {
    const leafRetention = ['Early Fall', 'Mid Fall', 'Late Fall', 'Early Winter', 'Mid Winter', 'Late Winter'];
    console.log(props.Flower_Color)

    if ((this.state.xtraSeason === props.Bloom_Period) && (props.Flower_Color)) {
        style.backgroundColor = props.Flower_Color
        console.log('bloom')
    } else if (this.state.xtraSeason === props.FruitSeed_Period_Begin) {
        style.backgroundColor = props.Fruit_Color
        console.log('fruit')
    } else if (leafRetention.includes(this.state.xtraSeason)) {
        if (props.Leaf_Retention === 'Yes') {
            style.backgroundColor = props.Foliage_Color
            console.log('retention')
        } else {
            console.log('problem')
            style.backgroundColor = 'brown'
        }
    }
  }

  populateResults() {
              const plants = this.state.items.map((plant, index) => {
            return (
              plant.top = index * 60,
              plant.left = 0,
              plant.index = index,
              plant.moved = false,
              plant.isOrigin = true,
              plant
            )
          })
          this.setState({
            boxes: plants,
          })
  }

  changeSeason = (season) => {
    console.log('FIRE')
    console.log(season)
    this.setState({xtraSeason: season});
    console.log(this.state.xtraSeason);
  }

  componentDidMount() {
    this.populateResults();
    fetch('/api/plants/getPlants')
    .then(res => res.json())
      .then(
      (result) => {
        console.log(result)
      }
      )
  }

  render() {

    const { hideSourceOnDrag, connectDropTarget } = this.props
    
    return connectDropTarget(
          <div className="row main-col">            
            <div id="portal" className="col-lg-10 plot-col" style={plotCol}>
                {/* <Seasons 
                onClick={this.changeSeason} /> */}


              {this.state.plotted.map(object => {
                  var style = {
                    backgroundColor: 'brown'
                  }
                  this.seasonStyle(object, style)

                  const { left, top, id, Scientific_Name ,isOrigin, index } = object
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
                    >{Scientific_Name}</Box>
            )
          })}

            </div>
            <div className="col-lg-2 item-col">
                {this.state.boxes.map(object => {
                    var style = {
                      backgroundColor: 'brown'
                    }
                  this.seasonStyle(object, style)
                  console.log(style);
                  const { left, top, Scientific_Name, id, isOrigin } = object
                  console.log(Scientific_Name)
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
                    >{Scientific_Name}</Box>
                  )
                })}

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
        )
      
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
      const topOffset = monitor.getInitialSourceClientOffset().y - monitor.getInitialClientOffset().y
      const top = monitor.getClientOffset().y + topOffset
      component.moveBox(item.id, left, top, item.index, item)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(Container)
