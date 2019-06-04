import React from 'react';

class PlotSearch extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input id="plot-search" {...this.props} />
                </form>
            </div>
        );
    }
}


export default PlotSearch;