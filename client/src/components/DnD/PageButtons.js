import React from 'react';

class PageButtons extends React.Component {
    
    
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.props.onClick('back')} id="backBtn" class="plot-btns">Prev</button>
                    <button onClick={() => this.props.onClick('next')} id="nextBtn" class="plot-btns">Next</button>
                </div>
            </div>
        )
    }
}

export default PageButtons;