import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            offers: []
        };
    }

    componentDidMount() {
        fetch('http//localhost:9999/offers')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        offers: result.offers
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const carNode = this.state.offers.map((car) => {
            return (
                <Link
                    to={"/offers/" + car.id + "/details"}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )

        });
        return (
            <div>
                <h1>Cars list</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car