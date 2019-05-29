import React from 'react';

class Trefle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

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
            return (
                <ul>

                    <li>
                        Scientific name: {items.slug}
                    </li>
                    <li>
                        Lifespan: {items.specifications.lifespan}
                    </li>
                    <li>
                        Bloom period: {items.seed.bloom_period}
                    </li>
                    <li>
                        Growth period: {items.specifications.growth_period}
                    </li>
                    <li>
                        Growth rate: {items.specifications.growth_rate}
                    </li>
                    <li>
                        Regrowth rate: {items.specifications.regrowth_rate}
                    </li>
                </ul>
            );
        }
    }
}

export default Trefle;