import React from 'react';
import axios from 'axios';

class Trefle extends React.Component {

    response = {}

    getInfo = () => {
        axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09'
        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

        axios.get('https://trefle.io//api/species/189016').then(function(res) {
            console.log(res);
            this.infoReturned = true;
        })
    }

    gotResponse = () => {
        return (
            <ul>
                <li>Scientific name: {this.response.data.scientific_name}</li>
                <li>Foilage color: {this.response.data.foilage.color}</li>
                <li>Flower color: {this.response.data.flower.color}</li>
                <li>Bloom period: {this.response.data.seed.bloom_period}</li>
            </ul>
        )
    } 

    render() {
        return (
            <div>
                <button onClick={this.getInfo}>Get Info</button>
            </div>
        );
    }
}

export default Trefle;