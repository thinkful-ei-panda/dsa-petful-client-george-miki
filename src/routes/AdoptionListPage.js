import React, { Component } from 'react';
import config from '../config';
import CatsAdoptionList from '../components/CatsAdoptionList';
import DogsAdoptionList from '../components/DogsAdoptionList';

class AdoptionListPage extends Component {
    state = {
        cats: [],
        dogs: [],
        error: null,
    };

    componentDidMount() {
        return fetch(`${config.API_ENDPOINT}pets`)
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                };
                return response.json();
            })
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
                <h2>Adoption List</h2>
                <section className='group'>
                    <CatsAdoptionList cats={this.state.cats} />
                    <DogsAdoptionList dogs={this.state.dogs} />
                </section> 
            </>
        );
    };
};

export default AdoptionListPage;