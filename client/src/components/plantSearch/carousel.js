import React from 'react';
import Switch from '@material-ui/core/Switch'




class Carousel extends React.Component {

    imgError = event => {
        return (
            event.target.src="https://www.greenseasonsnursery.com/wp-content/plugins/woocommerce/assets/images/placeholder.png"
        )
    }

    render() {
        return (
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <Switch
                value="checkedA"
                inputProps={{ 'aria-label': 'Switch A' } } 
                />
            <div class="carousel-inner">
                {this.props.images.map((image, index) => {
                    if (index === 0) {
                        return(
                            <div class="carousel-item active">
                            <img src={image} class="d-block w-100" alt={image} onError={this.imgError}/>
                            </div>
                        )
                    } else {
                        return(
                            <div class="carousel-item">
                            <img src={image} class="d-block w-100" alt={image} onError={this.imgError}/>
                            </div>
                        )
                    }
                })}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>        
        )
    }
}

export default Carousel;