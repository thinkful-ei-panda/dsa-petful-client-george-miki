import React, { Component } from 'react';
import CatAdoptionList from '../components/CatAdoptionList';
import DogAdoptionList from '../components/DogAdoptionList';

class AdoptionListPage extends Component {
    state = {
        pets: [],
    };

    render () {
        return (
            <>
                <h2>Adoption List Page</h2>
                <CatAdoptionList />
                <DogAdoptionList />
            </>
        );
    };
};

export default AdoptionListPage;