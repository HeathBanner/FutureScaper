import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './css/jumbotron.css';

class Jumbotron2 extends React.Component {


    render() {
        return (
            <div className="col-lg-12 col-padding shadow ts">
                
                <Parallax 
                bgImage={require('./css/imgs/flower5.jpg')}
                bgImageAlt="Jumbtron"
                strength={300}>

                    <div id="jumbotron">
                        <h1 id="jumbo-header"><i className="fas fa-seedling"></i><strong>About Future Scraper</strong></h1>  
                    </div>

                </Parallax>
            </div>
        )
    }
}

export default Jumbotron2;