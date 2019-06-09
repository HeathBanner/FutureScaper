import React from 'react';
import Button from '@material-ui/core/Button';

class PageButtons extends React.Component {
    
    
    render() {
        return (
            <div>
                <div>
                    <Button onClick={() => this.props.onClick('back')} disabled={this.props.pageNum === 0} id="backBtn" alt="" className="plot-btns">

                    </Button>
                    <Button onClick={() => this.props.onClick('next')} id="nextBtn" alt="" className="plot-btns">

                    </Button>
                </div>
            </div>
        )
    }
}

export default PageButtons;