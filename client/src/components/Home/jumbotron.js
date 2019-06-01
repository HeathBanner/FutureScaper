import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './css/jumbotron.css';

class Jumbotron extends React.Component {


    render() {
        return (
            <div className="col-lg-12 col-padding">
                
                <Parallax 
                bgImage={require('./css/imgs/lawrence-kayku.png')}
                bgImageAlt="Jumbtron"
                strength={300}>

                    <div id="jumbotron">
                        <h1 id="jumbo-header">Future Scaper</h1>
                    </div>

                </Parallax>
            <div className="text"></div>
            </div>
        )
    }


}

export default Jumbotron;