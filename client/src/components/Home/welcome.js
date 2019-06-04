import React from 'react';
import ReactDOM from 'react-dom'
import { TimelineLite, TweenMax, Power2 } from 'gsap/all';


class Welcome extends React.Component {
	constructor(props){
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
        this.parallaxIt(event, '#welcome-parallax', -10);
        // this.parallaxIt(event, '#intro-div', -70);
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

    componentWillUnmount = () => {
        console.log("WELCOME TESTING ")
        document.removeEventListener("wheel", this.trackScrolling, true);
        
      };

    trackScrolling = event => {
        // const wrappedElement = document.getElementById('welcome-div');
        // if (this.isBottom(wrappedElement)) {
        //     this.headerAnimate(wrappedElement)
        //     document.removeEventListener('scroll', this.trackScrolling);
        // }
        this.introScroll(event)
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
                className = "test1"
                id="welcome-parallax"
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