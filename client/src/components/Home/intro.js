import React from 'react';
import { CSSPlugin, TimelineLite } from 'gsap/all';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        // logo container
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
    }

    isBottom(el) {
        const center = el.getBoundingClientRect().bottom
        console.log('Intro' + center)
        console.log('Intro' + window.innerHeight)
        return (
            el.getBoundingClientRect().top <= window.innerHeight
        );
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = event => {
        console.log(event)
        const wrappedElement = document.getElementById('intro-div');
        if (this.isBottom(wrappedElement)) {
            console.log('BOTTOM');
            this.headerAnimate(wrappedElement)
            document.removeEventListener('scroll', this.trackScrolling);
        }
    }

    headerAnimate() {
        // create logo tween
        console.log(this.logoContainer)
        this.logoTween = new TimelineLite({ paused: true })
            .from(this.logoContainer, 4, { x: '100vw', opacity: 0 })
            .play();
    }



    render() {
        return (
        <div className="row">
            <div className="col-lg-4"></div>
            <div
                onScroll={this.trackScrolling}
                className="col-lg-8"
                id="intro-div">
                <p
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
        </div>
        );
    }
}

export default Intro;