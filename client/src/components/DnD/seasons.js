import React from 'react';

class Seasons extends React.Component {

    render() {
        return <button onClick={this.props.onClick} season={this.props.season}>{this.props.children}</button>
    }
}

export default Seasons;