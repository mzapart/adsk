import React, { Component } from 'react';

class CarDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            offers: {}
        };
    }

    componentDidMount() {
        const { offerId } = this.props.match.params;
        fetch(`http://localhost/offers/${offerId}/details`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        offers: result.offers[0]
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
        const { name, model, capacity, manufactureYear } = this.state.offers;
        return (
            <div>
                <h1>{name}</h1>
                <div className="row">
                    <ul>
                        <li><strong>Model</strong>: {model}</li>
                        <li><strong>Capacity</strong>: {capacity}</li>
                        <li><strong>Year</strong>: {manufactureYear}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CarDetail