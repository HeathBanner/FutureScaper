import React from 'react'
import { DropTarget } from 'react-dnd'
import update from 'immutability-helper'

import ItemTypes from './ItemTypes'
import Box from './Box'
import Seasons from './seasons';
import PageButtons from './PageButtons';
import PlotSearch from './PlotSearch';
import SpeedDial from './SpeedDial';
import CircularProgress from '@material-ui/core/CircularProgress';
import SeasonDrawer from './SeasonDrawer';

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
  January: 'Mid Winter',
  February: 'Late Winter',
  March: 'Early Spring',
  April: 'Mid Spring',
  May: 'Late Spring',
  June: 'Early Summer',
  July: 'Mid Summer',
  August: 'Late Summer',
  September: 'Early Fall',
  October: 'Mid Fall',
  November: 'Late Fall',
  December: 'Early Winter'
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  } 

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
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
      direction: 'up',
      open: false,
      hidden: false,
    }
  }

  getSeason = (season) => {
    console.log(season);

    this.setState({xtraSeason: seasons.season});
  }

  seasonStyle(props, season) {
    const leafRetention = ['Early Fall', 'Mid Fall', 'Late Fall', 'Early Winter', 'Mid Winter', 'Late Winter'];
    if ((this.state.xtraSeason === props.Bloom_Period) && (props.Flower_Color)) {
      // style.textShadow = `0px 0px 20px ${props.Flower_Color}`
      console.log('bloom')
      console.log(props.Bloom_Period)
      season.color = 'flower'

    } else if (this.state.xtraSeason === props.FruitSeed_Period_Begin) {
      // style.textShadow = `0px 0px 20px ${props.Fruit_Color}`
      console.log('fruit')
      console.log(props.Fruit_Color)
      season.color = 'fruit'
    } else if (leafRetention.includes(this.state.xtraSeason)) {
      if (props.Leaf_Retention === 'Yes') {
        // style.textShadow = `0px 0px 20px ${props.Foliage_Color}`
        console.log('retention')
      season.color = 'foliage'
      } else {
        console.log('problem')
        // style.textShadow = `0px 0px 20px brown`
      season.color = 'nothing'
      }
    }
  }

  whatAmI = (plant, style) => {

    let isTree = false;
    let isShrub = false;
    let isFlower = false;
    let isBunch = false;

    let treeImg = Math.floor(Math.random() * 4) + 1;
    let shrubImg = Math.floor(Math.random() * 4) + 1;

    if (plant.Christmas_Tree_Product)
      if (plant.Christmas_Tree_Product === "Yes") {isTree = true; treeImg = 2;}

    if (plant.Height_Mature_feet) {
      let plantHeight = plant.Height_Mature_feet;
      if (plantHeight >= 8) {
        isTree = true;
        if (plant.Christmas_Tree_Product === "Yes") {
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
    style.zIndex = '100';

    if (isTree) {
      style.backgroundImage = 'url(./images/Trees/Tree' + treeImg + '.png)';
      return "tree";
    }

    if (isShrub) {
      shrubImg = 3;
      style.backgroundImage = 'url(./images/Bushes/Bush' + shrubImg + '.png)';
      style.minHeight = '125px';
      style.maxHeight = '150px';

      return "shrub";
    }

    if (isFlower) {
      if (!isBunch) {
        flowerColor = flowerColor.charAt(0).toUpperCase() + flowerColor.slice(1);
        style.backgroundImage = 'url(./images/Flowers/' + flowerColor + 'Flower.png)'
        style.minHeight = '115px';
        return "flower";
      } else {
        style.backgroundImage = 'url(./images/Flowers/Bunch.png)';
        style.minHeight = '115px';
        return "bunchflower";
      }
    }
    console.log(isTree)
    console.log(isShrub)
    console.log(isFlower)
    console.log(isBunch)
  }

  populateResults() {
    const plants = this.state.items.map((plant, index) => {
      console.log(plant)
      let plantIndex;
      let plantLeft;

      if (!plant.Common_Name) return false;
      if (index) plantIndex = index;
      else plantIndex = 0;


      // if (plant.Common_Name)
      //   plantLeft = ((index + 1) * 15) - (plant.Common_Name.length / 4) + '%';
      // else plantLeft = ((index + 1) * 15) - (48 / 4) + '%';

      plantLeft = ((index + 1) * 15) + '%';
      return (
        plant.top = 100,
        plant.left = plantLeft,
        plant.index = plantIndex,
        plant.moved = false,
        plant.isOrigin = true,
        plant
      )
    })
    this.setState({boxes: plants, isLoaded: false})
  }

  changeSeason = (season) => {
    this.setState({ xtraSeason: season });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    fetch('/api/plants/plotSearch', {
      method: 'POST',
      body: JSON.stringify({ data: value }),
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((result) => {this.setState({items: result, isLoaded: true})})
  }


  componentDidUpdate(newProps, newState) {
    !this.state.isLoaded ?  console.log() : this.populateResults()
  }

  componentDidMount() {
    if (this.state.items < 1) {
      fetch('/api/plants/getPlants')
        .then(res => res.json())
        .then(
          (result) => {this.setState({items: result, isLoaded: true})}
        )
    }
  }

  pageChange = (page) => {
    if (page === 'next') {
      var queryNumber = this.state.pageNumber + 5;
      this.setState({nextPage: true, pageNumber: this.state.pageNumber + 5});
      fetch('/api/plants/getNew', {
        method: 'POST',
        body: JSON.stringify({ data: queryNumber }),
        headers: {'Content-Type': 'application/json'}
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((result) => {this.setState({items: result, isLoaded: true})})
    } else if (page === 'back') {
      var queryNumber = this.state.pageNumber - 5
      this.setState({pageNumber: this.state.pageNumber - 5});
      fetch('/api/plants/getNew', {
        method: 'POST',
        body: JSON.stringify({ data: queryNumber }),
        headers: {'Content-Type': 'application/json'}
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((result) => {this.setState({items: result, isLoaded: true})})
    }
  }

  handleClick = (guide) => {
    if(guide === 'click'){this.setState(state => ({open: !state.open}))}
    else if((guide === 'close')||(guide === 'blur')||(guide === 'onMouseLeave')){this.setState({open: false })}
  };

  handleChange = (event, value, guide) => {
    if(guide === 'direction'){this.setState({direction: value})}
    else if(guide === 'hidden'){this.setState(state => ({value, open: value ? false : state.open}))}
  };

  handleOpen = () => {this.setState({ open: true })};


  render() {

    const { hideSourceOnDrag, connectDropTarget } = this.props

    return connectDropTarget(
      <div className="row main-col">
        <div className="col-lg-12 item-col">
          <div id="loaded-dnd">
            <SpeedDial />
            {this.state.boxes.map(object => {
              var style = {}
              var season = {}
              this.seasonStyle(object, season)
              this.whatAmI(object, style);
              season.color === 'flower' ? season.circle = object.Flower_Color :
              season.color === 'fruit' ? season.circle = object.Fruit_Color : 
              season.color === 'foliage' ? season.circle = object.Foliage_Color :
              season.circle = 'rgb(0, 0, 0, 0.0)'
              if((season.color === 'fruit') && (object.Fruit_Color === 'Brown')) {
                season.circle = '#7f5502'
              }


              const { left, top, id, Common_Name, index } = object
              // if (!Common_Name) Common_Name = "Falsicus Planticus";
              // if (!Common_Name) return false;
              console.log(style.backgroundImage)

              return (
                <Box
                key={object.id}
                index={index}
                id={id}
                left={left}
                top={top}
                hideSourceOnDrag={hideSourceOnDrag}
                isOrigin='true'
                seasonStyle={style}
                plant={object}
                className='undropped-plants'
                ><span style={{display: 'block'}} className='undropped-plants-title'>{Common_Name}</span>
                <CircularProgress style={{display: 'block', color: season.circle, margin: '0 auto'}}  variant="static" value={100} />
                </Box>
              )
            })}
            <PlotSearch name="plotSearch" value={this.state.plotSearch} onChange={this.handleInputChange} />
            <PageButtons pageNum={this.state.pageNumber} onClick={this.pageChange} />
          </div>
        </div>

        <div className="row">

          <div className="row">
            <div className="col-lg-12 plot-col" style={plotCol}>
              {/* <Seasons 
              onClick={this.changeSeason} /> */}
              <SeasonDrawer sendData={this.getSeason} />

              {this.state.plotted.map(object => {
                var style = {}
                this.whatAmI(object, style)
                const { left, top, id, Common_Name, isOrigin, index } = object

                var season = {}
                this.seasonStyle(object, season)
                season.color === 'flower' ? season.circle = object.Flower_Color :
                season.color === 'fruit' ? season.circle = object.Fruit_Color : 
                season.color === 'foliage' ? season.circle = object.Foliage_Color :
                season.circle = 'rgb(0, 0, 0, 0.0)'
                if((season.color === 'fruit') && (object.Fruit_Color === 'Brown')) {
                  season.circle = '#7f5502'
                }
    
                return (<span className='dropped-plants'>
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
                  >
                    <span className='dropped-plants-title'>{Common_Name}</span>
                    <CircularProgress style={{display: 'block', color: season.circle, margin: '0 auto'}}  variant="static" value={100} />
                    </Box></span>
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
          key === 'top' ? items[key] = top :
            key === 'left' ? items[key] = left :
              items[key] = entries[i][1]
        }
        items.moved = true;
        items.isOrigin = false;
        items.index = this.state.plotted.length;
        items.position = 'absolute'
      }
      return (
        this.setState(
          update(this.state,
            {
              plotted: {
                $push: [items]
              }
            }
          )
        )
      );
    } else if (!items.isOrigin) {
      this.setState(
        update(this.state,
          {
            plotted:
            {
              [items.index]:
                { $merge: { left, top } }
            }
          }
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
