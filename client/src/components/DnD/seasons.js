import React from 'react';
import PlantsBody from '../Home/plantsBody';

import results from './1000'

const leafRetention = ['early_fall', 'mid_fall', 'late_fall', 'early_winter', 'mid_winter', 'late_winter'];

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
  

class Seasons extends React.Component {

    state = {
        plants: results
    };

    render() {
        // const style = {
        //     background: 'brown'
        // };


        return (
            <div>
                {Object.keys(seasons).map(month => {
                    return <button onClick={() => this.props.onClick(seasons[month])} season={seasons[month]}>{month}</button>
                })}
            </div>
        );
    }
}

export default Seasons;