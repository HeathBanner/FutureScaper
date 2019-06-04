import React from 'react';

class PageButtons extends React.Component {
    
    
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.props.onClick('back')} id="backBtn">Back</button>
                    <button onClick={() => this.props.onClick('next')} id="nextBtn">Next</button>
                </div>
            </div>
        )
    }
}

export default PageButtons;