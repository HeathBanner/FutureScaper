import React from 'react';
import { CSSPlugin, TimelineLite } from 'gsap/all';

class Welcome extends React.Component {
	constructor(props){
		super(props);
		// logo container
		this.logoContainer = null;
		// logo tween
		this.logoTween = null;
    }
    
    isBottom(el) {
        const center = el.getBoundingClientRect().bottom
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

    trackScrolling = () => {
        const wrappedElement = document.getElementById('welcome-div');
        if (this.isBottom(wrappedElement)) {
            this.headerAnimate(wrappedElement)
            document.removeEventListener('scroll', this.trackScrolling);
        }
    }

    headerAnimate() {
		this.logoTween = new TimelineLite({ paused:true })
        .from(this.logoContainer, 4, { x: '-110vw', opacity: 0})
        .play();
    }


    
    render() {
        return (
        <div className="row">
            <div id="welcome-div" className="col-lg-8">
                <h1
                ref={ h1 => this.logoContainer = h1 }
                onScroll={this.trackScrolling}
                >Welcome to our landscape planner!</h1>
                </div>
            <div className="col-lg-4"></div>
        </div>
        
        );
    }
}

export default Welcome;