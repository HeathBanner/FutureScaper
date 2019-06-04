import React from 'react';
import ReactDOM from 'react-dom'
import { TimelineLite, TweenMax, Power2 } from 'gsap/all';

class PlantsHeader extends React.Component {
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
        this.parallaxIt(event, '#plant-h1', -10);
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
        // const wrappedElement = document.getElementById('plants-header');
        // if (this.isBottom(wrappedElement)) {
        //     this.headerAnimate(wrappedElement)
        //     document.removeEventListener('scroll', this.trackScrolling);
        // }
        this.introScroll(event);
    }

    headerAnimate() {
        // create logo tween
        this.logoTween = new TimelineLite({ paused: true })
            .from(this.logoContainer, 4, { x: '-110vw', opacity: 0 })
            .play();
    }



    render() {
        return (
            <div className="row">
                <div className="col-lg-4"></div>
                <div id="plants-header" className="col-lg-8">
                    <h1
                        id="plant-h1"
                        ref={h1 => this.logoContainer = h1}
                        onScroll={this.trackScrolling}
                    >Search the USDA database!</h1>
                </div>
            </div>

        );
    }
}

export default PlantsHeader;