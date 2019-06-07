import React from 'react';
import ReactDOM from 'react-dom'
import { TimelineLite, TweenMax, Power2 } from 'gsap/all';
import { Parallax } from 'react-parallax';

class PlantsBody extends React.Component {
    constructor(props) {
        super(props);
        // logo container
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
    }

    introScroll = event => {
        var timeout;
        if(timeout) clearTimeout(timeout);
        setTimeout(this.callParallax.bind(null, event), 200);
    }

    callParallax = event => {
        this.parallaxIt(event, '#plant-p', -200);
        this.parallaxIt(event, '#plant-parallax', -120);
    }

    parallaxIt = (e, target, movement) => {
    var $this = ReactDOM.findDOMNode(this);
    var relY = e.pageY - $this.offsetTop
        TweenMax.to(target, 1, {
            y: (relY - $this.offsetHeight/2) / $this.offsetHeight * movement,
            ease: Power2.easeOut
        })
    }

    isBottom(el) {
        const center = el.getBoundingClientRect().bottom
        return (
            el.getBoundingClientRect().top <= window.innerHeight
        );
    }

    componentDidMount() {
        document.addEventListener('wheel', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('wheel', this.trackScrolling);
    }

    trackScrolling = event => {
        // const wrappedElement = document.getElementById('plants-body');
        // if (this.isBottom(wrappedElement)) {
        //     this.headerAnimate(wrappedElement)
        //     document.removeEventListener('scroll', this.trackScrolling);
        // }
        this.introScroll(event);
    }

    headerAnimate() {
        // create logo tween
        this.logoTween = new TimelineLite({ paused: true })
            .from(this.logoContainer, 4, { x: '100vw', opacity: 0 })
            .play();
    }


    render() {
        return (
            <div className="bot">
        <div className="row">
            <div
                onScroll={this.trackScrolling}
                className="col-lg-8 "
                id="plants-body">
                <p
                    id="plant-p"
                    ref={p => this.logoContainer = p}
                ><h4>
                    The USDA database provides standardized information about the vascular plants, mosses, liverworts, hornworts, and lichens of the U.S. and its territories. It includes names, plant symbols, checklists, distributional data, species abstracts, characteristics, images, crop information, automated tools, onward Web links, and references. This information primarily promotes land conservation in the United States and its territories, but academic, educational, and general use is encouraged. </h4>.</p>
            </div>
            <div className="col-lg-4 bottom">
                <div id="plant-parallax" className="shadow">
                    <Parallax
                        bgImage={require('../Home/css/imgs/flower.jpg')}
                        bgImageAlt="Jumbtron"
                        strength={200}>
                                <div className="test2" id="intro-img">
                            </div>
                    </Parallax>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default PlantsBody;