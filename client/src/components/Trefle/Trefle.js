import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Trefle extends React.Component {

    state = {
            error: null,
            isLoaded: false,
            items: []
        };

    componentDidMount() {
        fetch('/api/plants/getPlants')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const list = items.map(function(item) {
                // "Link" constricts to within the Router object, so if you link to {item.link}, it goes to:
                // http://localhost:3030/http://trefle.io/api/plants/162791
                // Thought we could use this if we make, for example, info routes for each plant. -Jon
                return <li draggable="true" className="plantList" key={item.id}><Link to="#">{item.common_name}</Link></li>
            });
            return (
                <ul>
                    {list}
                </ul>
            );
        }
    }
}

export default Trefle;