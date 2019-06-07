import React from 'react';

class PageButtons extends React.Component {
    
    
    render() {
        return (
            <div>
                <div>
                    {/* <button onClick={() => this.props.onClick('back')} id="backBtn" className="plot-btns">Prev</button>
                    <button onClick={() => this.props.onClick('next')} id="nextBtn" className="plot-btns">Next</button> */}
                    <div onClick={() => this.props.onClick('back')} id="backBtn" alt="" className="plot-btns"></div>
                    <div onClick={() => this.props.onClick('next')} id="nextBtn" alt="" className="plot-btns"></div>
                </div>
            </div>
        )
    }
}

export default PageButtons;