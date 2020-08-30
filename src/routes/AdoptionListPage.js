import React, { Component } from 'react';
import CatsAdoptionList from '../components/CatsAdoptionList';
import DogsAdoptionList from '../components/DogsAdoptionList';

class AdoptionListPage extends Component {
    state = {
        cats: [],
        dogs: [],
        error: null,
    };

    componentDidMount() {
        return fetch(`http://localhost:8000/pets`)
            .then(response => response.json())
            .then(response => {
                const { cats, dogs } = response;
                this.setState({cats, dogs});
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <>
                <h2>Adoption List Page</h2>
                <CatsAdoptionList cats={this.state.cats} />
                <DogsAdoptionList dogs={this.state.dogs} />
            </>
        );
    };
};

export default AdoptionListPage;