import React from 'react';
import ReactDOM from 'react-dom'
import { CSSPlugin, TimelineLite, TweenMax, Power2 } from 'gsap/all';

import { Parallax } from 'react-parallax';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.logoContainer = null;
        this.logoTween = null;
    }
    
    introScroll = event => {
        var timeout;
        if(timeout) clearTimeout(timeout);
        setTimeout(this.callParallax.bind(null, event), 200);
    }

    callParallax = event => {
        this.parallaxIt(event, '#intro-slide', -100);
        this.parallaxIt(event, '#intro-div', -70);
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
        document.addEventListener('wheel', this.trackScrolling, true);
    }

    componentWillUnmount = () => {
        console.log("INTRO TESTING ")
        document.removeEventListener("wheel", this.trackScrolling, true);
        
      };

    trackScrolling = event => {
        // console.log(event)
        // const wrappedElement = document.getElementById('intro-div');
        // if (this.isBottom(wrappedElement)) {
        //     console.log('BOTTOM');
        //     this.headerAnimate(wrappedElement)
        //     document.removeEventListener('wheel', this.trackScrolling);
        // }
        this.introScroll(event)
    }

    // headerAnimate() {
    //     console.log(this.logoContainer)
    //     this.logoTween = new TimelineLite({ paused: true })
    //         .from(this.logoContainer, 4, { x: '100vw', opacity: 0 })
    //         .play();
    // }



    render() {
        return (
            <div id="intro-row" className="row">
            <div className="col-lg-4">
                <div id="intro-div" className="shadow">
                    <Parallax
                    bgImage={require('./css/imgs/flower1.jpg')}
                    bgImageAlt="Jumbtron"
                    strength={200}>
                        <div id="intro-img">
                        </div>
                    </Parallax>
                </div>
            </div>
            <div
                className="col-lg-8"
                >
                <p
                    id="intro-slide"
                    ref={p => this.logoContainer = p}
                ><h4>
                    When planning a garden, being able to quickly try out different planting styles can save a huge amount of time and ultimately help you grow healthier plants which produce more food. Whether you use traditional rows, containers, raised beds or square foot gardening, the Garden Planner gives you the flexibility to create the best design for your garden.</h4></p>
            </div>
        </div>
        );
    }
}

export default Intro;