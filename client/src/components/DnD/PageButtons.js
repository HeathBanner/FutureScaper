import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

class PageButtons extends React.Component {


    render() {
        return (
            <div>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link id='returnHome'
                            className='plot-btns'
                            to='/'>
                            {/* <Tilt className="Tilt" options={{ max: 0 }} > */}
                            <img class="Tilt-inner logo"
                                src="/static/media/logo.e65c5081.png"
                                alt="logo"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Return Home" />
                            {/* </Tilt> */}
                        </Link>
                    </li >
                </ul >
                <div>
                    {/* <button onClick={() => this.props.onClick('back')} id="backBtn" className="plot-btns">Prev</button>
                    <button onClick={() => this.props.onClick('next')} id="nextBtn" className="plot-btns">Next</button> */}
                    <div onClick={() => this.props.onClick('back')} id="backBtn" alt="" className="plot-btns"></div>
                    <div onClick={() => this.props.onClick('next')} id="nextBtn" alt="" className="plot-btns"></div>
                </div>
            </div >
        )
    }
}

export default PageButtons;