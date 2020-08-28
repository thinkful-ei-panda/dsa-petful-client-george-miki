import React, { Component } from 'react';
import CatAdoptionQueue from '../components/CatAdoptionQueue';
import DogAdoptionQueue from '../components/DogAdoptionQueue';
import FosterParentEnqueue from '../components/FosterParentEnqueue';
import FosterParentList from '../components/FosterParentList';

class AdoptionPage extends Component {
    state = {
        petQueue: [{}],
        parents: [],
    };

    render () {
        return (
            <>
                <h2>Adoption Page</h2>
                <CatAdoptionQueue />
                <DogAdoptionQueue />
                <FosterParentEnqueue />
                <FosterParentList />
            </>
        );
    };
};

export default AdoptionPage;