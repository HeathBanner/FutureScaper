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
        <div className="row">
            <div
                onScroll={this.trackScrolling}
                className="col-lg-8 col-padding"
                id="plants-body">
                <p
                    id="plant-p"
                    ref={p => this.logoContainer = p}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio mi, 
                eleifend vitae lorem at, tristique feugiat neque. Phasellus nec ornare leo. 
                Suspendisse potenti. Nulla sed dapibus arcu. Duis urna erat, scelerisque at 
                ultrices nec, viverra at massa. Ut pulvinar placerat viverra. Vivamus ultrices 
                risus eget sapien vestibulum mattis. Sed et consectetur mauris. Cras vitae rutrum 
                urna, ut dignissim lacus. Proin commodo finibus augue. Nullam efficitur elit felis, 
                ut commodo velit lacinia vel. Donec sed erat id purus suscipit facilisis quis non 
                neque. Praesent ullamcorper facilisis leo id dapibus. Maecenas et luctus velit, eu 
                ornare sapien. Vivamus porttitor vehicula urna, id sollicitudin velit hendrerit eget.</p>
            </div>
            <div className="col-lg-4 col-padding">
                <div id="plant-parallax">
                    <Parallax
                        bgImage={require('./css/imgs/annie-spratt-path.jpg')}
                        bgImageAlt="Jumbtron"
                        strength={200}>
                                <div id="intro-img">
                            </div>
                    </Parallax>
                </div>
            </div>
        </div>
        );
    }
}

export default PlantsBody;