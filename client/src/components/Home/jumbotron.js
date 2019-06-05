import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './css/jumbotron.css';

class Jumbotron extends React.Component {


    render() {
        return (
            <div className="col-lg-12 col-padding shadow">
                
                <Parallax 
                bgImage={require('./css/imgs/flower1.png')}
                bgImageAlt="Jumbtron"
                strength={300}>

                    <div id="jumbotron">
                        <h1 id="jumbo-header"><i className="fas fa-seedling"></i>Garden planner for your every need</h1>  
                    </div>

                </Parallax>
            </div>
        )
    }
}

export default Jumbotron;